import { useEffect, useMemo, useState } from 'react'

function formatDate(date, timeZone, use24h) {
  try {
    const dateString = new Intl.DateTimeFormat('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      timeZone,
    }).format(date)
    
    const timeString = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: !use24h, 
      timeZone,
    }).format(date)
    
    return { dateString, timeString }
  } catch (error) {
    // Fallback for invalid timezones
    const dateString = date.toLocaleDateString('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    })
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: !use24h
    })
    return { dateString, timeString }
  }
}

function getTimezoneDisplayName(timeZone) {
  const timezoneMap = {
    'America/New_York': 'EST/EDT',
    'Europe/London': 'GMT/BST',
    'Asia/Dubai': 'GST',
    'Asia/Kolkata': 'IST',
    'Asia/Singapore': 'SGT',
    'Australia/Sydney': 'AEST/AEDT'
  }
  return timezoneMap[timeZone] || timeZone
}

export default function ClockCard({ title, timeZone, defaultIs24h = true }) {
  const [is24h, setIs24h] = useState(defaultIs24h)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const { dateString, timeString } = useMemo(() => formatDate(now, timeZone, is24h), [now, timeZone, is24h])
  const timezoneDisplay = getTimezoneDisplayName(timeZone)

  return (
    <div className="card clock-card">
      <div className="card-header">
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{timezoneDisplay}</div>
      </div>
      <div className="date" aria-live="polite">{dateString}</div>
      <div className="clock" aria-live="polite">{timeString}</div>

      <div className="row">
        <label className="switch">
          <input type="checkbox" checked={is24h} onChange={(e) => setIs24h(e.target.checked)} />
          <span>24-hour format</span>
        </label>
      </div>
    </div>
  )
}


