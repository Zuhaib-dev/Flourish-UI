'use client'

export type UiSound = 'open' | 'close' | 'copy' | 'save' | 'unsave' | 'tab' | 'toggle' | 'preview' | 'filter'

const preferenceKey = 'flourish:ui-sounds'
let audioContext: AudioContext | null = null

export function areUiSoundsEnabled() {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem(preferenceKey) !== 'off'
  } catch {
    return true
  }
}

export function playUiSound(sound: UiSound) {
  if (!areUiSoundsEnabled()) return
  const AudioContextConstructor = window.AudioContext
  if (!AudioContextConstructor) return

  try {
    audioContext ??= new AudioContextConstructor()
    const context = audioContext
    if (context.state === 'suspended') void context.resume()
    const now = context.currentTime

    const note = (frequency: number, duration: number, delay = 0, volume = 0.018, endFrequency = frequency, type: OscillatorType = 'sine') => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const start = now + delay
      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, start)
      if (endFrequency !== frequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + duration)
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(0.012, duration / 4))
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(start)
      oscillator.stop(start + duration + 0.01)
    }

    const glassTick = (delay = 0, volume = 0.012) => {
      const length = Math.floor(context.sampleRate * 0.045)
      const buffer = context.createBuffer(1, length, context.sampleRate)
      const samples = buffer.getChannelData(0)
      for (let index = 0; index < length; index += 1) {
        const decay = 1 - index / length
        samples[index] = (Math.random() * 2 - 1) * decay * decay
      }
      const source = context.createBufferSource()
      const highpass = context.createBiquadFilter()
      const gain = context.createGain()
      const start = now + delay
      source.buffer = buffer
      highpass.type = 'highpass'
      highpass.frequency.setValueAtTime(2600, start)
      gain.gain.setValueAtTime(volume, start)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.045)
      source.connect(highpass)
      highpass.connect(gain)
      gain.connect(context.destination)
      source.start(start)
    }

    switch (sound) {
      case 'open':
        note(520, 0.16, 0, 0.012, 740)
        note(1040, 0.13, 0.025, 0.006, 1480)
        break
      case 'close':
        glassTick(0, 0.014)
        note(1760, 0.17, 0, 0.022, 1568)
        note(2637, 0.13, 0.012, 0.009, 2093)
        note(1174.7, 0.2, 0.025, 0.012, 988)
        break
      case 'copy':
        glassTick(0, 0.007)
        note(740, 0.065, 0, 0.018, 620, 'triangle')
        note(988, 0.11, 0.055, 0.012)
        break
      case 'save':
        note(659.3, 0.15, 0, 0.017)
        note(987.8, 0.2, 0.075, 0.015)
        glassTick(0.05, 0.006)
        break
      case 'unsave':
        note(784, 0.15, 0, 0.012, 523.3)
        break
      case 'tab':
        glassTick(0, 0.004)
        note(523.3, 0.055, 0, 0.01, 493.9, 'triangle')
        break
      case 'toggle':
        note(587.3, 0.12, 0, 0.012)
        note(880, 0.16, 0.06, 0.01)
        break
      case 'preview':
        note(440, 0.17, 0, 0.01, 660)
        note(880, 0.14, 0.07, 0.008)
        break
      case 'filter':
        glassTick(0, 0.004)
        note(392, 0.045, 0, 0.007, 369.9, 'triangle')
        break
    }
  } catch {
    // Audio feedback is decorative; failed or blocked playback must never affect the action.
  }
}
