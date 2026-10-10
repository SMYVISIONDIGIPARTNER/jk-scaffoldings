import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const elements = footer.querySelectorAll(".jk-reveal");

    /* Accessibility: show everything immediately if reduced motion is preferred */
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("jk-show");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("jk-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`

        /* =====================================================
           JK SCAFFOLDINGs FOOTER
        ===================================================== */

        .jk-footer {
          width: 100%;
          max-width: 100%;

          position: relative;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 8% 20%,
              rgba(218, 164, 43, 0.09),
              transparent 30%
            ),
            radial-gradient(
              circle at 92% 75%,
              rgba(218, 164, 43, 0.05),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #040404 0%,
              #090909 55%,
              #111111 100%
            );

          color: #ffffff;

          font-family: Arial, Helvetica, sans-serif;
        }


        .jk-footer * {
          box-sizing: border-box;
        }


        /* =====================================================
           PREMIUM GOLD TOP LINE
        ===================================================== */

        .jk-footer::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              #9f6800 12%,
              #e0a62b 35%,
              #ffd36a 50%,
              #e0a62b 65%,
              #9f6800 88%,
              transparent 100%
            );

          box-shadow:
            0 0 15px
            rgba(231, 174, 47, 0.25);
        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .jk-footer-container {
          width: 90%;
          max-width: 1400px;

          margin: 0 auto;

          padding:
            75px
            0
            55px;

          display: grid;

          grid-template-columns:
            1.35fr
            0.75fr
            1.2fr
            1.15fr;

          gap:
            clamp(
              35px,
              4.5vw,
              75px
            );
        }


        /* =====================================================
           SCROLL REVEAL ANIMATIONS
        ===================================================== */

        .jk-reveal {
          opacity: 0;

          transition:
            opacity 0.8s ease,
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        /* LEFT SIDE */

        .jk-reveal-left {
          transform:
            translateX(-55px);
        }


        /* RIGHT SIDE */

        .jk-reveal-right {
          transform:
            translateX(55px);
        }


        /* SHOW */

        .jk-reveal.jk-show {
          opacity: 1;

          transform:
            translateX(0);
        }


        /* Slight delay variations */

        .jk-delay-1 {
          transition-delay: 0.05s;
        }

        .jk-delay-2 {
          transition-delay: 0.12s;
        }

        .jk-delay-3 {
          transition-delay: 0.19s;
        }

        .jk-delay-4 {
          transition-delay: 0.26s;
        }


        /* =====================================================
           COMPANY
        ===================================================== */

        .jk-footer-brand {
          min-width: 0;
        }


        .jk-footer-logo {
          display: inline-flex;

          margin-bottom: 20px;

          text-decoration: none;
        }


        .jk-footer-logo img {
          width: 105px;
          height: 105px;

          display: block;

          object-fit: contain;

          border-radius: 50%;

          filter:
            brightness(1.12)
            contrast(1.06);

          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }


        .jk-footer-logo:hover img {
          transform:
            scale(1.06);

          filter:
            brightness(1.2)
            contrast(1.08)
            saturate(1.1);
        }


        .jk-footer-description {
          max-width: 340px;

          margin: 0;

          color: #bfbfbf;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.8;
        }


        /* =====================================================
           SOCIAL MEDIA
        ===================================================== */

        .jk-footer-social {
          margin-top: 26px;

          display: flex;
          align-items: center;

          gap: 11px;
        }


        .jk-footer-social-link {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border:
            1px solid
            rgba(218, 164, 43, 0.45);

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.025);

          color: #dba52d;

          text-decoration: none;

          transition:
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .jk-footer-social-link:hover {
          color: #050505;

          background:
            #e0aa31;

          border-color:
            #e0aa31;

          transform:
            translateY(-5px)
            scale(1.05);

          box-shadow:
            0 8px 22px
            rgba(224, 170, 49, 0.22);
        }


        .jk-footer-social-link svg {
          width: 19px;
          height: 19px;

          display: block;

          fill: currentColor;
        }


        /* =====================================================
           COLUMN TITLES
        ===================================================== */

        .jk-footer-column {
          min-width: 0;
        }


        .jk-footer-title {
          margin:
            9px
            0
            28px;

          position: relative;

          color: #ffffff;

          font-size: 18px;
          font-weight: 700;
        }


        .jk-footer-title::after {
          content: "";

          width: 35px;
          height: 2px;

          position: absolute;

          left: 0;
          bottom: -11px;

          background:
            linear-gradient(
              90deg,
              #bd8010,
              #efba42
            );

          border-radius: 20px;

          transition:
            width 0.3s ease;
        }


        .jk-footer-column:hover
        .jk-footer-title::after {
          width: 52px;
        }


        /* =====================================================
           QUICK LINKS
        ===================================================== */

        .jk-footer-links {
          display: flex;
          flex-direction: column;

          gap: 14px;
        }


        .jk-footer-link {
          width: fit-content;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #bdbdbd;

          font-size: 14px;
          font-weight: 500;

          line-height: 1.5;

          text-decoration: none;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }


        .jk-footer-link::before {
          content: "›";

          color: #dba52d;

          font-size: 20px;

          line-height: 1;
        }


        .jk-footer-link:hover {
          color: #f0bb45;

          transform:
            translateX(5px);
        }


        /* =====================================================
           PRODUCTS
        ===================================================== */

        .jk-footer-services {
          display: flex;
          flex-direction: column;

          gap: 13px;
        }


        .jk-footer-service {
          width: fit-content;

          display: inline-flex;
          align-items: flex-start;

          gap: 9px;

          color: #bdbdbd;

          font-size: 14px;
          font-weight: 500;

          line-height: 1.5;

          text-decoration: none;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }


        .jk-footer-service::before {
          content: "";

          width: 5px;
          height: 5px;

          margin-top: 8px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #dba52d;
        }


        .jk-footer-service:hover {
          color: #f0bb45;

          transform:
            translateX(4px);
        }


        .jk-footer-view-all {
          width: fit-content;

          margin-top: 7px;

          display: inline-flex;
          align-items: center;

          color: #e2aa2d;

          font-size: 13px;
          font-weight: 700;

          text-decoration: none;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }


        .jk-footer-view-all:hover {
          color: #ffd166;

          transform:
            translateX(5px);
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .jk-footer-contact {
          display: flex;
          flex-direction: column;

          gap: 18px;
        }


        .jk-footer-contact-item {
          display: flex;
          align-items: flex-start;

          gap: 12px;
        }


        .jk-footer-contact-icon {
          width: 36px;
          height: 36px;

          flex:
            0
            0
            36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(218, 164, 43, 0.35);

          border-radius: 50%;

          color: #dba52d;

          background:
            rgba(218, 164, 43, 0.04);

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }


        .jk-footer-contact-item:hover
        .jk-footer-contact-icon {
          color: #050505;

          background: #dba52d;

          transform:
            translateY(-2px);
        }


        .jk-footer-contact-icon svg {
          width: 16px;
          height: 16px;

          display: block;

          fill: currentColor;
        }


        .jk-footer-contact-text {
          min-width: 0;
        }


        .jk-footer-contact-label {
          display: block;

          margin-bottom: 5px;

          color: #777777;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 1.3px;

          text-transform: uppercase;
        }


        .jk-footer-contact-text a,
        .jk-footer-contact-text p {
          margin: 0;

          color: #c9c9c9;

          font-size: 14px;
          font-weight: 500;

          line-height: 1.55;

          text-decoration: none;

          overflow-wrap: anywhere;

          transition:
            color 0.25s ease;
        }


        .jk-footer-contact-text a:hover {
          color: #e5ae35;
        }


        /* =====================================================
           BOTTOM SECTION
        ===================================================== */

        .jk-footer-bottom {
          width: 100%;

          border-top:
            1px solid
            rgba(255, 255, 255, 0.08);
        }


        .jk-footer-bottom-inner {
          width: 90%;
          max-width: 1400px;

          min-height: 80px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 25px;
        }


        .jk-footer-copyright {
          margin: 0;

          color: #858585;

          font-size: 12px;

          line-height: 1.6;
        }


        /* =====================================================
           SMYVISION TECHNOLOGIES
           BRIGHT + HIGH VISIBILITY
        ===================================================== */

        .jk-footer-developed {
          margin: 0;

          display: flex;
          align-items: center;

          gap: 6px;

          color: #a9a9a9;

          font-size: 13px;
          font-weight: 500;

          line-height: 1.6;

          white-space: nowrap;
        }


        .jk-footer-developed a {
          position: relative;

          display: inline-block;

          color: #ffc94f;

          font-size: 14px;
          font-weight: 800;

          letter-spacing: 0.45px;

          text-decoration: none;

          text-shadow:
            0 0 12px
            rgba(255, 193, 55, 0.28);

          transition:
            color 0.3s ease,
            transform 0.3s ease,
            text-shadow 0.3s ease;
        }


        /* GOLD UNDERLINE */

        .jk-footer-developed a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -3px;

          width: 100%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #ffd15c,
              transparent
            );

          opacity: 0.7;

          transform:
            scaleX(0.65);

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }


        .jk-footer-developed a:hover {
          color: #ffe08a;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 18px
            rgba(255, 201, 79, 0.55);
        }


        .jk-footer-developed a:hover::after {
          transform:
            scaleX(1);

          opacity: 1;
        }


        /* =====================================================
           BOTTOM REVEAL
        ===================================================== */

        .jk-bottom-left {
          opacity: 0;

          transform:
            translateX(-40px);

          transition:
            opacity 0.8s ease,
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        .jk-bottom-right {
          opacity: 0;

          transform:
            translateX(40px);

          transition:
            opacity 0.8s ease,
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );

          transition-delay: 0.1s;
        }


        .jk-bottom-left.jk-show,
        .jk-bottom-right.jk-show {
          opacity: 1;

          transform:
            translateX(0);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .jk-footer-container {
            grid-template-columns:
              1.2fr
              1fr;

            gap:
              50px
              65px;

            padding:
              65px
              0
              50px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .jk-footer-container {
            width: 100%;

            padding:
              52px
              20px
              40px;

            grid-template-columns:
              1fr;

            gap: 42px;
          }


          /* Smaller movement on mobile prevents overflow */

          .jk-reveal-left {
            transform:
              translateX(-28px);
          }


          .jk-reveal-right {
            transform:
              translateX(28px);
          }


          .jk-reveal.jk-show {
            transform:
              translateX(0);
          }


          /* LOGO */

          .jk-footer-logo {
            margin-bottom: 18px;
          }


          .jk-footer-logo img {
            width: 98px;
            height: 98px;

            filter:
              brightness(1.18)
              contrast(1.08)
              saturate(1.12);
          }


          .jk-footer-description {
            max-width: 450px;

            color: #c9c9c9;

            font-size: 14px;

            line-height: 1.75;
          }


          /* SOCIAL */

          .jk-footer-social {
            margin-top: 23px;
          }


          .jk-footer-social-link {
            width: 44px;
            height: 44px;
          }


          /* TITLES */

          .jk-footer-title {
            margin-top: 0;

            font-size: 18px;
          }


          /* LINKS */

          .jk-footer-link,
          .jk-footer-service {
            color: #c8c8c8;

            font-size: 14px;
            font-weight: 600;
          }


          /* CONTACT */

          .jk-footer-contact-text a,
          .jk-footer-contact-text p {
            color: #cccccc;

            font-size: 14px;
          }


          /* BOTTOM */

          .jk-footer-bottom-inner {
            width: 100%;

            min-height: auto;

            padding:
              23px
              20px
              26px;

            flex-direction: column;

            align-items: flex-start;

            gap: 10px;
          }


          .jk-bottom-left {
            transform:
              translateX(-25px);
          }


          .jk-bottom-right {
            transform:
              translateX(25px);
          }


          .jk-bottom-left.jk-show,
          .jk-bottom-right.jk-show {
            transform:
              translateX(0);
          }


          .jk-footer-copyright {
            color: #929292;

            font-size: 12px;
          }


          /* BRIGHTER SMYVISION ON MOBILE */

          .jk-footer-developed {
            display: block;

            color: #a9a9a9;

            font-size: 12px;

            white-space: normal;
          }


          .jk-footer-developed a {
            display: inline-block;

            margin-left: 3px;

            color: #ffd15c;

            font-size: 13px;
            font-weight: 800;

            letter-spacing: 0.35px;

            text-shadow:
              0 0 13px
              rgba(255, 201, 79, 0.35);
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .jk-footer-container {
            padding-left: 16px;
            padding-right: 16px;
          }


          .jk-footer-bottom-inner {
            padding-left: 16px;
            padding-right: 16px;
          }


          .jk-footer-logo img {
            width: 92px;
            height: 92px;
          }


          .jk-footer-developed a {
            font-size: 12px;
          }

        }


        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .jk-reveal,
          .jk-bottom-left,
          .jk-bottom-right {
            opacity: 1 !important;

            transform:
              none !important;

            transition:
              none !important;
          }

        }

      `}</style>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="jk-footer"
        ref={footerRef}
      >

        <div className="jk-footer-container">


          {/* =================================================
              COMPANY
              COMES FROM LEFT
          ================================================= */}

          <div
            className="
              jk-footer-brand
              jk-reveal
              jk-reveal-left
              jk-delay-1
            "
          >

            <Link
              to="/"
              className="jk-footer-logo"
            >
              <img
                src="/logo.png"
                alt="JK Scaffoldings"
              />
            </Link>


            <p className="jk-footer-description">
              Reliable scaffolding products and support
              solutions for construction, formwork and
              infrastructure requirements in Vijayawada.
            </p>


            {/* SOCIAL MEDIA */}

            <div className="jk-footer-social">

              <a
                href="https://www.facebook.com/share/18wsa9XXP9/"
                target="_blank"
                rel="noreferrer"
                className="jk-footer-social-link"
                aria-label="JK Scaffoldings Facebook"
              >
                <FacebookIcon />
              </a>


              <a
                href="https://www.instagram.com/jkscaffoldings?utm_source=qr&stkn=MWI0bnhwbDE1aGJp"
                target="_blank"
                rel="noreferrer"
                className="jk-footer-social-link"
                aria-label="JK Scaffoldings Instagram"
              >
                <InstagramIcon />
              </a>


              <a
                href="https://www.youtube.com/@MKesava-h5z"
                target="_blank"
                rel="noreferrer"
                className="jk-footer-social-link"
                aria-label="JK Scaffoldings YouTube"
              >
                <YouTubeIcon />
              </a>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
              COMES FROM RIGHT
          ================================================= */}

          <div
            className="
              jk-footer-column
              jk-reveal
              jk-reveal-right
              jk-delay-2
            "
          >

            <h3 className="jk-footer-title">
              Quick Links
            </h3>


            <div className="jk-footer-links">

              <Link
                to="/"
                className="jk-footer-link"
              >
                Home
              </Link>


              <Link
                to="/about"
                className="jk-footer-link"
              >
                About Us
              </Link>


              <Link
                to="/services"
                className="jk-footer-link"
              >
                Services
              </Link>


              <Link
                to="/contact"
                className="jk-footer-link"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* =================================================
              PRODUCTS
              COMES FROM LEFT
          ================================================= */}

          <div
            className="
              jk-footer-column
              jk-reveal
              jk-reveal-left
              jk-delay-3
            "
          >

            <h3 className="jk-footer-title">
              Our Products
            </h3>


            <div className="jk-footer-services">

              <Link
                to="/services"
                className="jk-footer-service"
              >
                Adjustable Props
              </Link>


              <Link
                to="/services"
                className="jk-footer-service"
              >
                H Frames
              </Link>


              <Link
                to="/services"
                className="jk-footer-service"
              >
                Cup-Lock System
              </Link>


              <Link
                to="/services"
                className="jk-footer-service"
              >
                Centering Sheets
              </Link>


              <Link
                to="/services"
                className="jk-footer-service"
              >
                Adjustable Spans
              </Link>


              <Link
                to="/services"
                className="jk-footer-view-all"
              >
                View All Products →
              </Link>

            </div>

          </div>


          {/* =================================================
              CONTACT
              COMES FROM RIGHT
          ================================================= */}

          <div
            className="
              jk-footer-column
              jk-reveal
              jk-reveal-right
              jk-delay-4
            "
          >

            <h3 className="jk-footer-title">
              Contact Us
            </h3>


            <div className="jk-footer-contact">


              {/* PHONE */}

              <div className="jk-footer-contact-item">

                <div className="jk-footer-contact-icon">
                  <PhoneIcon />
                </div>


                <div className="jk-footer-contact-text">

                  <span className="jk-footer-contact-label">
                    Call Us
                  </span>

                  <a href="tel:+916303819983">
                    +91 63038 19983
                  </a>
                      <br />
                   <a href="tel:+917995319983">
                    +91 79953 19983
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="jk-footer-contact-item">

                <div className="jk-footer-contact-icon">
                  <EmailIcon />
                </div>


                <div className="jk-footer-contact-text">

                  <span className="jk-footer-contact-label">
                    Email Us
                  </span>

                  <a href="mailto:jkscaffoldings1433@gmail.com">
                    jkscaffoldings1433@gmail.com
                  </a>

                </div>

              </div>


              {/* LOCATION */}

              <div className="jk-footer-contact-item">

                <div className="jk-footer-contact-icon">
                  <LocationIcon />
                </div>


                <div className="jk-footer-contact-text">

                  <span className="jk-footer-contact-label">
                    Location
                  </span>

                  <p>
                    Vijayawada, Andhra Pradesh
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <div className="jk-footer-bottom">

          <div className="jk-footer-bottom-inner">


            {/* LEFT ANIMATION */}

            <p
              className="
                jk-footer-copyright
                jk-reveal
                jk-bottom-left
              "
            >
              © {new Date().getFullYear()} JK Scaffoldings.
              All Rights Reserved.
            </p>


            {/* RIGHT ANIMATION */}

            <p
              className="
                jk-footer-developed
                jk-reveal
                jk-bottom-right
              "
            >
              Developed by{" "}

              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>

            </p>

          </div>

        </div>

      </footer>
    </>
  );
}


/* =========================================================
   FACEBOOK ICON
========================================================= */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.7-4.6 4.7v2.5H7v3.5h2.7v9h3.8Z" />
    </svg>
  );
}


/* =========================================================
   INSTAGRAM ICON
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}


/* =========================================================
   YOUTUBE ICON
========================================================= */

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.3V8.7L15.5 12l-5.8 3.3Z" />
    </svg>
  );
}


/* =========================================================
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.67 21 3 13.33 3 3.89a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.25 1.02l-2.22 2.2Z" />
    </svg>
  );
}


/* =========================================================
   EMAIL ICON
========================================================= */

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}


/* =========================================================
   LOCATION ICON
========================================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}


export default Footer;