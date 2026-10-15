'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Plus,
  Check,
  X,
} from 'lucide-react'

// Smooth ease-out animated number counter hook
function useAnimatedNumber(target: number, duration: number = 750) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const startVal = current

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setCurrent(Math.round(startVal + (target - startVal) * ease))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration])

  return current
}

export interface Transaction {
  id: string
  source: 'td' | 'vanguard' | 'stripe'
  title: string
  date: string
  amount: number
}

export interface HouseSavingsGoalCardProps {
  initialCurrentAmount?: number
  initialTargetAmount?: number
  goalTitle?: string
  targetDate?: string
  houseImageSrc?: string
  yieldRate?: string
  fundCode?: string
  className?: string
}

const DEFAULT_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    source: 'td',
    title: 'One-time deposit',
    date: 'Yesterday',
    amount: 1350.0,
  },
  {
    id: '2',
    source: 'vanguard',
    title: 'Interest payout',
    date: 'June 16',
    amount: 148.95,
  },
  {
    id: '3',
    source: 'stripe',
    title: 'Regular deposit',
    date: 'June 1',
    amount: 1000.0,
  },
  {
    id: '4',
    source: 'stripe',
    title: 'Regular deposit',
    date: 'May 2',
    amount: 1000.0,
  },
  {
    id: '5',
    source: 'vanguard',
    title: 'Interest payout',
    date: 'April 15',
    amount: 128.57,
  },
  {
    id: '6',
    source: 'stripe',
    title: 'Regular deposit',
    date: 'April 1',
    amount: 1000.0,
  },
]

