"use client"

import { useState } from "react"
import "./App.css"
import logo from "./Crypto-Digital-Currency-PNG-Photo.png"
import logo2 from "./svgviewer-png-output.png"
import verifiedIcon from "./verify.png"
import unverifiedIcon from "./unverify.png"
import shield from "./88e5db6f-6777-45de-bf74-015a4d080e31.jpg"
import phoneIcon from './assets/115cd9e0-a5c2-44ef-b361-9aa8fe7d87b2.jpg'
import securityIcon from './assets/97e6112d-b71a-44f0-96e5-aee222b50401.jpg'



function App() {
const [channel, setChannel] = useState("")
const [verificationInput, setVerificationInput] = useState("")
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [showVerificationModal, setShowVerificationModal] = useState(false)
const [isVerified, setIsVerified] = useState(false)

const handleVerify = () => {
  const input = verificationInput.trim()
  let isValid = false

  if (channel === "email") {
    // Replace with your actual email
    isValid = input.toLowerCase() === "justinchan.cro@listinginfo-crypto.com"
  } else if (channel === "Telegram" || channel === "X") {
    isValid = input === "Justinchan_cro"
  }

  setIsVerified(isValid)
  setShowVerificationModal(true)
}


  const closeModal = () => {
    setShowVerificationModal(false)
  }

  const getChannelDisplayText = () => {
    switch (channel) {
      case "email":
        return "Email"
      case "Telegram":
        return "Telegram"
      case "X":
        return "X"
      
      default:
        return "Channel"
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
             <h1>
            
           <img src={logo} className='log' alt='logo' width={140} />
            <span className="verify">|</span>
            <span className="log">🇺🇸</span>
          </h1>
            
             
          
            
        
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="nav-item">
              <span className="sports-link">Sports</span>
              <span className="new-badge">NEW</span>
            </div>
            <span className="nav-link">Level Up</span>
            <span className="nav-link">Individuals</span>
            <span className="nav-link">Businesses</span>
            <span className="nav-link">Developers</span>
            <span className="nav-link">Discover</span>
            <span className="nav-link">Company</span>
            <span className="nav-link">🌐</span>
            <div className="auth-buttons">
              <button className="signup-btn">Sign Up</button>
              <button className="login-btn">Log In</button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <button className="mobile-signup-btn">Sign Up</button>
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-item">
              <span className="sports-link">Sports</span>
              <span className="new-badge">NEW</span>
            </div>
            <div className="mobile-menu-links">
              <div>Level Up</div>
              <div>Individuals</div>
              <div>Businesses</div>
              <div>Developers</div>
              <div>Discover</div>
              <div>Company</div>
            </div>
            <div className="mobile-menu-footer">
              <button className="mobile-login-btn">Log In</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="verify-logo">
          <h1>
            
            <span className="verify-logo-text">crypto.com</span>
            <span className="verify-divider">|</span>
            <span className="verify-text">VERIFY</span>
          </h1>
        </div>

        <div className="verification-section">
          {/* Unified Verification Form */}
          <div className="search-container">
            <div className="search-bar">
              <div className="channel-section">
                <div className="channel-text">
                  {getChannelDisplayText()}
                  <span className="channel-arrow">▼</span>
                </div>
                <select value={channel} onChange={(e) => setChannel(e.target.value)} className="channel-select">
                  <option value="">Channel</option>
                  <option value="email">Email</option>
                  <option value="Telegram">Telegram</option>
                  <option value="X">X</option>
                 
                </select>
              </div>
              <input
                type="text"
                placeholder="Please select a channel"
                value={verificationInput}
                onChange={(e) => setVerificationInput(e.target.value)}
                className="search-input"
              />
              <button className="verify-button" disabled={!channel || !verificationInput} onClick={handleVerify}>
                Verify
              </button>
            </div>
          </div>

          {/* Description Text */}
          <p className="description">
            Enter a link, email address or social media ID to confirm if it is a genuine piece of Crypto.com
            communication.
          </p>

          {/* Ambassadors List Link */}
          <div className="ambassadors-link">
            <button>
              <span>Crypto.com Ambassadors List</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </main>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-logo">
                
                  <img src={logo2} alt='logo2' width={150}/>
                
                
                <span className="verify2">| VERIFY</span>
              </div>
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content">
              {/* Icon */}
              <div className="status-icon">
                <div className={` ${isVerified ? "success" : "error"}`}>{isVerified ? <img src={verifiedIcon} width={150}  alt='verified'/> :  <img src={unverifiedIcon} width={150}  alt='unverified'/> }</div>
              </div>

              {/* Verification Text */}
              <div className="verification-text">
                <p className="input-text">{verificationInput}</p>
                <p className="status-text">
                  This is {!isVerified && <span className="not-text">NOT</span>} an official Crypto.com communication
                  channel.
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="bullet-points">
                {!isVerified ? (
                  <>
                    <li>
                      <span>•</span>
                      <span>Please ensure you have selected the right channel and accurately entered its details.</span>
                    </li>
                    <li>
                      <span>•</span>
                      <span>Do not share sensitive information or send assets to an unverified source.</span>
                    </li>
                    <li>
                      <span>•</span>
                      <span>Contact us at chat.crypto.com if you are ever in doubt.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <span>•</span>
                      <span>This is a verified Crypto.com communication channel.</span>
                    </li>
                    <li>
                      <span>•</span>
                      <span>You can safely interact with this channel.</span>
                    </li>
                    <li>
                      <span>•</span>
                      <span>Always ensure you're on official Crypto.com platforms before sharing information.</span>
                    </li>
                  </>
                )}
              </ul>

              {/* Close Button */}
              <button className="modal-close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Education Section */}
      <section className="security-section">
        <div className="security-content">
          <div className="security-header">
            <h2>Protect yourself against fraud and scams.</h2>
            <button className="university-btn">
              <span>Go to University</span>
              <span className="arrow">→</span>
            </button>
          </div>

          <div className="security-cards">
            {/* Card 1 */}
            <div className="security-card card1">
              <div className="card-image">
               
                  <img src={shield} width={500} height={200}   alt="Shield Icon" />
                
              </div>
              <div className="card-content ">
                <h3>Protect Your Crypto.com Account With Security & Data Privacy Best Practices</h3>
                <button className="card-arrow">→</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="security-card card2">
              <div className="card-image">
                <div className="phone-icon">
                  <img src={phoneIcon} alt="Phone Icon" width={500} height={200} />
                </div>
              </div>
              <div className="card-content">
                <h3>How to Recognize Phishing Attempts — With Real-Life Examples</h3>
                <button className="card-arrow">→</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="security-card card3">
              <div className="card-image">
                <div className="security-icon">
                  <img src={securityIcon} alt="Security Icon" width={500} height={230} />
                </div>
              </div>
              <div className="card-content">
                <h3>Essential Security Tips to Help Keep Your Crypto Account Safe</h3>
                <button className="card-arrow">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="#">App</a>
                </li>
                <li>
                  <a href="#">Exchange</a>
                </li>
                <li>
                  <a href="#">DeFi Wallet</a>
                </li>
                <li>
                  <a href="#">Visa Card</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Learn</h4>
              <ul>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Market Updates</a>
                </li>
                <li>
                  <a href="#">Tax</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Developers</h4>
              <ul>
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">Developer Portal</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <div className="social-icons">
                <a href="#">📱</a>
                <a href="#">🐙</a>
                <a href="#">🌐</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">
              <div className="logo-circle">
               <img src={logo} alt="Crypto.com Logo" className="logo-footer" width={200} />
              </div>
             
            </div>
            <div className="footer-legal">
              <div className="legal-links">
                <a href="#">Privacy Notice</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Preferences</a>
              </div>
              <span className="copyright">© 2025 Crypto.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
