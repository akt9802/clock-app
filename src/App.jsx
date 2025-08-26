import './App.css'
import ClockCard from './components/ClockCard'

function App() {
  return (
    <div className="page">
      <div className="shell">
        <header className="header">
          <h1 className="title">World Clock Dashboard</h1>
          <div className="subtitle">Real-time clocks across different time zones</div>
        </header>

        <section className="clocks-section">
          <h2 className="section-title">Local Time</h2>
          <ClockCard title="Local" timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone} />
        </section>

        <section className="clocks-section">
          <h2 className="section-title">Global Time Zones</h2>
          <div className="clocks-grid">
            <ClockCard title="New York" timeZone="America/New_York" />
            <ClockCard title="London" timeZone="Europe/London" />
            <ClockCard title="Dubai" timeZone="Asia/Dubai" />
            <ClockCard title="India" timeZone="Asia/Kolkata" />
            <ClockCard title="Singapore" timeZone="Asia/Singapore" />
            <ClockCard title="Sydney" timeZone="Australia/Sydney" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