// Render Brand / Bank Logos
function BrandLogo({ source }: { source: 'td' | 'vanguard' | 'stripe' }) {
  if (source === 'td') {
    return (
      <div className="w-7 h-7 rounded-full bg-[#008a00] text-white flex items-center justify-center font-bold text-[9px] tracking-tighter shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
        TD
      </div>
    )
  }
  if (source === 'vanguard') {
    return (
      <div className="w-7 h-7 rounded-full bg-[#c1272d] text-white flex items-center justify-center font-serif font-bold text-[12px] italic shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
        V
      </div>
    )
  }
  return (
    <div className="w-7 h-7 rounded-full bg-[#5956e9] text-white flex items-center justify-center font-bold text-[11px] shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 8.5C8 6.567 9.567 5 11.5 5H15.5C17.433 5 19 6.567 19 8.5C19 10.433 17.433 12 15.5 12H8.5C6.567 12 5 13.567 5 15.5C5 17.433 6.567 19 8.5 19H12.5C14.433 19 16 17.433 16 15.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export function HouseSavingsGoalCard({
  initialCurrentAmount = 182495,
  initialTargetAmount = 250000,
  goalTitle = 'Buy a house',
  targetDate = 'June 2029',
  houseImageSrc = '/nordic-house.png',
  yieldRate = '4.23%',
  fundCode = 'VMFXX',
  className = '',
}: HouseSavingsGoalCardProps) {
  const [currentAmount, setCurrentAmount] = useState(initialCurrentAmount)
  const [targetAmount, setTargetAmount] = useState(initialTargetAmount)
  const [title, setTitle] = useState(goalTitle)
  const [date, setDate] = useState(targetDate)
  const [transactions, setTransactions] = useState<Transaction[]>(DEFAULT_TRANSACTIONS)
  const [isMounted, setIsMounted] = useState(false)
  const [newTxId, setNewTxId] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Modals state
  const [showAddFunds, setShowAddFunds] = useState(false)
  const [showEditGoal, setShowEditGoal] = useState(false)
  const [showFundDetails, setShowFundDetails] = useState(false)
  const [depositAmount, setDepositAmount] = useState('1000')
  const [depositSource, setDepositSource] = useState<'td' | 'stripe'>('td')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const progressPercent = Math.min(100, Math.round((currentAmount / targetAmount) * 100))
  const displayProgress = useAnimatedNumber(progressPercent, 800)
  const displayAmount = useAnimatedNumber(currentAmount, 800)
  const totalTicks = 48
  const filledTicks = Math.round((progressPercent / 100) * totalTicks)

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2500)
  }

  // Handle adding funds
  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const val = parseFloat(depositAmount)
    if (isNaN(val) || val <= 0) return

    const newCurrent = currentAmount + val
    setCurrentAmount(newCurrent)

    const newTx: Transaction = {
      id: Date.now().toString(),
      source: depositSource,
      title: depositSource === 'td' ? 'One-time deposit' : 'Regular deposit',
      date: 'Just now',
      amount: val,
    }

    setNewTxId(newTx.id)
    setTransactions([newTx, ...transactions])
    setShowAddFunds(false)
    triggerToast(`Added ₹${val.toLocaleString()} to ${title}!`)
  }

  // Handle editing goal
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowEditGoal(false)
    triggerToast('Goal details updated!')
  }

  return (
    <div className={`min-h-screen bg-[#e5e5e5] text-[#111827] flex flex-col items-center justify-center p-4 sm:p-8 font-sans select-none ${className}`}>
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#111827] text-white text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Goal Widget Card */}
      <section className="w-full max-w-[724px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)] border border-black/[0.04] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative transition-all duration-500 animate-card-enter">
        {/* ================= LEFT HALF: GOAL PROGRESS & NORDIC HOUSE ================= */}
        <div className="flex flex-col justify-between pt-6 px-6 sm:px-7 pb-0 bg-white relative border-b md:border-b-0 md:border-r border-gray-100/90 group">
          <div>
            {/* Top Back Button */}
            <button
              type="button"
              onClick={() => triggerToast('Navigating back to Goals')}
              className="w-9 h-9 rounded-full bg-[#f3f4f6] text-[#111827] flex items-center justify-center hover:bg-[#e5e7eb] hover:scale-105 active:scale-95 transition-all mb-5 cursor-pointer shadow-none"
              title="Back to goals"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4 text-[#111827]" strokeWidth={2.2} />
            </button>

            {/* Goal Title & Target Date Badge */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h2 className="text-[17px] font-semibold text-[#111827] tracking-tight m-0">
                {title}
              </h2>

              <div
                onClick={() => setShowEditGoal(true)}
                className="bg-[#f3f4f6] text-[#6b7280] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-[#e5e7eb] hover:scale-105 active:scale-95 transition-all"
                title="Click to edit date"
              >
                <Clock className="w-3 h-3 text-[#9ca3af]" strokeWidth={2} />
                <span>{date}</span>
              </div>
            </div>

            {/* Big Progress Percentage (Smooth Animated Counter) */}
            <div className="text-[44px] font-semibold text-[#111827] tracking-tight leading-none my-3.5 transition-all">
              {displayProgress}%
            </div>

            {/* Current vs Target Amount (Animated Count-up) */}
            <div className="flex items-center justify-between text-xs mb-2.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                <span className="w-2.5 h-[1.5px] bg-[#111827] inline-block" />
                <span>₹{displayAmount.toLocaleString()}</span>
              </div>
              <div className="font-normal text-[#9ca3af]">
                ₹{targetAmount.toLocaleString()}
              </div>
            </div>

            {/* Vertical Ticks Progress Bar (Pixel-Perfect with Sequential Cascading Animation) */}
            <div
              className="w-full flex items-center justify-between gap-[2.5px] py-1 mb-2"
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progress: ${progressPercent}% towards ${title}`}
            >
              {Array.from({ length: totalTicks }).map((_, i) => {
                const isFilled = isMounted && i < filledTicks
                return (
                  <span
                    key={i}
                    style={{
                      transitionDelay: isMounted ? `${i * 14}ms` : '0ms',
                    }}
                    className={`h-[15px] w-[2px] rounded-full transition-all duration-300 ${
                      isFilled ? 'bg-[#df4b42] scale-y-100' : 'bg-[#e5e7eb] scale-y-90'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          {/* Nordic Red House Photograph (Blended seamlessly, anchored to the left, gentle hover parallax) */}
          <div
            className="relative w-[calc(100%+3rem)] sm:w-[calc(100%+3.5rem)] -mx-6 sm:-mx-7 mt-auto flex-1 min-h-[230px] sm:min-h-[260px] flex items-end overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 6%, rgba(0,0,0,0.65) 18%, black 35%, black 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 6%, rgba(0,0,0,0.65) 18%, black 35%, black 100%)',
            }}
          >
            <img
              src={houseImageSrc}
              alt="Quaint Nordic red wooden house on grassy hill"
              className="w-full h-full min-h-[250px] sm:min-h-[285px] object-cover scale-[1.45] -translate-x-12 sm:-translate-x-16 translate-y-2 block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.5] group-hover:-translate-x-14"
              draggable={false}
            />
          </div>
        </div>

        {/* ================= RIGHT HALF: ACTIONS, AUTO-INVEST & TRANSACTIONS ================= */}
        <div className="p-6 sm:p-7 flex flex-col justify-between bg-white">
          {/* Top Row: Edit & Add Funds Action Buttons */}
          <div>
            <div className="flex items-center justify-end gap-2 mb-4">
              <button
                type="button"
                onClick={() => setShowEditGoal(true)}
                className="px-4 py-1.5 rounded-full bg-[#f3f4f6] text-[#111827] text-xs font-medium hover:bg-[#e5e7eb] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setShowAddFunds(true)}
                className="px-4 py-1.5 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-black hover:scale-105 hover:shadow-md active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                Add funds
              </button>
            </div>

            {/* Auto-invested in VMFXX Banner */}
            <div
              onClick={() => setShowFundDetails(true)}
              className="p-2.5 px-3 rounded-2xl bg-white hover:bg-gray-50/80 border border-gray-100 hover:border-gray-200 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md mb-5"
            >
              <div className="flex items-center gap-2.5">
                {/* Vanguard Logo Icon */}
                <BrandLogo source="vanguard" />

                <div className="text-left">
                  <div className="text-xs font-semibold text-[#111827] leading-tight group-hover:text-black">
                    Auto-invested in {fundCode}
                  </div>
                  <div className="text-[11px] text-[#6b7280] leading-tight flex items-center gap-1.5">
                    <span>Earning</span>
                    <span className="inline-flex items-center gap-1 text-[#059669] font-medium">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      {yieldRate} yield
                    </span>
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#111827] group-hover:translate-x-1 transition-all" />
            </div>

            {/* Transactions Header */}
            <h3 className="text-sm font-semibold text-[#111827] mb-2 text-left">
              Transactions
            </h3>

            {/* Transactions List */}
            <div className="flex flex-col divide-y divide-gray-50/80">
              {transactions.slice(0, 6).map((tx) => (
                <div
                  key={tx.id}
                  onClick={() => triggerToast(`${tx.title}: +₹${tx.amount.toLocaleString()}`)}
                  className={`flex items-center justify-between py-2 px-1 hover:bg-gray-50/90 rounded-xl transition-all duration-200 cursor-pointer group hover:translate-x-1 ${
                    tx.id === newTxId ? 'animate-new-tx' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BrandLogo source={tx.source} />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-[#111827] leading-tight">
                        {tx.title}
                      </div>
                      <div className="text-[11px] text-[#9ca3af] leading-tight">
                        {tx.date}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-[#111827] tracking-tight group-hover:scale-105 transition-transform">
                    +₹{tx.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Author / Design Credit */}
      <footer className="mt-6 text-center text-xs text-[#9ca3af] tracking-wide select-none">
        @ZuhaibRashid
      </footer>

      {/* ================= MODAL: ADD FUNDS ================= */}
      {showAddFunds && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-left">
            <button
              type="button"
              onClick={() => setShowAddFunds(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
              <h4 className="text-base font-semibold text-[#111827]">Add Funds</h4>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Deposit funds directly into your {title} goal.
            </p>

            <form onSubmit={handleDepositSubmit} className="space-y-4">
              {/* Preset buttons */}
              <div className="grid grid-cols-3 gap-2">
                {['500', '1000', '2500'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setDepositAmount(amt)}
                    className={`py-1.5 text-xs font-medium rounded-xl border transition-all ${
                      depositAmount === amt
                        ? 'bg-[#111827] text-white border-[#111827]'
                        : 'bg-gray-50 text-[#111827] border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    +₹{parseInt(amt).toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Amount Input */}
              <div>
                <label className="text-[11px] font-medium text-gray-500 block mb-1">
                  Custom Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    required
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-medium focus:bg-white focus:border-black outline-none transition-all"
                  />
                </div>
              </div>

              {/* Source selection */}
              <div>
                <label className="text-[11px] font-medium text-gray-500 block mb-1">
                  Funding Account
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDepositSource('td')}
                    className={`p-2 rounded-xl border flex items-center gap-2 text-left text-xs transition-all ${
                      depositSource === 'td'
                        ? 'border-black bg-gray-50/80 font-medium'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <BrandLogo source="td" />
                    <span>TD Checking</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDepositSource('stripe')}
                    className={`p-2 rounded-xl border flex items-center gap-2 text-left text-xs transition-all ${
                      depositSource === 'stripe'
                        ? 'border-black bg-gray-50/80 font-medium'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <BrandLogo source="stripe" />
                    <span>Stripe Payout</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-black active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                Confirm Deposit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: EDIT GOAL ================= */}
      {showEditGoal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-left">
            <button
              type="button"
              onClick={() => setShowEditGoal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="text-base font-semibold text-[#111827] mb-1">Edit Savings Goal</h4>
            <p className="text-xs text-gray-500 mb-4">
              Update your target amount and timeline.
            </p>

            <form onSubmit={handleEditSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-medium text-gray-500 block mb-1">
                  Goal Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-medium focus:bg-white focus:border-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-gray-500 block mb-1">
                  Target Amount (₹)
                </label>
                <input
                  type="number"
                  required
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-medium focus:bg-white focus:border-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-gray-500 block mb-1">
                  Target Timeline
                </label>
                <input
                  type="text"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-medium focus:bg-white focus:border-black outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-black active:scale-[0.98] transition-all cursor-pointer shadow-sm mt-2"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: FUND YIELD DETAILS ================= */}
      {showFundDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-[380px] bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-left">
            <button
              type="button"
              onClick={() => setShowFundDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <BrandLogo source="vanguard" />
              <div>
                <h4 className="text-base font-semibold text-[#111827]">
                  Vanguard {fundCode}
                </h4>
                <p className="text-[11px] text-gray-500">Federal Money Market Fund</p>
              </div>
            </div>

            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-3.5 mb-4 text-center">
              <div className="text-[11px] font-medium text-[#166534] uppercase tracking-wider mb-0.5">
                Current 7-Day SEC Yield
              </div>
              <div className="text-2xl font-bold text-[#15803d] tracking-tight">
                {yieldRate}
              </div>
              <p className="text-[11px] text-[#166534]/80 mt-1">
                Dividends compounded daily and credited monthly.
              </p>
            </div>

            <div className="space-y-2 text-xs text-gray-600 mb-5">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Expense Ratio</span>
                <span className="font-semibold text-black">0.11%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Asset Class</span>
                <span className="font-semibold text-black">Money Market</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Next Estimated Payout</span>
                <span className="font-semibold text-black">July 15, 2029</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowFundDetails(false)}
              className="w-full py-2.5 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-black transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HouseSavingsGoalCard
