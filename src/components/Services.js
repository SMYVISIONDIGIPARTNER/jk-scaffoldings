import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";



/* =========================================================

   SETTINGS

========================================================= */



const WHATSAPP_NUMBER = "916303819983";





const HERO_UNSPLASH =

  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90";



/* =========================================================

   PRODUCTS

   IMAGE ORDER:

   1. LOCAL IMAGE

   2. ORIGINAL JK IMAGE

   3. UNSPLASH FALLBACK

========================================================= */



const products = [

  {

    name: "Adjustable Props",

    heading: "Strong Support for Every Level",

    description: "Reliable support for slabs and formwork.",



    image: "/images/adjustable-props.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-props.webp",



    fallback:

      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",

  },



  {

    name: "H Frames",

    heading: "Stable Frames. Stronger Structures.",

    description: "Strong frames for stable scaffolding structures.",



    image: "/images/h-frames.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/h-frames.webp",



    fallback:

      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",

  },



  {

    name: "Cup-Lock System",

    heading: "Built for Safe & Flexible Access",

    description: "Safe access solutions for construction projects.",



    image: "/images/cuplock-system.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/scaffolding.webp",



    fallback:

      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",

  },


  {

    name: "Adjustable Spans",

    heading: "Flexible Support for Every Requirement",

    description: "Flexible support for varying site requirements.",



    image: "/images/adjustable-spans.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-spans.webp",



    fallback:

      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=1200&q=85",

  },



  {

    name: "Walkway Jali",

    heading: "Safer Working Platforms at Height",

    description: "Safe working platforms for workers.",



    image: "/images/walkway-jali.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/walkway-jali.webp",



    fallback:

      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=1200&q=85",

  },



  {

    name: "Adjustable Base Jacks",

    heading: "Stable Foundations Start Here",

    description: "Heavy-duty Adjustable Base Jacks",



    image: "/images/adjustable-base-jack.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-base-jack.webp",



    fallback:

      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1200&q=85",

  },



  {

    name: "Adjustable U-Jacks",

    heading: "Precision Support for Scaffolding",

    description: "Premium-quality Adjustable U-Jacks",



    image: "/images/adjustable-u-jacks.webp",



    backupImage:

      "https://www.jkscaffolding.com/assets/images/new-products/adjustable-u-jacks-base-jacks.webp",



    fallback:

      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",

  },

];





/* =========================================================
   COMPLETE SCAFFOLDING SOLUTIONS
========================================================= */

