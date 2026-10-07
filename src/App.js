import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const PHONE_NUMBER = "6303819983";
const WHATSAPP_NUMBER = "916303819983";

function App() {
  const whatsappMessage =
    "Hello JK Scaffoldings, I would like to know more about your scaffolding services.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />

      {/* =========================================
          FLOATING CALL + WHATSAPP BUTTONS
      ========================================= */}

      <div className="jk-floating-contact">
        {/* Call */}
        <a
          href={`tel:+91${PHONE_NUMBER}`}
          className="jk-floating-btn jk-call-btn"
          aria-label="Call JK Scaffoldings"
          title="Call JK Scaffoldings"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
          </svg>

          <span className="jk-floating-tooltip">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="jk-floating-btn jk-whatsapp-btn"
          aria-label="Chat with JK Scaffoldings on WhatsApp"
          title="WhatsApp JK Scaffoldings"
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M19.11 17.39c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.74-.71 1.98-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.56-.35Z" />
            <path d="M16.03 3C8.84 3 3 8.72 3 15.77c0 2.51.75 4.96 2.17 7.04L3 29l6.42-2.1a13.2 13.2 0 0 0 6.6 1.76h.01C23.21 28.66 29 22.94 29 15.9 29 8.84 23.21 3 16.03 3Zm0 23.5a11.05 11.05 0 0 1-5.63-1.53l-.4-.24-3.81 1.25 1.28-3.67-.26-.42a10.54 10.54 0 0 1-1.67-5.7c0-5.83 4.7-10.57 10.49-10.57 5.79 0 10.49 4.74 10.49 10.57 0 5.82-4.7 10.31-10.49 10.31Z" />
          </svg>

          <span className="jk-floating-tooltip">WhatsApp</span>
        </a>
      </div>

      {/* =========================================
          FLOATING BUTTON CSS
      ========================================= */}

      <style>{`
        .jk-floating-contact {
          position: fixed;
          right: 22px;
          bottom: 25px;
          z-index: 9999;

          display: flex;
          flex-direction: column;
          align-items: flex-end;

          gap: 14px;
        }

        .jk-floating-btn {
          width: 58px;
          height: 58px;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          text-decoration: none;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.22);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .jk-floating-btn svg {
          width: 27px;
          height: 27px;

          fill: currentColor;
        }

        .jk-floating-btn:hover {
          transform: translateY(-4px) scale(1.05);

          box-shadow:
            0 13px 32px rgba(0, 0, 0, 0.28);
        }

        /* CALL */

        .jk-call-btn {
          background: linear-gradient(
            135deg,
            #f1c65b,
            #d99b1b
          );

          color: #080808;
        }

        /* WHATSAPP */

        .jk-whatsapp-btn {
          background: #25d366;
          color: #ffffff;
        }

        /* Small pulse around WhatsApp */

        .jk-whatsapp-btn::before {
          content: "";

          position: absolute;
          inset: -5px;

          border: 2px solid rgba(37, 211, 102, 0.35);
          border-radius: 50%;

          animation: jkWhatsAppPulse 2s infinite;
        }

        @keyframes jkWhatsAppPulse {
          0% {
            opacity: 0.8;
            transform: scale(0.9);
          }

          70% {
            opacity: 0;
            transform: scale(1.25);
          }

          100% {
            opacity: 0;
            transform: scale(1.25);
          }
        }

        /* TOOLTIP */

        .jk-floating-tooltip {
          position: absolute;

          right: 70px;
          top: 50%;

          transform:
            translateY(-50%)
            translateX(8px);

          padding: 8px 13px;

          border-radius: 6px;

          background: #0a0a0a;
          color: #ffffff;

          font-size: 12px;
          font-weight: 700;

          white-space: nowrap;

          opacity: 0;
          visibility: hidden;

          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;

          pointer-events: none;
        }

        .jk-floating-tooltip::after {
          content: "";

          position: absolute;

          right: -5px;
          top: 50%;

          transform: translateY(-50%) rotate(45deg);

          width: 10px;
          height: 10px;

          background: #0a0a0a;
        }

        .jk-floating-btn:hover
        .jk-floating-tooltip {
          opacity: 1;
          visibility: visible;

          transform:
            translateY(-50%)
            translateX(0);
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .jk-floating-contact {
            right: 15px;
            bottom: 18px;
            gap: 11px;
          }

          .jk-floating-btn {
            width: 52px;
            height: 52px;
          }

          .jk-floating-btn svg {
            width: 24px;
            height: 24px;
          }

          .jk-floating-tooltip {
            display: none;
          }
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;