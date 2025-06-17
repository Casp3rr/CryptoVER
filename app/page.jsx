"use client"

import { useState } from "react"
import { ArrowRight, Globe, Menu, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CryptoVerification() {
  const [channel, setChannel] = useState("")
  const [verificationInput, setVerificationInput] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = () => {
    // Check if the input contains "@Casper"
    const isValid = verificationInput.includes("@Casper")
    setIsVerified(isValid)
    setShowVerificationModal(true)
  }

  const closeModal = () => {
    setShowVerificationModal(false)
  }

  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xs sm:text-sm">C</span>
          </div>
          <span className="text-white font-semibold text-base sm:text-lg">pto.com</span>
          <div className="w-5 h-3 sm:w-6 sm:h-4 bg-blue-600 rounded-sm flex items-center justify-center ml-2">
            <span className="text-white text-xs font-bold">🇺🇸</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">Sports</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">NEW</span>
          </div>
          <span className="text-gray-300 hover:text-white cursor-pointer">Levep</span>
          <span className="text-gray-300 hover:text-white cursor-pointer">Individuals</span>
          <span className="text-gray-300 hover:text-white cursor-pointer">Businesses</span>
          <span className="text-gray-300 hover:text-white cursor-pointer">Developers</span>
          <span className="text-gray-300 hover:text-white cursor-pointer">Discover</span>
          <span className="text-gray-300 hover:text-white cursor-pointer">Company</span>
          <Globe className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

          <div className="ml-6 flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Sign Up</Button>
            <Button variant="ghost" className="text-white hover:bg-gray-800 rounded-full px-6">
              Log In
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-1 text-sm">Sign Up</Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-gray-800 p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E3A5F] border-b border-gray-800">
          <nav className="px-4 py-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">Sports</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <div className="space-y-3">
              <div className="text-gray-300">Level Up</div>
              <div className="text-gray-300">Individuals</div>
              <div className="text-gray-300">Businesses</div>
              <div className="text-gray-300">Developers</div>
              <div className="text-gray-300">Discover</div>
              <div className="text-gray-300">Company</div>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <Button variant="ghost" className="text-white hover:bg-gray-800 w-full justify-start">
                Log In
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 py-8 sm:py-16">
        <div className="w-full max-w-md space-y-6">
          {/* Verification Form */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Select value={channel} onValueChange={setChannel}>
              <SelectTrigger className="w-full sm:w-32 bg-[#1E3A5F] border-[#2A4A6B] text-white">
                <SelectValue placeholder="Channel" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E3A5F] border-[#2A4A6B]">
                <SelectItem value="email" className="text-white hover:bg-[#2A4A6B]">
                  Email
                </SelectItem>
                <SelectItem value="sms" className="text-white hover:bg-[#2A4A6B]">
                  SMS
                </SelectItem>
                <SelectItem value="social" className="text-white hover:bg-[#2A4A6B]">
                  Social Media
                </SelectItem>
                <SelectItem value="website" className="text-white hover:bg-[#2A4A6B]">
                  Website
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Please select a channel"
              value={verificationInput}
              onChange={(e) => setVerificationInput(e.target.value)}
              className="flex-1 bg-transparent border-[#2A4A6B] text-white placeholder:text-gray-400"
            />

            <Button
              className="bg-[#2A4A6B] hover:bg-[#3A5A7B] text-white px-6 w-full sm:w-auto"
              disabled={!channel || !verificationInput}
              onClick={handleVerify}
            >
              Verify
            </Button>
          </div>

          {/* Description Text */}
          <p className="text-center text-gray-300 text-sm leading-relaxed px-4">
            Enter a link, email address or social media ID to confirm if it is a genuine piece of Crypto.com
            communication.
          </p>

          {/* Ambassadors List Link */}
          <div className="flex items-center justify-center">
            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <span className="text-sm sm:text-base">Crypto.com Ambassadors List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#0B1426] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="text-[#0B1426] font-semibold text-base">crypto.com</span>
                <span className="text-gray-400 font-light">| VERIFY</span>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex flex-col items-center">
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-lg border-2 ${
                    isVerified ? "border-green-500" : "border-red-500"
                  } flex items-center justify-center`}
                >
                  {isVerified ? <Check className="w-8 h-8 text-green-500" /> : <X className="w-8 h-8 text-red-500" />}
                </div>
              </div>

              {/* Verification Text */}
              <div className="text-center mb-6">
                <p className="text-[#E74C3C] font-medium mb-2">{verificationInput}</p>
                <p className="text-xl font-bold mb-1 text-[#333333]">
                  This is {!isVerified && <span className="text-[#E74C3C]">NOT</span>} an official Crypto.com
                  communication channel.
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-sm text-[#555555] mb-6 w-full">
                {!isVerified ? (
                  <>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>Please ensure you have selected the right channel and accurately entered its details.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>Do not share sensitive information or send assets to an unverified source.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>Contact us at chat.crypto.com if you are ever in doubt.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>This is a verified Crypto.com communication channel.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>You can safely interact with this channel.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#555555]">•</span>
                      <span>Always ensure you're on official Crypto.com platforms before sharing information.</span>
                    </li>
                  </>
                )}
              </ul>

              {/* Close Button */}
              <Button
                onClick={closeModal}
                className="w-full bg-[#0B1426] hover:bg-[#162b4a] text-white py-3 rounded-md"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Security Education Section */}
      <section className="bg-[#001039] py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center sm:items-start lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-12 space-y-4 lg:space-y-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
              Protect yourself against fraud and scams.
            </h2>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <span>Go to University</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl overflow-hidden">
              <div className="h-32 sm:h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-blue-400/40 rounded-full transform rotate-45 skew-x-12"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-tight">
                  Protect Your Crypto.com Account With Security & Data Privacy Best Practices
                </h3>
                <button className="flex items-center text-blue-400 hover:text-blue-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-700/20 rounded-2xl overflow-hidden">
              <div className="h-32 sm:h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-32 sm:w-32 sm:h-48 bg-indigo-500/30 rounded-lg transform rotate-12 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-red-500/60 rounded-lg transform -rotate-12"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-tight">
                  How to Recognize Phishing Attempts — With Real-Life Examples
                </h3>
                <button className="flex items-center text-blue-400 hover:text-blue-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-900/20 rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="h-32 sm:h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-800/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-blue-400/40 rounded-lg transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-tight">
                  Essential Security Tips to Help Keep Your Crypto Account Safe
                </h3>
                <button className="flex items-center text-blue-400 hover:text-blue-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1426] border-t border-gray-800 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    DeFi Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Visa Card
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Learn</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    University
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Market Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Tax
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Developers</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                    Developer Portal
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Community</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs sm:text-sm">C</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">crypto.com</span>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 items-center">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                  Privacy Notice
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                  Cookie Preferences
                </a>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">© 2023 Crypto.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
