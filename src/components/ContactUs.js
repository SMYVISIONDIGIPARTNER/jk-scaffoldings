import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   CONTACT SETTINGS
   Replace placeholders with actual JK Scaffoldings details
========================================================= */

const PHONE_DISPLAY = "+91 63038 19983";
const PHONE_LINK = "+916303819983";
const WHATSAPP_NUMBER = "916303819983";
const EMAIL = "jkscaffoldings1433@gmail.com";

const LOCATION = "Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh";

const FACEBOOK_URL = "https://www.facebook.com/share/18wsa9XXP9/";
const INSTAGRAM_URL = "https://www.instagram.com/jkscaffoldings?utm_source=qr&stkn=MWI0bnhwbDE1aGJp";
const YOUTUBE_URL = "https://www.youtube.com/@MKesava-h5z";

/* =========================================================
   IMAGE FALLBACK
========================================================= */

const HERO_UNSPLASH =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90";

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactUs() {
  const pageRef = useRef(null);

  /* =========================================================
     SEO + GEO
  ========================================================= */
  useEffect(() => {
    document.title =
      "Contact JK Scaffoldings | Vijayawada & Surrounding Areas";

    const description =
      "Contact JK Scaffoldings for scaffolding product enquiries, formwork support and construction requirements in Vijayawada, Kanuru, Poranki, Penamaluru, Ramavarappadu, Gannavaram, Gollapudi, Ibrahimpatnam, Tadepalli, Mangalagiri, Amaravati, Guntur, Machilipatnam and Andhra Pradesh.";

    const setMeta = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(property ? "property" : "name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta(
      "keywords",
      "contact JK Scaffoldings, scaffolding Vijayawada, scaffolding Kanuru, scaffolding Poranki, scaffolding Penamaluru, scaffolding Ramavarappadu, scaffolding Gannavaram, scaffolding Gollapudi, scaffolding Ibrahimpatnam, scaffolding Tadepalli, scaffolding Mangalagiri, scaffolding Amaravati, scaffolding Guntur, scaffolding Machilipatnam, scaffolding Andhra Pradesh, scaffolding product enquiry"
    );
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("geo.region", "IN-AP");
    setMeta("geo.placename", "Vijayawada, Andhra Pradesh");
    setMeta("og:title", document.title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://jkscaffoldings.com/contact", true);
    setMeta("og:image", "https://jkscaffoldings.com/logo.png", true);
    setMeta("twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = "https://jkscaffoldings.com/contact";

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "JK Scaffoldings",
      url: "https://jkscaffoldings.com",
      image: "https://jkscaffoldings.com/logo.png",
      telephone: "+916303819983",
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN"
      },
      areaServed: [
        "Vijayawada",
        "MG Road, Vijayawada",
        "Eluru Road, Vijayawada",
        "Auto Nagar, Vijayawada",
        "Patamata, Vijayawada",
        "Kanuru",
        "Poranki",
        "Penamaluru",
        "Ramavarappadu",
        "Kankipadu",
        "Yanamalakuduru",
        "Prasadampadu",
        "Enikepadu",
        "Gannavaram",
        "Nunna",
        "Gollapudi",
        "Ibrahimpatnam",
        "Tadepalli",
        "Vaddeswaram",
        "Mangalagiri",
        "Amaravati",
        "Guntur",
        "Machilipatnam",
        "Andhra Pradesh"
      ]
    };

    let schemaTag = document.getElementById("jk-contact-localbusiness-schema");

    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "jk-contact-localbusiness-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify(schema);

    return () => {
      const tag = document.getElementById("jk-contact-localbusiness-schema");
      if (tag) tag.remove();
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(".contact-reveal");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("contact-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     FORM
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello JK Scaffoldings,

I would like to enquire about a scaffolding requirement.

Name: ${formData.name}
Phone: ${formData.phone}
Product / Requirement: ${formData.product || "Not specified"}

Message:
${formData.message || "Please contact me with more details."}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .jk-contact,
        .jk-contact * {
          box-sizing: border-box;
        }

        .jk-contact {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #0a0a0a;
          font-family: Arial, Helvetica, sans-serif;
        }

        .contact-container {
          width: 90%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-gold {
          color: #d89a1d;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .contact-reveal {
          opacity: 0;

          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.22, 1, .36, 1);
        }

        .contact-left {
          transform: translateX(-55px);
        }

        .contact-right {
          transform: translateX(55px);
        }

        .contact-bottom {
          transform: translateY(45px);
        }

        .contact-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          min-height: 560px;
          position: relative;

          display: flex;
          align-items: center;

          overflow: hidden;
          background: #080808;
        }

        .contact-hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .contact-hero-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          filter:
            brightness(.61)
            contrast(1.08)
            saturate(.85);

          animation:
            contactHeroZoom
            15s ease-in-out
            infinite alternate;
        }

        @keyframes contactHeroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.07);
          }
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,.96) 0%,
              rgba(0,0,0,.82) 38%,
              rgba(0,0,0,.48) 70%,
              rgba(0,0,0,.24) 100%
            );
        }

        .contact-hero-glow {
          position: absolute;
          z-index: 2;

          width: 520px;
          height: 520px;

          left: -270px;
          bottom: -310px;

          border-radius: 50%;

          background: rgba(219,157,29,.25);

          filter: blur(100px);

          animation:
            contactGlow
            5s ease-in-out
            infinite;
        }

        @keyframes contactGlow {
          0%,
          100% {
            opacity: .45;
            transform: scale(.9);
          }

          50% {
            opacity: .9;
            transform: scale(1.13);
          }
        }

        .contact-hero-content {
          max-width: 820px;

          position: relative;
          z-index: 3;

          padding: 100px 0;
        }

        .contact-breadcrumb {
          margin-bottom: 25px;

          display: flex;
          align-items: center;

          gap: 10px;

          color: #cfcfcf;

          font-size: 12px;
          font-weight: 700;
        }

        .contact-breadcrumb a {
          color: #ffffff;
          text-decoration: none;
        }

        .contact-breadcrumb span {
          color: #dda125;
        }

        .contact-hero-label {
          margin-bottom: 17px;

          display: flex;
          align-items: center;

          gap: 12px;

          color: #e1a52a;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .contact-hero-label::before {
          content: "";

          width: 38px;
          height: 2px;

          background: #e1a52a;
        }

        .contact-hero h1 {
          max-width: 800px;

          margin: 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(56px, 6vw, 88px);

          line-height: .96;

          letter-spacing: -3px;

          text-transform: uppercase;
        }

        .contact-hero h1 span {
          display: block;

          margin-top: 7px;

          color: #dfa329;
        }

        .contact-hero-description {
          max-width: 640px;

          margin: 27px 0 0;

          color: #d0d0d0;

          font-size: 17px;

          line-height: 1.75;
        }

        /* =====================================================
           COMMON BUTTONS
        ===================================================== */

        .contact-primary-btn,
        .contact-outline-btn {
          min-height: 57px;

          padding: 0 27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 900;

          line-height: 1;

          transition:
            transform .3s ease,
            background .3s ease,
            color .3s ease,
            box-shadow .3s ease;
        }

        .contact-primary-btn {
          color: #080808;

          background:
            linear-gradient(
              135deg,
              #f1c55c,
              #d69516
            );

          box-shadow:
            0 14px 35px
            rgba(215,153,25,.25);
        }

        .contact-primary-btn:hover {
          transform: translateY(-4px);

          box-shadow:
            0 18px 42px
            rgba(215,153,25,.36);
        }

        .contact-outline-btn {
          color: #ffffff;

          border:
            1px solid
            rgba(255,255,255,.6);

          background:
            rgba(255,255,255,.05);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .contact-outline-btn:hover {
          transform: translateY(-4px);

          background: #ffffff;
          color: #080808;
        }

        /*
          IMPORTANT:
          Every icon inside a main button gets a fixed size.
          This prevents giant SVG icons.
        */

        .contact-primary-btn svg,
        .contact-outline-btn svg {
          width: 19px !important;
          height: 19px !important;

          min-width: 19px !important;
          max-width: 19px !important;

          min-height: 19px !important;
          max-height: 19px !important;

          flex: 0 0 19px !important;

          display: block;
        }

        .contact-hero-actions {
          margin-top: 31px;

          display: flex;
          align-items: center;

          gap: 13px;

          flex-wrap: wrap;
        }

        .contact-hero-line {
          position: absolute;

          z-index: 4;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 4px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #d99918,
              #f4ca61,
              #d99918,
              transparent
            );
        }

        /* =====================================================
           CONTACT INFO
        ===================================================== */

        .contact-info-section {
          padding: 100px 0 45px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #faf9f6
            );
        }

        .contact-section-heading {
          max-width: 760px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .contact-small-title {
          margin-bottom: 14px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          color: #c58207;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .contact-small-title::before,
        .contact-small-title::after {
          content: "";

          width: 28px;
          height: 1px;

          background: #d99918;
        }

        .contact-section-heading h2 {
          margin: 0 0 16px;

          color: #080808;

          font-size: clamp(38px, 4.5vw, 58px);

          line-height: 1.04;

          letter-spacing: -2px;

          font-weight: 900;
        }

        .contact-section-heading p {
          max-width: 620px;

          margin: 0 auto;

          color: #707070;

          font-size: 14px;

          line-height: 1.75;
        }

        .contact-info-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .contact-info-card {
          min-width: 0;
          min-height: 270px;

          position: relative;

          overflow: hidden;

          padding: 34px 25px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;

          border: 1px solid #e8e8e8;

          border-radius: 18px;

          background: #ffffff;

          box-shadow:
            0 14px 40px
            rgba(0,0,0,.045);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .contact-info-card::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 0;

          width: 0;
          height: 4px;

          transform: translateX(-50%);

          background:
            linear-gradient(
              90deg,
              #ce8b0c,
              #f1c65d
            );

          transition: width .4s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-8px);

          border-color:
            rgba(214,151,23,.35);

          box-shadow:
            0 23px 50px
            rgba(0,0,0,.08);
        }

        .contact-info-card:hover::after {
          width: 100%;
        }

        .contact-icon-wrap {
          width: 88px;
          height: 88px;

          position: relative;

          margin-bottom: 21px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-icon-ring {
          position: absolute;

          inset: 0;

          border:
            1px solid
            rgba(215,153,25,.35);

          border-radius: 50%;

          animation:
            contactRing
            2.8s ease-out
            infinite;
        }

        .contact-icon-ring.second {
          animation-delay: 1.4s;
        }

        @keyframes contactRing {
          0% {
            opacity: 0;
            transform: scale(.7);
          }

          30% {
            opacity: .8;
          }

          100% {
            opacity: 0;
            transform: scale(1.25);
          }
        }

        .contact-card-icon {
          width: 63px;
          height: 63px;

          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #080808;

          background:
            linear-gradient(
              135deg,
              #f2c85e,
              #d69515
            );

          animation:
            contactIconFloat
            3s ease-in-out
            infinite;
        }

        @keyframes contactIconFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .contact-card-icon svg {
          width: 28px !important;
          height: 28px !important;

          min-width: 28px !important;
          max-width: 28px !important;
        }

        .contact-info-card h3 {
          margin: 0 0 10px;

          color: #111111;

          font-size: 16px;
          font-weight: 900;
        }

        .contact-info-card p {
          margin: 0;

          color: #727272;

          font-size: 12.5px;

          line-height: 1.65;
        }

        .contact-info-card a {
          max-width: 100%;

          margin-top: 7px;

          color: #b97700;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          overflow-wrap: anywhere;
        }

        /* =====================================================
           FORM SECTION
        ===================================================== */

        .contact-form-section {
          padding: 70px 0 110px;

          background:
            linear-gradient(
              180deg,
              #faf9f6,
              #ffffff
            );
        }

        .contact-form-layout {
          display: grid;

          grid-template-columns:
            minmax(0, .88fr)
            minmax(0, 1.12fr);

          gap: 40px;

          align-items: stretch;
        }

        /* =====================================================
           LEFT FORM INFO
        ===================================================== */

        .contact-form-info {
          min-width: 0;
          min-height: 650px;

          position: relative;

          overflow: hidden;

          padding: 55px 45px;

          border-radius: 25px;

          background:
            radial-gradient(
              circle at top right,
              #292929,
              #070707 60%
            );

          color: #ffffff;

          box-shadow:
            0 25px 60px
            rgba(0,0,0,.13);
        }

        .contact-form-info::before {
          content: "";

          position: absolute;

          width: 400px;
          height: 400px;

          right: -230px;
          top: -220px;

          border:
            1px solid
            rgba(223,163,41,.2);

          border-radius: 50%;

          animation:
            contactCircle
            5s ease-in-out
            infinite;
        }

        @keyframes contactCircle {
          0%,
          100% {
            transform: scale(.9);
          }

          50% {
            transform: scale(1.15);
          }
        }

        .contact-form-info-content {
          position: relative;
          z-index: 2;
        }

        .contact-form-label {
          display: block;

          margin-bottom: 15px;

          color: #dfa329;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .contact-form-info h2 {
          max-width: 500px;

          margin: 0 0 20px;

          color: #ffffff;

          font-size: clamp(35px, 4vw, 51px);

          line-height: 1.06;

          letter-spacing: -1.7px;
        }

        .contact-form-info-content > p {
          max-width: 490px;

          margin: 0;

          color: #aaa;

          font-size: 14px;

          line-height: 1.75;
        }

        .contact-detail-list {
          margin-top: 42px;

          display: flex;
          flex-direction: column;

          gap: 19px;
        }

        .contact-detail-item {
          padding-bottom: 18px;

          display: flex;
          align-items: center;

          gap: 15px;

          border-bottom:
            1px solid
            rgba(255,255,255,.08);
        }

        .contact-detail-icon {
          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          color: #080808;

          background:
            linear-gradient(
              135deg,
              #efc45a,
              #d49314
            );
        }

        .contact-detail-icon svg {
          width: 20px !important;
          height: 20px !important;

          min-width: 20px !important;
          max-width: 20px !important;
        }

        .contact-detail-text {
          min-width: 0;
        }

        .contact-detail-text span {
          display: block;

          margin-bottom: 4px;

          color: #858585;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 1.3px;

          text-transform: uppercase;
        }

        .contact-detail-text strong,
        .contact-detail-text a {
          color: #ffffff;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          line-height: 1.5;

          overflow-wrap: anywhere;
        }

        /* =====================================================
           SOCIAL ICONS
        ===================================================== */

        .contact-social {
          margin-top: 38px;
        }

        .contact-social-title {
          margin-bottom: 14px;

          color: #8c8c8c;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .contact-social-icons {
          display: flex;
          align-items: center;

          gap: 10px;
        }

        .contact-social-link {
          width: 47px;
          height: 47px;

          flex: 0 0 47px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(255,255,255,.12);

          border-radius: 50%;

          color: #ffffff;

          background:
            rgba(255,255,255,.04);

          text-decoration: none;

          transition:
            transform .3s ease,
            color .3s ease,
            background .3s ease,
            border-color .3s ease;
        }

        .contact-social-link:hover {
          transform:
            translateY(-5px)
            rotate(5deg);

          color: #080808;

          border-color: #dda125;

          background: #dda125;
        }

        .contact-social-link svg {
          width: 19px !important;
          height: 19px !important;

          min-width: 19px !important;
          max-width: 19px !important;
        }

        /* =====================================================
           FORM CARD
        ===================================================== */

        .contact-form-card {
          min-width: 0;
          min-height: 650px;

          padding: 55px;

          border: 1px solid #e6e6e6;

          border-radius: 25px;

          background: #ffffff;

          box-shadow:
            0 22px 55px
            rgba(0,0,0,.07);
        }

        .contact-form-card h3 {
          margin: 0 0 8px;

          color: #111111;

          font-size: 30px;
          font-weight: 900;

          letter-spacing: -1px;
        }

        .contact-form-intro {
          margin: 0 0 32px;

          color: #767676;

          font-size: 13px;

          line-height: 1.7;
        }

        .contact-form {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 20px;
        }

        .contact-form-group {
          min-width: 0;

          display: flex;
          flex-direction: column;

          gap: 8px;
        }

        .contact-form-group.full {
          grid-column: 1 / -1;
        }

        .contact-form-group label {
          color: #282828;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: .4px;
        }

        .contact-form-group input,
        .contact-form-group select,
        .contact-form-group textarea {
          width: 100%;
          max-width: 100%;
          min-width: 0;

          outline: none;

          border: 1px solid #dedede;

          border-radius: 10px;

          background: #fafafa;

          color: #111111;

          font-family: inherit;

          font-size: 13px;

          transition:
            border-color .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .contact-form-group input,
        .contact-form-group select {
          height: 55px;

          padding: 0 15px;
        }

        .contact-form-group textarea {
          min-height: 145px;

          padding: 15px;

          resize: vertical;

          line-height: 1.6;
        }

        .contact-form-group input:focus,
        .contact-form-group select:focus,
        .contact-form-group textarea:focus {
          border-color: #d59a23;

          background: #ffffff;

          box-shadow:
            0 0 0 4px
            rgba(213,154,35,.09);
        }

        /* =====================================================
           FORM WHATSAPP BUTTON
        ===================================================== */

        .contact-submit-btn {
          width: 100%;
          min-width: 0;
          min-height: 58px;

          position: relative;

          overflow: hidden;

          grid-column: 1 / -1;

          margin-top: 5px;

          padding: 0 20px;

          border: 0;
          border-radius: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          cursor: pointer;

          color: #080808;

          background:
            linear-gradient(
              135deg,
              #f1c65d,
              #d69515
            );

          font-family: inherit;

          font-size: 13px;
          font-weight: 900;

          line-height: 1;

          text-align: center;

          box-shadow:
            0 14px 35px
            rgba(215,153,25,.23);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        /*
          THIS FIXES THE GIANT WHATSAPP ICON
        */

        .contact-submit-btn svg {
          width: 20px !important;
          height: 20px !important;

          min-width: 20px !important;
          max-width: 20px !important;

          min-height: 20px !important;
          max-height: 20px !important;

          flex: 0 0 20px !important;

          display: block;
        }

        .contact-submit-btn .contact-button-arrow {
          margin-left: 3px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          font-size: 16px;
          line-height: 1;
        }

        .contact-submit-btn::before {
          content: "";

          position: absolute;

          top: 0;
          left: -100px;

          width: 70px;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.65),
              transparent
            );

          transform: skewX(-20deg);

          animation:
            contactButtonShine
            3.4s ease-in-out
            infinite;
        }

        @keyframes contactButtonShine {
          0%,
          65% {
            left: -100px;
          }

          100% {
            left: calc(100% + 100px);
          }
        }

        .contact-submit-btn:hover {
          transform: translateY(-3px);

          box-shadow:
            0 18px 42px
            rgba(215,153,25,.35);
        }

        .contact-form-note {
          grid-column: 1 / -1;

          margin: 0;

          color: #8b8b8b;

          font-size: 10.5px;

          line-height: 1.6;

          text-align: center;
        }

        /* =====================================================
           MAP
        ===================================================== */

        .contact-map-section {
          padding: 105px 0;

          position: relative;

          overflow: hidden;

          background: #080808;
        }

        .contact-map-heading {
          max-width: 720px;

          margin: 0 auto 45px;

          text-align: center;
        }

        .contact-map-heading h2 {
          margin: 0 0 15px;

          color: #ffffff;

          font-size:
            clamp(37px, 4vw, 54px);

          line-height: 1.05;

          letter-spacing: -1.7px;
        }

        .contact-map-heading p {
          max-width: 600px;

          margin: 0 auto;

          color: #9f9f9f;

          font-size: 14px;

          line-height: 1.7;
        }

        .contact-map-wrapper {
          position: relative;

          overflow: hidden;

          border:
            1px solid
            rgba(221,161,37,.25);

          border-radius: 24px;

          background: #111111;

          box-shadow:
            0 25px 60px
            rgba(0,0,0,.3);
        }

        .contact-map-wrapper::before {
          content: "";

          position: absolute;

          z-index: 2;

          pointer-events: none;

          inset: 0;

          border-radius: 24px;

          box-shadow:
            inset 0 0 0 1px
            rgba(255,255,255,.05);
        }

        .contact-map-wrapper iframe {
          width: 100%;
          height: 520px;

          display: block;

          border: 0;
        }

        .contact-map-bottom {
          padding: 23px 26px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          background:
            linear-gradient(
              90deg,
              #101010,
              #171717
            );
        }

        .contact-map-location {
          min-width: 0;

          display: flex;
          align-items: center;

          gap: 13px;
        }

        .contact-map-pin {
          width: 43px;
          height: 43px;

          flex: 0 0 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #080808;

          background:
            linear-gradient(
              135deg,
              #f0c65d,
              #d79516
            );
        }

        .contact-map-pin svg {
          width: 19px !important;
          height: 19px !important;
        }

        .contact-map-location span {
          display: block;

          margin-bottom: 3px;

          color: #858585;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 1.2px;

          text-transform: uppercase;
        }

        .contact-map-location strong {
          color: #ffffff;

          font-size: 13px;
        }

        .contact-map-btn {
          min-height: 46px;

          padding: 0 19px;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(224,164,39,.4);

          border-radius: 8px;

          color: #e0a427;

          text-decoration: none;

          font-size: 11px;
          font-weight: 900;

          transition:
            background .3s ease,
            color .3s ease,
            transform .3s ease;
        }

        .contact-map-btn:hover {
          transform: translateY(-2px);

          background: #dda125;

          color: #080808;
        }

        /* =====================================================
           CONNECT
        ===================================================== */

        .contact-connect-section {
          padding: 105px 0;

          background: #ffffff;
        }

        .contact-connect-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 28px;
        }

        .contact-connect-card {
          min-width: 0;
          min-height: 320px;

          padding: 45px;

          border: 1px solid #e7e7e7;

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #fafafa
            );

          box-shadow:
            0 18px 45px
            rgba(0,0,0,.05);
        }

        .contact-connect-label {
          display: block;

          margin-bottom: 13px;

          color: #c88408;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .contact-connect-card h3 {
          margin: 0 0 13px;

          color: #101010;

          font-size: 28px;

          letter-spacing: -.8px;
        }

        .contact-connect-card > p {
          margin: 0;

          color: #747474;

          font-size: 13px;

          line-height: 1.7;
        }

        .contact-hours {
          margin-top: 28px;

          display: flex;
          flex-direction: column;
        }

        .contact-hours-row {
          padding: 13px 0;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border-bottom:
            1px solid #eeeeee;
        }

        .contact-hours-row span {
          color: #656565;

          font-size: 12px;
        }

        .contact-hours-row strong {
          color: #171717;

          font-size: 12px;

          text-align: right;
        }

        .contact-large-socials {
          margin-top: 29px;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 12px;
        }

        .contact-large-social {
          min-width: 0;
          min-height: 105px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border: 1px solid #e5e5e5;

          border-radius: 13px;

          color: #111111;

          background: #ffffff;

          text-decoration: none;

          font-size: 11px;
          font-weight: 900;

          transition:
            transform .3s ease,
            color .3s ease,
            background .3s ease,
            border-color .3s ease;
        }

        .contact-large-social svg {
          width: 25px !important;
          height: 25px !important;

          min-width: 25px !important;
          max-width: 25px !important;
        }

        .contact-large-social:hover {
          transform: translateY(-6px);

          color: #080808;

          border-color: #dda125;

          background:
            linear-gradient(
              135deg,
              #f1c75e,
              #d69515
            );
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .contact-final-section {
          padding: 10px 0 110px;

          background: #ffffff;
        }

        .contact-final {
          min-height: 360px;

          position: relative;

          overflow: hidden;

          padding: 65px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 40px;

          border-radius: 27px;

          background:
            linear-gradient(
              120deg,
              #050505,
              #191919
            );

          box-shadow:
            0 25px 60px
            rgba(0,0,0,.14);
        }

        .contact-final::before {
          content: "";

          position: absolute;

          width: 500px;
          height: 500px;

          right: -160px;
          top: -330px;

          border-radius: 50%;

          background:
            rgba(218,157,31,.18);

          animation:
            contactFinalGlow
            4s ease-in-out
            infinite;
        }

        @keyframes contactFinalGlow {
          0%,
          100% {
            opacity: .5;
            transform: scale(.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        .contact-final-content {
          min-width: 0;
          max-width: 720px;

          position: relative;
          z-index: 2;
        }

        .contact-final-label {
          display: block;

          margin-bottom: 13px;

          color: #dfa329;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .contact-final h2 {
          margin: 0 0 16px;

          color: #ffffff;

          font-size:
            clamp(37px, 4vw, 55px);

          line-height: 1.05;

          letter-spacing: -1.8px;
        }

        .contact-final p {
          max-width: 600px;

          margin: 0;

          color: #aaa;

          font-size: 14px;

          line-height: 1.7;
        }

        .contact-final-action {
          position: relative;
          z-index: 2;

          flex-shrink: 0;
        }

        .contact-final-action .contact-primary-btn {
          min-width: 220px;
          min-height: 58px;

          padding: 0 24px;

          white-space: nowrap;
        }

        /*
          IMPORTANT:
          FIXES FINAL CTA GIANT WHATSAPP ICON
        */

        .contact-final-action .contact-primary-btn svg {
          width: 20px !important;
          height: 20px !important;

          min-width: 20px !important;
          max-width: 20px !important;

          min-height: 20px !important;
          max-height: 20px !important;

          flex: 0 0 20px !important;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .contact-info-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .contact-form-layout {
            grid-template-columns: 1fr;
          }

          .contact-form-info,
          .contact-form-card {
            min-height: auto;
          }

          .contact-final {
            padding: 55px 42px;

            gap: 30px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .contact-container {
            width: 100%;

            padding-left: 18px;
            padding-right: 18px;
          }

          /* ---------------------------------------------------
             HERO
          --------------------------------------------------- */

          .contact-hero {
            min-height: 620px;

            align-items: flex-end;
          }

          .contact-hero-image img {
            object-position: 63% center;

            filter:
              brightness(.63)
              contrast(1.08)
              saturate(.88);
          }

          .contact-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,.18) 0%,
                rgba(0,0,0,.30) 27%,
                rgba(0,0,0,.72) 60%,
                rgba(0,0,0,.98) 100%
              );
          }

          .contact-hero-content {
            width: 100%;
            max-width: 100%;

            padding: 150px 0 58px;
          }

          .contact-breadcrumb {
            margin-bottom: 16px;

            font-size: 10px;
          }

          .contact-hero-label {
            margin-bottom: 13px;

            font-size: 9px;

            letter-spacing: 2px;
          }

          .contact-hero-label::before {
            width: 25px;
          }

          .contact-hero h1 {
            max-width: 390px;

            font-size:
              clamp(42px, 12vw, 57px);

            line-height: .95;

            letter-spacing: -2px;
          }

          .contact-hero-description {
            max-width: 380px;

            margin-top: 20px;

            font-size: 13.5px;

            line-height: 1.65;
          }

          /* ---------------------------------------------------
             HERO BUTTONS
          --------------------------------------------------- */

          .contact-hero-actions {
            width: 100%;

            margin-top: 26px;

            display: grid;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            gap: 10px;
          }

          .contact-hero-actions
          .contact-primary-btn,
          .contact-hero-actions
          .contact-outline-btn {
            width: 100%;
            min-width: 0;

            height: 54px;
            min-height: 54px;

            padding: 0 10px;

            gap: 8px;

            border-radius: 10px;

            font-size: 11px;

            white-space: nowrap;
          }

          .contact-hero-actions
          .contact-primary-btn svg,
          .contact-hero-actions
          .contact-outline-btn svg {
            width: 18px !important;
            height: 18px !important;

            min-width: 18px !important;
            max-width: 18px !important;

            min-height: 18px !important;
            max-height: 18px !important;

            flex: 0 0 18px !important;
          }

          .contact-hero-actions
          .contact-outline-btn {
            background:
              rgba(8,8,8,.52);

            border:
              1px solid
              rgba(255,255,255,.58);
          }

          /* ---------------------------------------------------
             CONTACT INFO
          --------------------------------------------------- */

          .contact-info-section {
            padding: 75px 0 35px;
          }

          .contact-section-heading {
            margin-bottom: 40px;
          }

          .contact-section-heading h2 {
            font-size: 35px;

            letter-spacing: -1.3px;
          }

          .contact-section-heading p {
            font-size: 13px;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .contact-info-card {
            min-height: 225px;

            padding: 30px 20px;
          }

          /* ---------------------------------------------------
             FORM SECTION
          --------------------------------------------------- */

          .contact-form-section {
            padding: 45px 0 78px;
          }

          .contact-form-layout {
            width: 100%;

            gap: 20px;
          }

          .contact-form-info {
            width: 100%;

            padding: 42px 24px;

            border-radius: 20px;
          }

          .contact-form-info h2 {
            font-size: 35px;
          }

          .contact-form-card {
            width: 100%;

            padding: 38px 20px;

            border-radius: 20px;
          }

          .contact-form-card h3 {
            font-size: 26px;
          }

          .contact-form {
            width: 100%;

            grid-template-columns:
              minmax(0, 1fr);

            gap: 17px;
          }

          .contact-form-group,
          .contact-form-group.full {
            width: 100%;
            min-width: 0;

            grid-column: auto;
          }

          .contact-form-group input,
          .contact-form-group select {
            height: 54px;
          }

          .contact-form-group textarea {
            min-height: 135px;
          }

          /* ---------------------------------------------------
             FORM WHATSAPP BUTTON
          --------------------------------------------------- */

          .contact-submit-btn {
            width: 100%;

            min-width: 0;

            height: 54px;
            min-height: 54px;

            grid-column: auto;

            padding: 0 14px;

            gap: 8px;

            border-radius: 10px;

            font-size: 11.5px;

            white-space: nowrap;
          }

          .contact-submit-btn svg {
            width: 18px !important;
            height: 18px !important;

            min-width: 18px !important;
            max-width: 18px !important;

            min-height: 18px !important;
            max-height: 18px !important;

            flex: 0 0 18px !important;
          }

          .contact-submit-btn .contact-button-arrow {
            margin-left: 1px;

            font-size: 14px;
          }

          .contact-form-note {
            grid-column: auto;

            font-size: 9.5px;
          }

          /* ---------------------------------------------------
             MAP
          --------------------------------------------------- */

          .contact-map-section {
            padding: 78px 0;
          }

          .contact-map-heading h2 {
            font-size: 35px;
          }

          .contact-map-wrapper {
            border-radius: 18px;
          }

          .contact-map-wrapper iframe {
            height: 390px;
          }

          .contact-map-bottom {
            padding: 20px;

            flex-direction: column;

            align-items: stretch;
          }

          .contact-map-location {
            width: 100%;
          }

          .contact-map-btn {
            width: 100%;

            min-height: 48px;
          }

          /* ---------------------------------------------------
             CONNECT
          --------------------------------------------------- */

          .contact-connect-section {
            padding: 78px 0;
          }

          .contact-connect-grid {
            grid-template-columns: 1fr;

            gap: 17px;
          }

          .contact-connect-card {
            min-height: auto;

            padding: 37px 22px;

            border-radius: 18px;
          }

          .contact-large-socials {
            grid-template-columns: 1fr;
          }

          .contact-large-social {
            min-height: 72px;

            flex-direction: row;
          }

          /* ---------------------------------------------------
             FINAL CTA
          --------------------------------------------------- */

          .contact-final-section {
            padding: 0 0 75px;
          }

          .contact-final {
            width: 100%;
            min-height: auto;

            padding: 44px 24px;

            display: flex;
            flex-direction: column;

            align-items: stretch;
            justify-content: flex-start;

            gap: 27px;

            border-radius: 20px;
          }

          .contact-final-content {
            width: 100%;
            max-width: 100%;
          }

          .contact-final-label {
            margin-bottom: 12px;

            font-size: 9px;

            letter-spacing: 1.8px;
          }

          .contact-final h2 {
            max-width: 100%;

            margin-bottom: 15px;

            font-size:
              clamp(31px, 8.5vw, 39px);

            line-height: 1.06;

            letter-spacing: -1.3px;
          }

          .contact-final p {
            max-width: 100%;

            font-size: 13px;

            line-height: 1.7;
          }

          .contact-final-action {
            width: 100%;
          }

          .contact-final-action
          .contact-primary-btn {
            width: 100%;

            min-width: 0;

            height: 55px;
            min-height: 55px;

            padding: 0 15px;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 9px;

            border-radius: 10px;

            font-size: 12px;

            white-space: nowrap;
          }

          .contact-final-action
          .contact-primary-btn svg {
            width: 19px !important;
            height: 19px !important;

            min-width: 19px !important;
            max-width: 19px !important;

            min-height: 19px !important;
            max-height: 19px !important;

            flex: 0 0 19px !important;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .contact-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .contact-hero h1 {
            font-size: 40px;
          }

          .contact-hero-actions {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            gap: 8px;
          }

          .contact-hero-actions
          .contact-primary-btn,
          .contact-hero-actions
          .contact-outline-btn {
            height: 51px;
            min-height: 51px;

            padding: 0 7px;

            gap: 6px;

            font-size: 10px;
          }

          .contact-hero-actions
          .contact-primary-btn svg,
          .contact-hero-actions
          .contact-outline-btn svg {
            width: 17px !important;
            height: 17px !important;

            min-width: 17px !important;
            max-width: 17px !important;

            min-height: 17px !important;
            max-height: 17px !important;

            flex: 0 0 17px !important;
          }

          .contact-section-heading h2,
          .contact-map-heading h2 {
            font-size: 32px;
          }

          .contact-form-info {
            padding:
              38px 19px;
          }

          .contact-form-info h2 {
            font-size: 32px;
          }

          .contact-form-card {
            padding:
              34px 18px;
          }

          .contact-submit-btn {
            height: 52px;
            min-height: 52px;

            padding: 0 9px;

            gap: 7px;

            font-size: 10.5px;
          }

          .contact-submit-btn svg {
            width: 17px !important;
            height: 17px !important;

            min-width: 17px !important;
            max-width: 17px !important;

            min-height: 17px !important;
            max-height: 17px !important;

            flex: 0 0 17px !important;
          }

          .contact-hours-row {
            align-items: flex-start;

            flex-direction: column;

            gap: 6px;
          }

          .contact-hours-row strong {
            text-align: left;
          }

          .contact-final {
            padding:
              39px 20px;

            gap: 24px;
          }

          .contact-final h2 {
            font-size:
              clamp(29px, 8.5vw, 34px);
          }

          .contact-final-action
          .contact-primary-btn {
            height: 52px;
            min-height: 52px;

            padding: 0 10px;

            font-size: 11px;
          }

          .contact-final-action
          .contact-primary-btn svg {
            width: 18px !important;
            height: 18px !important;

            min-width: 18px !important;
            max-width: 18px !important;

            min-height: 18px !important;
            max-height: 18px !important;

            flex: 0 0 18px !important;
          }

        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .contact-hero-actions {
            grid-template-columns: 1fr;
          }

          .contact-hero-actions
          .contact-primary-btn,
          .contact-hero-actions
          .contact-outline-btn {
            font-size: 11px;
          }

          .contact-submit-btn {
            white-space: normal;

            line-height: 1.25;

            min-height: 54px;
            height: auto;

            padding-top: 12px;
            padding-bottom: 12px;
          }

          .contact-final-action
          .contact-primary-btn {
            white-space: normal;

            line-height: 1.25;

            text-align: center;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .contact-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .contact-hero-image img,
          .contact-hero-glow,
          .contact-icon-ring,
          .contact-card-icon,
          .contact-form-info::before,
          .contact-submit-btn::before,
          .contact-final::before {
            animation: none !important;
          }

        }

      `}</style>

      <main
        className="jk-contact"
        ref={pageRef}
      >

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-hero-image">

            <FallbackImage
              src="/images/cuplock-scaffolding.webp"
              fallback={HERO_UNSPLASH}
              alt="JK Scaffoldings contact"
              eager
            />

          </div>

          <div className="contact-hero-overlay" />

          <div className="contact-hero-glow" />

          <div className="contact-container">

            <div className="contact-hero-content">

              <div className="contact-breadcrumb">

                <Link to="/">
                  Home
                </Link>

                <span>→</span>

                Contact Us

              </div>

              <div className="contact-hero-label">
                Contact JK Scaffoldings
              </div>

              <h1>
                Let's Build

                <span>
                  Stronger Together.
                </span>
              </h1>

              <p className="contact-hero-description">
                Looking for scaffolding or formwork
                support products? Share your requirement
                and connect with JK Scaffoldings in Vijayawada.
              </p>

              <div className="contact-hero-actions">

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-primary-btn"
                >
                  <WhatsAppIcon />

                  <span>
                    WhatsApp Us
                  </span>
                </a>

                <a
                  href={`tel:${PHONE_LINK}`}
                  className="contact-outline-btn"
                >
                  <PhoneIcon />

                  <span>
                    Call Now
                  </span>
                </a>

              </div>

            </div>

          </div>

          <div className="contact-hero-line" />

        </section>

        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}

        <section className="contact-info-section">

          <div className="contact-container">

            <div
              className="
                contact-section-heading
                contact-reveal
                contact-bottom
              "
            >

              <div className="contact-small-title">
                Get In Touch
              </div>

              <h2>
                We're Here to
                <span className="contact-gold">
                  {" "}Support Your Project.
                </span>
              </h2>

              <p>
                Connect with JK Scaffoldings for
                product enquiries, construction
                requirements and scaffolding support.
              </p>

            </div>

            <div className="contact-info-grid">

              <ContactCard
                icon={<PhoneIcon />}
                title="Call Us"
                text="Speak with us about your scaffolding requirement."
                link={`tel:${PHONE_LINK}`}
                linkText={PHONE_DISPLAY}
                direction="left"
              />

              <ContactCard
                icon={<WhatsAppIcon />}
                title="WhatsApp"
                text="Send your requirement directly through WhatsApp."
                link={`https://wa.me/${WHATSAPP_NUMBER}`}
                linkText="Start Conversation"
                external
                direction="right"
              />

              <ContactCard
                icon={<EmailIcon />}
                title="Email"
                text="Send your product or project enquiry by email."
                link={`mailto:${EMAIL}`}
                linkText={EMAIL}
                direction="left"
              />

              <ContactCard
                icon={<LocationIcon />}
                title="Location"
                text="JK Scaffoldings"
                link="#location-map"
                linkText={LOCATION}
                direction="right"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            FORM SECTION
        ===================================================== */}

        <section className="contact-form-section">

          <div className="contact-container">

            <div className="contact-form-layout">

              {/* LEFT */}

              <div
                className="
                  contact-form-info
                  contact-reveal
                  contact-left
                "
              >

                <div className="contact-form-info-content">

                  <span className="contact-form-label">
                    JK Scaffoldings
                  </span>

                  <h2>
                    Let's Discuss Your
                    Scaffolding Requirement.
                  </h2>

                  <p>
                    Tell us what product or scaffolding
                    support you need. You can submit the
                    form and continue the enquiry directly
                    through WhatsApp.
                  </p>

                  <div className="contact-detail-list">

                    <ContactDetail
                      icon={<PhoneIcon />}
                      label="Call"
                    >
                      <a href={`tel:${PHONE_LINK}`}>
                        {PHONE_DISPLAY}
                      </a>
                    </ContactDetail>

                    <ContactDetail
                      icon={<EmailIcon />}
                      label="Email"
                    >
                      <a href={`mailto:${EMAIL}`}>
                        {EMAIL}
                      </a>
                    </ContactDetail>

                    <ContactDetail
                      icon={<LocationIcon />}
                      label="Location"
                    >
                      <strong>
                        {LOCATION}
                      </strong>
                    </ContactDetail>

                  </div>

                  <div className="contact-social">

                    <div className="contact-social-title">
                      Follow JK Scaffoldings
                    </div>

                    <div className="contact-social-icons">

                      <SocialLink
                        href={FACEBOOK_URL}
                        label="Facebook"
                        icon={<FacebookIcon />}
                      />

                      <SocialLink
                        href={INSTAGRAM_URL}
                        label="Instagram"
                        icon={<InstagramIcon />}
                      />

                      <SocialLink
                        href={YOUTUBE_URL}
                        label="YouTube"
                        icon={<YouTubeIcon />}
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT FORM */}

              <div
                className="
                  contact-form-card
                  contact-reveal
                  contact-right
                "
              >

                <h3>
                  Send Your Requirement
                </h3>

                <p className="contact-form-intro">
                  Fill in the details below and continue
                  your enquiry through WhatsApp.
                </p>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form-group">

                    <label htmlFor="contact-name">
                      Your Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                  <div className="contact-form-group">

                    <label htmlFor="contact-phone">
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />

                  </div>

                  <div className="contact-form-group full">

                    <label htmlFor="contact-product">
                      Product / Requirement
                    </label>

                    <select
                      id="contact-product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select a product
                      </option>

                      <option value="Adjustable Props">
                        Adjustable Props
                      </option>

                      <option value="H Frames">
                        H Frames
                      </option>

                      <option value="Cup-Lock System">
                        Cup-Lock System
                      </option>

                      <option value="Centering Sheets">
                        Centering Sheets
                      </option>

                      <option value="Adjustable Spans">
                        Adjustable Spans
                      </option>

                      <option value="Walkway Jali">
                        Walkway Jali
                      </option>

                      <option value="Adjustable Base Jacks">
                        Adjustable Base Jacks
                      </option>

                      <option value="Adjustable U-Jacks">
                        Adjustable U-Jacks
                      </option>

                      <option value="Other Requirement">
                        Other Requirement
                      </option>

                    </select>

                  </div>

                  <div className="contact-form-group full">

                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement, quantity or project..."
                    />

                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >
                    <WhatsAppIcon />

                    <span>
                      Send Enquiry on WhatsApp
                    </span>

                    <span className="contact-button-arrow">
                      →
                    </span>
                  </button>

                  <p className="contact-form-note">
                    Clicking the button will open WhatsApp
                    with your enquiry details ready to send.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MAP
        ===================================================== */}

        <section
          className="contact-map-section"
          id="location-map"
        >

          <div className="contact-container">

            <div
              className="
                contact-map-heading
                contact-reveal
                contact-bottom
              "
            >

              <div className="contact-small-title">
                Our Location
              </div>

              <h2>
                Find Us in

                <span className="contact-gold">
                  {" "}Vijayawada.
                </span>
              </h2>

              <p>
                Use the map below to explore the
                Vijayawada location area.
              </p>

            </div>

            <div
              className="
                contact-map-wrapper
                contact-reveal
                contact-bottom
              "
            >

              <iframe
                title="JK Scaffoldings Vijayawada Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.0708745518104!2d80.70239080923189!3d16.471401942143945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbf26c881041%3A0xef700a70629e34b1!2sJK%20iron%20scaffolding!5e1!3m2!1sen!2sin!4v1790862648557!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="contact-map-bottom">

                <div className="contact-map-location">

                  <div className="contact-map-pin">
                    <LocationIcon />
                  </div>

                  <div>

                    <span>
                      Location
                    </span>

                    <strong>
                      {LOCATION}
                    </strong>

                  </div>

                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vijayawada%2C%20Andhra%20Pradesh"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-map-btn"
                >
                  Open in Google Maps →
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONNECT
        ===================================================== */}

        <section className="contact-connect-section">

          <div className="contact-container">

            <div className="contact-connect-grid">

              <article
                className="
                  contact-connect-card
                  contact-reveal
                  contact-left
                "
              >

                <span className="contact-connect-label">
                  Contact Availability
                </span>

                <h3>
                  Reach Our Team
                </h3>

                <p>
                  Contact JK Scaffoldings to discuss
                  your scaffolding and formwork
                  product requirements.
                </p>

                <div className="contact-hours">

                  <div className="contact-hours-row">

                    <span>
                      Phone
                    </span>

                    <strong>
                      {PHONE_DISPLAY}
                    </strong>

                  </div>

                  <div className="contact-hours-row">

                    <span>
                      WhatsApp
                    </span>

                    <strong>
                      Available for Enquiries
                    </strong>

                  </div>

                  <div className="contact-hours-row">

                    <span>
                      Location
                    </span>

                    <strong>
                      Vijayawada
                    </strong>

                  </div>

                </div>

              </article>

              <article
                className="
                  contact-connect-card
                  contact-reveal
                  contact-right
                "
              >

                <span className="contact-connect-label">
                  Stay Connected
                </span>

                <h3>
                  Follow JK Scaffoldings
                </h3>

                <p>
                  Connect with us across social
                  platforms for business updates
                  and scaffolding-related content.
                </p>

                <div className="contact-large-socials">

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-large-social"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                    Facebook
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-large-social"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>

                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-large-social"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon />
                    YouTube
                  </a>

                </div>

              </article>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final-section">

          <div className="contact-container">

            <div
              className="
                contact-final
                contact-reveal
                contact-bottom
              "
            >

              <div className="contact-final-content">

                <span className="contact-final-label">
                  Start Your Enquiry
                </span>

                <h2>
                  Need Scaffolding for
                  Your Next Project?
                </h2>

                <p>
                  Tell us what you need and connect
                  directly with JK Scaffoldings through
                  WhatsApp.
                </p>

              </div>

              <div className="contact-final-action">

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-primary-btn"
                >
                  <WhatsAppIcon />

                  <span>
                    Enquire on WhatsApp
                  </span>
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon,
  title,
  text,
  link,
  linkText,
  external = false,
  direction,
}) {
  return (
    <article
      className={`
        contact-info-card
        contact-reveal
        ${
          direction === "left"
            ? "contact-left"
            : "contact-right"
        }
      `}
    >

      <div className="contact-icon-wrap">

        <span className="contact-icon-ring" />

        <span className="contact-icon-ring second" />

        <div className="contact-card-icon">
          {icon}
        </div>

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <a
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {linkText}
      </a>

    </article>
  );
}

