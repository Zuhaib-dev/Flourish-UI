'use client'

import React, { useState, useRef } from 'react'
import {
  Upload,
  Check,
  Sparkles,
  Camera,
  X,
  User,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

export interface GenesisOnboardingCardProps {
  initialTitle?: string
  initialSubtitle?: string
  defaultAvatarSrc?: string
  illustrationSrc?: string
  className?: string
  onContinue?: (data: { username: string; photoUrl: string | null }) => void
}

export function GenesisOnboardingCard({
  initialTitle = 'Welcome to Genesis,\nYour first journey here!',
  initialSubtitle = 'Add your Photo and Pick a username',
  defaultAvatarSrc = '/unicorn-avatar.png',
  illustrationSrc = '/genesis-illustration.png',
  className = '',
  onContinue,
}: GenesisOnboardingCardProps) {
  const [username, setUsername] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string>(defaultAvatarSrc)
  const [isCustomPhoto, setIsCustomPhoto] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Trigger feedback toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate size (upto 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Image size must be less than 5MB')
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }

    // Validate type
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload a valid PNG or JPEG image')
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPhotoUrl(event.target.result)
        setIsCustomPhoto(true)
        triggerToast('Profile photo updated!')
      }
    }
    reader.readAsDataURL(file)
  }

  // Handle Continue Submit
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanUsername = username.trim().replace(/^@/, '')

    if (!cleanUsername) {
      setErrorMessage('Please pick a display username to continue')
      setTimeout(() => setErrorMessage(null), 2500)
      return
    }

    if (cleanUsername.length < 3) {
      setErrorMessage('Username must be at least 3 characters')
      setTimeout(() => setErrorMessage(null), 2500)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      if (onContinue) {
        onContinue({
          username: cleanUsername,
          photoUrl: isCustomPhoto ? photoUrl : null,
        })
      }
    }, 900)
  }

  // Reset demo
  const handleReset = () => {
    setIsSuccess(false)
    setUsername('')
    setPhotoUrl(defaultAvatarSrc)
    setIsCustomPhoto(false)
  }

  return (
    <div
      className={`min-h-screen bg-[#ebebeb] text-[#111827] flex flex-col items-center justify-center p-4 sm:p-6 font-sans select-none ${className}`}
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#111827] text-white text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-rose-600 text-white text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <AlertCircle className="w-3.5 h-3.5 text-white" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Genesis Onboarding Card */}
      <section className="w-full max-w-98 sm:max-w-103 bg-white rounded-4xl sm:rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] border border-black/4 overflow-hidden flex flex-col relative transition-all duration-500 animate-card-enter">
        {/* Top 3D Surreal Orange Tree Illustration */}
        <div
          className="relative w-full h-70 sm:h-76.25 overflow-hidden bg-[#3582c6]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
          }}
        >
          <img
            src={illustrationSrc}
            alt="Surreal 3D orange fluffy tree with character on floating platform"
            className="w-full h-full object-cover object-top block select-none pointer-events-none transition-transform duration-700 ease-out hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Card Body Content */}
        <div className="px-6 sm:px-7 pt-2 pb-7 flex flex-col text-left">
          {/* Welcome Heading */}
          <h1 className="text-[22px] sm:text-[23px] font-bold text-[#111827] tracking-tight leading-tight m-0">
            Welcome to Genesis,
            <br />
            Your first journey here!
          </h1>

          {/* Subtitle */}
          <p className="text-[13px] text-[#6b7280] font-normal mt-1.5 mb-5 tracking-normal">
            {initialSubtitle}
          </p>

          <form onSubmit={handleContinue} className="space-y-4">
            {/* Photo Upload Box */}
            <div className="p-3 rounded-2xl border border-gray-100 flex items-center justify-between bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-gray-200 transition-all group">
              <div className="flex items-center gap-3">
                {/* Circular Avatar */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 border border-gray-100/90 flex items-center justify-center shrink-0 cursor-pointer hover:opacity-90 transition-opacity relative group/avatar"
                  title="Click to choose a photo"
                >
                  <img
                    src={photoUrl}
                    alt="Profile Avatar"
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Photo Info */}
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#111827] leading-tight">
                    Your Photo
                  </div>
                  <div className="text-[11px] text-[#6b7280] leading-tight mt-0.5">
                    PNG or JPEG upto 5MB
                  </div>
                  <div className="text-[10px] text-[#9ca3af] leading-tight">
                    (500×500px)
                  </div>
                </div>
              </div>

              {/* Upload Button */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  {/* Camera / Upload Icon matching mockup */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                  <span>Upload</span>
                </button>
              </div>
            </div>

            {/* Display Name Input */}
            <div>
              <label
                htmlFor="username-input"
                className="text-[11px] font-medium text-[#111827] block mb-1.5 text-left"
              >
                Display Name
              </label>

              <div className="relative flex items-center w-full rounded-full bg-[#f4f4f5]/75 hover:bg-[#f4f4f5] border border-transparent focus-within:border-black/30 focus-within:bg-white transition-all">
                <span className="pl-4 pr-1 text-xs text-[#9ca3af] font-medium select-none">
                  @
                </span>
                <input
                  id="username-input"
                  type="text"
                  placeholder="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                  className="w-full pr-4 py-2.5 text-xs text-[#111827] placeholder:text-[#9ca3af] bg-transparent outline-none font-medium"
                />

                {/* Inline Validation Status */}
                {username.trim().length >= 3 && (
                  <span className="pr-3 flex items-center gap-1 text-[10px] text-emerald-600 font-medium animate-in fade-in duration-150">
                    <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
                  </span>
                )}
              </div>
            </div>

            {/* Primary Continue Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-[#111827] hover:bg-black active:scale-[0.98] text-white font-medium text-xs sm:text-[13px] tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Preparing your journey...</span>
                </>
              ) : (
                <span>Continue</span>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Subtle Author Credit */}
      <footer className="mt-6 text-center text-xs text-[#9ca3af] tracking-wide select-none">
        @ZuhaibRashid
      </footer>

      {/* Success Modal / Celebration Greeting */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-85 bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-center animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={handleReset}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar Greeting */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-50 border-2 border-emerald-500 mx-auto mb-3 shadow-md">
              <img
                src={photoUrl}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Welcome to Genesis</span>
            </div>

            <h3 className="text-base font-bold text-[#111827] mb-1">
              @{username.replace(/^@/, '') || 'explorer'}
            </h3>
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              Your profile has been created. Your first journey into Genesis has officially begun!
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-black transition-all cursor-pointer shadow-sm"
            >
              Start Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GenesisOnboardingCard
