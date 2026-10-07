import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

/* =========================================================

   SETTINGS

\\========================================================= */

const WHATSAPP_NUMBER = "916303819983";
/* =========================================================

   IMAGE FALLBACKS

\\========================================================= */

const HERO_FALLBACK =

  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90";

const ABOUT_FALLBACK =

  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90";

const SUPPORT_FALLBACK =

  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90";

/* =========================================================

   ABOUT PAGE

\\========================================================= */

function AboutUs() {

  const pageRef = useRef(null);

  useEffect(() => {

    const root = pageRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(".about-reveal");

    const reducedMotion = window.matchMedia(

      "(prefers-reduced-motion: reduce)"

    ).matches;

    if (reducedMotion) {

      elements.forEach((element) => {

        element.classList.add("about-visible");

      });

      return;

    }

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("about-visible");

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

  const whatsappLink = () => {

    const message =

      "Hello JK Scaffoldings, I have a scaffolding requirement. Please share more details.";

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

        .jk-about-page,

        .jk-about-page * {

          box-sizing: border-box;

        }

        .jk-about-page {

          width: 100%;

          overflow: hidden;

          background: #ffffff;

          color: #090909;

          font-family:

            Arial,

            Helvetica,

            sans-serif;

        }

        .about-container {

          width: 90%;

          max-width: 1400px;

          margin: 0 auto;

        }

        .about-gold {

          color: #d99a18;

        }

        /* =====================================================

           REVEAL ANIMATIONS

        ===================================================== */

        .about-reveal {

          opacity: 0;

          transition:

            opacity .85s ease,

            transform .85s cubic-bezier(.22,1,.36,1);

        }

        .about-from-left {

          transform: translateX(-55px);

        }

        .about-from-right {

          transform: translateX(55px);

        }

        .about-from-bottom {

          transform: translateY(45px);

        }

        .about-visible {

          opacity: 1;

          transform: translate(0,0);

        }

        /* =====================================================

           HERO

        ===================================================== */

        .about-hero {

          min-height: 540px;

          position: relative;

          display: flex;

          align-items: center;

          overflow: hidden;

          background: #090909;

        }

        .about-hero-image {

          position: absolute;

          inset: 0;

          z-index: 0;

        }

        .about-hero-image img {

          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          filter:

            contrast(1.08)

            saturate(.85)

            brightness(.70);

          animation:

            aboutHeroZoom

            14s ease-in-out

            infinite alternate;

        }

        @keyframes aboutHeroZoom {

          from {

            transform: scale(1);

          }

          to {

            transform: scale(1.06);

          }

        }

        .about-hero-overlay {

          position: absolute;

          inset: 0;

          z-index: 1;

          background:

            linear-gradient(

              90deg,

              rgba(0,0,0,.92) 0%,

              rgba(0,0,0,.79) 35%,

              rgba(0,0,0,.45) 67%,

              rgba(0,0,0,.28) 100%

            ),

            linear-gradient(

              180deg,

              rgba(0,0,0,.12),

              rgba(0,0,0,.5)

            );

        }

        .about-hero-glow {

          position: absolute;

          z-index: 2;

          width: 480px;

          height: 480px;

          left: -160px;

          bottom: -250px;

          border-radius: 50%;

          background:

            rgba(219,157,31,.22);

          filter: blur(100px);

          animation:

            aboutGlow

            5s ease-in-out

            infinite;

        }

        @keyframes aboutGlow {

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

        .about-hero-line {

          position: absolute;

          z-index: 2;

          left: 0;

          bottom: 0;

          width: 100%;

          height: 4px;

          background:

            linear-gradient(

              90deg,

              transparent,

              #d89a18,

              #f0c457,

              #d89a18,

              transparent

            );

        }

        .about-hero-inner {

          position: relative;

          z-index: 3;

          width: 100%;

          padding: 56px 0;

        }

        .about-hero-content {

          max-width: 800px;

          animation:

            aboutHeroContent

            .9s cubic-bezier(.22,1,.36,1)

            both;

        }

        @keyframes aboutHeroContent {

          from {

            opacity: 0;

            transform: translateX(-35px);

          }

          to {

            opacity: 1;

            transform: translateX(0);

          }

        }

        .about-breadcrumb {

          margin-bottom: 25px;

          display: flex;

          align-items: center;

          gap: 10px;

          color: #d8d8d8;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 1px;

        }

        .about-breadcrumb a {

          color: #ffffff;

          text-decoration: none;

          transition: color .3s ease;

        }

        .about-breadcrumb a:hover {

          color: #e0a52b;

        }

        .about-breadcrumb span {

          color: #dda126;

        }

        .about-hero-label {

          margin-bottom: 18px;

          display: flex;

          align-items: center;

          gap: 12px;

          color: #e2a72b;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 3px;

          text-transform: uppercase;

        }

        .about-hero-label::before {

          content: "";

          width: 38px;

          height: 2px;

          background: #e0a329;

        }

        .about-hero h1 {

          max-width: 780px;

          margin: 0;

          color: #ffffff;

          font-family:

            Georgia,

            "Times New Roman",

            serif;

          font-size:

            clamp(54px,6vw,88px);

          line-height: .97;

          letter-spacing: -3px;

          text-transform: uppercase;

        }

        .about-hero h1 span {

          display: block;

          margin-top: 5px;

          color: #dfa329;

        }

        .about-hero-description {

          max-width: 650px;

          margin: 26px 0 0;

          color: #d0d0d0;

          font-size: 17px;

          line-height: 1.75;

        }

        .about-hero-actions {

          margin-top: 33px;

          display: flex;

          align-items: center;

          gap: 15px;

          flex-wrap: wrap;

        }

        .about-primary-btn,

        .about-outline-btn {

          min-height: 57px;

          padding: 0 31px;

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

        .about-primary-btn {

          background:

            linear-gradient(

              135deg,

              #f0c457,

              #d79719

            );

          color: #080808;

          box-shadow:

            0 14px 34px

            rgba(210,150,25,.25);

        }

        .about-primary-btn:hover {

          transform: translateY(-4px);

          box-shadow:

            0 19px 40px

            rgba(210,150,25,.34);

        }

        .about-outline-btn {

          border:

            1px solid

            rgba(255,255,255,.65);

          color: #ffffff;

          background:

            rgba(255,255,255,.06);

          backdrop-filter:

            blur(10px);

        }

        .about-outline-btn:hover {

          transform: translateY(-4px);

          background: #ffffff;

          color: #090909;

        }

        /* =====================================================

           COMMON SECTION

        ===================================================== */

        .about-section {

          padding: 62px 0;

        }

        .about-soft {

          background: #f8f8f6;

        }

        .about-dark {

          position: relative;

          overflow: hidden;

          background:

            radial-gradient(

              circle at 50% 0%,

              #242424,

              #070707 62%

            );

          color: #ffffff;

        }

        .about-section-heading {

          max-width: 780px;

          margin: 0 auto 30px;

          text-align: center;

        }

        .about-small-heading {

          margin-bottom: 14px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 11px;

          color: #c8870d;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 2.5px;

          text-transform: uppercase;

        }

        .about-small-heading::before,

        .about-small-heading::after {

          content: "";

          width: 28px;

          height: 1px;

          background: #d99a18;

        }

        .about-section-heading h2 {

          margin: 0 0 17px;

          color: #080808;

          font-size:

            clamp(36px,4vw,54px);

          line-height: 1.07;

          letter-spacing: -1.8px;

          font-weight: 900;

        }

        .about-section-heading p {

          max-width: 650px;

          margin: 0 auto;

          color: #707070;

          font-size: 15px;

          line-height: 1.75;

        }

        .about-dark

        .about-section-heading h2 {

          color: #ffffff;

        }

        .about-dark

        .about-section-heading p {

          color: #aaaaaa;

        }

        /* =====================================================

           WHO WE ARE

        ===================================================== */

        .about-story-grid {

          display: grid;

          grid-template-columns:

            1.03fr .97fr;

          gap: 42px;

          align-items: center;

        }

        .about-story-image {

          min-height: 590px;

          position: relative;

          overflow: hidden;

          border-radius:

            4px 70px 4px 4px;

          background: #eeeeee;

          box-shadow:

            0 30px 70px

            rgba(0,0,0,.13);

        }

        .about-story-image img {

          width: 100%;

          height: 590px;

          display: block;

          object-fit: cover;

          transition:

            transform .9s

            cubic-bezier(.22,1,.36,1);

        }

        .about-story-image:hover img {

          transform: scale(1.055);

        }

        .about-story-image::after {

          content: "";

          position: absolute;

          inset: 0;

          background:

            linear-gradient(

              180deg,

              transparent 50%,

              rgba(0,0,0,.65)

            );

        }

        .about-story-frame {

          position: absolute;

          z-index: 3;

          left: 20px;

          top: 20px;

          right: 20px;

          bottom: 20px;

          border:

            1px solid

            rgba(230,171,46,.5);

          pointer-events: none;

        }

        .about-story-badge {

          position: absolute;

          z-index: 4;

          left: 35px;

          bottom: 35px;

          max-width: 330px;

          padding: 25px;

          border-left:

            4px solid #dfa329;

          background:

            rgba(5,5,5,.90);

          backdrop-filter:

            blur(10px);

        }

        .about-story-badge strong {

          display: block;

          margin-bottom: 7px;

          color: #e1a62c;

          font-size: 20px;

          font-weight: 900;

        }

        .about-story-badge span {

          color: #d0d0d0;

          font-size: 13px;

          line-height: 1.65;

        }

        .about-story-content h2 {

          margin: 0 0 23px;

          font-size:

            clamp(37px,4vw,55px);

          line-height: 1.06;

          letter-spacing: -2px;

          font-weight: 900;

        }

        .about-story-content > p {

          margin: 0 0 17px;

          color: #686868;

          font-size: 15px;

          line-height: 1.85;

        }

        .about-story-points {

          margin: 31px 0;

          display: grid;

          grid-template-columns:

            repeat(2,1fr);

          gap: 14px;

        }

        .about-story-point {

          min-height: 74px;

          padding: 16px;

          display: flex;

          align-items: center;

          gap: 12px;

          border:

            1px solid #e6e6e6;

          background: #ffffff;

          transition:

            transform .3s ease,

            border-color .3s ease,

            box-shadow .3s ease;

        }

        .about-story-point:hover {

          transform: translateY(-4px);

          border-color:

            rgba(215,153,27,.55);

          box-shadow:

            0 13px 30px

            rgba(0,0,0,.06);

        }

        .about-story-check {

          width: 37px;

          height: 37px;

          min-width: 37px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:

            rgba(218,157,32,.12);

          color: #b37805;

          font-size: 16px;

          font-weight: 900;

          animation:

            aboutCheckPulse

            2.5s ease-in-out

            infinite;

        }

        @keyframes aboutCheckPulse {

          0%,

          100% {

            transform: scale(1);

          }

          50% {

            transform: scale(1.08);

          }

        }

        .about-story-point span:last-child {

          color: #171717;

          font-size: 13px;

          font-weight: 800;

          line-height: 1.4;

        }

        /* =====================================================

           PRODUCT STRIP

        ===================================================== */

        .about-products-strip {

          position: relative;

          overflow: hidden;

          padding: 20px 0;

          background: #d99a18;

        }

        .about-products-track {

          width: max-content;

          display: flex;

          animation:

            aboutMarquee

            24s linear

            infinite;

        }

        .about-products-group {

          display: flex;

          align-items: center;

          flex-shrink: 0;

        }

        .about-products-item {

          display: flex;

          align-items: center;

          white-space: nowrap;

          color: #090909;

          font-size: 14px;

          font-weight: 900;

          letter-spacing: 1px;

          text-transform: uppercase;

        }

        .about-products-item::after {

          content: "✦";

          margin: 0 34px;

          color: rgba(0,0,0,.52);

          font-size: 13px;

        }

        @keyframes aboutMarquee {

          from {

            transform: translateX(0);

          }

          to {

            transform: translateX(-50%);

          }

        }

        /* =====================================================

           WHY SECTION

        ===================================================== */

        .about-values-grid {

          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns:

            repeat(4,1fr);

          gap: 22px;

        }

        .about-value-card {

          min-height: 310px;

          padding: 42px 25px 34px;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          border:

            1px solid

            rgba(255,255,255,.09);

          border-radius: 19px;

          background:

            rgba(255,255,255,.035);

          transition:

            transform .4s ease,

            background .4s ease,

            border-color .4s ease;

        }

        .about-value-card:hover {

          transform: translateY(-9px);

          background:

            rgba(255,255,255,.065);

          border-color:

            rgba(222,164,41,.5);

        }

        .about-value-icon-wrap {

          width: 94px;

          height: 94px;

          position: relative;

          margin: 0 auto 25px;

          display: flex;

          align-items: center;

          justify-content: center;

        }

        .about-value-ring {

          position: absolute;

          inset: 0;

          border:

            1px solid

            rgba(223,164,39,.35);

          border-radius: 50%;

          animation:

            aboutRing

            3s ease-out

            infinite;

        }

        .about-value-ring.second {

          animation-delay: 1.5s;

        }

        @keyframes aboutRing {

          0% {

            opacity: 0;

            transform: scale(.7);

          }

          25% {

            opacity: .8;

          }

          100% {

            opacity: 0;

            transform: scale(1.2);

          }

        }

        .about-value-icon {

          width: 68px;

          height: 68px;

          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:

            linear-gradient(

              135deg,

              #f0c456,

              #d69718

            );

          color: #090909;

          box-shadow:

            0 12px 30px

            rgba(211,151,27,.2);

          animation:

            aboutValueFloat

            3s ease-in-out

            infinite;

        }

        .about-value-card:nth-child(2)

        .about-value-icon {

          animation-delay: .4s;

        }

        .about-value-card:nth-child(3)

        .about-value-icon {

          animation-delay: .8s;

        }

        .about-value-card:nth-child(4)

        .about-value-icon {

          animation-delay: 1.2s;

        }

        @keyframes aboutValueFloat {

          0%,

          100% {

            transform: translateY(0);

          }

          50% {

            transform: translateY(-7px);

          }

        }

        .about-value-icon svg {

          width: 34px;

          height: 34px;

          stroke: currentColor;

        }

        .about-value-card h3 {

          margin: 0 0 12px;

          color: #ffffff;

          font-size: 18px;

          font-weight: 900;

        }

        .about-value-card p {

          margin: 0;

          color: #a9a9a9;

          font-size: 13px;

          line-height: 1.75;

        }

        /* =====================================================

           APPROACH

        ===================================================== */

        .about-approach-grid {

          display: grid;

          grid-template-columns:

            .92fr 1.08fr;

          gap: 40px;

          align-items: center;

        }

        .about-approach-content h2 {

          margin: 0 0 23px;

          font-size:

            clamp(37px,4vw,54px);

          line-height: 1.07;

          letter-spacing: -1.8px;

          font-weight: 900;

        }

        .about-approach-content > p {

          margin: 0 0 28px;

          color: #6c6c6c;

          font-size: 15px;

          line-height: 1.85;

        }

        .about-approach-list {

          display: grid;

          gap: 13px;

        }

        .about-approach-item {

          position: relative;

          overflow: hidden;

          padding: 20px 20px;

          display: flex;

          align-items: center;

          gap: 15px;

          border:

            1px solid #e5e5e5;

          border-radius: 12px;

          background: #ffffff;

          transition:

            transform .3s ease,

            border-color .3s ease,

            box-shadow .3s ease;

        }

        .about-approach-item::before {

          content: "";

          position: absolute;

          left: 0;

          top: 0;

          bottom: 0;

          width: 3px;

          background: #d99a18;

        }

        .about-approach-item:hover {

          transform: translateX(6px);

          border-color:

            rgba(215,153,26,.5);

          box-shadow:

            0 10px 25px

            rgba(0,0,0,.05);

        }

        .about-approach-number {

          width: 42px;

          height: 42px;

          min-width: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #0b0b0b;

          color: #e1a42a;

          font-size: 13px;

          font-weight: 900;

        }

        .about-approach-text strong {

          display: block;

          margin-bottom: 4px;

          color: #111111;

          font-size: 14px;

        }

        .about-approach-text span {

          color: #777777;

          font-size: 12px;

          line-height: 1.5;

        }

        .about-approach-image {

          min-height: 570px;

          position: relative;

          overflow: hidden;

          border-radius:

            60px 4px 4px 4px;

          background: #eeeeee;

          box-shadow:

            0 28px 65px

            rgba(0,0,0,.12);

        }

        .about-approach-image img {

          width: 100%;

          height: 570px;

          display: block;

          object-fit: cover;

          transition:

            transform .8s ease;

        }

        .about-approach-image:hover img {

          transform: scale(1.05);

        }

        .about-approach-image::after {

          content: "";

          position: absolute;

          inset: 0;

          background:

            linear-gradient(

              180deg,

              transparent 55%,

              rgba(0,0,0,.65)

            );

        }

        .about-approach-floating {

          position: absolute;

          z-index: 3;

          left: 27px;

          right: 27px;

          bottom: 27px;

          padding: 23px;

          border:

            1px solid

            rgba(255,255,255,.15);

          border-radius: 13px;

          background:

            rgba(8,8,8,.88);

          backdrop-filter:

            blur(12px);

        }

        .about-approach-floating span {

          display: block;

          margin-bottom: 6px;

          color: #dca126;

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 1.5px;

          text-transform: uppercase;

        }

        .about-approach-floating strong {

          color: #ffffff;

          font-size: 19px;

          line-height: 1.4;

        }

        /* =====================================================

           LOCATION / VIJAYAWADA

        ===================================================== */

        .about-location {

          padding: 56px 0;

          position: relative;

          overflow: hidden;

          background:

            linear-gradient(

              135deg,

              #d79718,

              #f1c45a

            );

        }

        .about-location::before {

          content: "";

          position: absolute;

          width: 420px;

          height: 420px;

          top: -220px;

          right: -100px;

          border:

            1px solid

            rgba(0,0,0,.14);

          border-radius: 50%;

          animation:

            aboutLocationCircle

            5s ease-in-out

            infinite;

        }

        .about-location::after {

          content: "";

          position: absolute;

          width: 250px;

          height: 250px;

          bottom: -150px;

          left: -70px;

          border:

            1px solid

            rgba(0,0,0,.12);

          border-radius: 50%;

        }

        @keyframes aboutLocationCircle {

          0%,

          100% {

            transform: scale(1);

          }

          50% {

            transform: scale(1.12);

          }

        }

        .about-location-inner {

          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns:

            1fr auto;

          gap: 30px;

          align-items: center;

        }

        .about-location-label {

          display: block;

          margin-bottom: 11px;

          color: rgba(0,0,0,.68);

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;

        }

        .about-location h2 {

          max-width: 750px;

          margin: 0 0 13px;

          color: #080808;

          font-size:

            clamp(35px,4vw,52px);

          line-height: 1.07;

          letter-spacing: -1.7px;

        }

        .about-location p {

          max-width: 720px;

          margin: 0;

          color: rgba(0,0,0,.72);

          font-size: 14px;

          line-height: 1.7;

        }

        .about-location-icon {

          width: 120px;

          height: 120px;

          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          border:

            1px solid

            rgba(0,0,0,.2);

          border-radius: 50%;

          background:

            rgba(255,255,255,.2);

          animation:

            aboutLocationFloat

            3s ease-in-out

            infinite;

        }

        @keyframes aboutLocationFloat {

          0%,

          100% {

            transform: translateY(0);

          }

          50% {

            transform: translateY(-9px);

          }

        }

        .about-location-icon svg {

          width: 53px;

          height: 53px;

          stroke: #080808;

        }

        /* =====================================================

           CTA

        ===================================================== */

        .about-cta-section {

          padding: 58px 0;

          background: #ffffff;

        }

        .about-cta {

          min-height: 350px;

          position: relative;

          overflow: hidden;

          padding: 52px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 55px;

          border-radius: 27px;

          background:

            linear-gradient(

              120deg,

              #050505,

              #191919

            );

          box-shadow:

            0 25px 60px

            rgba(0,0,0,.13);

        }

        .about-cta::before {

          content: "";

          position: absolute;

          width: 470px;

          height: 470px;

          top: -280px;

          right: -110px;

          border-radius: 50%;

          background:

            rgba(218,158,31,.18);

          filter: blur(15px);

          animation:

            aboutCtaGlow

            4s ease-in-out

            infinite;

        }

        @keyframes aboutCtaGlow {

          0%,

          100% {

            opacity: .55;

            transform: scale(.9);

          }

          50% {

            opacity: 1;

            transform: scale(1.12);

          }

        }

        .about-cta-content {

          position: relative;

          z-index: 2;

          max-width: 720px;

        }

        .about-cta-label {

          display: block;

          margin-bottom: 13px;

          color: #dfa52a;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;

        }

        .about-cta h2 {

          margin: 0 0 16px;

          color: #ffffff;

          font-size:

            clamp(34px,4vw,52px);

          line-height: 1.08;

          letter-spacing: -1.6px;

        }

        .about-cta p {

          max-width: 620px;

          margin: 0;

          color: #aaaaaa;

          font-size: 14px;

          line-height: 1.75;

        }

        .about-cta-action {

          position: relative;

          z-index: 2;

          flex-shrink: 0;

        }

        /* =====================================================

           TABLET

        ===================================================== */

        @media (max-width: 1100px) {

          .about-story-grid,

          .about-approach-grid {

            gap: 45px;

          }

          .about-values-grid {

            grid-template-columns:

              repeat(2,1fr);

          }

          .about-hero h1 {

            font-size: 66px;

          }

        }

        /* =====================================================

           MOBILE

        ===================================================== */

        @media (max-width: 700px) {

          .about-container {

            width: 100%;

            padding-left: 19px;

            padding-right: 19px;

          }

          /* HERO */

          .about-hero {

            min-height: 540px;

            align-items: flex-end;

          }

          .about-hero-image img {

            object-position: 62% center;

            filter:

              contrast(1.05)

              saturate(.85)

              brightness(.65);

          }

          .about-hero-overlay {

            background:

              linear-gradient(

                180deg,

                rgba(0,0,0,.30) 0%,

                rgba(0,0,0,.38) 25%,

                rgba(0,0,0,.72) 57%,

                rgba(0,0,0,.97) 100%

              );

          }

          .about-hero-inner {

            padding:

              165px 0

              65px;

          }

          .about-breadcrumb {

            margin-bottom: 18px;

            font-size: 10px;

          }

          .about-hero-label {

            margin-bottom: 14px;

            font-size: 9px;

            letter-spacing: 2px;

          }

          .about-hero-label::before {

            width: 25px;

          }

          .about-hero h1 {

            max-width: 370px;

            font-size:

              clamp(42px,12vw,57px);

            line-height: .96;

            letter-spacing: -2px;

          }

          .about-hero-description {

            max-width: 370px;

            margin-top: 20px;

            font-size: 13.5px;

            line-height: 1.65;

          }

          .about-hero-actions {

            display: grid;

            grid-template-columns:

              1fr 1fr;

            gap: 10px;

            margin-top: 25px;

          }

          .about-hero-actions

          .about-primary-btn,

          .about-hero-actions

          .about-outline-btn {

            width: 100%;

            min-height: 51px;

            padding: 0 12px;

            font-size: 12px;

          }

          /* SECTIONS */

          .about-section {

            padding: 60px 0;

          }

          .about-section-heading {

            margin-bottom: 30px;

          }

          .about-section-heading h2 {

            font-size: 34px;

          }

          .about-section-heading p {

            font-size: 13.5px;

          }

          /* STORY */

          .about-story-grid {

            grid-template-columns: 1fr;

            gap: 30px;

          }

          .about-story-image,

          .about-story-image img {

            min-height: 430px;

            height: 430px;

          }

          .about-story-image {

            border-radius:

              4px 38px 4px 4px;

          }

          .about-story-frame {

            left: 12px;

            top: 12px;

            right: 12px;

            bottom: 12px;

          }

          .about-story-badge {

            left: 22px;

            right: 22px;

            bottom: 22px;

            max-width: none;

            padding: 20px;

          }

          .about-story-badge strong {

            font-size: 17px;

          }

          .about-story-content h2 {

            font-size: 36px;

          }

          .about-story-content > p {

            font-size: 14px;

          }

          .about-story-points {

            grid-template-columns: 1fr;

          }

          /* MARQUEE */

          .about-products-strip {

            padding: 22px 0;

          }

          .about-products-item {

            font-size: 11px;

          }

          .about-products-item::after {

            margin: 0 22px;

          }

          /* VALUES */

          .about-values-grid {

            grid-template-columns: 1fr;

          }

          .about-value-card {

            min-height: 280px;

          }

          /* APPROACH */

          .about-approach-grid {

            grid-template-columns: 1fr;

            gap: 30px;

          }

          .about-approach-content h2 {

            font-size: 36px;

          }

          .about-approach-image,

          .about-approach-image img {

            min-height: 430px;

            height: 430px;

          }

          .about-approach-image {

            border-radius:

              38px 4px 4px 4px;

          }

          .about-approach-floating {

            left: 18px;

            right: 18px;

            bottom: 18px;

            padding: 19px;

          }

          .about-approach-floating strong {

            font-size: 16px;

          }

          /* LOCATION */

          .about-location {

            padding: 58px 0;

          }

          .about-location-inner {

            grid-template-columns: 1fr;

            gap: 32px;

          }

          .about-location h2 {

            font-size: 35px;

          }

          .about-location-icon {

            width: 90px;

            height: 90px;

          }

          .about-location-icon svg {

            width: 40px;

            height: 40px;

          }

          /* CTA */

          .about-cta-section {

            padding: 60px 0;

          }

          .about-cta {

            min-height: auto;

            padding:

              47px 24px;

            flex-direction: column;

            align-items: flex-start;

            border-radius: 20px;

          }

          .about-cta h2 {

            font-size: 34px;

          }

          .about-cta-action {

            width: 100%;

          }

          .about-cta-action

          .about-primary-btn {

            width: 100%;

          }

        }

        /* =====================================================

           SMALL MOBILE

        ===================================================== */

        @media (max-width: 390px) {

          .about-container {

            padding-left: 15px;

            padding-right: 15px;

          }

          .about-hero h1 {

            font-size: 40px;

          }

          .about-hero-actions {

            grid-template-columns: 1fr;

          }

          .about-story-content h2,

          .about-approach-content h2 {

            font-size: 32px;

          }

          .about-location h2 {

            font-size: 31px;

          }

        }

        /* =====================================================

           REDUCED MOTION

        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .about-reveal {

            opacity: 1 !important;

            transform: none !important;

            transition: none !important;

          }

          .about-hero-image img,

          .about-hero-glow,

          .about-products-track,

          .about-story-check,

          .about-value-ring,

          .about-value-icon,

          .about-location-icon,

          .about-location::before,

          .about-cta::before {

            animation: none !important;

          }

        }

      `}</style>

      <main

        className="jk-about-page"

        ref={pageRef}

      >

        {/* =====================================================

            HERO

        ===================================================== */}

        <section className="about-hero">

          <div className="about-hero-image">

            <FallbackImage

              src="/images/cuplock-scaffolding.webp"

              fallback={HERO_FALLBACK}

              alt="JK Scaffoldings construction solutions"

              eager

            />

          </div>

          <div className="about-hero-overlay" />

          <div className="about-hero-glow" />

          <div className="about-container about-hero-inner">

            <div className="about-hero-content">

              <div className="about-breadcrumb">

                <Link to="/">

                  Home

                </Link>

                <span>→</span>

                About Us

              </div>

              <div className="about-hero-label">

                About JK Scaffoldings

              </div>

              <h1>

                Strong Support.

                <span>

                  Built for Construction.

                </span>

              </h1>

              <p className="about-hero-description">

                Scaffolding and formwork support

                solutions for construction and

                infrastructure requirements in

                Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.

              </p>

              <div className="about-hero-actions">

                <a

                  href={whatsappLink()}

                  target="_blank"

                  rel="noreferrer"

                  className="about-primary-btn"

                >

                  <WhatsAppIcon />

                  Enquire Now

                </a>

                <Link

                  to="/services"

                  className="about-outline-btn"

                >

                  Explore Products

                  <span>→</span>

                </Link>

              </div>

            </div>

          </div>

          <div className="about-hero-line" />

        </section>

        {/* =====================================================

            WHO WE ARE

        ===================================================== */}

        <section className="about-section">

          <div className="about-container">

            <div className="about-story-grid">

              <div

                className="

                  about-story-image

                  about-reveal

                  about-from-left

                "

              >

                <FallbackImage

                  src="/images/about-scaffolding.webp"

                  fallback={ABOUT_FALLBACK}

                  alt="Scaffolding construction work"

                />

                <div className="about-story-frame" />

                <div className="about-story-badge">

                  <strong>

                    Construction Support

                  </strong>

                  <span>

                    Practical scaffolding and

                    formwork products for different

                    construction requirements.

                  </span>

                </div>

              </div>

              <div

                className="

                  about-story-content

                  about-reveal

                  about-from-right

                "

              >

                <div className="about-small-heading">

                  Who We Are

                </div>

                <h2>

                  Scaffolding Solutions

                  <span className="about-gold">

                    {" "}Made Practical.

                  </span>

                </h2>

                <p>

                  JK Scaffoldings provides scaffolding

                  and formwork support products for

                  construction and infrastructure

                  requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.

                </p>

                <p>

                  Our product range includes solutions

                  for structural support, formwork,

                  working access and adjustable

                  scaffolding requirements.

                </p>

                <p>

                  From individual product enquiries to

                  larger project requirements, customers

                  can share their needs directly and

                  discuss suitable product options.

                </p>

                <div className="about-story-points">

                  <StoryPoint

                    text="Scaffolding Products"

                  />

                  <StoryPoint

                    text="Formwork Support"

                  />

                  <StoryPoint

                    text="Construction Solutions"

                  />

                  <StoryPoint

                    text="Direct Enquiries"

                  />

                </div>

                <Link

                  to="/services"

                  className="about-primary-btn"

                >

                  View Our Solutions

                  <span>→</span>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================

            CONTINUOUS PRODUCTS

        ===================================================== */}

        <section

          className="about-products-strip"

          aria-label="JK Scaffoldings products"

        >

          <div className="about-products-track">

            <ProductGroup />

            <ProductGroup />

          </div>

        </section>

        {/* =====================================================

            WHY JK SCAFFOLDINGs

        ===================================================== */}

        <section className="about-section about-dark">

          <div className="about-container">

            <div

              className="

                about-section-heading

                about-reveal

                about-from-bottom

              "

            >

              <div className="about-small-heading">

                Why JK Scaffoldings

              </div>

              <h2>

                Built Around

                <span className="about-gold">

                  {" "}Construction Needs.

                </span>

              </h2>

              <p>

                A practical approach to scaffolding,

                formwork support and direct product

                enquiries.

              </p>

            </div>

            <div className="about-values-grid">

              <ValueCard

                icon={<ShieldIcon />}

                title="Reliable Products"

                text="Scaffolding and formwork products focused on practical construction requirements."

                direction="left"

              />

              <ValueCard

                icon={<StructureIcon />}

                title="Multiple Solutions"

                text="A product range covering support, access and formwork applications."

                direction="right"

              />

              <ValueCard

                icon={<ChatIcon />}

                title="Direct Enquiry"

                text="Connect directly through WhatsApp and share the products you require."

                direction="left"

              />

              <ValueCard

                icon={<LocationIcon />}

                title="Vijayawada"

                text="Scaffolding support for construction requirements in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh."

                direction="right"

              />

            </div>

          </div>

        </section>

        {/* =====================================================

            OUR APPROACH

        ===================================================== */}

        <section className="about-section about-soft">

          <div className="about-container">

            <div className="about-approach-grid">

              <div

                className="

                  about-approach-content

                  about-reveal

                  about-from-left

                "

              >

                <div className="about-small-heading">

                  Our Approach

                </div>

                <h2>

                  From Requirement to

                  <span className="about-gold">

                    {" "}Right Solution.

                  </span>

                </h2>

                <p>

                  Every construction requirement can

                  be different. Our approach keeps the

                  enquiry process simple and focused

                  on understanding the products needed

                  for the project.

                </p>

                <div className="about-approach-list">

                  <ApproachItem

                    number="01"

                    title="Understand the Requirement"

                    text="Share your construction, scaffolding or formwork requirement."

                  />

                  <ApproachItem

                    number="02"

                    title="Identify Product Options"

                    text="Discuss suitable products based on the requirement."

                  />

                  <ApproachItem

                    number="03"

                    title="Share Project Details"

                    text="Provide quantities and other relevant project information."

                  />

                  <ApproachItem

                    number="04"

                    title="Continue the Discussion"

                    text="Connect directly for further product and requirement details."

                  />

                </div>

              </div>

              <div

                className="

                  about-approach-image

                  about-reveal

                  about-from-right

                "

              >

                <FallbackImage

                  src="/images/poll-scaffolding.webp"

                  fallback={SUPPORT_FALLBACK}

                  alt="Construction and scaffolding support"

                />

                <div className="about-approach-floating">

                  <span>

                    JK Scaffoldings

                  </span>

                  <strong>

                    Strong support starts with the

                    right scaffolding solution.

                  </strong>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================

            VIJAYAWADA

        ===================================================== */}

        <section className="about-location">

          <div className="about-container">

            <div className="about-location-inner">

              <div

                className="

                  about-reveal

                  about-from-left

                "

              >

                <span className="about-location-label">

                  Our Location

                </span>

                <h2>

                  Scaffolding Solutions in

                  Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.

                </h2>

                <p>

                  Connect with JK Scaffoldings for

                  scaffolding and formwork product

                  requirements for construction

                  projects in Vijayawada and surrounding areas, Guntur, Amaravati, Machilipatnam, Andhra Pradesh.

                </p>

              </div>

              <div

                className="

                  about-location-icon

                  about-reveal

                  about-from-right

                "

              >

                <LocationIcon />

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================

            CTA

        ===================================================== */}

        <section className="about-cta-section">

          <div className="about-container">

            <div

              className="

                about-cta

                about-reveal

                about-from-bottom

              "

            >

              <div className="about-cta-content">

                <span className="about-cta-label">

                  Have a Requirement?

                </span>

                <h2>

                  Let's Discuss Your

                  Scaffolding Requirement.

                </h2>

                <p>

                  Share the products, quantities

                  and project details you need and

                  connect directly with JK Scaffoldings.

                </p>

              </div>

              <div className="about-cta-action">

                <a

                  href={whatsappLink()}

                  target="_blank"

                  rel="noreferrer"

                  className="about-primary-btn"

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

   IMAGE WITH FALLBACK

\\========================================================= */

function FallbackImage({

  src,

  fallback,

  alt,

  eager = false,

}) {

  const [imageSrc, setImageSrc] =

    useState(src);

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

   STORY POINT

\\========================================================= */

function StoryPoint({ text }) {

  return (

    <div className="about-story-point">

      <span className="about-story-check">

        ✓

      </span>

      <span>

        {text}

      </span>

    </div>

  );

}

/* =========================================================

   PRODUCT MARQUEE

\\========================================================= */

function ProductGroup() {

  const items = [

    "Adjustable Props",

    "H Frames",

    "Cup-Lock System",

    "Centering Sheets",

    "Adjustable Spans",

    "Walkway Jali",

    "Adjustable Base Jacks",

    "Adjustable U-Jacks",

  ];

  return (

    <div className="about-products-group">

      {items.map((item) => (

        <div

          className="about-products-item"

          key={item}

        >

          {item}

        </div>

      ))}

    </div>

  );

}

/* =========================================================

   VALUE CARD

\\========================================================= */

function ValueCard({

  icon,

  title,

  text,

  direction,

}) {

  return (

    <article

      className={`

        about-value-card

        about-reveal

        ${

          direction === "left"

            ? "about-from-left"

            : "about-from-right"

        }

      `}

    >

      <div className="about-value-icon-wrap">

        <span className="about-value-ring" />

        <span className="about-value-ring second" />

        <div className="about-value-icon">

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

   APPROACH ITEM

\\========================================================= */

function ApproachItem({

  number,

  title,

  text,

}) {

  return (

    <div className="about-approach-item">

      <div className="about-approach-number">

        {number}

      </div>

      <div className="about-approach-text">

        <strong>

          {title}

        </strong>

        <span>

          {text}

        </span>

      </div>

    </div>

  );

}

/* =========================================================

   ICONS

\\========================================================= */

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

function StructureIcon() {

  return (

    <svg

      viewBox="0 0 64 64"

      fill="none"

      strokeWidth="3"

    >

      <path d="M12 56V8M52 56V8M12 17h40M12 31h40M12 45h40" />

      <path d="m12 17 40 14M52 17 12 31M12 31l40 14M52 31 12 45" />

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

export default AboutUs;