const scaffoldingServices = [
  { category: "Industrial", name: "Cup-Lock Scaffolding", image: "/images/cuplock-scaffolding.webp", backupImage: "https://www.jkscaffolding.com/assets/images/new-products/scaffolding.webp", fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85", description: "Industry-grade cup-lock system with vertical standards and horizontal ledgers offering sturdy support for workers and materials at multiple levels." },
  { category: "Construction", name: "Shuttering Scaffolding", image: "/images/shuttering-scaffolding.webp", fallback: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85", description: "Specialized support structures for concrete formwork during casting of walls, columns, beams, and slabs — ensuring precision on construction sites." },
  { category: "Versatile", name: "Mobile / Movable Scaffolding", image: "/images/mobile-scaffolding.webp", fallback: "https://images.unsplash.com/photo-1503387762-592deb58ef4e5e?auto=format&fit=crop&w=1200&q=85", description: "Wheel-mounted scaffolding that can be repositioned without disassembly — ideal for projects requiring access to multiple areas efficiently." },
  { category: "High-Rise", name: "Poll Scaffolding", image: "/images/poll-scaffolding.webp", fallback: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=85", description: "Metal poles and platforms providing workers with a stable, secure elevated workspace for high-rise construction and maintenance tasks." },
  { category: "Specialized", name: "Cantilever Scaffolding", image: "/images/cantilever-scaffolding.webp", fallback: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1200&q=85", description: "A specialized system designed to reach areas inaccessible with traditional scaffolding using beams extending from a main structure or wall." },
  { category: "Iron Works", name: "Iron Paranja Works", image: "/images/iron-paranja-works.webp", fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85", description: "Custom iron fabrication and paranja structures — precision-crafted iron works for construction, industrial, and architectural applications across AP." },
  { category: "Installation", name: "Scaffolding Installation & Disassembly", image: "/images/scaffolding-installation.webp", fallback: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=1200&q=85", description: "Complete end-to-end service — our trained crew handles professional installation, monitoring, and safe disassembly when your project is complete." },
  { category: "Protection", name: "Scaffolding Covering", image: "/images/scaffolding-covering.webp", fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85", description: "High-quality protective covering solutions for scaffolding structures — weather protection, debris containment, and site safety compliance." },
  { category: "Events & Display", name: "LED Panel Support Scaffolding", image: "/images/led-panel-scaffolding.webp", fallback: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=1200&q=85", description: "Specialized framework to securely hold large LED screens and panels for outdoor events, exhibitions, and installations — weather-resistant design." },
];

/* =========================================================

   SERVICES PAGE

========================================================= */



function Services() {

  const pageRef = useRef(null);

  /* =========================================================
     SEO + GEO FOR SERVICES PAGE
  ========================================================= */
  useEffect(() => {
    document.title =
      "Scaffolding Services in Vijayawada & Surrounding Areas | JK Scaffoldings";

    const description =
      "JK Scaffoldings provides scaffolding and formwork solutions in Vijayawada, Kanuru, Poranki, Penamaluru, Ramavarappadu, Gannavaram, Gollapudi, Ibrahimpatnam, Tadepalli, Mangalagiri, Amaravati, Guntur, Machilipatnam and Andhra Pradesh.";

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
      "scaffolding Vijayawada, scaffolding Kanuru, scaffolding Poranki, scaffolding Penamaluru, scaffolding Ramavarappadu, scaffolding Gannavaram, scaffolding Gollapudi, scaffolding Ibrahimpatnam, scaffolding Tadepalli, scaffolding Mangalagiri, scaffolding Amaravati, scaffolding Guntur, scaffolding Machilipatnam, scaffolding Andhra Pradesh, cup lock scaffolding, shuttering scaffolding, adjustable props, H frames"
    );
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("geo.region", "IN-AP");
    setMeta("geo.placename", "Vijayawada, Andhra Pradesh");
    setMeta("og:title", document.title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://jkscaffoldings.com/services", true);
    setMeta("og:image", "https://jkscaffoldings.com/logo.png", true);
    setMeta("twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = "https://jkscaffoldings.com/services";

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "JK Scaffoldings",
      url: "https://jkscaffoldings.com",
      image: "https://jkscaffoldings.com/logo.png",
      description,
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
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN"
      }
    };

    let schemaTag = document.getElementById("jk-services-localbusiness-schema");

    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "jk-services-localbusiness-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify(schema);

    return () => {
      const tag = document.getElementById("jk-services-localbusiness-schema");
      if (tag) tag.remove();
    };
  }, []);




  useEffect(() => {

    const root = pageRef.current;



    if (!root) return;



    const elements = root.querySelectorAll(".services-reveal");



    const reducedMotion = window.matchMedia(

      "(prefers-reduced-motion: reduce)"

    ).matches;



    if (reducedMotion) {

      elements.forEach((element) => {

        element.classList.add("services-visible");

      });



      return;

    }



    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("services-visible");

            observer.unobserve(entry.target);

          }

        });

      },

      {

        threshold: 0.07,

        rootMargin: "0px 0px -30px 0px",

      }

    );



    elements.forEach((element) => {

      observer.observe(element);

    });



    return () => observer.disconnect();

  }, []);



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



        .jk-services,

        .jk-services * {

          box-sizing: border-box;

        }



        .jk-services {

          width: 100%;

          overflow: hidden;

          background: #ffffff;

          color: #090909;

          font-family: Arial, Helvetica, sans-serif;

        }



        .services-container {

          width: 90%;

          max-width: 1400px;

          margin: 0 auto;

        }



        .services-gold {

          color: #d99a18;

        }



        /* =====================================================

           SCROLL ANIMATIONS

        ===================================================== */



        .services-reveal {

          opacity: 0;



          transition:

            opacity .8s ease,

            transform .8s cubic-bezier(.22, 1, .36, 1);

        }



        .services-left {

          transform: translateX(-55px);

        }



        .services-right {

          transform: translateX(55px);

        }



        .services-bottom {

          transform: translateY(45px);

        }



        .services-visible {

          opacity: 1;

          transform: translate(0, 0);

        }



        /* =====================================================

           HERO

        ===================================================== */



        .services-hero {

          min-height: 600px;



          position: relative;



          display: flex;

          align-items: center;



          overflow: hidden;



          background: #080808;

        }



        .services-hero-image {

          position: absolute;

          inset: 0;

          z-index: 0;

        }



        .services-hero-image img {

          width: 100%;

          height: 100%;



          display: block;



          object-fit: cover;

          object-position: center;



          filter:

            brightness(.65)

            contrast(1.1)

            saturate(.85);



          animation:

            servicesHeroZoom

            14s ease-in-out

            infinite alternate;

        }



        @keyframes servicesHeroZoom {

          from {

            transform: scale(1);

          }



          to {

            transform: scale(1.07);

          }

        }



        .services-hero-overlay {

          position: absolute;

          inset: 0;

          z-index: 1;



          background:

            linear-gradient(

              90deg,

              rgba(0,0,0,.95) 0%,

              rgba(0,0,0,.80) 37%,

              rgba(0,0,0,.48) 68%,

              rgba(0,0,0,.25) 100%

            );

        }



        .services-hero-glow {

          position: absolute;



          z-index: 2;



          width: 500px;

          height: 500px;



          left: -230px;

          bottom: -280px;



          border-radius: 50%;



          background:

            rgba(221,161,36,.25);



          filter: blur(100px);



          animation:

            servicesGlow

            5s ease-in-out

            infinite;

        }



        @keyframes servicesGlow {

          0%,

          100% {

            opacity: .45;

            transform: scale(.9);

          }



          50% {

            opacity: .9;

            transform: scale(1.12);

          }

        }



        .services-hero-content {

          position: relative;

          z-index: 3;



          max-width: 820px;



          padding: 95px 0;

        }



        .services-breadcrumb {

          margin-bottom: 25px;



          display: flex;

          align-items: center;



          gap: 10px;



          color: #d0d0d0;



          font-size: 12px;

          font-weight: 700;

        }



        .services-breadcrumb a {

          color: #ffffff;

          text-decoration: none;

        }



        .services-breadcrumb span {

          color: #e1a52a;

        }



        .services-hero-label {

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



        .services-hero-label::before {

          content: "";



          width: 38px;

          height: 2px;



          background: #e1a52a;

        }



        .services-hero h1 {

          max-width: 800px;



          margin: 0;



          color: #ffffff;



          font-family:

            Georgia,

            "Times New Roman",

            serif;



          font-size:

            clamp(55px, 6vw, 88px);



          line-height: .96;



          letter-spacing: -3px;



          text-transform: uppercase;

        }



        .services-hero h1 span {

          display: block;



          margin-top: 6px;



          color: #dfa329;

        }



        .services-hero-description {

          max-width: 650px;



          margin: 27px 0 0;



          color: #d2d2d2;



          font-size: 17px;



          line-height: 1.75;

        }



        .services-hero-buttons {

          margin-top: 32px;



          display: flex;

          align-items: center;



          gap: 14px;



          flex-wrap: wrap;

        }



        .services-primary-btn,

        .services-outline-btn {

          min-height: 57px;



          padding: 0 30px;



          display: inline-flex;

          align-items: center;

          justify-content: center;



          gap: 11px;



          border-radius: 10px;



          text-decoration: none;



          font-size: 14px;

          font-weight: 900;



          transition:

            transform .3s ease,

            box-shadow .3s ease,

            background .3s ease,

            color .3s ease;

        }



        .services-primary-btn {

          color: #080808;



          background:

            linear-gradient(

              135deg,

              #f0c457,

              #d79719

            );



          box-shadow:

            0 14px 35px

            rgba(215,153,25,.24);

        }



        .services-primary-btn:hover {

          transform: translateY(-4px);



          box-shadow:

            0 18px 42px

            rgba(215,153,25,.35);

        }



        .services-outline-btn {

          border:

            1px solid

            rgba(255,255,255,.65);



          color: #ffffff;



          background:

            rgba(255,255,255,.05);



          backdrop-filter:

            blur(10px);

        }



        .services-outline-btn:hover {

          transform: translateY(-4px);



          background: #ffffff;



          color: #080808;

        }



        .services-hero-bottom-line {

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

           MARQUEE

        ===================================================== */



        .services-marquee {

          padding: 25px 0;



          overflow: hidden;



          background:

            linear-gradient(

              90deg,

              #cf8e10,

              #efc154,

              #d59516

            );

        }



        .services-marquee-track {

          width: max-content;



          display: flex;



          animation:

            servicesMarquee

            24s linear

            infinite;

        }



        .services-marquee-group {

          display: flex;

          align-items: center;



          flex-shrink: 0;

        }



        .services-marquee-item {

          display: flex;

          align-items: center;



          white-space: nowrap;



          color: #080808;



          font-size: 13px;

          font-weight: 900;



          letter-spacing: 1px;



          text-transform: uppercase;

        }



        .services-marquee-item::after {

          content: "✦";



          margin: 0 32px;



          opacity: .55;

        }



        @keyframes servicesMarquee {

          from {

            transform: translateX(0);

          }



          to {

            transform: translateX(-50%);

          }

        }





        /* =====================================================
           COMPLETE SCAFFOLDING SOLUTIONS
        ===================================================== */
        .complete-solutions { padding: 110px 0; background: #fff; }
        .complete-solutions-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }
        .complete-solution-card { overflow: hidden; border: 1px solid #e6e6e6; border-radius: 20px; background: #fff; box-shadow: 0 16px 45px rgba(0,0,0,.07); transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease; }
        .complete-solution-card:hover { transform: translateY(-8px); border-color: rgba(217,154,24,.5); box-shadow: 0 26px 60px rgba(0,0,0,.13); }
        .complete-solution-image { height: 360px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #f4f4f2; }
        .complete-solution-image img { width: 100%; height: 100%; display: block; object-fit: contain; object-position: center; transition: transform .7s cubic-bezier(.22,1,.36,1); }
        .complete-solution-card:hover .complete-solution-image img { transform: scale(1.02); }
        .complete-solution-image::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg,transparent 45%,rgba(0,0,0,.72)); pointer-events: none; }
        .complete-solution-category { position: absolute; z-index: 2; left: 18px; bottom: 16px; padding: 7px 11px; border: 1px solid rgba(255,255,255,.35); border-radius: 999px; color: #f3c65c; background: rgba(0,0,0,.55); backdrop-filter: blur(8px); font-size: 9px; font-weight: 900; letter-spacing: 1.2px; text-transform: uppercase; }
        .complete-solution-content { position: relative; padding: 27px 25px 25px; }
        .complete-solution-number { position: absolute; right: 22px; top: 22px; color: rgba(0,0,0,.08); font-size: 31px; font-weight: 900; }
        .complete-solution-content h3 { max-width: 82%; margin: 0 0 13px; color: #0a0a0a; font-size: 21px; line-height: 1.18; }
        .complete-solution-content p { margin: 0 0 23px; color: #6d6d6d; font-size: 12.5px; line-height: 1.72; }
        .complete-solution-btn { min-height: 49px; padding: 0 18px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 9px; color: #080808; background: linear-gradient(135deg,#f1c65d,#d69515); text-decoration: none; font-size: 12px; font-weight: 900; transition: transform .3s ease, box-shadow .3s ease; }
        .complete-solution-btn:hover { transform: translateY(-3px); box-shadow: 0 13px 30px rgba(213,151,23,.28); }
        @media (max-width: 1050px) { .complete-solutions-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
        @media (max-width: 700px) { .complete-solutions { padding: 78px 0; } .complete-solutions-grid { grid-template-columns: 1fr; gap: 17px; } .complete-solution-image { height: 380px; min-height: 380px; } .complete-solution-content { padding: 24px 21px 22px; } .complete-solution-content h3 { font-size: 20px; } .complete-solution-btn { width: 100%; } }

        /* =====================================================

           PRODUCTS

        ===================================================== */



        .services-products-section {

          padding: 110px 0;



          background:

            linear-gradient(

              180deg,

              #ffffff,

              #faf9f6

            );

        }



        .services-heading {

          max-width: 790px;



          margin: 0 auto 62px;



          text-align: center;

        }



        .services-small-heading {

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



        .services-small-heading::before,

        .services-small-heading::after {

          content: "";



          width: 29px;

          height: 1px;



          background: #d99918;

        }



        .services-heading h2 {

          margin: 0 0 17px;



          color: #080808;



          font-size:

            clamp(38px, 4.5vw, 58px);



          line-height: 1.04;



          letter-spacing: -2px;



          font-weight: 900;

        }



        .services-heading p {

          max-width: 650px;



          margin: 0 auto;



          color: #6d6d6d;



          font-size: 15px;



          line-height: 1.75;

        }



        /* =====================================================

           PRODUCT GRID

        ===================================================== */



        .services-product-grid {

          display: grid;



          grid-template-columns:

            repeat(2, 1fr);



          gap: 30px;

        }



        .services-product-card {

          min-height: 560px;



          position: relative;



          overflow: hidden;



          border-radius: 22px;



          background: #080808;



          box-shadow:

            0 18px 50px

            rgba(0,0,0,.12);



          isolation: isolate;



          transition:

            transform .45s cubic-bezier(.22,1,.36,1),

            box-shadow .45s ease;

        }



        .services-product-card:hover {

          transform: translateY(-9px);



          box-shadow:

            0 30px 65px

            rgba(0,0,0,.19);

        }



        .services-product-image {

          position: absolute;

          inset: 0;



          z-index: -3;



          background: #151515;

        }



        .services-product-image img {

          width: 100%;

          height: 100%;



          display: block;



          object-fit: cover;

          object-position: center;



          transition:

            transform .9s

            cubic-bezier(.22,1,.36,1);

        }



        .services-product-card:hover

        .services-product-image img {

          transform: scale(1.02);

        }



        .services-product-overlay {

          position: absolute;

          inset: 0;



          z-index: -2;



          background:

            linear-gradient(

              180deg,

              rgba(0,0,0,.03) 5%,

              rgba(0,0,0,.15) 32%,

              rgba(0,0,0,.94) 100%

            );

        }



        .services-product-gold-line {

          position: absolute;



          z-index: 3;



          left: 0;

          bottom: 0;



          width: 0;

          height: 4px;



          background:

            linear-gradient(

              90deg,

              #d69314,

              #f3c75d

            );



          transition:

            width .55s

            cubic-bezier(.22,1,.36,1);

        }



        .services-product-card:hover

        .services-product-gold-line {

          width: 100%;

        }



        .services-product-content {

          min-height: 560px;



          padding: 35px;



          display: flex;

          flex-direction: column;

          justify-content: flex-end;

        }



        .services-product-name {

          width: fit-content;



          margin-bottom: 13px;



          padding: 8px 13px;



          border:

            1px solid

            rgba(231,176,57,.5);



          border-radius: 50px;



          color: #f0bd4f;



          background:

            rgba(0,0,0,.45);



          backdrop-filter:

            blur(8px);



          font-size: 10px;

          font-weight: 900;



          letter-spacing: 1.4px;



          text-transform: uppercase;

        }



        .services-product-content h3 {

          max-width: 520px;



          margin: 0 0 12px;



          color: #ffffff;



          font-size:

            clamp(25px, 2.3vw, 34px);



          line-height: 1.08;



          letter-spacing: -.8px;



          font-weight: 900;

        }



        .services-product-content p {

          max-width: 480px;



          margin: 0 0 22px;



          color: #d1d1d1;



          font-size: 13px;



          line-height: 1.65;

        }



        /* =====================================================

           ENQUIRE BUTTON

        ===================================================== */



        .services-enquire-btn {

          width: fit-content;



          min-height: 54px;



          position: relative;



          overflow: hidden;



          padding: 0 22px;



          display: inline-flex;

          align-items: center;

          justify-content: center;



          gap: 10px;



          border-radius: 9px;



          color: #080808;



          background:

            linear-gradient(

              135deg,

              #f2c85f,

              #d69515

            );



          text-decoration: none;



          font-size: 12px;

          font-weight: 900;



          box-shadow:

            0 12px 30px

            rgba(213,151,23,.24);



          transition:

            transform .3s ease,

            box-shadow .3s ease;

        }



        .services-enquire-btn::before {

          content: "";



          position: absolute;



          top: 0;

          left: -90px;



          width: 60px;

          height: 100%;



          background:

            linear-gradient(

              90deg,

              transparent,

              rgba(255,255,255,.7),

              transparent

            );



          transform: skewX(-20deg);



          animation:

            servicesButtonShine

            3.3s ease-in-out

            infinite;

        }



        @keyframes servicesButtonShine {

          0%,

          65% {

            left: -90px;

          }



          100% {

            left: calc(100% + 90px);

          }

        }



        .services-enquire-btn:hover {

          transform: translateY(-3px);



          box-shadow:

            0 16px 38px

            rgba(213,151,23,.36);

        }



        .services-btn-arrow {

          width: 27px;

          height: 27px;



          display: flex;

          align-items: center;

          justify-content: center;



          border-radius: 50%;



          background:

            rgba(0,0,0,.10);



          transition:

            transform .3s ease;

        }



        .services-enquire-btn:hover

        .services-btn-arrow {

          transform: translateX(4px);

        }



        /* =====================================================

           WHY SECTION

        ===================================================== */



        .services-support {

          padding: 110px 0;



          position: relative;



          overflow: hidden;



          background:

            radial-gradient(

              circle at top,

              #242424,

              #060606 62%

            );



          color: #ffffff;

        }



        .services-support::before {

          content: "";



          position: absolute;



          width: 500px;

          height: 500px;



          right: -250px;

          top: -250px;



          border-radius: 50%;



          border:

            1px solid

            rgba(220,161,35,.17);



          animation:

            servicesCirclePulse

            5s ease-in-out

            infinite;

        }



        @keyframes servicesCirclePulse {

          0%,

          100% {

            transform: scale(.9);

          }



          50% {

            transform: scale(1.12);

          }

        }



        .services-support-heading {

          max-width: 750px;



          margin: 0 auto 58px;



          position: relative;



          z-index: 2;



          text-align: center;

        }



        .services-support-heading h2 {

          margin: 0 0 15px;



          color: #ffffff;



          font-size:

            clamp(37px, 4vw, 55px);



          line-height: 1.05;



          letter-spacing: -1.7px;

        }



        .services-support-heading p {

          max-width: 600px;



          margin: 0 auto;



          color: #a9a9a9;



          font-size: 14px;



          line-height: 1.75;

        }



        .services-support-grid {

          position: relative;



          z-index: 2;



          display: grid;



          grid-template-columns:

            repeat(4, 1fr);



          gap: 20px;

        }



        .services-support-card {

          min-height: 270px;



          padding: 35px 24px;



          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;



          text-align: center;



          border:

            1px solid

            rgba(255,255,255,.09);



          border-radius: 17px;



          background:

            rgba(255,255,255,.035);



          transition:

            transform .35s ease,

            border-color .35s ease,

            background .35s ease;

        }



        .services-support-card:hover {

          transform: translateY(-8px);



          border-color:

            rgba(220,161,35,.45);



          background:

            rgba(255,255,255,.065);

        }



        .services-support-icon-wrap {

          width: 90px;

          height: 90px;



          position: relative;



          margin: 0 auto 22px;



          display: flex;

          align-items: center;

          justify-content: center;

        }



        .services-support-ring {

          position: absolute;



          inset: 0;



          border:

            1px solid

            rgba(224,165,42,.35);



          border-radius: 50%;



          animation:

            servicesRing

            2.8s ease-out

            infinite;

        }



        .services-support-ring.two {

          animation-delay: 1.4s;

        }



        @keyframes servicesRing {

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



        .services-support-icon {

          width: 65px;

          height: 65px;



          position: relative;



          z-index: 2;



          display: flex;

          align-items: center;

          justify-content: center;



          border-radius: 50%;



          color: #090909;



          background:

            linear-gradient(

              135deg,

              #f1c75e,

              #d69515

            );



          animation:

            servicesIconFloat

            3s ease-in-out

            infinite;

        }



        .services-support-card:nth-child(2)

        .services-support-icon {

          animation-delay: .5s;

        }



        .services-support-card:nth-child(3)

        .services-support-icon {

          animation-delay: 1s;

        }



        .services-support-card:nth-child(4)

        .services-support-icon {

          animation-delay: 1.5s;

        }



        @keyframes servicesIconFloat {

          0%,

          100% {

            transform: translateY(0);

          }



          50% {

            transform: translateY(-7px);

          }

        }



        .services-support-icon svg {

          width: 31px;

          height: 31px;



          stroke: currentColor;

        }



        .services-support-card h3 {

          margin: 0 0 9px;



          color: #ffffff;



          font-size: 16px;

          font-weight: 900;

        }



        .services-support-card p {

          margin: 0;



          color: #a7a7a7;



          font-size: 12px;



          line-height: 1.65;

        }



        /* =====================================================

           PROCESS

        ===================================================== */



        .services-process {

          padding: 110px 0;



          background: #ffffff;

        }



        .services-process-grid {

          display: grid;



          grid-template-columns:

            repeat(3, 1fr);



          gap: 24px;

        }



        .services-process-card {

          min-height: 270px;



          position: relative;



          padding: 38px 27px;



          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;



          text-align: center;



          border:

            1px solid #e5e5e5;



          border-radius: 17px;



          background: #ffffff;



          box-shadow:

            0 12px 35px

            rgba(0,0,0,.045);



          transition:

            transform .35s ease,

            border-color .35s ease,

            box-shadow .35s ease;

        }



        .services-process-card:hover {

          transform: translateY(-7px);



          border-color:

            rgba(216,154,25,.5);



          box-shadow:

            0 20px 45px

            rgba(0,0,0,.08);

        }



        .services-process-check-wrap {

          width: 78px;

          height: 78px;



          position: relative;



          margin: 0 auto 22px;



          display: flex;

          align-items: center;

          justify-content: center;

        }



        .services-process-pulse {

          position: absolute;



          inset: 0;



          border:

            1px solid

            rgba(215,153,25,.42);



          border-radius: 50%;



          animation:

            servicesProcessPulse

            2.5s ease-out

            infinite;

        }



        .services-process-pulse.two {

          animation-delay: 1.25s;

        }



        @keyframes servicesProcessPulse {

          0% {

            opacity: .9;

            transform: scale(.7);

          }



          100% {

            opacity: 0;

            transform: scale(1.35);

          }

        }



        .services-process-check {

          width: 56px;

          height: 56px;



          position: relative;



          z-index: 2;



          display: flex;

          align-items: center;

          justify-content: center;



          border-radius: 50%;



          color: #090909;



          background:

            linear-gradient(

              135deg,

              #f1c65d,

              #d79617

            );



          font-size: 22px;

          font-weight: 900;



          animation:

            servicesCheckFloat

            2.8s ease-in-out

            infinite;

        }



        @keyframes servicesCheckFloat {

          0%,

          100% {

            transform: translateY(0) scale(1);

          }



          50% {

            transform: translateY(-5px) scale(1.04);

          }

        }



        .services-process-card h3 {

          margin: 0 0 10px;



          color: #111111;



          font-size: 17px;

          font-weight: 900;

        }



        .services-process-card p {

          max-width: 280px;



          margin: 0;



          color: #747474;



          font-size: 13px;



          line-height: 1.7;

        }



        /* =====================================================

           CTA

        ===================================================== */



        .services-cta-section {

          padding:

            20px 0

            110px;



          background: #ffffff;

        }



        .services-cta {

          min-height: 370px;



          position: relative;



          overflow: hidden;



          padding: 70px;



          display: flex;

          align-items: center;

          justify-content: space-between;



          gap: 50px;



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



        .services-cta::before {

          content: "";



          position: absolute;



          width: 500px;

          height: 500px;



          top: -310px;

          right: -100px;



          border-radius: 50%;



          background:

            rgba(218,157,31,.18);



          animation:

            servicesCtaGlow

            4s ease-in-out

            infinite;

        }



        @keyframes servicesCtaGlow {

          0%,

          100% {

            transform: scale(.9);

            opacity: .5;

          }



          50% {

            transform: scale(1.15);

            opacity: 1;

          }

        }



        .services-cta-content {

          max-width: 730px;



          position: relative;



          z-index: 2;

        }



        .services-cta-label {

          display: block;



          margin-bottom: 13px;



          color: #dfa329;



          font-size: 11px;

          font-weight: 900;



          letter-spacing: 2px;



          text-transform: uppercase;

        }



        .services-cta h2 {

          margin: 0 0 17px;



          color: #ffffff;



          font-size:

            clamp(36px, 4vw, 54px);



          line-height: 1.06;



          letter-spacing: -1.7px;

        }



        .services-cta p {

          max-width: 620px;



          margin: 0;



          color: #aaa;



          font-size: 14px;



          line-height: 1.75;

        }



        .services-cta-action {

          position: relative;



          z-index: 2;



          flex-shrink: 0;

        }



        /* =====================================================

           TABLET

        ===================================================== */



        @media (max-width: 1050px) {



          .services-support-grid {

            grid-template-columns:

              repeat(2, 1fr);

          }



        }



        /* =====================================================

           MOBILE

        ===================================================== */



        @media (max-width: 700px) {



          .services-container {

            width: 100%;



            padding-left: 18px;

            padding-right: 18px;

          }



          /* HERO */



          .services-hero {

            min-height: 640px;



            align-items: flex-end;

          }



          .services-hero-image img {

            object-position: 62% center;



            filter:

              brightness(.64)

              contrast(1.08)

              saturate(.9);

          }



          .services-hero-overlay {

            background:

              linear-gradient(

                180deg,

                rgba(0,0,0,.20) 0%,

                rgba(0,0,0,.31) 26%,

                rgba(0,0,0,.69) 57%,

                rgba(0,0,0,.98) 100%

              );

          }



          .services-hero-content {

            padding:

              160px 0

              62px;

          }



          .services-breadcrumb {

            margin-bottom: 17px;



            font-size: 10px;

          }



          .services-hero-label {

            margin-bottom: 14px;



            font-size: 9px;



            letter-spacing: 2px;

          }



          .services-hero-label::before {

            width: 25px;

          }



          .services-hero h1 {

            max-width: 390px;



            font-size:

              clamp(42px, 12vw, 58px);



            line-height: .95;



            letter-spacing: -2px;

          }



          .services-hero-description {

            max-width: 380px;



            margin-top: 20px;



            font-size: 13.5px;



            line-height: 1.65;

          }



          .services-hero-buttons {

            display: grid;



            grid-template-columns:

              1fr 1fr;



            gap: 10px;



            margin-top: 25px;

          }



          .services-hero-buttons

          .services-primary-btn,

          .services-hero-buttons

          .services-outline-btn {

            width: 100%;



            min-height: 52px;



            padding: 0 10px;



            font-size: 12px;

          }



          /* MARQUEE */



          .services-marquee {

            padding: 21px 0;

          }



          .services-marquee-item {

            font-size: 11px;

          }



          .services-marquee-item::after {

            margin: 0 22px;

          }



          /* PRODUCTS */



          .services-products-section {

            padding: 78px 0;

          }



          .services-heading {

            margin-bottom: 42px;

          }



          .services-heading h2 {

            font-size: 35px;

          }



          .services-heading p {

            font-size: 13.5px;

          }



          .services-product-grid {

            grid-template-columns: 1fr;



            gap: 20px;

          }



          .services-product-card,

          .services-product-content {

            min-height: 520px;

          }



          .services-product-content {

            padding: 26px 22px;

          }



          .services-product-content h3 {

            max-width: 350px;



            font-size: 27px;

          }



          .services-enquire-btn {

            width: 100%;



            min-height: 55px;

          }



          /* SUPPORT */



          .services-support {

            padding: 78px 0;

          }



          .services-support-heading {

            margin-bottom: 40px;

          }



          .services-support-heading h2 {

            font-size: 35px;

          }



          .services-support-grid {

            grid-template-columns: 1fr;



            gap: 14px;

          }



          .services-support-card {

            min-height: 245px;

          }



          /* PROCESS */



          .services-process {

            padding: 78px 0;

          }



          .services-process-grid {

            grid-template-columns: 1fr;



            gap: 15px;

          }



          .services-process-card {

            min-height: 245px;

          }



          /* CTA */



          .services-cta-section {

            padding:

              10px 0

              75px;

          }



          .services-cta {

            min-height: auto;



            padding:

              48px 24px;



            flex-direction: column;



            align-items: flex-start;



            border-radius: 20px;

          }



          .services-cta h2 {

            font-size: 35px;

          }



          .services-cta-action {

            width: 100%;

          }



          .services-cta-action

          .services-primary-btn {

            width: 100%;

          }



        }



        /* =====================================================

           SMALL MOBILE

        ===================================================== */



        @media (max-width: 390px) {



          .services-container {

            padding-left: 15px;

            padding-right: 15px;

          }



          .services-hero h1 {

            font-size: 40px;

          }



          .services-hero-buttons {

            grid-template-columns: 1fr;

          }



          .services-heading h2,

          .services-support-heading h2 {

            font-size: 32px;

          }



          .services-product-card,

          .services-product-content {

            min-height: 490px;

          }



        }



        /* =====================================================

           REDUCED MOTION

        ===================================================== */



        @media (prefers-reduced-motion: reduce) {



          .services-reveal {

            opacity: 1 !important;

            transform: none !important;

            transition: none !important;

          }



          .services-hero-image img,

          .services-hero-glow,

          .services-marquee-track,

          .services-enquire-btn::before,

          .services-support-ring,

          .services-support-icon,

          .services-process-pulse,

          .services-process-check,

          .services-support::before,

          .services-cta::before {

            animation: none !important;

          }



        }



      
        /* =====================================================
           FINAL IMAGE VISIBILITY OVERRIDES
        ===================================================== */

        .complete-solution-image {
          height: 360px;
          min-height: 360px;
          background: #f4f4f2;
        }

        .complete-solution-image img {
          width: 100%;
          height: 100%;
          object-fit: contain !important;
          object-position: center center !important;
        }

        .services-product-image {
          background: #f4f4f2;
        }

        .services-product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain !important;
          object-position: center center !important;
          transform: none;
        }

        .services-product-card:hover .services-product-image img {
          transform: scale(1.015);
        }

        @media (max-width: 700px) {
          .complete-solution-image {
            height: 390px !important;
            min-height: 390px !important;
          }

          .complete-solution-image img {
            object-fit: contain !important;
          }

          .services-product-card,
          .services-product-content {
            min-height: 540px;
          }

          .services-product-image img {
            object-fit: contain !important;
            object-position: center center !important;
          }
        }

        @media (max-width: 390px) {
          .complete-solution-image {
            height: 350px !important;
            min-height: 350px !important;
          }

          .services-product-card,
          .services-product-content {
            min-height: 500px;
          }
        }


        /* FINAL: SHOW COMPLETE SOLUTION IMAGES */
        .complete-solution-image {
          height: 360px !important;
          min-height: 360px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f3 !important;
        }

        .complete-solution-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          object-position: center !important;
          transform: none !important;
        }

        .services-product-image {
          background: #f5f5f3 !important;
        }

        .services-product-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          object-position: center !important;
          transform: none !important;
        }

        @media (max-width: 700px) {
          .complete-solution-image {
            height: 390px !important;
            min-height: 390px !important;
          }

          .services-product-card,
          .services-product-content {
            min-height: 540px !important;
          }
        }

        @media (max-width: 390px) {
          .complete-solution-image {
            height: 350px !important;
            min-height: 350px !important;
          }

          .services-product-card,
          .services-product-content {
            min-height: 500px !important;
          }
        }

`}</style>



      <main

        className="jk-services"

        ref={pageRef}

      >



        {/* =====================================================

            HERO

        ===================================================== */}



        <section className="services-hero">



          <div className="services-hero-image">



            <FallbackImage

              src="/images/cuplock-scaffolding.webp"

              fallback={HERO_UNSPLASH}

              alt="JK Scaffoldings construction solutions"

              eager

            />



          </div>



          <div className="services-hero-overlay" />



          <div className="services-hero-glow" />



          <div className="services-container">



            <div className="services-hero-content">



              <div className="services-breadcrumb">



                <Link to="/">

                  Home

                </Link>



                <span>→</span>



                Services



              </div>



              <div className="services-hero-label">

                Scaffolding Solutions

              </div>



              <h1>

                Strong Solutions.

                <span>

                  Built to Support.

                </span>

              </h1>



              <p className="services-hero-description">

                Explore scaffolding and formwork support products for construction and infrastructure requirements across Vijayawada and surrounding areas including MG Road, Eluru Road, Auto Nagar, Patamata, Kanuru, Poranki, Penamaluru, Ramavarappadu, Kankipadu, Yanamalakuduru, Prasadampadu, Enikepadu, Gannavaram, Nunna, Gollapudi, Ibrahimpatnam, Tadepalli, Vaddeswaram, Mangalagiri, Amaravati, Guntur, Machilipatnam, Andhra Pradesh.

              </p>



              <div className="services-hero-buttons">



                <a

                  href="#our-solutions"

                  className="services-primary-btn"

                >

                  Explore Solutions

                  <span>↓</span>

                </a>



                <a

                  href={whatsappLink()}

                  target="_blank"

                  rel="noreferrer"

                  className="services-outline-btn"

                >

                  <WhatsAppIcon />



                  Enquire Now

                </a>



              </div>



            </div>



          </div>



          <div className="services-hero-bottom-line" />



        </section>



        {/* =====================================================

            CONTINUOUS PRODUCTS

        ===================================================== */}



        <section className="services-marquee">



          <div className="services-marquee-track">



            <ProductMarquee />



            <ProductMarquee />



          </div>



        </section>





        {/* =====================================================
            COMPLETE SCAFFOLDING SOLUTIONS
        ===================================================== */}
        <section className="complete-solutions" id="complete-scaffolding-solutions">
          <div className="services-container">
            <div className="services-heading services-reveal services-bottom">
              <div className="services-small-heading">Complete Scaffolding Solutions</div>
              <h2>Solutions for <span className="services-gold">Every Requirement.</span></h2>
              <p>Construction, industrial, high-rise, specialized, protection and event scaffolding solutions for different project requirements across Vijayawada and surrounding areas including MG Road, Eluru Road, Auto Nagar, Patamata, Kanuru, Poranki, Penamaluru, Ramavarappadu, Kankipadu, Yanamalakuduru, Prasadampadu, Enikepadu, Gannavaram, Nunna, Gollapudi, Ibrahimpatnam, Tadepalli, Vaddeswaram, Mangalagiri, Amaravati, Guntur, Machilipatnam, Andhra Pradesh.</p>
            </div>
            <div className="complete-solutions-grid">
              {scaffoldingServices.map((service, index) => (
                <article key={service.name} className={`complete-solution-card services-reveal ${index % 2 === 0 ? "services-left" : "services-right"}`}>
                  <div className="complete-solution-image">
                    <FallbackImage src={service.image} backup={service.backupImage} fallback={service.fallback} alt={service.name} />
                    <span className="complete-solution-category">{service.category}</span>
                  </div>
                  <div className="complete-solution-content">
                    <span className="complete-solution-number">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href={whatsappLink(service.name)} target="_blank" rel="noreferrer" className="complete-solution-btn">
                      <WhatsAppIcon /> Get Quote <span>→</span>
                    </a>
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

          className="services-products-section"

          id="our-solutions"

        >



          <div className="services-container">



            <div

              className="

                services-heading

                services-reveal

                services-bottom

              "

            >



              <div className="services-small-heading">

                Our Solutions

              </div>



              <h2>

                Built for Strength.

                <span className="services-gold">

                  {" "}Designed for the Site.

                </span>

              </h2>



              <p>
                Scaffolding and formwork solutions serving Vijayawada and surrounding areas including MG Road, Eluru Road, Auto Nagar, Patamata, Kanuru, Poranki, Penamaluru, Ramavarappadu, Kankipadu, Yanamalakuduru, Prasadampadu, Enikepadu, Gannavaram, Nunna, Gollapudi, Ibrahimpatnam, Tadepalli, Vaddeswaram, Mangalagiri, Amaravati, Guntur, Machilipatnam, Andhra Pradesh.
              </p>



            </div>



            <div className="services-product-grid">



              {products.map((product, index) => (



                <article

                  key={product.name}

                  className={`

                    services-product-card

                    services-reveal

                    ${

                      index % 2 === 0

                        ? "services-left"

                        : "services-right"

                    }

                  `}

                >



                  <div className="services-product-image">



                    <FallbackImage

                      src={product.image}

                      backup={product.backupImage}

                      fallback={product.fallback}

                      alt={product.name}

                    />



                  </div>



                  <div className="services-product-overlay" />



                  <div className="services-product-content">



                    <div className="services-product-name">

                      {product.name}

                    </div>



                    <h3>

                      {product.heading}

                    </h3>



                    <p>

                      {product.description}

                    </p>



                    <a

                      href={whatsappLink(product.name)}

                      target="_blank"

                      rel="noreferrer"

                      className="services-enquire-btn"

                    >



                      <WhatsAppIcon />



                      Enquire About {product.name}



                      <span className="services-btn-arrow">

                        →

                      </span>



                    </a>



                  </div>



                  <span className="services-product-gold-line" />



                </article>



              ))}



            </div>



          </div>



        </section>



        {/* =====================================================

            WHY JK

        ===================================================== */}



        <section className="services-support">



          <div className="services-container">



            <div

              className="

                services-support-heading

                services-reveal

                services-bottom

              "

            >



              <div className="services-small-heading">

                Why JK Scaffoldings

              </div>



              <h2>

                Support That Goes

                <span className="services-gold">

                  {" "}Beyond the Structure.

                </span>

              </h2>



              <p>

                Practical scaffolding solutions

                focused on construction support,

                product choice and simple enquiries.

              </p>



            </div>



            <div className="services-support-grid">



              <SupportCard

                icon={<ShieldIcon />}

                title="Reliable Support"

                text="Scaffolding solutions for practical construction and formwork requirements."

                direction="left"

              />



              <SupportCard

                icon={<ScaffoldIcon />}

                title="Product Range"

                text="Multiple scaffolding products for support, access and construction applications."

                direction="right"

              />



              <SupportCard

                icon={<WhatsAppOutlineIcon />}

                title="Easy Enquiry"

                text="Select the product you need and send your requirement directly through WhatsApp."

                direction="left"

              />



              <SupportCard

                icon={<LocationIcon />}

                title="Vijayawada Support"

                text="Scaffolding product enquiries for construction requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh."

                direction="right"

              />



            </div>



          </div>



        </section>



        {/* =====================================================

            PROCESS

        ===================================================== */}



        <section className="services-process">



          <div className="services-container">



            <div

              className="

                services-heading

                services-reveal

                services-bottom

              "

            >



              <div className="services-small-heading">

                Simple Enquiry Process

              </div>



              <h2>

                Your Requirement.

                <span className="services-gold">

                  {" "}Made Simple.

                </span>

              </h2>



              <p>

                Find the solution you need,

                share your requirement and

                continue the discussion directly.

              </p>



            </div>



            <div className="services-process-grid">



              <ProcessCard

                title="Choose Your Solution"

                text="Explore the available scaffolding products and select the solution relevant to your requirement."

                direction="left"

              />



              <ProcessCard

                title="Send Your Requirement"

                text="Use the enquiry button to open WhatsApp with the selected product already included."

                direction="bottom"

              />



              <ProcessCard

                title="Discuss the Details"

                text="Share quantities and project information to continue the product discussion."

                direction="right"

              />



            </div>



          </div>



        </section>



        {/* =====================================================

            CTA

        ===================================================== */}



        <section className="services-cta-section">



          <div className="services-container">



            <div

              className="

                services-cta

                services-reveal

                services-bottom

              "

            >



              <div className="services-cta-content">



                <span className="services-cta-label">

                  Need Scaffolding?

                </span>



                <h2>

                  Tell Us What Your

                  Project Needs.

                </h2>



                <p>

                  Share your scaffolding or formwork

                  requirement and connect directly

                  with JK Scaffoldings.

                </p>



              </div>



              <div className="services-cta-action">



                <a

                  href={whatsappLink()}

                  target="_blank"

                  rel="noreferrer"

                  className="services-primary-btn"

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

   SMART IMAGE FALLBACK



   ORDER:

   LOCAL -> BACKUP -> UNSPLASH

========================================================= */



function FallbackImage({

  src,

  backup,

  fallback,

  alt,

  eager = false,

}) {

  const [imageSrc, setImageSrc] = useState(src);

  const [step, setStep] = useState(0);



  const handleError = () => {



    /* Local image failed */

    if (step === 0 && backup) {

      setImageSrc(backup);

      setStep(1);

      return;

    }



    /*

      If there is no backup,

      go directly to Unsplash

    */

    if (step === 0 && !backup && fallback) {

      setImageSrc(fallback);

      setStep(2);

      return;

    }



    /* Backup image failed */

    if (step === 1 && fallback) {

      setImageSrc(fallback);

      setStep(2);

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

   MARQUEE

========================================================= */



function ProductMarquee() {

  return (

    <div className="services-marquee-group">



      {products.map((product) => (



        <div

          className="services-marquee-item"

          key={product.name}

        >

          {product.name}

        </div>



      ))}



    </div>

  );

}



/* =========================================================

   SUPPORT CARD

========================================================= */



function SupportCard({

  icon,

  title,

  text,

  direction,

}) {

  return (

    <article

      className={`

        services-support-card

        services-reveal

        ${

          direction === "left"

            ? "services-left"

            : "services-right"

        }

      `}

    >



      <div className="services-support-icon-wrap">



        <span className="services-support-ring" />



        <span className="services-support-ring two" />



        <div className="services-support-icon">

          {icon}

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

   PROCESS CARD

========================================================= */



function ProcessCard({

  title,

  text,

  direction,

}) {

  let animationClass = "services-bottom";



  if (direction === "left") {

    animationClass = "services-left";

  }



  if (direction === "right") {

    animationClass = "services-right";

  }



  return (

    <article

      className={`

        services-process-card

        services-reveal

        ${animationClass}

      `}

    >



      <div className="services-process-check-wrap">



        <span className="services-process-pulse" />



        <span className="services-process-pulse two" />



        <div className="services-process-check">

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



function ScaffoldIcon() {

  return (

    <svg

      viewBox="0 0 64 64"

      fill="none"

      strokeWidth="3"

    >

      <path d="M12 56V8M52 56V8" />

      <path d="M12 17h40M12 31h40M12 45h40" />

      <path d="m12 17 40 14M52 17 12 31" />

      <path d="m12 31 40 14M52 31 12 45" />

    </svg>

  );

}



function WhatsAppOutlineIcon() {

  return (

    <svg

      viewBox="0 0 64 64"

      fill="none"

      strokeWidth="3"

    >

      <path d="M32 9a22 22 0 0 0-19 33L9 55l13-4a22 22 0 1 0 10-42Z" />

      <path d="M23 21c2 9 10 17 20 20" />

      <path d="m23 21 4-2 4 7-3 3" />

      <path d="m43 41 2-4-7-4-3 3" />

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



      <circle

        cx="32"

        cy="24"

        r="7"

      />

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



export default Services;