/* =========================================================
   CONTACT DETAIL
========================================================= */

function ContactDetail({
  icon,
  label,
  children,
}) {
  return (
    <div className="contact-detail-item">

      <div className="contact-detail-icon">
        {icon}
      </div>

      <div className="contact-detail-text">

        <span>
          {label}
        </span>

        {children}

      </div>

    </div>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  icon,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="contact-social-link"
    >
      {icon}
    </a>
  );
}

/* =========================================================
   IMAGE FALLBACK
   LOCAL IMAGE -> UNSPLASH
========================================================= */

function FallbackImage({
  src,
  fallback,
  alt,
  eager = false,
}) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onError={handleError}
    />
  );
}

/* =========================================================
   PHONE
========================================================= */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

/* =========================================================
   EMAIL
========================================================= */

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

/* =========================================================
   LOCATION
========================================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}

/* =========================================================
   WHATSAPP
========================================================= */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.95c0 2.1.55 4.16 1.6 5.97L.04 24l6.22-1.63a11.93 11.93 0 0 0 5.81 1.48h.01C18.66 23.85 24 18.49 24 11.9a11.82 11.82 0 0 0-3.48-8.42ZM12.08 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.69.97.99-3.6-.23-.37a9.92 9.92 0 1 1 8.35 4.59Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

/* =========================================================
   FACEBOOK
========================================================= */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.74-1.7H17V2.43c-.31-.04-1.38-.13-2.62-.13-2.6 0-4.38 1.59-4.38 4.5v2.7H7V13h3v9h3.5Z" />
    </svg>
  );
}

/* =========================================================
   INSTAGRAM
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* =========================================================
   YOUTUBE
========================================================= */

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23 12s0-3.5-.45-5.18a3 3 0 0 0-2.12-2.12C18.76 4.25 12 4.25 12 4.25s-6.76 0-8.43.45a3 3 0 0 0-2.12 2.12C1 8.5 1 12 1 12s0 3.5.45 5.18a3 3 0 0 0 2.12 2.12c1.67.45 8.43.45 8.43.45s6.76 0 8.43-.45a3 3 0 0 0 2.12-2.12C23 15.5 23 12 23 12Zm-13.25 3.2V8.8L15.5 12l-5.75 3.2Z" />
    </svg>
  );
}

export default ContactUs;