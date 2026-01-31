import { useMemo, useState } from 'react'
import './Donation.css'

const Donation = () => {
  const presets = useMemo(() => [25, 50, 100, 250, 500], [])
  const [selected, setSelected] = useState<number | null>(50)
  const [custom, setCustom] = useState('')

  const chosenAmount = selected ?? (custom ? Number(custom) : null)
  const amountLabel = chosenAmount && Number.isFinite(chosenAmount) ? `$${chosenAmount}` : 'Choose amount'

  return (
    <section className="donation section-bg" aria-label="Donation">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" style={{paddingBottom: "50px"}}>Donation</h2>
        </div>

        <div className="donation-grid donation-grid--single">
          <div className="donation-shell">
            <div className="donation-left">
      
              <h3 className="donation-h3">Give for Allah’s sake. Support your community.</h3>
              <p className="donation-lead">
                Your generosity helps keep our masjid open, supports essential services, and strengthens programs for all
                ages—today and for generations to come.
              </p>

              <div className="donation-quote" aria-label="Hadith quote">
                “If a Muslim spends his wealth with a sincere intention of helping his brother, then surely Allah (SWT)
                will reward him in abundance.”
              </div>

              <div className="donation-pill-row" aria-label="Donation highlights">
                <span className="donation-pill">Masjid Operations</span>
                <span className="donation-pill">Community Programs</span>
                <span className="donation-pill">Zakat Support</span>
              </div>
            </div>

            <div className="donation-right" aria-label="Donation form">
              <div className="donation-right-head">
                <div className="donation-actions-title">Select an amount</div>
               
              </div>

              <div className="donation-presets" role="group" aria-label="Preset amounts">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`donation-preset ${selected === p ? 'donation-preset--active' : ''}`}
                    onClick={() => {
                      setSelected(p)
                      setCustom('')
                    }}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <label className="donation-custom" aria-label="Custom amount">
                <span className="donation-custom-label">Custom amount</span>
                <div className="donation-custom-field">
                  <span className="donation-currency" aria-hidden>$</span>
                  <input
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="donation-input"
                    value={custom}
                    placeholder="Enter amount"
                    onChange={(e) => {
                      setCustom(e.target.value.replace(/[^\d]/g, ''))
                      setSelected(null)
                    }}
                  />
                </div>
              </label>

              <div className="donation-actions">
                <a className="donation-btn donation-btn--primary" href="/donate">
                  Donate Now
                </a>
                <a className="donation-btn donation-btn--outline" href="/services/financial">
                  Give Zakat
                </a>
              </div>

              <div className="donation-meta">Secure • Fast • Tax‑deductible (where applicable)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donation