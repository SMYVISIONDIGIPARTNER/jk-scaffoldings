import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   SETTINGS
========================================================= */

const WHATSAPP_NUMBER = "916303819983";

/* Local image -> fallback image */
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90";

const ABOUT_FALLBACK =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85";

const PRODUCT_FALLBACK =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85";

/* =========================================================
   SEO / GEO
========================================================= */
 
const SITE_URL = "https://jkscaffoldings.com";
const SERVICE_AREAS_TEXT =
  "Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh";

/* Add your real recent-work images inside public/images/.
   If a local image is missing, the Unsplash fallback loads automatically. */
const recentWorks = [
  {
    title: "Construction Scaffolding Work",
    location: SERVICE_AREAS_TEXT,
    image: "/images/recent-work-1.webp",
    fallback:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "High-Rise Scaffolding Support",
    location: SERVICE_AREAS_TEXT,
    image: "/images/recent-work-2.webp",
    fallback:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Formwork & Site Support",
    location: SERVICE_AREAS_TEXT,
    image: "/images/recent-work-3.webp",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e5e?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Scaffolding Installation Work",
    location: SERVICE_AREAS_TEXT,
    image: "/images/recent-work-4.webp",
    fallback:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1400&q=88",
  },
];

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    name: "Adjustable Props",
    tagline: "Strong Support. Precise Adjustment.",
    localImage: "/images/adjustable-props.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-props.webp",
    description: "Reliable support for slabs and formwork.",
  },
  {
    name: "H Frames",
    tagline: "Stable Frames. Stronger Structures.",
    localImage: "/images/h-frames.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/h-frames.webp",
    description: "Strong frames for stable scaffolding structures.",
  },
  {
    name: "Cup-Lock System",
    tagline: "Flexible Scaffolding. Reliable Access.",
    localImage: "/images/cuplock-system.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/scaffolding.webp",
    description: "Safe access solutions for construction projects.",
  },
  {
    name: "Adjustable Spans",
    tagline: "Flexible Support for Every Site.",
    localImage: "/images/adjustable-spans.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-spans.webp",
    description: "Flexible support for varying site requirements.",
  },
  {
    name: "Walkway Jali",
    tagline: "Practical Access. Safer Movement.",
    localImage: "/images/walkway-jali.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/walkway-jali.webp",
    description: "Safe working platforms for workers.",
  },
  {
    name: "Adjustable Base Jacks",
    tagline: "Stable Support Starts Here.",
    localImage: "/images/adjustable-base-jack.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-base-jack.webp",
    description: "Heavy-duty Adjustable Base Jacks.",
  },
  {
    name: "Adjustable U-Jacks",
    tagline: "Precision Support for Scaffolding.",
    localImage: "/images/adjustable-u-jacks.webp",
    remoteImage:
      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-u-jacks-base-jacks.webp",
    description: "Premium-quality Adjustable U-Jacks.",
  },
];


/* =========================================================
   ADDITIONAL SCAFFOLDING SERVICES
========================================================= */

const scaffoldingServices = [
  {
    category: "Industrial",
    name: "Cup-Lock Scaffolding",
    image: "/images/ct1.png",
    description:
      "Industry-grade cup-lock system with vertical standards and horizontal ledgers offering sturdy support for workers and materials at multiple levels.",
  },
  {
    category: "Construction",
    name: "Shuttering Scaffolding",
    image: "/images/shuttering-scaffolding.webp",
    description:
      "Specialized support structures for concrete formwork during casting of walls, columns, beams, and slabs — ensuring precision on construction sites.",
  },
  {
    category: "Versatile",
    name: "Mobile / Movable Scaffolding",
    image: "/images/mobile-scaffolding.webp",
    description:
      "Wheel-mounted scaffolding that can be repositioned without disassembly — ideal for projects requiring access to multiple areas efficiently.",
  },
  {
    category: "High-Rise",
    name: "Poll Scaffolding",
    image: "/images/poll-scaffolding.webp",
    description:
      "Metal poles and platforms providing workers with a stable, secure elevated workspace for high-rise construction and maintenance tasks.",
  },
  {
    category: "Specialized",
    name: "Cantilever Scaffolding",
    image: "/images/cantilever-scaffolding.webp",
    description:
      "A specialized system designed to reach areas inaccessible with traditional scaffolding using beams extending from a main structure or wall.",
  },
  {
    category: "Iron Works",
    name: "Iron Paranja Works",
    image: "/images/iron-paranja-works.webp",
    description:
      "Custom iron fabrication and paranja structures — precision-crafted iron works for construction, industrial, and architectural applications across AP.",
  },
  {
    category: "Installation",
    name: "Scaffolding Installation & Disassembly",
    image: "/images/scaffolding-installation.webp",
    description:
      "Complete end-to-end service — our trained crew handles professional installation, monitoring, and safe disassembly when your project is complete.",
  },
  {
    category: "Protection",
    name: "Scaffolding Covering",
    image: "/images/scaffolding-covering.webp",
    description:
      "High-quality protective covering solutions for scaffolding structures — weather protection, debris containment, and site safety compliance.",
  },
  {
    category: "Events & Display",
    name: "LED Panel Support Scaffolding",
    image: "/images/led-panel-scaffolding.webp",
    description:
      "Specialized framework to securely hold large LED screens and panels for outdoor events, exhibitions, and installations — weather-resistant design.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What scaffolding products do you provide?",
    answer:
      "We provide Adjustable Props, H Frames, Cup-Lock Systems, Centering Sheets, Adjustable Spans, Walkway Jali, Adjustable Base Jacks and Adjustable U-Jacks for construction and formwork requirements.",
  },
  {
    question: "Do you provide scaffolding solutions in Vijayawada?",
    answer:
      "JK Scaffoldings serves construction and project requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "Choose the product you need and click the WhatsApp enquiry button. The selected product name will automatically be included in your message.",
  },
  {
    question: "Can I send a bulk requirement?",
    answer:
      "You can send the required products, quantities and project details directly through WhatsApp for discussion.",
  },
  {
    question: "How can I choose the right scaffolding product?",
    answer:
      "Share your construction or formwork requirement with JK Scaffoldings so suitable product options can be discussed.",
  },
];


const reviews = [
  {
    name: "Ramesh Kumar",
    review: "Good quality scaffolding materials and reliable service. The team provided the right support for our construction requirement.",
  },
  {
    name: "Suresh Babu",
    review: "Very good service and quality products. The team responded quickly and explained everything clearly.",
  },
  {
    name: "Venkatesh Rao",
    review: "Reliable scaffolding solutions at a reasonable price. We are satisfied with the product quality and overall service.",
  },
  {
    name: "Praveen Kumar",
    review: "Professional service and timely support. The scaffolding materials were strong and suitable for our project requirements.",
  },
  {
    name: "Sai Kiran",
    review: "Good experience with JK Scaffoldings. Quick response, quality materials and helpful support throughout our requirement.",
  },
];

/* =========================================================
   HOME
========================================================= */

