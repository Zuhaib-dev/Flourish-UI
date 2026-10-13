'use client'

import { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { areUiSoundsEnabled, playUiSound } from './ui-sounds'

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => setEnabled(areUiSoundsEnabled()), [])

  function toggle() {
    const nextEnabled = !enabled
    setEnabled(nextEnabled)
    try { window.localStorage.setItem('flourish:ui-sounds', nextEnabled ? 'on' : 'off') } catch { /* Keep the preference for this session. */ }
    if (nextEnabled) playUiSound('toggle')
  }

  return <button type="button" className="ui-sound-toggle" onClick={toggle} aria-label={`Turn interface sounds ${enabled ? 'off' : 'on'}`} aria-pressed={enabled} title={`Interface sounds ${enabled ? 'on' : 'off'}`}>
    {enabled ? <Volume2 size={14} /> : <VolumeX size={14} />}<span>Sounds {enabled ? 'on' : 'off'}</span>
  </button>
}
