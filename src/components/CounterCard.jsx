import { useEffect, useState } from 'react'

export default function CounterCard() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [auto, setAuto] = useState(false)
  const [intervalMs, setIntervalMs] = useState(1000)

  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setCount((v) => v + step), intervalMs)
    return () => clearInterval(id)
  }, [auto, step, intervalMs])

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Counter</div>
        <div className="card-subtitle">Interactive controls</div>
      </div>

      <div className="count" aria-live="polite">{count}</div>
      <div className="controls">
        <button className="btn" onClick={() => setCount((v) => v + step)}>+{step}</button>
        <button className="btn ghost" onClick={() => setCount((v) => Math.max(0, v - step))}>-{step}</button>
        <button className="btn danger" onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="row">
        <label className="field">
          <span>Step</span>
          <input type="number" min="1" value={step} onChange={(e) => setStep(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <label className="switch">
          <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
          <span>Auto increment</span>
        </label>
        <label className="field">
          <span>Speed (ms)</span>
          <input type="number" min="100" step="100" value={intervalMs} onChange={(e) => setIntervalMs(Math.max(100, Number(e.target.value) || 100))} disabled={!auto} />
        </label>
      </div>
    </div>
  )
}