function Home() {
  const homeRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  /* SEO + GEO */

  useEffect(() => {
    document.title =
      "JK Scaffoldings | Scaffolding Services in Vijayawada, Guntur, Amaravati & Machilipatnam";

    const description =
      "JK Scaffoldings provides scaffolding products, installation, formwork support and construction scaffolding services in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.";

    const keywords =
      "scaffolding Vijayawada, scaffolding Guntur, scaffolding Amaravati, scaffolding Machilipatnam, scaffolding Andhra Pradesh, cup lock scaffolding, shuttering scaffolding, scaffolding installation, scaffolding suppliers";

    const setMeta = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let meta = document.head.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(property ? "property" : "name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("geo.region", "IN-AP");
    setMeta("geo.placename", "Vijayawada, Andhra Pradesh");
    setMeta("og:title", document.title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", SITE_URL, true);
    setMeta("og:image", `${SITE_URL}/logo.png`, true);
    setMeta("twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", `${SITE_URL}/`);

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "JK Scaffoldings",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      description,
      areaServed: [
        "Vijayawada",
        "Guntur",
        "Amaravati",
        "Machilipatnam",
        "Andhra Pradesh",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      makesOffer: scaffoldingServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    };

    let schemaScript = document.getElementById("jk-home-localbusiness-schema");

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "jk-home-localbusiness-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(schema);

    return () => {
      const script = document.getElementById("jk-home-localbusiness-schema");
      if (script) script.remove();
    };
  }, []);

  /* SCROLL ANIMATION */

  useEffect(() => {
    const root = homeRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(".jk-reveal");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("jk-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("jk-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  /* WHATSAPP */

  const whatsappLink = (product = "") => {
    const message = product
      ? `Hello JK Scaffoldings, I would like to enquire about ${product}. Please share more details.`
      : "Hello JK Scaffoldings, I have a scaffolding requirement. Please share more details.";

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
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

        .jk-home,
        .jk-home * {
          box-sizing: border-box;
        }

        .jk-home {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #0a0a0a;
          font-family: Arial, Helvetica, sans-serif;
        }

        .jk-container {
          width: 90%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .jk-gold {
          color: #d99a17;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .jk-reveal {
          opacity: 0;
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(.22, 1, .36, 1);
        }

        .jk-from-left {
          transform: translateX(-45px);
        }

        .jk-from-right {
          transform: translateX(45px);
        }

        .jk-from-bottom {
          transform: translateY(35px);
        }

        .jk-reveal.jk-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .jk-hero {
          position: relative;
          min-height: 760px;
          overflow: hidden;
          background: #ededeb;
        }

        .jk-hero-picture {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .jk-hero-picture img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .jk-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,.99) 0%,
              rgba(255,255,255,.96) 23%,
              rgba(255,255,255,.82) 40%,
              rgba(255,255,255,.30) 62%,
              rgba(255,255,255,.02) 82%
            );
        }

        .jk-hero-light {
          position: absolute;
          z-index: 1;

          width: 450px;
          height: 450px;

          left: 33%;
          top: 26%;

          border-radius: 50%;

          background: rgba(230,169,42,.15);

          filter: blur(90px);

          animation: jkLightPulse 5s ease-in-out infinite;
        }

        @keyframes jkLightPulse {
          0%,
          100% {
            opacity: .5;
            transform: scale(.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .jk-hero-inner {
          position: relative;
          z-index: 3;

          min-height: 635px;

          display: flex;
          align-items: center;
        }

        .jk-hero-content {
          width: 100%;
          max-width: 790px;

          padding: 75px 0 125px;

          animation:
            jkHeroEnter
            .9s cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes jkHeroEnter {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .jk-hero-small {
          margin-bottom: 25px;

          display: flex;
          align-items: center;

          gap: 17px;

          color: #1b1b1b;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .jk-hero-small i {
          width: 1px;
          height: 17px;

          display: block;

          background: #777;
        }

        .jk-hero-title {
          max-width: 830px;

          margin: 0;

          color: #050505;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(57px, 6vw, 92px);

          font-weight: 700;

          line-height: .94;

          letter-spacing: -4px;

          text-transform: uppercase;
        }

        .jk-hero-title-gold {
          display: block;

          margin: 7px 0;

          color: #d89a18;

          text-shadow:
            0 7px 24px
            rgba(215,154,24,.16);
        }

        .jk-hero-title-bottom {
          display: block;

          font-size: .71em;

          letter-spacing: -3px;
        }

        .jk-hero-description {
          max-width: 620px;

          margin: 26px 0 0;

          color: #303030;

          font-size: 18px;

          line-height: 1.55;
        }

        .jk-hero-actions {
          margin-top: 30px;

          display: flex;
          align-items: center;

          gap: 17px;

          flex-wrap: wrap;
        }

        .jk-primary-btn,
        .jk-secondary-btn {
          min-height: 58px;

          padding: 0 34px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          border-radius: 10px;

          font-size: 15px;
          font-weight: 800;

          text-decoration: none;

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease,
            color .3s ease;
        }

        .jk-primary-btn {
          border: 0;

          background:
            linear-gradient(
              135deg,
              #f1c65b,
              #d99b1b
            );

          color: #070707;

          box-shadow:
            0 13px 30px
            rgba(210,149,26,.23);
        }

        .jk-primary-btn:hover {
          transform: translateY(-4px);

          box-shadow:
            0 18px 38px
            rgba(210,149,26,.32);
        }

        .jk-secondary-btn {
          border: 2px solid #111111;

          background: rgba(255,255,255,.82);

          color: #111111;

          backdrop-filter: blur(8px);
        }

        .jk-secondary-btn:hover {
          transform: translateY(-4px);

          background: #111111;

          color: #ffffff;
        }

        /* =====================================================
           HERO BOTTOM
        ===================================================== */

        .jk-hero-bottom {
          position: absolute;

          z-index: 5;

          left: -3%;
          right: -3%;
          bottom: -1px;

          min-height: 185px;

          padding: 72px 4% 27px;

          background:
            linear-gradient(
              110deg,
              #030303,
              #111111
            );

          clip-path:
            ellipse(
              76% 75%
              at 50% 100%
            );

          border-top: 5px solid #e2a62d;
        }

        .jk-hero-features {
          width: 90%;
          max-width: 1400px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);
        }

        .jk-hero-feature {
          min-height: 76px;

          padding: 0 34px;

          display: flex;
          align-items: center;

          gap: 17px;

          border-right:
            1px solid
            rgba(224,165,39,.45);
        }

        .jk-hero-feature:last-child {
          border-right: 0;
        }

        .jk-hero-feature-icon {
          width: 56px;
          height: 56px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #e1a62a;

          animation:
            jkHeroFeatureFloat
            3s ease-in-out
            infinite;
        }

        .jk-hero-feature:nth-child(2)
        .jk-hero-feature-icon {
          animation-delay: .4s;
        }

        .jk-hero-feature:nth-child(3)
        .jk-hero-feature-icon {
          animation-delay: .8s;
        }

        .jk-hero-feature:nth-child(4)
        .jk-hero-feature-icon {
          animation-delay: 1.2s;
        }

        @keyframes jkHeroFeatureFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .jk-hero-feature-icon svg {
          width: 43px;
          height: 43px;

          stroke: currentColor;
        }

        .jk-hero-feature h3 {
          margin: 0 0 5px;

          color: #ffffff;

          font-size: 15px;
          font-weight: 900;

          text-transform: uppercase;
        }

        .jk-hero-feature p {
          margin: 0;

          color: #c7c7c7;

          font-size: 12px;

          line-height: 1.45;
        }

        /* =====================================================
           COMMON SECTION
        ===================================================== */

        .jk-section {
          padding: 105px 0;
        }

        .jk-soft-section {
          background: #f8f8f6;
        }

        .jk-dark-section {
          background:
            radial-gradient(
              circle at 50% 0%,
              #202020,
              #070707 65%
            );

          color: #ffffff;
        }

        .jk-heading {
          max-width: 780px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .jk-eyebrow {
          margin-bottom: 13px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          color: #c8890e;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 2.4px;

          text-transform: uppercase;
        }

        .jk-eyebrow::before,
        .jk-eyebrow::after {
          content: "";

          width: 25px;
          height: 1px;

          background: #d99c21;
        }

        .jk-heading h2 {
          margin: 0 0 17px;

          color: #0a0a0a;

          font-size: clamp(34px, 4vw, 52px);

          font-weight: 900;

          line-height: 1.08;

          letter-spacing: -1.7px;
        }

        .jk-heading p {
          max-width: 650px;

          margin: 0 auto;

          color: #6e6e6e;

          font-size: 15px;

          line-height: 1.75;
        }

        .jk-dark-section
        .jk-heading h2 {
          color: #ffffff;
        }

        .jk-dark-section
        .jk-heading p {
          color: #a9a9a9;
        }

        /* =====================================================
           ABOUT
        ===================================================== */

        .jk-about-section {
          padding-top: 120px;
        }

        .jk-about-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 80px;

          align-items: center;
        }

        .jk-about-image {
          min-height: 650px;

          position: relative;

          overflow: hidden;

          border-radius:
            4px 58px 4px 4px;

          background: #ececec;

          box-shadow:
            0 25px 60px
            rgba(0,0,0,.12);
        }

        .jk-about-image img {
          width: 100%;
          height: 650px;

          display: block;

          object-fit: cover;

          transition:
            transform .8s
            cubic-bezier(.22,1,.36,1);
        }

        .jk-about-image:hover img {
          transform: scale(1.05);
        }

        .jk-about-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(0,0,0,.5)
            );
        }

        .jk-about-badge {
          position: absolute;

          z-index: 3;

          left: 25px;
          bottom: 25px;

          max-width: 300px;

          padding: 23px 25px;

          border-left:
            4px solid #dda229;

          background:
            rgba(5,5,5,.91);

          backdrop-filter:
            blur(8px);

          color: #ffffff;
        }

        .jk-about-badge strong {
          display: block;

          margin-bottom: 7px;

          color: #e2a72d;

          font-size: 20px;
        }

        .jk-about-badge span {
          color: #d0d0d0;

          font-size: 13px;

          line-height: 1.6;
        }

        .jk-about-content h2 {
          margin: 0 0 22px;

          font-size: clamp(36px, 4vw, 54px);

          font-weight: 900;

          line-height: 1.06;

          letter-spacing: -1.8px;
        }

        .jk-about-content > p {
          margin: 0 0 17px;

          color: #676767;

          font-size: 15px;

          line-height: 1.85;
        }

        .jk-about-points {
          margin: 29px 0;

          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;
        }

        .jk-about-point {
          padding: 16px;

          display: flex;
          align-items: center;

          gap: 11px;

          border:
            1px solid #e6e6e6;

          background: #ffffff;

          font-size: 13px;
          font-weight: 800;

          transition:
            transform .3s ease,
            border-color .3s ease;
        }

        .jk-about-point:hover {
          transform: translateY(-3px);

          border-color: #d99c22;
        }

        .jk-about-point-check {
          width: 30px;
          height: 30px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(218,157,32,.13);

          color: #ad7404;

          font-weight: 900;
        }

        /* =====================================================
           PRODUCTS
        ===================================================== */

        .jk-products {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 24px;
        }

        .jk-product {
          position: relative;

          overflow: hidden;

          border:
            1px solid #e6e6e6;

          border-radius: 20px;

          background: #ffffff;

          box-shadow:
            0 13px 40px
            rgba(0,0,0,.055);

          transition:
            transform .45s cubic-bezier(.22,1,.36,1),
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .jk-product::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #d89b1e,
              transparent
            );

          transform: scaleX(0);

          transition:
            transform .4s ease;
        }

        .jk-product:hover {
          transform: translateY(-9px);

          border-color:
            rgba(216,155,30,.5);

          box-shadow:
            0 28px 60px
            rgba(0,0,0,.12);
        }

        .jk-product:hover::after {
          transform: scaleX(1);
        }

        .jk-product-image {
          height: 310px;

          position: relative;

          overflow: hidden;

          background: #eeeeee;
        }

        .jk-product-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform .8s
            cubic-bezier(.22,1,.36,1);
        }

        .jk-product:hover
        .jk-product-image img {
          transform: scale(1.08);
        }

        .jk-product-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(0,0,0,.4)
            );
        }

        .jk-product-arrow-top {
          position: absolute;

          z-index: 3;

          right: 17px;
          bottom: 16px;

          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #f0c257,
              #d5961a
            );

          color: #080808;

          font-size: 20px;

          transition:
            transform .4s ease;
        }

        .jk-product:hover
        .jk-product-arrow-top {
          transform:
            rotate(45deg)
            scale(1.07);
        }

        .jk-product-body {
          padding: 26px 24px 24px;
        }

        .jk-product-tagline {
          margin-bottom: 8px;

          color: #bd7f08;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 1.2px;

          text-transform: uppercase;
        }

        .jk-product-title {
          position: relative;

          margin: 0 0 17px;

          padding-bottom: 15px;

          color: #090909;

          font-size: 21px;
          font-weight: 900;

          line-height: 1.25;
        }

        .jk-product-title::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 42px;
          height: 3px;

          border-radius: 5px;

          background:
            linear-gradient(
              90deg,
              #ce8c0d,
              #efc25a
            );

          transition:
            width .4s ease;
        }

        .jk-product:hover
        .jk-product-title::after {
          width: 80px;
        }

        .jk-product-description {
          min-height: 65px;

          margin: 0;

          color: #747474;

          font-size: 13px;

          line-height: 1.7;
        }

        .jk-product-enquiry {
          width: 100%;
          min-height: 54px;

          margin-top: 21px;

          position: relative;

          overflow: hidden;

          padding: 0 9px 0 19px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 13px;

          border-radius: 11px;

          background:
            linear-gradient(
              110deg,
              #080808,
              #1b1b1b
            );

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          box-shadow:
            0 9px 24px
            rgba(0,0,0,.13);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .jk-product-enquiry::before {
          content: "";

          position: absolute;

          top: 0;
          left: -130%;

          width: 70%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.17),
              transparent
            );

          transform: skewX(-20deg);

          transition: left .7s ease;
        }

        .jk-product-enquiry:hover::before {
          left: 150%;
        }

        .jk-product-enquiry:hover {
          transform: translateY(-2px);

          box-shadow:
            0 14px 30px
            rgba(0,0,0,.2);
        }

        .jk-enquiry-text {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .jk-enquiry-arrow {
          width: 37px;
          height: 37px;

          position: relative;
          z-index: 2;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #f0c45c,
              #d69619
            );

          color: #090909;

          font-size: 18px;

          transition: transform .3s ease;
        }

        .jk-product-enquiry:hover
        .jk-enquiry-arrow {
          transform: translateX(3px);
        }



        /* =====================================================
           ADDITIONAL SCAFFOLDING SERVICES
        ===================================================== */

        .jk-extra-services-section {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          background:
            radial-gradient(circle at 92% 5%, rgba(217,154,23,.10), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f8f8f6 100%);
        }

        .jk-extra-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .jk-extra-service-card {
          min-width: 0;
          min-height: 350px;
          position: relative;
          overflow: hidden;
          padding: 34px 30px 30px;
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          background: linear-gradient(145deg, #ffffff, #fbfbfa);
          box-shadow: 0 15px 42px rgba(0,0,0,.055);
          transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease, border-color .4s ease;
        }

        .jk-extra-service-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #efc25a, #cf8d0e);
          transition: height .4s ease;
        }

        .jk-extra-service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(216,155,30,.5);
          box-shadow: 0 26px 60px rgba(0,0,0,.11);
        }

        .jk-extra-service-card:hover::before { height: 100%; }

        .jk-extra-service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 27px;
        }

        .jk-extra-service-category {
          display: inline-flex;
          align-items: center;
          min-height: 31px;
          padding: 0 13px;
          border: 1px solid rgba(205,142,18,.28);
          border-radius: 999px;
          background: #fff8e9;
          color: #a96f00;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .jk-extra-service-number {
          color: #dedede;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1;
        }

        .jk-extra-service-card h3 {
          margin: 0 0 17px;
          color: #090909;
          font-size: 23px;
          font-weight: 900;
          line-height: 1.2;
          letter-spacing: -.7px;
        }

        .jk-extra-service-card p {
          margin: 0 0 28px;
          color: #6f6f6f;
          font-size: 13px;
          line-height: 1.78;
        }

        .jk-extra-service-quote {
          min-height: 52px;
          margin-top: auto;
          padding: 0 17px 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 10px;
          background: linear-gradient(110deg, #080808, #1b1b1b);
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          transition: transform .3s ease, background .3s ease;
        }

        .jk-extra-service-quote:hover {
          transform: translateY(-2px);
          background: linear-gradient(110deg, #d49315, #efc257);
          color: #080808;
        }

        .jk-extra-service-quote-arrow {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #efc158, #d49315);
          color: #080808;
          font-size: 17px;
          transition: transform .3s ease;
        }

        .jk-extra-service-quote:hover .jk-extra-service-quote-arrow {
          transform: translateX(3px);
          background: #080808;
          color: #ffffff;
        }

        /* =====================================================
           SERVICE IMAGES + COVERAGE
        ===================================================== */

        .jk-extra-service-card { padding: 0; }
        .jk-extra-service-image { position: relative; height: 310px; overflow: hidden; background: #111; }
        .jk-extra-service-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .7s cubic-bezier(.22,1,.36,1); }
        .jk-extra-service-card:hover .jk-extra-service-image img { transform: scale(1.08); }
        .jk-extra-service-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.45)); }
        .jk-extra-service-category { position: absolute; left: 20px; bottom: 18px; z-index: 2; padding: 8px 12px; border-radius: 50px; color: #111; background: linear-gradient(135deg,#f0c65d,#d59616); font-size: 10px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
        .jk-extra-service-body { position: relative; padding: 28px 26px 26px; display: flex; flex: 1; flex-direction: column; }
        .jk-extra-service-number { position: absolute; right: 24px; top: 22px; color: rgba(0,0,0,.09); font-size: 34px; font-weight: 900; }

        .jk-coverage-section { padding: 110px 0; background: #0a0a0a; color: #fff; position: relative; overflow: hidden; }
        .jk-coverage-heading { max-width: 800px; margin: 0 auto 55px; text-align: center; }
        .jk-coverage-heading h2 { margin: 0 0 18px; font-size: clamp(40px,5vw,60px); line-height: 1.04; letter-spacing: -2px; }
        .jk-coverage-heading p { max-width: 680px; margin: 0 auto; color: #aaa; font-size: 15px; line-height: 1.75; }
        .jk-coverage-grid { display: grid; grid-template-columns: .8fr 1.4fr; gap: 24px; align-items: stretch; }
        .jk-coverage-summary, .jk-coverage-areas { border: 1px solid rgba(255,255,255,.1); border-radius: 22px; background: rgba(255,255,255,.04); }
        .jk-coverage-summary { padding: 42px 34px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
        .jk-coverage-pin { width: 64px; height: 64px; margin-bottom: 22px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg,#f0c65d,#d59616); font-size: 27px; }
        .jk-coverage-summary h3 { margin: 0; font-size: 31px; }
        .jk-coverage-summary > p { margin: 8px 0 26px; color: #aaa; }
        .jk-coverage-stat { width: 100%; margin-bottom: 28px; padding: 20px 0; display: flex; align-items: center; gap: 14px; border-top: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); }
        .jk-coverage-stat strong { color: #e0a32a; font-size: 42px; line-height: 1; }
        .jk-coverage-stat span { color: #ddd; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
        .jk-coverage-areas { padding: 34px; }
        .jk-coverage-group + .jk-coverage-group { margin-top: 30px; }
        .jk-coverage-group h3 { margin: 0 0 17px; color: #fff; font-size: 18px; }
        .jk-area-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .jk-area-tags span { padding: 10px 14px; border: 1px solid rgba(224,163,42,.25); border-radius: 50px; color: #d7d7d7; background: rgba(255,255,255,.035); font-size: 12px; transition: .3s ease; }
        .jk-area-tags span:hover { color: #111; background: #dfa329; border-color: #dfa329; transform: translateY(-2px); }
        .jk-coverage-note { margin-top: 32px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px; border-left: 3px solid #dfa329; background: rgba(223,163,41,.08); }
        .jk-coverage-note strong { color: #fff; font-size: 14px; }
        .jk-coverage-note span { color: #aaa; font-size: 13px; }

        @media (max-width: 900px) { .jk-coverage-grid { grid-template-columns: 1fr; } }
        @media (max-width: 700px) { .jk-coverage-section { padding: 76px 0; } .jk-coverage-heading { margin-bottom: 38px; } .jk-coverage-heading h2 { font-size: 35px; } .jk-coverage-summary, .jk-coverage-areas { padding: 26px 22px; border-radius: 17px; } .jk-extra-service-image { height: 260px; } }

        /* =====================================================
           RECENT WORKS
        ===================================================== */

        .jk-work-section {
          padding: 110px 0;
          background: #ffffff;
        }

        .jk-work-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .jk-work-card {
          min-height: 520px;
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: #111111;
          box-shadow: 0 18px 50px rgba(0,0,0,.12);
        }

        .jk-work-image,
        .jk-work-image img {
          width: 100%;
          height: 100%;
        }

        .jk-work-image {
          position: absolute;
          inset: 0;
        }

        .jk-work-image img {
          display: block;
          object-fit: cover;
          transition: transform .8s cubic-bezier(.22,1,.36,1);
        }

        .jk-work-card:hover .jk-work-image img {
          transform: scale(1.07);
        }

        .jk-work-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.03) 30%, rgba(0,0,0,.88) 100%);
        }

        .jk-work-content {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 34px;
          color: #ffffff;
        }

        .jk-work-content span {
          display: block;
          margin-bottom: 9px;
          color: #efbd4c;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .jk-work-content h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 27px;
          line-height: 1.15;
        }

        .jk-work-content p {
          margin: 0;
          color: #d3d3d3;
          font-size: 12px;
          line-height: 1.65;
        }

        @media (max-width: 700px) {
          .jk-work-section { padding: 76px 0; }
          .jk-work-grid { grid-template-columns: 1fr; gap: 18px; }
          .jk-work-card { min-height: 410px; border-radius: 17px; }
          .jk-work-content { padding: 24px 21px; }
          .jk-work-content h3 { font-size: 23px; }
        }

        /* =====================================================
           WHY JK
        ===================================================== */

        .jk-why-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 22px;
        }

        .jk-why-card {
          min-height: 285px;

          padding: 39px 25px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: flex-start;

          border:
            1px solid
            rgba(255,255,255,.1);

          border-radius: 18px;

          background:
            rgba(255,255,255,.035);

          text-align: center;

          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease;
        }

        .jk-why-card:hover {
          transform: translateY(-8px);

          border-color:
            rgba(220,161,36,.5);

          background:
            rgba(255,255,255,.065);
        }

        .jk-why-icon {
          width: 82px;
          height: 82px;

          margin: 0 auto 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(221,163,38,.45);

          border-radius: 50%;

          background:
            rgba(220,161,36,.08);

          color: #dfa429;

          animation:
            jkWhyFloat
            3.2s ease-in-out
            infinite;
        }

        .jk-why-card:nth-child(2)
        .jk-why-icon {
          animation-delay: .4s;
        }

        .jk-why-card:nth-child(3)
        .jk-why-icon {
          animation-delay: .8s;
        }

        .jk-why-card:nth-child(4)
        .jk-why-icon {
          animation-delay: 1.2s;
        }

        @keyframes jkWhyFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .jk-why-icon svg {
          width: 38px;
          height: 38px;

          stroke: currentColor;
        }

        .jk-why-card h3 {
          margin: 0 0 11px;

          color: #ffffff;

          font-size: 18px;
          font-weight: 900;
        }

        .jk-why-card p {
          margin: 0;

          color: #aaaaaa;

          font-size: 13px;

          line-height: 1.75;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .jk-process-grid {
          position: relative;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 25px;
        }

        .jk-process-grid::before {
          content: "";

          position: absolute;

          top: 48px;
          left: 11%;
          right: 11%;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(213,154,29,.5),
              rgba(213,154,29,.5),
              transparent
            );
        }

        .jk-process-card {
          position: relative;
          z-index: 2;

          padding: 0 20px 20px;

          text-align: center;
        }

        .jk-process-animation {
          width: 96px;
          height: 96px;

          position: relative;

          margin: 0 auto 24px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .jk-process-pulse {
          position: absolute;

          inset: 0;

          border:
            1px solid
            rgba(210,150,28,.3);

          border-radius: 50%;

          animation:
            jkProcessPulse
            2.4s ease-out
            infinite;
        }

        .jk-process-pulse:nth-child(2) {
          animation-delay: 1.2s;
        }

        @keyframes jkProcessPulse {
          0% {
            opacity: 0;
            transform: scale(.65);
          }

          25% {
            opacity: .8;
          }

          100% {
            opacity: 0;
            transform: scale(1.18);
          }
        }

        .jk-process-check {
          width: 66px;
          height: 66px;

          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #f0c459,
              #d69719
            );

          color: #070707;

          font-size: 26px;
          font-weight: 900;

          box-shadow:
            0 11px 28px
            rgba(211,151,28,.23);

          animation:
            jkProcessFloat
            2.8s ease-in-out
            infinite;
        }

        .jk-process-card:nth-child(2)
        .jk-process-check {
          animation-delay: .3s;
        }

        .jk-process-card:nth-child(3)
        .jk-process-check {
          animation-delay: .6s;
        }

        .jk-process-card:nth-child(4)
        .jk-process-check {
          animation-delay: .9s;
        }

        @keyframes jkProcessFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .jk-process-card h3 {
          margin: 0 0 10px;

          color: #0b0b0b;

          font-size: 18px;
          font-weight: 900;
        }

        .jk-process-card p {
          max-width: 250px;

          margin: 0 auto;

          color: #727272;

          font-size: 13px;

          line-height: 1.75;
        }


        /* =====================================================
           CLIENT REVIEWS
        ===================================================== */

        .jk-reviews-section {
          background: #ffffff;
        }

        .jk-reviews-carousel {
          width: 100%;
          overflow: hidden;
          padding: 10px 0 24px;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
        }

        .jk-reviews-track {
          width: max-content;
          display: flex;
          gap: 22px;
          animation: jkReviewsCarousel 34s linear infinite;
        }

        .jk-reviews-carousel:hover .jk-reviews-track {
          animation-play-state: paused;
        }

        @keyframes jkReviewsCarousel {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 11px)); }
        }

        .jk-review-card {
          width: 360px;
          min-height: 235px;
          flex: 0 0 360px;
          padding: 30px 28px;
          border: 1px solid #e6e6e6;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 13px 40px rgba(0,0,0,.055);
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
        }

        .jk-review-card:hover {
          transform: translateY(-6px);
          border-color: rgba(216,155,30,.5);
          box-shadow: 0 20px 45px rgba(0,0,0,.08);
        }

        .jk-review-stars {
          margin: 0 0 17px;
          color: #d99a1c;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 4px;
        }

        .jk-review-text {
          margin: 0 0 22px;
          color: #666666;
          font-size: 14px;
          line-height: 1.8;
        }

        .jk-review-name {
          margin: 0;
          color: #0a0a0a;
          font-size: 16px;
          font-weight: 900;
        }

        @media (max-width: 700px) {
          .jk-reviews-carousel {
            margin-left: -19px;
            width: calc(100% + 38px);
            -webkit-mask-image: none;
            mask-image: none;
          }

          .jk-reviews-track {
            gap: 14px;
            animation-duration: 28s;
          }

          .jk-review-card {
            width: 290px;
            min-height: 220px;
            flex-basis: 290px;
            padding: 25px 22px;
          }
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .jk-faq-section {
          background: #f8f8f6;
        }

        .jk-faq-list {
          width: 100%;
          max-width: 900px;

          margin: 0 auto;
        }

        .jk-faq-item {
          width: 100%;

          margin-bottom: 14px;

          overflow: hidden;

          opacity: 1 !important;
          visibility: visible !important;

          border: 1px solid #dfdfdf;

          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 7px 24px
            rgba(0,0,0,.035);

          transition:
            border-color .3s ease,
            box-shadow .3s ease,
            transform .3s ease;
        }

        .jk-faq-item:hover {
          transform: translateY(-2px);

          border-color:
            rgba(210,149,25,.45);

          box-shadow:
            0 11px 30px
            rgba(0,0,0,.06);
        }

        .jk-faq-item.active {
          border-color: #d99a1c;

          box-shadow:
            0 15px 35px
            rgba(0,0,0,.07);
        }

        .jk-faq-question {
          width: 100%;
          min-height: 76px;

          margin: 0;

          padding: 17px 19px 17px 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border: 0;

          outline: none;

          background: #ffffff !important;

          color: #080808 !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;
          font-weight: 900;

          line-height: 1.4;

          text-align: left;

          cursor: pointer;
        }

        .jk-faq-question-text {
          display: block;

          flex: 1;

          color: #080808 !important;

          opacity: 1 !important;
          visibility: visible !important;
        }

        .jk-faq-icon {
          width: 42px;
          height: 42px;

          min-width: 42px;

          flex: 0 0 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(206,145,22,.32);

          border-radius: 50%;

          background: #fff8ea !important;

          color: #a96f00 !important;

          font-size: 25px;

          line-height: 1;

          opacity: 1 !important;
          visibility: visible !important;

          transition:
            transform .3s ease,
            background .3s ease;
        }

        .jk-faq-item.active
        .jk-faq-icon {
          background:
            linear-gradient(
              135deg,
              #efbf50,
              #d29418
            ) !important;

          color: #050505 !important;

          transform: rotate(180deg);
        }

        .jk-faq-answer {
          max-height: 0;

          overflow: hidden;

          opacity: 0;

          background: #ffffff;

          transition:
            max-height .45s cubic-bezier(.22,1,.36,1),
            opacity .3s ease;
        }

        .jk-faq-item.active
        .jk-faq-answer {
          max-height: 300px;

          opacity: 1;
        }

        .jk-faq-answer p {
          margin: 0;

          padding: 0 72px 24px 24px;

          color: #656565;

          font-size: 14px;

          line-height: 1.8;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .jk-final-section {
          padding: 0 0 105px;

          background: #f8f8f6;
        }

        .jk-final-card {
          position: relative;

          overflow: hidden;

          padding: 68px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 45px;

          border-radius: 25px;

          background:
            linear-gradient(
              120deg,
              #050505,
              #191919
            );
        }

        .jk-final-card::before {
          content: "";

          position: absolute;

          width: 390px;
          height: 390px;

          top: -200px;
          right: -120px;

          border-radius: 50%;

          background:
            rgba(220,162,37,.15);

          animation:
            jkFinalGlow
            4s ease-in-out
            infinite;
        }

        @keyframes jkFinalGlow {
          0%,
          100% {
            opacity: .55;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.16);
          }
        }

        .jk-final-content {
          position: relative;
          z-index: 2;

          max-width: 700px;
        }

        .jk-final-label {
          display: block;

          margin-bottom: 12px;

          color: #dfa52b;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .jk-final-content h2 {
          margin: 0 0 14px;

          color: #ffffff;

          font-size: clamp(31px,4vw,48px);

          line-height: 1.08;
        }

        .jk-final-content p {
          margin: 0;

          color: #aaaaaa;

          font-size: 14px;

          line-height: 1.7;
        }

        .jk-final-action {
          position: relative;
          z-index: 2;

          flex-shrink: 0;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .jk-hero-title {
            font-size: 63px;
          }

          .jk-hero-features {
            grid-template-columns:
              repeat(2,1fr);
          }

          .jk-hero-feature:nth-child(2) {
            border-right: 0;
          }

          .jk-about-grid {
            gap: 45px;
          }

          .jk-products {
            grid-template-columns:
              repeat(2,1fr);
          }

          .jk-extra-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .jk-why-grid {
            grid-template-columns:
              repeat(2,1fr);
          }


          .jk-process-grid {
            grid-template-columns:
              repeat(2,1fr);

            row-gap: 45px;
          }

          .jk-process-grid::before {
            display: none;
          }

        }

        /* =====================================================
           PREMIUM MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .jk-container {
            width: 100%;

            padding: 0 19px;
          }

          /* =========================================
             PREMIUM HERO
          ========================================= */

          .jk-hero {
            min-height: auto;
            height: auto;

            padding: 0;

            background: #090909;
          }

          .jk-hero-picture {
            position: absolute;
            inset: 0;

            z-index: 0;

            overflow: hidden;
          }

          .jk-hero-picture img {
            width: 100%;
            height: 100%;

            object-fit: cover;

            /* Focus more on construction */
            object-position: 68% center;

            filter:
              contrast(1.08)
              saturate(.90)
              brightness(.83);

            transform: scale(1.03);
          }

          /*
             Premium mobile overlay.
             Top stays readable but image remains visible.
          */

          .jk-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(255,255,255,.96) 0%,
                rgba(255,255,255,.91) 16%,
                rgba(255,255,255,.79) 37%,
                rgba(255,255,255,.50) 56%,
                rgba(255,255,255,.17) 72%,
                rgba(0,0,0,.40) 87%,
                rgba(0,0,0,.88) 100%
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.80) 0%,
                rgba(255,255,255,.42) 58%,
                rgba(255,255,255,.05) 100%
              );
          }

          .jk-hero-light {
            display: block;

            width: 270px;
            height: 270px;

            left: auto;
            right: -100px;
            top: 250px;

            background:
              rgba(221,159,29,.20);

            filter: blur(70px);
          }

          .jk-hero-inner {
            position: relative;
            z-index: 3;

            width: 100%;

            min-height: auto;

            display: block;
          }

          .jk-hero-content {
            width: 100%;
            max-width: none;

            padding:
              58px 0
              285px;

            margin: 0;
          }

          /* SMALL LABEL */

          .jk-hero-small {
            margin: 0 0 19px;

            display: flex;
            align-items: center;

            gap: 8px;

            color: #242424;

            font-size: 8px;
            font-weight: 900;

            letter-spacing: 2.3px;

            white-space: nowrap;
          }

          .jk-hero-small i {
            width: 1px;
            height: 11px;

            background: #c88a10;
          }

          /* TITLE */

          .jk-hero-title {
            width: 100%;
            max-width: 390px;

            margin: 0;

            font-size:
              clamp(38px, 11.2vw, 52px);

            line-height: .94;

            letter-spacing: -1.7px;

            color: #050505;

            text-shadow:
              0 2px 3px
              rgba(255,255,255,.3);
          }

          .jk-hero-title-gold {
            display: block;

            margin: 7px 0 8px;

            font-size: .90em;

            color: #d7940d;

            letter-spacing: -1.6px;

            text-shadow:
              0 6px 20px
              rgba(199,134,8,.17);
          }

          .jk-hero-title-bottom {
            display: block;

            max-width: 350px;

            font-size: .56em;

            line-height: 1.03;

            letter-spacing: -.7px;
          }

          .jk-hero-description {
            max-width: 355px;

            margin: 22px 0 0;

            color: #181818;

            font-size: 13.5px;
            font-weight: 500;

            line-height: 1.65;
          }

          /* BUTTONS */

          .jk-hero-actions {
            width: 100%;

            margin-top: 25px;

            display: grid;

            grid-template-columns:
              1fr 1fr;

            gap: 10px;
          }

          .jk-hero-actions
          .jk-primary-btn,
          .jk-hero-actions
          .jk-secondary-btn {
            width: 100%;

            min-height: 52px;

            padding: 0 13px;

            border-radius: 8px;

            font-size: 12px;
            font-weight: 900;

            white-space: nowrap;
          }

          .jk-hero-actions
          .jk-primary-btn {
            background:
              linear-gradient(
                135deg,
                #f2c85f,
                #d89a1b
              );

            border:
              1px solid
              rgba(255,255,255,.25);

            box-shadow:
              0 12px 28px
              rgba(191,127,8,.23);
          }

          .jk-hero-actions
          .jk-secondary-btn {
            border:
              1.5px solid #111111;

            background:
              rgba(255,255,255,.88);

            color: #080808;

            backdrop-filter:
              blur(12px);
          }

          /* =========================================
             PREMIUM BLACK FEATURE STRIP
          ========================================= */

          .jk-hero-bottom {
            position: relative;

            left: 0;
            right: 0;
            bottom: auto;

            z-index: 5;

            width: 100%;

            min-height: auto;

            padding:
              27px 18px
              25px;

            margin: 0;

            background:
              linear-gradient(
                135deg,
                #050505 0%,
                #111111 50%,
                #050505 100%
              );

            clip-path: none;

            border-top:
              2px solid #dba022;
          }

          .jk-hero-bottom::before {
            content: "";

            position: absolute;

            left: -5%;
            top: -22px;

            width: 110%;
            height: 42px;

            background: #080808;

            border-top:
              2px solid #dba022;

            border-radius:
              50% 50% 0 0 /
              100% 100% 0 0;

            z-index: -1;
          }

          .jk-hero-features {
            width: 100%;
            max-width: none;

            margin: 0;

            display: grid;

            grid-template-columns:
              1fr 1fr;

            gap: 0;
          }

          .jk-hero-feature {
            min-height: 88px;

            padding: 15px 13px;

            display: flex;
            align-items: center;

            gap: 10px;

            border-right:
              1px solid
              rgba(218,158,32,.35);

            border-bottom:
              1px solid
              rgba(255,255,255,.07);
          }

          .jk-hero-feature:nth-child(2),
          .jk-hero-feature:nth-child(4) {
            border-right: 0;
          }

          .jk-hero-feature:nth-child(3),
          .jk-hero-feature:nth-child(4) {
            border-bottom: 0;
          }

          .jk-hero-feature-icon {
            width: 37px;
            height: 37px;

            min-width: 37px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #e1a52a;
          }

          .jk-hero-feature-icon svg {
            width: 30px;
            height: 30px;
          }

          .jk-hero-feature h3 {
            margin: 0 0 4px;

            color: #ffffff;

            font-size: 10px;
            font-weight: 900;

            letter-spacing: .2px;
          }

          .jk-hero-feature p {
            margin: 0;

            color: #aaaaaa;

            font-size: 8px;

            line-height: 1.45;
          }

          /* =========================================
             OTHER SECTIONS
          ========================================= */

          .jk-section {
            padding: 76px 0;
          }

          .jk-heading {
            margin-bottom: 40px;
          }

          .jk-heading h2 {
            font-size: 34px;
          }

          .jk-heading p {
            font-size: 14px;
          }

          /* ABOUT */

          .jk-about-section {
            padding-top: 85px;
          }

          .jk-about-grid {
            grid-template-columns: 1fr;

            gap: 40px;
          }

          .jk-about-image,
          .jk-about-image img {
            min-height: 420px;
            height: 420px;
          }

          .jk-about-image {
            border-radius:
              4px 34px 4px 4px;
          }

          .jk-about-content h2 {
            font-size: 36px;
          }

          .jk-about-points {
            grid-template-columns: 1fr;
          }

          /* PRODUCTS */

          .jk-products {
            grid-template-columns: 1fr;
          }

          .jk-extra-services-section {
            padding: 76px 0;
          }

          .jk-extra-services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .jk-extra-service-card {
            min-height: 0;
            padding: 26px 22px 22px;
            border-radius: 16px;
          }

          .jk-extra-service-card h3 {
            font-size: 21px;
          }

          .jk-extra-service-card p {
            font-size: 12.5px;
            line-height: 1.72;
          }

          .jk-extra-service-quote {
            width: 100%;
            min-height: 52px;
          }

          .jk-product-image {
            height: 250px;
          }

          .jk-product-description {
            min-height: auto;
          }

          /* WHY */

          .jk-why-grid {
            grid-template-columns: 1fr;
          }

          /* PROCESS */

          .jk-process-grid {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .jk-process-card {
            padding: 0 10px 18px;
          }

          /* REVIEWS */


          .jk-review-card {
            padding: 25px 22px;
          }

          /* FAQ */

          .jk-faq-list {
            width: 100%;
          }

          .jk-faq-item {
            margin-bottom: 12px;

            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
          }

          .jk-faq-question {
            min-height: 70px;

            padding:
              16px 14px
              16px 18px;

            font-size: 14px;

            color: #080808 !important;
          }

          .jk-faq-question-text {
            color: #080808 !important;

            opacity: 1 !important;
          }

          .jk-faq-icon {
            width: 39px;
            height: 39px;

            min-width: 39px;

            flex-basis: 39px;

            font-size: 23px;
          }

          .jk-faq-answer p {
            padding:
              0 18px 21px;

            font-size: 13px;
          }

          /* FINAL CTA */

          .jk-final-section {
            padding-bottom: 75px;
          }

          .jk-final-card {
            padding:
              44px 23px;

            flex-direction: column;

            align-items: flex-start;

            border-radius: 18px;
          }

          .jk-final-action {
            width: 100%;
          }

          .jk-final-action
          .jk-primary-btn {
            width: 100%;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .jk-container {
            padding: 0 15px;
          }

          .jk-hero-content {
            padding:
              52px 0
              250px;
          }

          .jk-hero-title {
            font-size:
              clamp(35px, 10.8vw, 43px);

            letter-spacing: -1.3px;
          }

          .jk-hero-title-gold {
            font-size: .89em;
          }

          .jk-hero-title-bottom {
            font-size: .55em;
          }

          .jk-hero-description {
            max-width: 330px;

            font-size: 12.5px;
          }

          .jk-hero-actions {
            grid-template-columns: 1fr;
          }

          .jk-hero-actions
          .jk-primary-btn,
          .jk-hero-actions
          .jk-secondary-btn {
            min-height: 50px;
          }

          .jk-hero-feature {
            padding: 13px 8px;

            gap: 7px;
          }

          .jk-hero-feature-icon {
            width: 32px;
            height: 32px;

            min-width: 32px;
          }

          .jk-hero-feature-icon svg {
            width: 26px;
            height: 26px;
          }

          .jk-faq-question {
            font-size: 13px;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .jk-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .jk-hero-content,
          .jk-hero-light,
          .jk-hero-feature-icon,
          .jk-why-icon,
          .jk-process-pulse,
          .jk-process-check,
          .jk-final-card::before {
            animation: none !important;
          }

        }

      
        /* =====================================================
           FINAL PRODUCT IMAGE VISIBILITY FIX
           Shows the complete Our Solutions image without cropping.
        ===================================================== */

        .jk-product-image {
          width: 100%;
          height: auto;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f5f5f3;
        }

        .jk-product-image img {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
          object-fit: contain !important;
          object-position: center center !important;
        }

        @media (max-width: 700px) {
          .jk-product-image {
            width: 100%;
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: auto !important;
            padding: 0;
            background: #f5f5f3;
          }

          .jk-product-image img {
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            aspect-ratio: auto !important;
            object-fit: contain !important;
            object-position: center center !important;
            transform: none !important;
          }

          .jk-product:hover .jk-product-image img {
            transform: none !important;
          }
        }

`}</style>

      <main className="jk-home" ref={homeRef}>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="jk-hero">

          <div className="jk-hero-picture">
            <FallbackImage
              src="/images/cuplock-scaffolding.webp"
              fallback={HERO_FALLBACK}
              alt="Scaffolding construction"
              eager
            />
          </div>

          <div className="jk-hero-overlay" />

          <div className="jk-hero-light" />

          <div className="jk-container jk-hero-inner">

            <div className="jk-hero-content">

              <div className="jk-hero-small">
                SAFE
                <i />
                STRONG
                <i />
                RELIABLE
              </div>

              <h1 className="jk-hero-title">

                Strong

                <span className="jk-hero-title-gold">
                  Scaffoldings
                </span>

                <span className="jk-hero-title-bottom">
                  For A Safer Tomorrow
                </span>

              </h1>

              <p className="jk-hero-description">
                Reliable scaffolding solutions for
                construction, formwork and infrastructure
                requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.
              </p>

              <div className="jk-hero-actions">

                <a
                  href="#products"
                  className="jk-primary-btn"
                >
                  Our Products
                  <span>→</span>
                </a>

                <Link
                  to="/contact"
                  className="jk-secondary-btn"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

          <div className="jk-hero-bottom">

            <div className="jk-hero-features">

              <HeroFeature
                icon={<ShieldIcon />}
                title="Safe"
                text="Quality-focused support solutions"
              />

              <HeroFeature
                icon={<GearIcon />}
                title="Strong"
                text="Built for construction requirements"
              />

              <HeroFeature
                icon={<PeopleIcon />}
                title="Reliable"
                text="Practical product assistance"
              />

              <HeroFeature
                icon={<HelmetIcon />}
                title="Support"
                text="Direct project enquiries"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section className="jk-section jk-about-section">

          <div className="jk-container">

            <div className="jk-about-grid">

              <div
                className="
                  jk-about-image
                  jk-reveal
                  jk-from-left
                "
              >

                <FallbackImage
                  src="/images/ct.png"
                  fallback={ABOUT_FALLBACK}
                  alt="JK Scaffoldings construction support"
                />

                <div className="jk-about-badge">

                  <strong>
                    Built for the Site
                  </strong>

                  <span>
                    Practical scaffolding and formwork
                    products for construction requirements.
                  </span>

                </div>

              </div>

              <div
                className="
                  jk-about-content
                  jk-reveal
                  jk-from-right
                "
              >

                <div className="jk-eyebrow">
                  About JK Scaffoldings
                </div>

                <h2>
                  Strong Support for
                  <span className="jk-gold">
                    {" "}Better Construction.
                  </span>
                </h2>

                <p>
                  JK Scaffoldings provides scaffolding
                  and formwork support products for
                  construction and infrastructure
                  requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.
                </p>

                <p>
                  Our range covers practical requirements
                  from slab and formwork support to
                  scaffolding access and adjustable
                  support systems.
                </p>

                <div className="jk-about-points">

                  <AboutPoint text="Scaffolding Solutions" />

                  <AboutPoint text="Formwork Support" />

                  <AboutPoint text="Multiple Product Options" />

                  <AboutPoint text="Vijayawada Support" />

                </div>

                <Link
                  to="/about"
                  className="jk-primary-btn"
                >
                  Discover More
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ADDITIONAL SCAFFOLDING SERVICES
        ===================================================== */}

        <section
          className="jk-extra-services-section"
          id="scaffolding-services"
        >
          <div className="jk-container">
            <div className="jk-heading jk-reveal jk-from-bottom">
              <div className="jk-eyebrow">
                Complete Scaffolding Solutions
              </div>

              <h2>
                Scaffolding Services for
                <br />
                <span className="jk-gold">Every Requirement.</span>
              </h2>

              <p>
                Explore construction, industrial, high-rise, specialized,
                protection and event scaffolding solutions for different
                project requirements across Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.
              </p>
            </div>

            <div className="jk-extra-services-grid">
              {scaffoldingServices.map((service, index) => (
                <article
                  key={service.name}
                  className={`jk-extra-service-card jk-reveal ${
                    index % 2 === 0 ? "jk-from-left" : "jk-from-right"
                  }`}
                >
                  <div className="jk-extra-service-image">
                    <FallbackImage
                      src={service.image}
                      fallback={PRODUCT_FALLBACK}
                      alt={service.name}
                    />
                    <div className="jk-extra-service-image-overlay" />
                    <span className="jk-extra-service-category">
                      {service.category}
                    </span>
                  </div>

                  <div className="jk-extra-service-body">
                    <span className="jk-extra-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <a
                    href={whatsappLink(service.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="jk-extra-service-quote"
                  >
                    <span>Get Quote</span>
                    <span className="jk-extra-service-quote-arrow">→</span>
                  </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* =====================================================
            COVERAGE
        ===================================================== */}

        <section className="jk-coverage-section" id="coverage">
          <div className="jk-container">
            <div className="jk-coverage-heading jk-reveal jk-from-bottom">
              <div className="jk-eyebrow">Coverage</div>
              <h2>Areas We <span className="jk-gold">Serve</span></h2>
              <p>
                Operating from Vijayawada, we serve surrounding areas and also support project enquiries across Guntur, Amaravati, Machilipatnam and Andhra Pradesh. Our local coverage includes major construction hubs within a 30 KM radius of Vijayawada.
              </p>
            </div>

            <div className="jk-coverage-grid">
              <div className="jk-coverage-summary jk-reveal jk-from-left">
                <div className="jk-coverage-pin">📍</div>
                <h3>30 KM Radius</h3>
                <p>From Vijayawada</p>
                <div className="jk-coverage-stat"><strong>21</strong><span>Areas Covered</span></div>
                <a href={whatsappLink("Coverage within 30 KM of Vijayawada")} target="_blank" rel="noreferrer" className="jk-primary-btn">
                  Get Coverage Quote <span>→</span>
                </a>
              </div>

              <div className="jk-coverage-areas jk-reveal jk-from-right">
                <div className="jk-coverage-group">
                  <h3>📍 Primary Hub</h3>
                  <div className="jk-area-tags">
                    {["🏙️ Vijayawada", "MG Road", "Eluru Road", "Auto Nagar", "Patamata"].map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                </div>

                <div className="jk-coverage-group">
                  <h3>🗺️ Surrounding Areas — 30KM</h3>
                  <div className="jk-area-tags">
                    {["Amaravati", "Tadepalli", "Vaddeswaram", "Mangalagiri", "Penamauluru", "Ramavarappadu", "Kankipadu", "Yanamalakuduru", "Prasadampadu", "Enikepadu", "Gannavaram", "Nunna", "Gollapudi", "Ibrahim Patnam", "Kanuru", "Poranki", "Guntur", "Machilipatnam", "Andhra Pradesh"].map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                </div>

                <div className="jk-coverage-note">
                  <strong>Not sure if we cover your area?</strong>
                  <span>Call us — we'll let you know within minutes!</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VIEW OUR WORK
        ===================================================== */}

        <section className="jk-work-section" id="recent-works">
          <div className="jk-container">
            <div className="jk-heading jk-reveal jk-from-bottom">
              <div className="jk-eyebrow">Recent Projects</div>

              <h2>
                View Our <span className="jk-gold">Work</span>
              </h2>

              <p>
                A look at recent scaffolding and construction support work serving
                Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam,
                Andhra Pradesh.
              </p>
            </div>

            <div className="jk-work-grid">
              {recentWorks.map((work, index) => (
                <article
                  className={`jk-work-card jk-reveal ${
                    index % 2 === 0 ? "jk-from-left" : "jk-from-right"
                  }`}
                  key={work.title}
                >
                  <div className="jk-work-image">
                    <FallbackImage
                      src={work.image}
                      fallback={work.fallback}
                      alt={`${work.title} - JK Scaffoldings`}
                    />
                  </div>

                  <div className="jk-work-overlay" />

                  <div className="jk-work-content">
                    <span>JK Scaffoldings • Recent Work</span>
                    <h3>{work.title}</h3>
                    <p>{work.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <section
          className="jk-section jk-soft-section"
          id="products"
        >

          <div className="jk-container">

            <div
              className="
                jk-heading
                jk-reveal
                jk-from-bottom
              "
            >

              <div className="jk-eyebrow">
                Our Solutions
              </div>

              <h2>
                Built for Strength.
                <br />

                <span className="jk-gold">
                  Designed for the Site.
                </span>
              </h2>

              <p>
                Explore scaffolding and formwork
                support solutions for construction
                requirements.
              </p>

            </div>

            <div className="jk-products">

              {products.map((product, index) => (

                <article
                  key={product.name}
                  className={`
                    jk-product
                    jk-reveal
                    ${
                      index % 2 === 0
                        ? "jk-from-left"
                        : "jk-from-right"
                    }
                  `}
                >

                  <div className="jk-product-image">

                    <ProductImage
                      local={product.localImage}
                      remote={product.remoteImage}
                      fallback={PRODUCT_FALLBACK}
                      alt={product.name}
                    />

                    <div className="jk-product-image-overlay" />

                    <div className="jk-product-arrow-top">
                      ↗
                    </div>

                  </div>

                  <div className="jk-product-body">

                    <div className="jk-product-tagline">
                      {product.tagline}
                    </div>

                    <h3 className="jk-product-title">
                      {product.name}
                    </h3>

                    <p className="jk-product-description">
                      {product.description}
                    </p>

                    <a
                      href={whatsappLink(product.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="jk-product-enquiry"
                    >

                      <span className="jk-enquiry-text">

                        <WhatsAppIcon />

                        Get Product Details

                      </span>

                      <span className="jk-enquiry-arrow">
                        →
                      </span>

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>



        {/* =====================================================
            WHY JK
        ===================================================== */}

        <section className="jk-section jk-dark-section">

          <div className="jk-container">

            <div
              className="
                jk-heading
                jk-reveal
                jk-from-bottom
              "
            >

              <div className="jk-eyebrow">
                Why JK Scaffoldings
              </div>

              <h2>
                Reliable Products.
                <br />
                Practical Support.
              </h2>

              <p>
                Construction requirements demand
                strength, stability and the right
                support products.
              </p>

            </div>

            <div className="jk-why-grid">

              <WhyCard
                icon={<ShieldIcon />}
                title="Reliable Quality"
                text="Scaffolding products focused on practical construction requirements."
                direction="left"
              />

              <WhyCard
                icon={<GearIcon />}
                title="Product Range"
                text="Multiple scaffolding and formwork solutions for different applications."
                direction="right"
              />

              <WhyCard
                icon={<ChatIcon />}
                title="Quick Enquiry"
                text="Send your product requirement directly through WhatsApp."
                direction="left"
              />

              <WhyCard
                icon={<LocationIcon />}
                title="Vijayawada"
                text="Convenient support for construction requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh."
                direction="right"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="jk-section">

          <div className="jk-container">

            <div
              className="
                jk-heading
                jk-reveal
                jk-from-bottom
              "
            >

              <div className="jk-eyebrow">
                How It Works
              </div>

              <h2>
                Simple Process.
                <span className="jk-gold">
                  {" "}Direct Support.
                </span>
              </h2>

              <p>
                Finding and enquiring about the
                scaffolding products you need is simple.
              </p>

            </div>

            <div className="jk-process-grid">

              <ProcessCard
                title="Explore Products"
                text="Browse our scaffolding and formwork support solutions."
                direction="left"
              />

              <ProcessCard
                title="Choose Your Requirement"
                text="Select the product suitable for your construction requirement."
                direction="right"
              />

              <ProcessCard
                title="Send Your Enquiry"
                text="Connect directly through WhatsApp with your selected product."
                direction="left"
              />

              <ProcessCard
                title="Discuss Your Project"
                text="Share the required quantity and project details for further discussion."
                direction="right"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            CLIENT REVIEWS
        ===================================================== */}

        <section className="jk-section jk-reviews-section">
          <div className="jk-container">
            <div className="jk-heading jk-reveal jk-from-bottom">
              <div className="jk-eyebrow">Client Reviews</div>

              <h2>
                What Our <span className="jk-gold">Clients Say.</span>
              </h2>

              <p>
                Feedback from clients who chose JK Scaffoldings for their
                scaffolding and construction requirements.
              </p>
            </div>

            <div className="jk-reviews-carousel">
              <div className="jk-reviews-track">
                {[...reviews, ...reviews].map((review, index) => (
                  <article
                    key={`${review.name}-${index}`}
                    className="jk-review-card"
                  >
                    <div className="jk-review-stars" aria-label="5 star review">
                      ★★★★★
                    </div>
                    <p className="jk-review-text">“{review.review}”</p>
                    <h3 className="jk-review-name">{review.name}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="jk-section jk-faq-section">

          <div className="jk-container">

            <div className="jk-heading">

              <div className="jk-eyebrow">
                Frequently Asked Questions
              </div>

              <h2>
                Need More
                <span className="jk-gold">
                  {" "}Information?
                </span>
              </h2>

              <p>
                Find quick answers about our
                scaffolding products and enquiry process.
              </p>

            </div>

            <div className="jk-faq-list">

              {faqs.map((faq, index) => {

                const active = openFaq === index;

                return (

                  <div
                    key={faq.question}
                    className={`jk-faq-item ${
                      active ? "active" : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="jk-faq-question"
                      aria-expanded={active}
                      onClick={() =>
                        setOpenFaq(
                          active ? null : index
                        )
                      }
                    >

                      <span className="jk-faq-question-text">
                        {faq.question}
                      </span>

                      <span
                        className="jk-faq-icon"
                        aria-hidden="true"
                      >
                        {active ? "−" : "+"}
                      </span>

                    </button>

                    <div className="jk-faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="jk-final-section">

          <div className="jk-container">

            <div
              className="
                jk-final-card
                jk-reveal
                jk-from-bottom
              "
            >

              <div className="jk-final-content">

                <span className="jk-final-label">
                  Have a Requirement?
                </span>

                <h2>
                  Let's Discuss Your
                  Scaffolding Requirement.
                </h2>

                <p>
                  Tell us the products, quantities
                  and project requirements you need
                  and connect directly with JK Scaffoldings.
                </p>

              </div>

              <div className="jk-final-action">

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="jk-primary-btn"
                >

                  <WhatsAppIcon />

                  Enquire on WhatsApp

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
   IMAGE FALLBACK
========================================================= */

function FallbackImage({
  src,
  fallback,
  alt,
  eager = false,
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onError={() => {
        if (imageSrc !== fallback) {
          setImageSrc(fallback);
        }
      }}
    />
  );
}

/* =========================================================
   PRODUCT IMAGE
   LOCAL -> ORIGINAL IMAGE -> FALLBACK
========================================================= */

function ProductImage({
  local,
  remote,
  fallback,
  alt,
}) {
  const sources = [
    local,
    remote,
    fallback,
  ].filter(Boolean);

  const [index, setIndex] = useState(0);

  const current =
    sources[
      Math.min(index, sources.length - 1)
    ];

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onError={() => {
        setIndex((currentIndex) => {
          if (
            currentIndex <
            sources.length - 1
          ) {
            return currentIndex + 1;
          }

          return currentIndex;
        });
      }}
    />
  );
}

/* =========================================================
   ABOUT POINT
========================================================= */

function AboutPoint({ text }) {
  return (
    <div className="jk-about-point">

      <div className="jk-about-point-check">
        ✓
      </div>

      <span>
        {text}
      </span>

    </div>
  );
}

/* =========================================================
   HERO FEATURE
========================================================= */

function HeroFeature({
  icon,
  title,
  text,
}) {
  return (
    <div className="jk-hero-feature">

      <div className="jk-hero-feature-icon">
        {icon}
      </div>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({
  icon,
  title,
  text,
  direction,
}) {
  return (
    <article
      className={`
        jk-why-card
        jk-reveal
        ${
          direction === "left"
            ? "jk-from-left"
            : "jk-from-right"
        }
      `}
    >

      <div className="jk-why-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function ProcessCard({
  title,
  text,
  direction,
}) {
  return (
    <article
      className={`
        jk-process-card
        jk-reveal
        ${
          direction === "left"
            ? "jk-from-left"
            : "jk-from-right"
        }
      `}
    >

      <div className="jk-process-animation">

        <span className="jk-process-pulse" />

        <span className="jk-process-pulse" />

        <div className="jk-process-check">
          ✓
        </div>

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}

/* =========================================================
   ICONS
========================================================= */

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <path d="M32 5 53 13v17c0 14-8 23-21 29C19 53 11 44 11 30V13L32 5Z" />
      <path d="m22 31 7 7 14-16" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="22" />
      <path d="M32 5v8M32 51v8M5 32h8M51 32h8M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <circle cx="32" cy="20" r="9" />
      <circle cx="14" cy="25" r="7" />
      <circle cx="50" cy="25" r="7" />
      <path d="M17 54c0-10 6-18 15-18s15 8 15 18" />
      <path d="M2 52c0-8 5-14 12-14 4 0 7 2 9 5" />
      <path d="M62 52c0-8-5-14-12-14-4 0-7 2-9 5" />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <path d="M11 40c0-14 9-25 21-25s21 11 21 25" />
      <path d="M26 15V8h12v7" />
      <path d="M6 40h52v8H6z" />
      <path d="M32 15v25" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <path d="M8 10h48v34H29L16 54V44H8V10Z" />
      <path d="M19 24h26M19 32h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="3"
    >
      <path d="M32 58S13 40 13 24a19 19 0 1 1 38 0c0 16-19 34-19 34Z" />
      <circle cx="32" cy="24" r="7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        fill: "currentColor",
        flexShrink: 0,
      }}
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.95c0 2.1.55 4.16 1.6 5.97L.04 24l6.22-1.63a11.93 11.93 0 0 0 5.81 1.48h.01C18.66 23.85 24 18.49 24 11.9a11.82 11.82 0 0 0-3.48-8.42ZM12.08 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.69.97.99-3.6-.23-.37a9.92 9.92 0 1 1 8.35 4.59Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default Home;