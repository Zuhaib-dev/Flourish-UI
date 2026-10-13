'use client'

export type UiSound = 'open' | 'close' | 'copy' | 'save' | 'unsave' | 'tab' | 'toggle'

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

    switch (sound) {
      case 'open':
        note(520, 0.16, 0, 0.012, 740)
        note(1040, 0.13, 0.025, 0.006, 1480)
        break
      case 'close':
        note(1318.5, 0.19, 0, 0.018, 1174.7)
        note(1760, 0.14, 0.018, 0.008, 1568)
        note(2349.3, 0.09, 0.025, 0.003)
        break
      case 'copy':
        note(740, 0.065, 0, 0.014, 620, 'triangle')
        note(988, 0.09, 0.055, 0.009)
        break
      case 'save':
        note(659.3, 0.13, 0, 0.014)
        note(987.8, 0.19, 0.075, 0.012)
        break
      case 'unsave':
        note(784, 0.15, 0, 0.012, 523.3)
        break
      case 'tab':
        note(523.3, 0.055, 0, 0.008, 493.9, 'triangle')
        break
      case 'toggle':
        note(587.3, 0.12, 0, 0.012)
        note(880, 0.16, 0.06, 0.01)
        break
    }
  } catch {
    // Audio feedback is decorative; failed or blocked playback must never affect the action.
  }
}
