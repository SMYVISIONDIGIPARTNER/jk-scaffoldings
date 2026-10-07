import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* =========================================
     CLOSE MENU WHEN PAGE CHANGES
  ========================================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* =========================================
     NAVBAR SHADOW ON SCROLL
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     DISABLE PAGE SCROLL WHEN MENU IS OPEN
  ========================================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;

          width: 100%;
          max-width: 100%;

          overflow-x: hidden;
        }

        body {
          padding-top: 92px;
        }


        /* =====================================================
           FIXED NAVBAR
        ===================================================== */

        .jk-header {
          width: 100%;
          max-width: 100%;

          height: 92px;

          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          z-index: 9999;

          background: #ffffff;

          border-bottom: 1px solid #eeeeee;

          transition:
            box-shadow 0.3s ease,
            background 0.3s ease;
        }


        .jk-header.scrolled {
          background: rgba(255, 255, 255, 0.99);

          box-shadow:
            0 5px 25px
            rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .jk-header-container {
          width: 92%;
          max-width: 1400px;

          height: 100%;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            180px
            1fr
            180px;

          align-items: center;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .jk-header-logo {
          width: fit-content;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          text-decoration: none;
        }


        .jk-header-logo img {
          width: 82px;
          height: 82px;

          display: block;

          object-fit: contain;

          border-radius: 50%;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }


        .jk-header-logo:hover img {
          transform: scale(1.04);
        }


        /* =====================================================
           DESKTOP NAVIGATION
        ===================================================== */

        .jk-header-nav {
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: clamp(32px, 4vw, 65px);
        }


        .jk-header-link {
          height: 100%;

          position: relative;

          display: flex;
          align-items: center;

          color: #111111;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 16px;
          font-weight: 600;

          line-height: 1;

          text-decoration: none;

          white-space: nowrap;

          transition:
            color 0.25s ease;
        }


        .jk-header-link:hover {
          color: #bd8310;
        }


        /* =====================================================
           ACTIVE UNDERLINE
        ===================================================== */

        .jk-header-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 23px;

          width: 0;
          height: 2px;

          background: #d6a12b;

          border-radius: 20px;

          transform: translateX(-50%);

          transition:
            width 0.25s ease;
        }


        .jk-header-link:hover::after {
          width: 25px;
        }


        .jk-header-link.active {
          color: #a96f00;

          font-weight: 700;
        }


        .jk-header-link.active::after {
          width: 48px;
        }


        /* =====================================================
           CALL BUTTON
        ===================================================== */

        .jk-header-action {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }


        .jk-header-call {
          min-width: 155px;
          height: 50px;

          padding: 0 23px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          background:
            linear-gradient(
              135deg,
              #f0bf50 0%,
              #d99b1d 100%
            );

          color: #090909;

          border-radius: 50px;

          text-decoration: none;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;
          font-weight: 800;

          white-space: nowrap;

          box-shadow:
            0 6px 18px
            rgba(208, 150, 27, 0.18);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .jk-header-call:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 25px
            rgba(208, 150, 27, 0.3);
        }


        .jk-phone {
          width: 18px;
          height: 18px;

          flex-shrink: 0;

          fill: currentColor;
        }


        /* =====================================================
           HAMBURGER
        ===================================================== */

        .jk-menu-btn {
          width: 46px;
          height: 46px;

          padding: 0;

          display: none;

          align-items: center;
          justify-content: center;

          flex-direction: column;

          gap: 6px;

          border: none;

          background: transparent;

          cursor: pointer;

          position: relative;

          z-index: 10001;
        }


        .jk-menu-btn span {
          width: 28px;
          height: 3px;

          display: block;

          background: #050505;

          border-radius: 20px;

          transition:
            transform 0.3s ease,
            opacity 0.2s ease;
        }


        .jk-menu-btn.open span:nth-child(1) {
          transform:
            translateY(9px)
            rotate(45deg);
        }


        .jk-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }


        .jk-menu-btn.open span:nth-child(3) {
          transform:
            translateY(-9px)
            rotate(-45deg);
        }


        /* =====================================================
           MOBILE CALL
        ===================================================== */

        .jk-mobile-call {
          display: none;
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {

          .jk-header-container {
            width: 94%;

            grid-template-columns:
              130px
              1fr
              150px;
          }


          .jk-header-nav {
            gap: 27px;
          }


          .jk-header-link {
            font-size: 14px;
          }


          .jk-header-call {
            min-width: 135px;

            height: 47px;

            padding: 0 17px;

            font-size: 14px;
          }

        }


        /* =====================================================
           TABLET + MOBILE
        ===================================================== */

        @media (max-width: 850px) {

          body {
            padding-top: 84px;
          }


          .jk-header {
            height: 84px;

            border-bottom:
              1px solid
              rgba(0, 0, 0, 0.08);

            box-shadow:
              0 3px 16px
              rgba(0, 0, 0, 0.05);
          }


          .jk-header-container {
            width: 100%;

            padding: 0 18px;

            display: flex;

            align-items: center;
            justify-content: space-between;
          }


          /* ===============================================
             BIGGER + BRIGHTER MOBILE LOGO
          =============================================== */

          .jk-header-logo {
            height: 84px;

            display: flex;
            align-items: center;
          }


          .jk-header-logo img {
            width: 78px;
            height: 78px;

            object-fit: contain;

            border-radius: 50%;

            /*
             Makes white/gold parts of the supplied
             logo slightly clearer on small screens.
            */

            filter:
              brightness(1.12)
              contrast(1.08)
              saturate(1.08);

            transform: scale(1.04);
          }


          .jk-header-logo:hover img {
            transform: scale(1.04);
          }


          /* HIDE DESKTOP CALL */

          .jk-header-action {
            display: none;
          }


          /* SHOW HAMBURGER */

          .jk-menu-btn {
            display: flex;
          }


          /* =================================================
             MOBILE MENU
          ================================================= */

          .jk-header-nav {
            width: 100%;
            max-width: 100%;

            height: calc(100dvh - 84px);

            position: fixed;

            top: 84px;
            left: 0;

            padding:
              30px
              24px
              40px;

            display: flex;

            flex-direction: column;

            align-items: stretch;
            justify-content: flex-start;

            gap: 0;

            background: #ffffff;

            overflow-y: auto;
            overflow-x: hidden;

            opacity: 0;
            visibility: hidden;

            transform: translateY(-10px);

            pointer-events: none;

            transition:
              opacity 0.25s ease,
              visibility 0.25s ease,
              transform 0.3s ease;
          }


          .jk-header-nav.open {
            opacity: 1;
            visibility: visible;

            transform: translateY(0);

            pointer-events: auto;
          }


          /* =================================================
             MOBILE NAV LINKS
          ================================================= */

          .jk-header-link {
            width: 100%;
            height: auto;

            padding: 21px 4px;

            display: flex;

            align-items: center;
            justify-content: space-between;

            border-bottom:
              1px solid #e9e9e9;

            color: #050505;

            font-family:
              Arial,
              Helvetica,
              sans-serif;

            font-size: 18px;

            /*
             Stronger/brighter font
            */

            font-weight: 700;

            line-height: 1.3;

            letter-spacing: 0.1px;
          }


          .jk-header-link::before {
            content: "→";

            order: 2;

            color: #c98e17;

            font-size: 22px;
            font-weight: 800;

            transition:
              transform 0.25s ease;
          }


          .jk-header-link:hover::before {
            transform: translateX(5px);
          }


          .jk-header-link::after {
            display: none;
          }


          .jk-header-link:hover {
            color: #b67b08;
          }


          .jk-header-link.active {
            color: #b77900;

            font-weight: 800;
          }


          /* =================================================
             MOBILE CALL BUTTON
          ================================================= */

          .jk-mobile-call {
            width: 100%;
            min-height: 58px;

            margin-top: 32px;

            padding: 0 20px;

            display: flex;

            align-items: center;
            justify-content: center;

            gap: 11px;

            background:
              linear-gradient(
                135deg,
                #f1c154 0%,
                #dc9e20 100%
              );

            color: #050505;

            border-radius: 50px;

            text-decoration: none;

            font-family:
              Arial,
              Helvetica,
              sans-serif;

            font-size: 17px;
            font-weight: 800;

            box-shadow:
              0 8px 20px
              rgba(203, 145, 25, 0.2);
          }


          .jk-mobile-call .jk-phone {
            width: 20px;
            height: 20px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          body {
            padding-top: 82px;
          }


          .jk-header {
            height: 82px;
          }


          .jk-header-container {
            padding: 0 16px;
          }


          /*
             Increased logo from previous 59px
             to 76px on normal mobile.
          */

          .jk-header-logo {
            height: 82px;
          }


          .jk-header-logo img {
            width: 76px;
            height: 76px;

            filter:
              brightness(1.15)
              contrast(1.1)
              saturate(1.1);
          }


          .jk-header-nav {
            top: 82px;

            height:
              calc(100dvh - 82px);

            padding:
              26px
              20px
              35px;
          }


          .jk-header-link {
            padding: 20px 3px;

            font-size: 17px;
            font-weight: 750;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          body {
            padding-top: 80px;
          }


          .jk-header {
            height: 80px;
          }


          .jk-header-container {
            padding: 0 14px;
          }


          .jk-header-logo {
            height: 80px;
          }


          /*
             Still large enough to clearly
             see the JK Scaffoldings details.
          */

          .jk-header-logo img {
            width: 74px;
            height: 74px;

            filter:
              brightness(1.17)
              contrast(1.1)
              saturate(1.12);
          }


          .jk-header-nav {
            top: 80px;

            height:
              calc(100dvh - 80px);

            padding:
              24px
              18px
              30px;
          }


          .jk-header-link {
            padding: 19px 2px;

            color: #000000;

            font-size: 17px;
            font-weight: 800;
          }


          .jk-menu-btn {
            width: 44px;
            height: 44px;
          }


          .jk-menu-btn span {
            width: 27px;
            height: 3px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .jk-header-container {
            padding: 0 10px;
          }


          .jk-header-logo img {
            width: 70px;
            height: 70px;
          }


          .jk-header-nav {
            padding-left: 14px;
            padding-right: 14px;
          }


          .jk-header-link {
            font-size: 16px;
          }

        }

      `}</style>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`jk-header ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="jk-header-container">

          {/* LOGO */}

          <Link
            to="/"
            className="jk-header-logo"
            onClick={closeMenu}
            aria-label="JK Scaffoldings Home"
          >
            <img
              src="/logo.png"
              alt="JK Scaffoldings"
            />
          </Link>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav
            className={`jk-header-nav ${
              menuOpen ? "open" : ""
            }`}
          >

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `jk-header-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `jk-header-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              About Us
            </NavLink>


            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `jk-header-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Services
            </NavLink>


            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `jk-header-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Contact Us
            </NavLink>


            {/* MOBILE CALL */}

            <a
              href="tel:+916303819983"
              className="jk-mobile-call"
              onClick={closeMenu}
            >
              <PhoneIcon />

              <span>Call Now</span>
            </a>

          </nav>


          {/* =================================================
              DESKTOP CALL BUTTON
          ================================================= */}

          <div className="jk-header-action">

            <a
              href="tel:+916303819983"
              className="jk-header-call"
            >
              <PhoneIcon />

              <span>Call Now</span>
            </a>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className={`jk-menu-btn ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>
    </>
  );
}


/* =========================================================
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      className="jk-phone"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="
          M6.62 10.79
          a15.53 15.53 0 0 0 6.59 6.59
          l2.2-2.2
          a1 1 0 0 1 1.02-.24
          11.72 11.72 0 0 0 3.68.59
          1 1 0 0 1 1 1
          V20
          a1 1 0 0 1-1 1
          C10.67 21 3 13.33 3 3.89
          a1 1 0 0 1 1-1
          h3.5
          a1 1 0 0 1 1 1
          11.72 11.72 0 0 0 .59 3.68
          1 1 0 0 1-.25 1.02
          l-2.22 2.2Z
        "
      />
    </svg>
  );
}

export default Navbar;