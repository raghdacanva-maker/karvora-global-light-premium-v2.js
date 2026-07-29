/*!
 * KARVORA Easy Orders Global Runtime — LIGHT PREMIUM V2
 * Generated from the supplied header code.
 * Includes:
 * - Home-only block visibility
 * - Easy Orders default footer hiding
 * - Karvora premium header
 * - Mobile navigation
 * - Cart integration
 * - Typography and route colors
 * - Light Premium content theme with dark navy header/footer
 */
(function () {
  "use strict";

  if (window.__KARVORA_GLOBAL_RUNTIME_LOADED__) {
    return;
  }

  window.__KARVORA_GLOBAL_RUNTIME_LOADED__ = true;

  const CSS_ID = "karvora-global-runtime-css";
  const FONT_ID = "karvora-global-runtime-font";
  const HEADER_ID = "kvh-header";

  const LIGHT_PREMIUM_CSS_ID = "karvora-light-premium-v2-css";
  const LIGHT_PREMIUM_CSS = "\n/* =========================================================\n   KARVORA LIGHT PREMIUM V2\n   الهيدر والفوتر داكنان — محتوى المتجر فاتح ومريح\n========================================================= */\n\n:root {\n  --kvlp-page: #edf3f8;\n  --kvlp-page-2: #f7fafc;\n  --kvlp-card: #ffffff;\n  --kvlp-card-soft: #f6f9fc;\n  --kvlp-navy: #0a1724;\n  --kvlp-text: #1f2b39;\n  --kvlp-muted: #6f7e8f;\n  --kvlp-blue: #128ff0;\n  --kvlp-blue-dark: #0769bd;\n  --kvlp-blue-light: #4fc3ff;\n  --kvlp-silver: #d8e2eb;\n  --kvlp-border: #dce5ed;\n  --kvlp-border-blue: rgba(18, 143, 240, 0.20);\n  --kvlp-danger: #ec3048;\n  --kvlp-success: #18a979;\n  --kvlp-shadow:\n    0 18px 50px rgba(21, 43, 65, 0.10);\n  --kvlp-shadow-hover:\n    0 25px 68px rgba(21, 43, 65, 0.16);\n}\n\n/* =========================================================\n   1) الهيكل العام\n========================================================= */\n\nhtml,\nbody {\n  background: var(--kvlp-page) !important;\n}\n\nbody,\nbody main,\nbody .main-content,\nbody [class*=\"page-container\"],\nbody [class*=\"pageContainer\"] {\n  color: var(--kvlp-text);\n}\n\nbody main {\n  position: relative;\n  background:\n    radial-gradient(\n      circle at 92% 2%,\n      rgba(79, 195, 255, 0.11),\n      transparent 27%\n    ),\n    linear-gradient(\n      180deg,\n      var(--kvlp-page-2) 0%,\n      var(--kvlp-page) 100%\n    ) !important;\n}\n\n/* خلفية تقنية خفيفة بدل الأسود الكامل */\nbody main::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  opacity: 0.32;\n  background-image:\n    linear-gradient(\n      rgba(18, 143, 240, 0.055) 1px,\n      transparent 1px\n    ),\n    linear-gradient(\n      90deg,\n      rgba(18, 143, 240, 0.055) 1px,\n      transparent 1px\n    );\n  background-size: 48px 48px;\n  mask-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.55),\n      transparent 78%\n    );\n}\n\n/* =========================================================\n   2) الهيدر — داكن لكن أخف وأكثر فخامة\n========================================================= */\n\n#kvh-header {\n  background:\n    radial-gradient(\n      circle at 82% -40%,\n      rgba(79, 195, 255, 0.18),\n      transparent 42%\n    ),\n    linear-gradient(\n      180deg,\n      #0a1724 0%,\n      #07121d 100%\n    ) !important;\n  border-bottom-color: rgba(79, 195, 255, 0.19) !important;\n  box-shadow:\n    0 12px 34px rgba(9, 27, 42, 0.20),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.035) !important;\n}\n\n#kvh-header .kvh-announcement {\n  color: rgba(244, 249, 253, 0.83) !important;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(18, 143, 240, 0.04),\n      rgba(18, 143, 240, 0.15),\n      rgba(18, 143, 240, 0.04)\n    ) !important;\n}\n\n#kvh-header .kvh-search-form {\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  background: rgba(255, 255, 255, 0.055) !important;\n}\n\n#kvh-header .kvh-search-input {\n  color: #ffffff !important;\n}\n\n#kvh-header .kvh-search-input::placeholder {\n  color: rgba(232, 241, 248, 0.58) !important;\n}\n\n#kvh-header .kvh-nav-link {\n  color: rgba(231, 239, 246, 0.78) !important;\n}\n\n#kvh-header .kvh-nav-link:hover,\n#kvh-header .kvh-nav-link.is-active {\n  color: #fff !important;\n  background: rgba(79, 195, 255, 0.11) !important;\n}\n\n/* =========================================================\n   3) الصفحة الرئيسية\n========================================================= */\n\nbody.kv-route-home,\nbody.kv-home-premium-active {\n  color: var(--kvlp-text) !important;\n  background: var(--kvlp-page) !important;\n}\n\nbody.kv-route-home main,\nbody.kv-home-premium-active main,\nbody.kv-route-home .main-content,\nbody.kv-home-premium-active .main-content {\n  color: var(--kvlp-text) !important;\n  background:\n    radial-gradient(\n      circle at 88% 4%,\n      rgba(79, 195, 255, 0.12),\n      transparent 27%\n    ),\n    linear-gradient(\n      180deg,\n      #f8fbfd 0%,\n      #edf3f8 100%\n    ) !important;\n}\n\n/* بلوك الأقسام Premium الموجود في Home Builder */\nbody.kv-route-home #kv-premium-home,\nbody.kv-home-premium-active #kv-premium-home {\n  color: var(--kvlp-text) !important;\n  background:\n    radial-gradient(\n      circle at 10% 8%,\n      rgba(79, 195, 255, 0.16),\n      transparent 27%\n    ),\n    linear-gradient(\n      180deg,\n      #f8fbfd 0%,\n      #eaf2f8 100%\n    ) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-home-background,\nbody.kv-home-premium-active #kv-premium-home .kv-home-background {\n  position: absolute !important;\n  background:\n    radial-gradient(\n      circle at 12% 12%,\n      rgba(18, 143, 240, 0.12),\n      transparent 29%\n    ),\n    radial-gradient(\n      circle at 88% 38%,\n      rgba(79, 195, 255, 0.10),\n      transparent 28%\n    ),\n    linear-gradient(\n      145deg,\n      #f9fcfe 0%,\n      #eaf2f8 58%,\n      #f5f9fc 100%\n    ) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-bg-grid,\nbody.kv-home-premium-active #kv-premium-home .kv-bg-grid {\n  opacity: 0.36 !important;\n  background-image:\n    linear-gradient(\n      rgba(18, 143, 240, 0.085) 1px,\n      transparent 1px\n    ),\n    linear-gradient(\n      90deg,\n      rgba(18, 143, 240, 0.085) 1px,\n      transparent 1px\n    ) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-bg-road,\nbody.kv-home-premium-active #kv-premium-home .kv-bg-road {\n  opacity: 0.055 !important;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0 48%,\n      rgba(8, 64, 109, 0.60) 48% 52%,\n      transparent 52% 100%\n    ) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-main-title,\nbody.kv-home-premium-active #kv-premium-home .kv-main-title {\n  color: var(--kvlp-navy) !important;\n  text-shadow: none !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-main-title span,\nbody.kv-home-premium-active #kv-premium-home .kv-main-title span {\n  background:\n    linear-gradient(\n      90deg,\n      #557087,\n      var(--kvlp-blue)\n    ) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-main-description,\nbody.kv-home-premium-active #kv-premium-home .kv-main-description {\n  color: var(--kvlp-muted) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-eyebrow,\nbody.kv-home-premium-active #kv-premium-home .kv-eyebrow {\n  color: var(--kvlp-blue-dark) !important;\n  border-color: rgba(18, 143, 240, 0.22) !important;\n  background: rgba(18, 143, 240, 0.07) !important;\n}\n\n/* كروت الأقسام */\nbody.kv-route-home #kv-premium-home .kv-category-card,\nbody.kv-home-premium-active #kv-premium-home .kv-category-card {\n  color: var(--kvlp-blue) !important;\n  border-color: var(--kvlp-border) !important;\n  background:\n    radial-gradient(\n      circle at 87% 10%,\n      rgba(79, 195, 255, 0.14),\n      transparent 32%\n    ),\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f5f9fc\n    ) !important;\n  box-shadow:\n    var(--kvlp-shadow),\n    inset 0 1px 0 #fff !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-category-card:hover,\nbody.kv-home-premium-active #kv-premium-home .kv-category-card:hover {\n  border-color: rgba(18, 143, 240, 0.34) !important;\n  box-shadow:\n    var(--kvlp-shadow-hover),\n    0 0 0 1px rgba(18, 143, 240, 0.05) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-category-card::before,\nbody.kv-home-premium-active #kv-premium-home .kv-category-card::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85),\n      transparent 40%\n    ) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-category-card::after,\nbody.kv-home-premium-active #kv-premium-home .kv-category-card::after {\n  border-color: rgba(18, 143, 240, 0.12) !important;\n  box-shadow:\n    0 0 0 28px rgba(18, 143, 240, 0.035),\n    0 0 0 58px rgba(18, 143, 240, 0.018) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-card-number,\nbody.kv-home-premium-active #kv-premium-home .kv-card-number {\n  color: rgba(12, 42, 66, 0.30) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-card-badge,\nbody.kv-home-premium-active #kv-premium-home .kv-card-badge {\n  color: var(--kvlp-blue-dark) !important;\n  border-color: rgba(18, 143, 240, 0.22) !important;\n  background: rgba(255, 255, 255, 0.78) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-card-content h3,\nbody.kv-home-premium-active #kv-premium-home .kv-card-content h3 {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-card-content p,\nbody.kv-home-premium-active #kv-premium-home .kv-card-content p {\n  color: var(--kvlp-muted) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-card-link,\nbody.kv-home-premium-active #kv-premium-home .kv-card-link {\n  color: var(--kvlp-blue-dark) !important;\n}\n\n/* شريط الثقة */\nbody.kv-route-home #kv-premium-home .kv-premium-strip,\nbody.kv-home-premium-active #kv-premium-home .kv-premium-strip {\n  border-color: var(--kvlp-border) !important;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f4f8fb\n    ) !important;\n  box-shadow: var(--kvlp-shadow) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-strip-item {\n  border-color: var(--kvlp-border) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-strip-item strong {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-home #kv-premium-home .kv-strip-item small {\n  color: var(--kvlp-muted) !important;\n}\n\n/* =========================================================\n   4) أقسام المنتجات الأصلية بالهوم والأقسام\n========================================================= */\n\nbody.kv-route-home main section:not(#kv-premium-home),\nbody.kv-route-collection main section,\nbody.kv-route-search main section {\n  color: var(--kvlp-text) !important;\n}\n\nbody.kv-route-home main h1,\nbody.kv-route-home main h2,\nbody.kv-route-home main h3,\nbody.kv-route-collection main h1,\nbody.kv-route-collection main h2,\nbody.kv-route-collection main h3,\nbody.kv-route-search main h1,\nbody.kv-route-search main h2,\nbody.kv-route-search main h3 {\n  color: var(--kvlp-navy) !important;\n  text-shadow: none !important;\n}\n\nbody.kv-route-home main [class*=\"section-title\"],\nbody.kv-route-home main [class*=\"sectionTitle\"],\nbody.kv-route-home main [class*=\"products-title\"],\nbody.kv-route-home main [class*=\"productsTitle\"],\nbody.kv-route-collection main [class*=\"section-title\"],\nbody.kv-route-search main [class*=\"section-title\"] {\n  color: var(--kvlp-navy) !important;\n  font-weight: 900 !important;\n}\n\n/* كروت المنتجات */\nbody.kv-route-home main [class*=\"product-card\"],\nbody.kv-route-home main [class*=\"productCard\"],\nbody.kv-route-home main [class*=\"product_item\"],\nbody.kv-route-home main [class*=\"product-item\"],\nbody.kv-route-collection main [class*=\"product-card\"],\nbody.kv-route-collection main [class*=\"productCard\"],\nbody.kv-route-collection main [class*=\"product_item\"],\nbody.kv-route-collection main [class*=\"product-item\"],\nbody.kv-route-search main [class*=\"product-card\"],\nbody.kv-route-search main [class*=\"productCard\"] {\n  overflow: hidden !important;\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 20px !important;\n  background: var(--kvlp-card) !important;\n  box-shadow: var(--kvlp-shadow) !important;\n  transition:\n    transform 0.26s ease,\n    box-shadow 0.26s ease,\n    border-color 0.26s ease !important;\n}\n\nbody.kv-route-home main [class*=\"product-card\"]:hover,\nbody.kv-route-home main [class*=\"productCard\"]:hover,\nbody.kv-route-collection main [class*=\"product-card\"]:hover,\nbody.kv-route-collection main [class*=\"productCard\"]:hover {\n  transform: translateY(-5px) !important;\n  border-color: rgba(18, 143, 240, 0.28) !important;\n  box-shadow: var(--kvlp-shadow-hover) !important;\n}\n\nbody.kv-route-home main [class*=\"product\"] h2,\nbody.kv-route-home main [class*=\"product\"] h3,\nbody.kv-route-home main [class*=\"product-name\"],\nbody.kv-route-home main [class*=\"productName\"],\nbody.kv-route-home main [class*=\"product-title\"],\nbody.kv-route-home main [class*=\"productTitle\"],\nbody.kv-route-collection main [class*=\"product\"] h2,\nbody.kv-route-collection main [class*=\"product\"] h3,\nbody.kv-route-search main [class*=\"product\"] h2,\nbody.kv-route-search main [class*=\"product\"] h3 {\n  color: var(--kvlp-navy) !important;\n  font-weight: 800 !important;\n  line-height: 1.65 !important;\n  text-shadow: none !important;\n}\n\nbody.kv-route-home main [class*=\"price\"]:not([class*=\"old\"]):not([class*=\"compare\"]),\nbody.kv-route-collection main [class*=\"price\"]:not([class*=\"old\"]):not([class*=\"compare\"]),\nbody.kv-route-search main [class*=\"price\"]:not([class*=\"old\"]):not([class*=\"compare\"]) {\n  color: var(--kvlp-blue-dark) !important;\n  font-weight: 900 !important;\n}\n\nbody.kv-route-home main [class*=\"old-price\"],\nbody.kv-route-home main [class*=\"oldPrice\"],\nbody.kv-route-home main [class*=\"compare-price\"],\nbody.kv-route-collection main [class*=\"old-price\"],\nbody.kv-route-collection main [class*=\"oldPrice\"] {\n  color: #9aa7b4 !important;\n}\n\n/* أزرار عرض الكل */\nbody.kv-route-home main [class*=\"view-all\"],\nbody.kv-route-home main [class*=\"viewAll\"],\nbody.kv-route-home main [class*=\"show-all\"],\nbody.kv-route-home main [class*=\"showAll\"] {\n  color: var(--kvlp-blue-dark) !important;\n}\n\nbody.kv-route-home main [class*=\"view-all\"] button,\nbody.kv-route-home main [class*=\"viewAll\"] button,\nbody.kv-route-home main [class*=\"show-all\"] button,\nbody.kv-route-home main [class*=\"showAll\"] button {\n  color: #fff !important;\n  border: 0 !important;\n  border-radius: 13px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--kvlp-blue),\n      var(--kvlp-blue-dark)\n    ) !important;\n  box-shadow:\n    0 12px 28px rgba(18, 143, 240, 0.20) !important;\n}\n\n/* =========================================================\n   5) صفحة المنتج — Light Premium\n========================================================= */\n\nbody.kv-route-product,\nbody:has(.product_container) {\n  color: var(--kvlp-text) !important;\n  background:\n    radial-gradient(\n      circle at 91% 5%,\n      rgba(79, 195, 255, 0.12),\n      transparent 28%\n    ),\n    linear-gradient(\n      180deg,\n      #f8fbfd 0%,\n      #eaf1f7 100%\n    ) !important;\n}\n\nbody.kv-route-product::before,\nbody:has(.product_container)::before {\n  opacity: 0 !important;\n}\n\nbody.kv-route-product main,\nbody:has(.product_container) main {\n  color: var(--kvlp-text) !important;\n  background: transparent !important;\n}\n\nbody.kv-route-product .product_container,\nbody:has(.product_container) .product_container {\n  width: min(calc(100% - 30px), 1380px) !important;\n  max-width: 1380px !important;\n  margin-inline: auto !important;\n  padding: 38px 0 82px !important;\n  color: var(--kvlp-text) !important;\n}\n\nbody.kv-route-product .p_content_container,\nbody:has(.product_container) .p_content_container {\n  display: grid !important;\n  grid-template-columns:\n    minmax(0, 1.14fr)\n    minmax(380px, 0.86fr) !important;\n  align-items: start !important;\n  gap: 28px !important;\n  margin-top: 18px !important;\n}\n\n/* Breadcrumbs */\nbody.kv-route-product .ab-breadcrumbs,\nbody:has(.product_container) .ab-breadcrumbs {\n  margin-bottom: 18px !important;\n  padding: 11px 15px !important;\n  overflow-x: auto !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 999px !important;\n  background: rgba(255, 255, 255, 0.78) !important;\n  box-shadow: 0 8px 24px rgba(21, 43, 65, 0.06) !important;\n}\n\nbody.kv-route-product .ab-breadcrumbs a,\nbody:has(.product_container) .ab-breadcrumbs a {\n  color: var(--kvlp-blue-dark) !important;\n  font-weight: 800 !important;\n}\n\nbody.kv-route-product .ab-breadcrumbs-current,\nbody:has(.product_container) .ab-breadcrumbs-current {\n  color: var(--kvlp-muted) !important;\n}\n\nbody.kv-route-product .ab-breadcrumbs-sep,\nbody:has(.product_container) .ab-breadcrumbs-sep {\n  color: #b4c1cc !important;\n}\n\n/* Gallery */\nbody.kv-route-product .ab-gallery,\nbody:has(.product_container) .ab-gallery {\n  padding: 14px !important;\n  overflow: hidden !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 26px !important;\n  background:\n    radial-gradient(\n      circle at 87% 9%,\n      rgba(79, 195, 255, 0.11),\n      transparent 30%\n    ),\n    #ffffff !important;\n  box-shadow: var(--kvlp-shadow) !important;\n}\n\nbody.kv-route-product .ab-gallery-thumb,\nbody:has(.product_container) .ab-gallery-thumb {\n  padding: 3px !important;\n  overflow: hidden !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 12px !important;\n  background: #f5f8fb !important;\n  opacity: 0.72 !important;\n}\n\nbody.kv-route-product .ab-gallery-thumb:hover,\nbody:has(.product_container) .ab-gallery-thumb:hover {\n  opacity: 1 !important;\n  border-color: rgba(18, 143, 240, 0.36) !important;\n}\n\nbody.kv-route-product .ab-gallery-thumb.ab-active,\nbody:has(.product_container) .ab-gallery-thumb.ab-active {\n  opacity: 1 !important;\n  border-color: var(--kvlp-blue) !important;\n  box-shadow:\n    0 0 0 3px rgba(18, 143, 240, 0.09) !important;\n}\n\nbody.kv-route-product .ab-gallery-slider,\nbody:has(.product_container) .ab-gallery-slider,\nbody.kv-route-product .ab-gallery-slide,\nbody:has(.product_container) .ab-gallery-slide {\n  border-radius: 20px !important;\n  background: #ffffff !important;\n}\n\nbody.kv-route-product .ab-gallery-slider,\nbody:has(.product_container) .ab-gallery-slider {\n  border: 1px solid #e4ebf1 !important;\n}\n\nbody.kv-route-product .ab-gallery-zoom,\nbody:has(.product_container) .ab-gallery-zoom {\n  color: var(--kvlp-blue-dark) !important;\n  border: 1px solid var(--kvlp-border-blue) !important;\n  border-radius: 13px !important;\n  background: rgba(255, 255, 255, 0.90) !important;\n  box-shadow: 0 10px 28px rgba(21, 43, 65, 0.12) !important;\n}\n\n/* Details card */\nbody.kv-route-product .p_details_container,\nbody:has(.product_container) .p_details_container {\n  margin-top: 0 !important;\n  padding: 25px !important;\n  opacity: 1 !important;\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 26px !important;\n  background:\n    radial-gradient(\n      circle at 100% 0%,\n      rgba(79, 195, 255, 0.12),\n      transparent 28%\n    ),\n    #ffffff !important;\n  box-shadow: var(--kvlp-shadow) !important;\n}\n\nbody.kv-route-product .ab-pd-name,\nbody:has(.product_container) .ab-pd-name {\n  margin: 16px 0 14px !important;\n  color: var(--kvlp-navy) !important;\n  font-size: clamp(22px, 2.35vw, 34px) !important;\n  font-weight: 900 !important;\n  line-height: 1.65 !important;\n  text-shadow: none !important;\n}\n\nbody.kv-route-product .ab-pd-price-row,\nbody:has(.product_container) .ab-pd-price-row {\n  margin-top: 8px !important;\n  padding: 14px 16px !important;\n  border: 1px solid rgba(18, 143, 240, 0.16) !important;\n  border-radius: 15px !important;\n  background: rgba(18, 143, 240, 0.055) !important;\n}\n\nbody.kv-route-product .ab-pd-price-sale,\nbody:has(.product_container) .ab-pd-price-sale {\n  color: var(--kvlp-blue-dark) !important;\n  font-size: 27px !important;\n  font-weight: 900 !important;\n}\n\nbody.kv-route-product .ab-pd-price-old,\nbody:has(.product_container) .ab-pd-price-old {\n  color: #9da9b5 !important;\n}\n\n/* Countdown */\nbody.kv-route-product .ab-fake-counter,\nbody:has(.product_container) .ab-fake-counter {\n  margin-top: 16px !important;\n  overflow: hidden !important;\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 17px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f7fbfe,\n      #edf4f9\n    ) !important;\n}\n\nbody.kv-route-product .ab-fc-title,\nbody:has(.product_container) .ab-fc-title {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-product .ab-fc-unit,\nbody:has(.product_container) .ab-fc-unit {\n  border: 1px solid var(--kvlp-border) !important;\n  background: #ffffff !important;\n}\n\nbody.kv-route-product .ab-fc-num,\nbody:has(.product_container) .ab-fc-num {\n  color: var(--kvlp-blue-dark) !important;\n}\n\nbody.kv-route-product .ab-fc-label,\nbody:has(.product_container) .ab-fc-label {\n  color: var(--kvlp-muted) !important;\n}\n\nbody.kv-route-product .ab-fake-visitor,\nbody:has(.product_container) .ab-fake-visitor {\n  color: var(--kvlp-muted) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  background: #f7fafc !important;\n}\n\nbody.kv-route-product .ab-fv-count,\nbody:has(.product_container) .ab-fv-count {\n  color: var(--kvlp-navy) !important;\n}\n\n/* Buttons */\nbody.kv-route-product .checkout_btn,\nbody.kv-route-product .form_checkout_btn,\nbody:has(.product_container) .checkout_btn,\nbody:has(.product_container) .form_checkout_btn {\n  min-height: 52px !important;\n  color: #fff !important;\n  border: 0 !important;\n  border-radius: 14px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--kvlp-blue),\n      var(--kvlp-blue-dark)\n    ) !important;\n  box-shadow:\n    0 14px 32px rgba(18, 143, 240, 0.22) !important;\n  font-weight: 900 !important;\n}\n\nbody.kv-route-product .add_to_cart_btn,\nbody:has(.product_container) .add_to_cart_btn {\n  min-height: 50px !important;\n  color: var(--kvlp-blue-dark) !important;\n  border: 1px solid rgba(18, 143, 240, 0.35) !important;\n  border-radius: 14px !important;\n  background: #f7fbfe !important;\n  font-weight: 900 !important;\n}\n\nbody.kv-route-product .quantity_btn_container,\nbody:has(.product_container) .quantity_btn_container {\n  color: var(--kvlp-navy) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 14px !important;\n  background: #f7fafc !important;\n}\n\nbody.kv-route-product .quantity_btn,\nbody.kv-route-product .quantity_btn_container button,\nbody:has(.product_container) .quantity_btn,\nbody:has(.product_container) .quantity_btn_container button {\n  color: var(--kvlp-blue-dark) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  background: #ffffff !important;\n}\n\n/* Share and more products */\nbody.kv-route-product .ab-pd-footer,\nbody:has(.product_container) .ab-pd-footer {\n  border-top-color: var(--kvlp-border) !important;\n}\n\nbody.kv-route-product .ab-pd-more-products,\nbody:has(.product_container) .ab-pd-more-products {\n  color: var(--kvlp-muted) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  background: #f7fafc !important;\n}\n\nbody.kv-route-product .ab-pd-more-products__link,\nbody:has(.product_container) .ab-pd-more-products__link {\n  color: var(--kvlp-blue-dark) !important;\n}\n\nbody.kv-route-product .ab-pd-share-label,\nbody:has(.product_container) .ab-pd-share-label,\nbody.kv-route-product .ab-pd-compare,\nbody:has(.product_container) .ab-pd-compare {\n  color: var(--kvlp-muted) !important;\n}\n\nbody.kv-route-product .ab-pd-share-btn,\nbody:has(.product_container) .ab-pd-share-btn {\n  color: #526577 !important;\n  border: 1px solid var(--kvlp-border) !important;\n  background: #ffffff !important;\n}\n\n/* Form */\nbody.kv-route-product .product_form_checkout,\nbody:has(.product_container) .product_form_checkout {\n  margin-top: 22px !important;\n  padding: 22px !important;\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 20px !important;\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f6f9fc\n    ) !important;\n  box-shadow: 0 16px 42px rgba(21, 43, 65, 0.08) !important;\n}\n\nbody.kv-route-product .product_form_checkout > p,\nbody:has(.product_container) .product_form_checkout > p {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-product .product_form_checkout label,\nbody.kv-route-product .product_form_checkout dt,\nbody.kv-route-product .product_form_checkout span,\nbody:has(.product_container) .product_form_checkout label,\nbody:has(.product_container) .product_form_checkout dt,\nbody:has(.product_container) .product_form_checkout span {\n  color: var(--kvlp-text) !important;\n}\n\nbody.kv-route-product .global_input,\nbody.kv-route-product .global_textarea,\nbody:has(.product_container) .global_input,\nbody:has(.product_container) .global_textarea {\n  color: var(--kvlp-navy) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 13px !important;\n  background: #ffffff !important;\n}\n\nbody.kv-route-product .global_input:focus,\nbody.kv-route-product .global_textarea:focus,\nbody:has(.product_container) .global_input:focus,\nbody:has(.product_container) .global_textarea:focus {\n  border-color: rgba(18, 143, 240, 0.68) !important;\n  box-shadow:\n    0 0 0 4px rgba(18, 143, 240, 0.08) !important;\n}\n\n/* Select */\nbody.kv-route-product .select__control,\nbody:has(.product_container) .select__control {\n  color: var(--kvlp-navy) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 13px !important;\n  background: #ffffff !important;\n  box-shadow: none !important;\n}\n\nbody.kv-route-product .select__single-value,\nbody.kv-route-product .select__input-container,\nbody.kv-route-product .select__placeholder,\nbody:has(.product_container) .select__single-value,\nbody:has(.product_container) .select__input-container,\nbody:has(.product_container) .select__placeholder {\n  color: var(--kvlp-text) !important;\n}\n\nbody.kv-route-product .select__menu,\nbody:has(.product_container) .select__menu {\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 13px !important;\n  background: #ffffff !important;\n  box-shadow: var(--kvlp-shadow) !important;\n}\n\nbody.kv-route-product .select__option,\nbody:has(.product_container) .select__option {\n  color: var(--kvlp-text) !important;\n  background: transparent !important;\n}\n\nbody.kv-route-product .select__option--is-focused,\nbody:has(.product_container) .select__option--is-focused {\n  background: rgba(18, 143, 240, 0.08) !important;\n}\n\nbody.kv-route-product .select__option--is-selected,\nbody:has(.product_container) .select__option--is-selected {\n  color: #fff !important;\n  background: var(--kvlp-blue-dark) !important;\n}\n\n/* Shipping, total and payment */\nbody.kv-route-product .shipping_cost_container,\nbody.kv-route-product .total_price_container,\nbody:has(.product_container) .shipping_cost_container,\nbody:has(.product_container) .total_price_container {\n  color: var(--kvlp-muted) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 13px !important;\n  background: #f7fafc !important;\n}\n\nbody.kv-route-product .shipping_cost,\nbody:has(.product_container) .shipping_cost {\n  color: var(--kvlp-blue-dark) !important;\n}\n\nbody.kv-route-product .total_price,\nbody:has(.product_container) .total_price {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-product .payment_card,\nbody:has(.product_container) .payment_card {\n  color: var(--kvlp-text) !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 15px !important;\n  background: #ffffff !important;\n}\n\nbody.kv-route-product .payment_card.border-blue-600,\nbody:has(.product_container) .payment_card.border-blue-600 {\n  border-color: var(--kvlp-blue) !important;\n  background: rgba(18, 143, 240, 0.05) !important;\n  box-shadow:\n    0 0 0 3px rgba(18, 143, 240, 0.06) !important;\n}\n\nbody.kv-route-product .payment_card_name,\nbody:has(.product_container) .payment_card_name {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-product .payment_card_description,\nbody:has(.product_container) .payment_card_description {\n  color: var(--kvlp-muted) !important;\n}\n\n/* Description */\nbody.kv-route-product .ab-product-desc-root,\nbody:has(.product_container) .ab-product-desc-root {\n  width: min(calc(100% - 30px), 1380px) !important;\n  margin: 0 auto 80px !important;\n  color: var(--kvlp-text) !important;\n}\n\nbody.kv-route-product .lq-desc-accordion,\nbody:has(.product_container) .lq-desc-accordion {\n  overflow: hidden !important;\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 26px !important;\n  background: #ffffff !important;\n  box-shadow: var(--kvlp-shadow) !important;\n}\n\nbody.kv-route-product .lq-desc-accordion-trigger,\nbody:has(.product_container) .lq-desc-accordion-trigger {\n  color: var(--kvlp-navy) !important;\n  background: transparent !important;\n}\n\nbody.kv-route-product .lq-desc-accordion-title,\nbody:has(.product_container) .lq-desc-accordion-title {\n  color: var(--kvlp-navy) !important;\n}\n\nbody.kv-route-product .lq-desc-accordion-toggle,\nbody:has(.product_container) .lq-desc-accordion-toggle {\n  color: var(--kvlp-blue-dark) !important;\n}\n\nbody.kv-route-product .product_description .ql-editor,\nbody:has(.product_container) .product_description .ql-editor {\n  border: 1px solid var(--kvlp-border) !important;\n  border-radius: 16px !important;\n  background: #f8fafc !important;\n}\n\nbody.kv-route-product .product_description,\nbody.kv-route-product .product_description *,\nbody:has(.product_container) .product_description,\nbody:has(.product_container) .product_description * {\n  color: var(--kvlp-text) !important;\n}\n\n/* =========================================================\n   6) صفحات الأقسام والبحث والسياسات\n========================================================= */\n\nbody.kv-route-collection,\nbody.kv-route-search,\nbody.kv-route-page {\n  color: var(--kvlp-text) !important;\n  background: var(--kvlp-page) !important;\n}\n\nbody.kv-route-collection main,\nbody.kv-route-search main,\nbody.kv-route-page main {\n  color: var(--kvlp-text) !important;\n  background:\n    radial-gradient(\n      circle at 90% 3%,\n      rgba(79, 195, 255, 0.10),\n      transparent 25%\n    ),\n    linear-gradient(\n      180deg,\n      #f8fbfd,\n      #edf3f8\n    ) !important;\n}\n\n/* =========================================================\n   7) الفوتر — كحلي Premium بدل الأسود الحاد\n========================================================= */\n\n#kv-custom-footer,\n.kv-footer {\n  background:\n    radial-gradient(\n      circle at 12% 10%,\n      rgba(79, 195, 255, 0.14),\n      transparent 27%\n    ),\n    radial-gradient(\n      circle at 90% 70%,\n      rgba(18, 143, 240, 0.08),\n      transparent 25%\n    ),\n    linear-gradient(\n      145deg,\n      #0a1724 0%,\n      #06111b 56%,\n      #081520 100%\n    ) !important;\n}\n\n/* =========================================================\n   8) Responsive\n========================================================= */\n\n@media (max-width: 1080px) {\n  body.kv-route-product .p_content_container,\n  body:has(.product_container) .p_content_container {\n    grid-template-columns:\n      minmax(0, 1fr)\n      minmax(340px, 0.82fr) !important;\n    gap: 20px !important;\n  }\n}\n\n@media (max-width: 820px) {\n  body main::before {\n    opacity: 0.18;\n  }\n\n  body.kv-route-product .product_container,\n  body:has(.product_container) .product_container {\n    width: calc(100% - 18px) !important;\n    padding: 20px 0 55px !important;\n  }\n\n  body.kv-route-product .p_content_container,\n  body:has(.product_container) .p_content_container {\n    display: flex !important;\n    flex-direction: column !important;\n    gap: 14px !important;\n  }\n\n  body.kv-route-product .p_gallery_container,\n  body:has(.product_container) .p_gallery_container {\n    order: 1 !important;\n  }\n\n  body.kv-route-product .p_details_container,\n  body:has(.product_container) .p_details_container {\n    order: 2 !important;\n    padding: 18px !important;\n    border-radius: 21px !important;\n  }\n\n  body.kv-route-product .ab-gallery,\n  body:has(.product_container) .ab-gallery {\n    padding: 8px !important;\n    border-radius: 20px !important;\n  }\n\n  body.kv-route-product .ab-product-desc-root,\n  body:has(.product_container) .ab-product-desc-root {\n    width: calc(100% - 18px) !important;\n  }\n\n  body.kv-route-home #kv-premium-home .kv-category-card,\n  body.kv-home-premium-active #kv-premium-home .kv-category-card {\n    border-radius: 21px !important;\n  }\n}\n\n@media (max-width: 430px) {\n  body.kv-route-product .product_container,\n  body:has(.product_container) .product_container {\n    width: calc(100% - 14px) !important;\n  }\n\n  body.kv-route-product .p_details_container,\n  body:has(.product_container) .p_details_container {\n    padding: 15px !important;\n  }\n\n  body.kv-route-product .ab-pd-name,\n  body:has(.product_container) .ab-pd-name {\n    font-size: 19px !important;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  body *,\n  body *::before,\n  body *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n";

  const GLOBAL_CSS = "/* إخفاء محتوى الفوتر القديم */\n  .ab-footer-inner,\n  .ab-footer-desktop,\n  .ab-footer-mobile{\n    display:none !important;\n    visibility:hidden !important;\n    opacity:0 !important;\n    width:0 !important;\n    height:0 !important;\n    min-height:0 !important;\n    max-height:0 !important;\n    margin:0 !important;\n    padding:0 !important;\n    border:0 !important;\n    overflow:hidden !important;\n    pointer-events:none !important;\n  }\n\n  /*\n    إخفاء عنصر الفوتر الأب في المتصفحات\n    التي تدعم :has\n  */\n  @supports selector(footer:has(.ab-footer-inner)){\n\n    footer:has(.ab-footer-inner):not(.mk-footer),\n    section:has(> .ab-footer-inner):not(.mk-footer),\n    div.ab-footer:has(.ab-footer-inner):not(.mk-footer){\n      display:none !important;\n      visibility:hidden !important;\n      width:0 !important;\n      height:0 !important;\n      min-height:0 !important;\n      max-height:0 !important;\n      margin:0 !important;\n      padding:0 !important;\n      border:0 !important;\n      overflow:hidden !important;\n    }\n\n  }\n\n\n\n\n/* =========================================================\n   1) إخفاء هيدر Easy Orders الأساسي\n========================================================= */\n\n#eo-header,\nheader#eo-header,\n.ab-header,\nbody > header.ab-header,\n[data-kv-native-header-hidden=\"true\"] {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  max-width: 0 !important;\n  max-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  overflow: hidden !important;\n  pointer-events: none !important;\n}\n\n/* يمنع أي فراغ متروك مكان الهيدر القديم */\nbody.kvh-ready {\n  padding-top: 0 !important;\n}\n\n\n/* =========================================================\n   2) Global Reset\n========================================================= */\n\n#kvh-header,\n#kvh-header *,\n#kvh-header *::before,\n#kvh-header *::after,\n#kvh-mobile-overlay,\n#kvh-mobile-overlay *,\n#kvh-mobile-overlay *::before,\n#kvh-mobile-overlay *::after {\n  box-sizing: border-box;\n}\n\n#kvh-header {\n  --kvh-black: #020407;\n  --kvh-black-soft: #07101a;\n  --kvh-card: #0a1420;\n  --kvh-blue: #109dff;\n  --kvh-blue-light: #58caff;\n  --kvh-blue-dark: #056cc8;\n  --kvh-white: #f7f9fc;\n  --kvh-silver: #d9e3ec;\n  --kvh-muted: #9daab8;\n  --kvh-border: rgba(255, 255, 255, 0.10);\n  --kvh-max: 1440px;\n\n  position: sticky;\n  top: 0;\n  z-index: 2147482000;\n  width: 100%;\n  direction: rtl;\n  color: var(--kvh-white);\n  font-family: \"Cairo\", Arial, Tahoma, sans-serif;\n  background:\n    radial-gradient(\n      circle at 80% -30%,\n      rgba(16, 157, 255, 0.16),\n      transparent 36%\n    ),\n    linear-gradient(\n      180deg,\n      rgba(2, 4, 7, 0.99),\n      rgba(4, 9, 15, 0.985)\n    );\n  border-bottom: 1px solid rgba(88, 202, 255, 0.14);\n  box-shadow:\n    0 12px 34px rgba(0, 0, 0, 0.28),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.025);\n  backdrop-filter: blur(18px);\n  -webkit-backdrop-filter: blur(18px);\n  isolation: isolate;\n}\n\n#kvh-header a {\n  color: inherit;\n  text-decoration: none !important;\n}\n\n#kvh-header button,\n#kvh-mobile-overlay button {\n  font: inherit;\n}\n\n#kvh-header svg,\n#kvh-mobile-overlay svg {\n  display: block;\n}\n\n#kvh-header .kvh-shell {\n  width: min(calc(100% - 34px), var(--kvh-max));\n  margin-inline: auto;\n}\n\n\n/* =========================================================\n   3) شريط علوي\n========================================================= */\n\n#kvh-header .kvh-announcement {\n  position: relative;\n  min-height: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: rgba(235, 243, 250, 0.78);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.055);\n  background:\n    linear-gradient(\n      90deg,\n      rgba(16, 157, 255, 0.045),\n      rgba(16, 157, 255, 0.11),\n      rgba(16, 157, 255, 0.045)\n    );\n  font-size: 10px;\n  font-weight: 700;\n}\n\n#kvh-header .kvh-announcement::before,\n#kvh-header .kvh-announcement::after {\n  content: \"\";\n  width: 36px;\n  height: 1px;\n  margin-inline: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--kvh-blue-light)\n    );\n  opacity: 0.55;\n}\n\n#kvh-header .kvh-announcement::after {\n  transform: rotate(180deg);\n}\n\n\n/* =========================================================\n   4) الصف الرئيسي\n========================================================= */\n\n#kvh-header .kvh-main-row {\n  min-height: 82px;\n  display: grid;\n  grid-template-columns: minmax(190px, 270px) minmax(280px, 1fr) auto;\n  align-items: center;\n  gap: 24px;\n}\n\n#kvh-header .kvh-brand-area {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n#kvh-header .kvh-logo {\n  width: 208px;\n  max-width: 100%;\n  display: inline-flex;\n  align-items: center;\n}\n\n#kvh-header .kvh-logo img {\n  display: block;\n  width: 100%;\n  max-height: 66px;\n  object-fit: contain;\n  object-position: right center;\n  filter:\n    drop-shadow(0 8px 18px rgba(16, 157, 255, 0.12));\n  transition:\n    transform 0.28s ease,\n    filter 0.28s ease;\n}\n\n#kvh-header .kvh-logo:hover img {\n  transform: translateY(-2px) scale(1.012);\n  filter:\n    drop-shadow(0 11px 25px rgba(16, 157, 255, 0.20));\n}\n\n\n/* =========================================================\n   5) البحث\n========================================================= */\n\n#kvh-header .kvh-search-wrap {\n  min-width: 0;\n}\n\n#kvh-header .kvh-search-form {\n  position: relative;\n  width: 100%;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.055),\n      rgba(255, 255, 255, 0.024)\n    );\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.025);\n  transition:\n    border-color 0.25s ease,\n    box-shadow 0.25s ease,\n    background 0.25s ease;\n}\n\n#kvh-header .kvh-search-form:focus-within {\n  border-color: rgba(16, 157, 255, 0.50);\n  background: rgba(8, 18, 29, 0.96);\n  box-shadow:\n    0 0 0 4px rgba(16, 157, 255, 0.07),\n    0 12px 30px rgba(0, 0, 0, 0.19);\n}\n\n#kvh-header .kvh-search-input {\n  min-width: 0;\n  flex: 1;\n  height: 48px;\n  padding: 0 18px;\n  color: #fff;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-family: \"Cairo\", Arial, sans-serif;\n  font-size: 12px;\n}\n\n#kvh-header .kvh-search-input::placeholder {\n  color: rgba(215, 226, 236, 0.50);\n}\n\n#kvh-header .kvh-search-submit {\n  width: 50px;\n  height: 48px;\n  flex: 0 0 50px;\n  display: grid;\n  place-items: center;\n  color: var(--kvh-blue-light);\n  border: 0;\n  border-inline-start: 1px solid rgba(255, 255, 255, 0.065);\n  background: transparent;\n  cursor: pointer;\n  transition:\n    color 0.25s ease,\n    background 0.25s ease;\n}\n\n#kvh-header .kvh-search-submit:hover {\n  color: #fff;\n  background: rgba(16, 157, 255, 0.13);\n}\n\n#kvh-header .kvh-search-submit svg {\n  width: 20px;\n  height: 20px;\n}\n\n\n/* =========================================================\n   6) أدوات الهيدر\n========================================================= */\n\n#kvh-header .kvh-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 9px;\n}\n\n#kvh-header .kvh-action-btn {\n  position: relative;\n  width: 46px;\n  height: 46px;\n  flex: 0 0 46px;\n  display: grid;\n  place-items: center;\n  color: var(--kvh-white);\n  border: 1px solid rgba(255, 255, 255, 0.105);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.035);\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background 0.25s ease,\n    color 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n#kvh-header .kvh-action-btn:hover {\n  color: #fff;\n  border-color: rgba(16, 157, 255, 0.44);\n  background: rgba(16, 157, 255, 0.11);\n  box-shadow:\n    0 10px 26px rgba(16, 157, 255, 0.12);\n  transform: translateY(-2px);\n}\n\n#kvh-header .kvh-action-btn svg {\n  width: 21px;\n  height: 21px;\n}\n\n#kvh-header .kvh-cart-count {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding-inline: 5px;\n  display: none;\n  place-items: center;\n  color: #fff;\n  border: 2px solid #020407;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--kvh-blue),\n      var(--kvh-blue-dark)\n    );\n  font-family: Arial, sans-serif;\n  font-size: 9px;\n  font-weight: 700;\n}\n\n#kvh-header .kvh-cart-count.is-visible {\n  display: grid;\n}\n\n#kvh-header .kvh-mobile-menu-btn {\n  display: none;\n}\n\n\n/* =========================================================\n   7) قائمة الأقسام الرئيسية\n========================================================= */\n\n#kvh-header .kvh-nav-row {\n  position: relative;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n#kvh-header .kvh-nav-scroll {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n}\n\n#kvh-header .kvh-nav-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n#kvh-header .kvh-nav-link {\n  position: relative;\n  min-height: 48px;\n  padding: 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  color: rgba(224, 233, 241, 0.69);\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition:\n    color 0.23s ease,\n    background 0.23s ease;\n}\n\n#kvh-header .kvh-nav-link::after {\n  content: \"\";\n  position: absolute;\n  right: 50%;\n  bottom: 3px;\n  width: 0;\n  height: 2px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--kvh-blue),\n      var(--kvh-blue-light)\n    );\n  transform: translateX(50%);\n  transition: width 0.25s ease;\n}\n\n#kvh-header .kvh-nav-link:hover,\n#kvh-header .kvh-nav-link.is-active {\n  color: #fff;\n  background: rgba(16, 157, 255, 0.07);\n}\n\n#kvh-header .kvh-nav-link:hover::after,\n#kvh-header .kvh-nav-link.is-active::after {\n  width: calc(100% - 22px);\n}\n\n/*\n  رابط الرئيسية له شكل مميز ويظل موجود دائمًا.\n  JavaScript يغيّر حالته النشطة فقط، ولا يخفيه أبدًا.\n*/\n#kvh-header .kvh-home-link {\n  padding-inline: 14px;\n  color: #fff;\n  border: 1px solid rgba(16, 157, 255, 0.22);\n  background: rgba(16, 157, 255, 0.085);\n}\n\n#kvh-header .kvh-home-link svg {\n  width: 16px;\n  height: 16px;\n  margin-left: 7px;\n  color: var(--kvh-blue-light);\n}\n\n#kvh-header .kvh-nav-divider {\n  width: 1px;\n  height: 23px;\n  flex: 0 0 1px;\n  margin-inline: 3px;\n  background: rgba(255, 255, 255, 0.085);\n}\n\n\n/* =========================================================\n   8) قائمة الموبايل\n========================================================= */\n\n#kvh-mobile-overlay {\n  --kvh-blue: #109dff;\n  --kvh-blue-light: #58caff;\n  --kvh-white: #f7f9fc;\n\n  position: fixed;\n  inset: 0;\n  z-index: 2147483200;\n  display: none;\n  direction: rtl;\n  font-family: \"Cairo\", Arial, Tahoma, sans-serif;\n}\n\n#kvh-mobile-overlay.is-open {\n  display: block;\n}\n\n#kvh-mobile-overlay .kvh-mobile-backdrop {\n  position: absolute;\n  inset: 0;\n  border: 0;\n  background: rgba(0, 0, 0, 0.72);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  cursor: pointer;\n}\n\n#kvh-mobile-overlay .kvh-mobile-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: min(88vw, 390px);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: #fff;\n  background:\n    radial-gradient(\n      circle at 90% 4%,\n      rgba(16, 157, 255, 0.18),\n      transparent 29%\n    ),\n    linear-gradient(\n      160deg,\n      #06101a,\n      #020407 72%\n    );\n  border-left: 1px solid rgba(88, 202, 255, 0.16);\n  box-shadow: -24px 0 70px rgba(0, 0, 0, 0.42);\n  animation: kvhPanelIn 0.28s ease both;\n}\n\n@keyframes kvhPanelIn {\n  from {\n    opacity: 0;\n    transform: translateX(34px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n#kvh-mobile-overlay .kvh-mobile-head {\n  min-height: 84px;\n  padding: 17px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n#kvh-mobile-overlay .kvh-mobile-logo {\n  width: 180px;\n  max-width: 70%;\n}\n\n#kvh-mobile-overlay .kvh-mobile-logo img {\n  display: block;\n  width: 100%;\n  max-height: 56px;\n  object-fit: contain;\n  object-position: right center;\n}\n\n#kvh-mobile-overlay .kvh-mobile-close {\n  width: 43px;\n  height: 43px;\n  flex: 0 0 43px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.04);\n  cursor: pointer;\n}\n\n#kvh-mobile-overlay .kvh-mobile-close svg {\n  width: 21px;\n  height: 21px;\n}\n\n#kvh-mobile-overlay .kvh-mobile-search {\n  padding: 15px 17px 8px;\n}\n\n#kvh-mobile-overlay .kvh-mobile-search form {\n  min-height: 48px;\n  display: flex;\n  overflow: hidden;\n  border: 1px solid rgba(16, 157, 255, 0.23);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.045);\n}\n\n#kvh-mobile-overlay .kvh-mobile-search input {\n  min-width: 0;\n  height: 48px;\n  flex: 1;\n  padding: 0 15px;\n  color: #fff;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-family: \"Cairo\", Arial, sans-serif;\n  font-size: 11px;\n}\n\n#kvh-mobile-overlay .kvh-mobile-search input::placeholder {\n  color: rgba(220, 230, 239, 0.50);\n}\n\n#kvh-mobile-overlay .kvh-mobile-search button {\n  width: 48px;\n  flex: 0 0 48px;\n  display: grid;\n  place-items: center;\n  color: var(--kvh-blue-light);\n  border: 0;\n  background: rgba(16, 157, 255, 0.08);\n}\n\n#kvh-mobile-overlay .kvh-mobile-search button svg {\n  width: 20px;\n  height: 20px;\n}\n\n#kvh-mobile-overlay .kvh-mobile-nav-title {\n  margin: 12px 17px 8px;\n  color: rgba(220, 230, 239, 0.52);\n  font-size: 10px;\n  font-weight: 800;\n}\n\n#kvh-mobile-overlay .kvh-mobile-nav {\n  min-height: 0;\n  padding: 0 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  overflow-y: auto;\n}\n\n#kvh-mobile-overlay .kvh-mobile-link {\n  min-height: 49px;\n  padding: 10px 13px;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  color: rgba(228, 236, 244, 0.74);\n  border: 1px solid transparent;\n  border-radius: 13px;\n  font-size: 11px;\n  font-weight: 700;\n  transition:\n    color 0.22s ease,\n    border-color 0.22s ease,\n    background 0.22s ease;\n}\n\n#kvh-mobile-overlay .kvh-mobile-link:hover,\n#kvh-mobile-overlay .kvh-mobile-link.is-active {\n  color: #fff;\n  border-color: rgba(16, 157, 255, 0.20);\n  background: rgba(16, 157, 255, 0.075);\n}\n\n#kvh-mobile-overlay .kvh-mobile-link-icon {\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  display: grid;\n  place-items: center;\n  color: var(--kvh-blue-light);\n  border: 1px solid rgba(16, 157, 255, 0.18);\n  border-radius: 10px;\n  background: rgba(16, 157, 255, 0.065);\n}\n\n#kvh-mobile-overlay .kvh-mobile-link-icon svg {\n  width: 17px;\n  height: 17px;\n}\n\n#kvh-mobile-overlay .kvh-mobile-home {\n  color: #fff;\n  border-color: rgba(16, 157, 255, 0.25);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 157, 255, 0.14),\n      rgba(16, 157, 255, 0.055)\n    );\n}\n\n#kvh-mobile-overlay .kvh-mobile-bottom {\n  margin-top: auto;\n  padding: 14px 17px calc(14px + env(safe-area-inset-bottom));\n  border-top: 1px solid rgba(255, 255, 255, 0.075);\n}\n\n#kvh-mobile-overlay .kvh-mobile-messenger {\n  min-height: 48px;\n  padding: 10px 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  color: #fff;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #00b2ff,\n      #006aff 55%,\n      #7b3cff\n    );\n  font-size: 11px;\n  font-weight: 900;\n}\n\n#kvh-mobile-overlay .kvh-mobile-messenger svg {\n  width: 20px;\n  height: 20px;\n}\n\n\n/* =========================================================\n   9) Responsive\n========================================================= */\n\n@media (max-width: 1180px) {\n  #kvh-header .kvh-main-row {\n    grid-template-columns: 190px minmax(260px, 1fr) auto;\n    gap: 16px;\n  }\n\n  #kvh-header .kvh-logo {\n    width: 182px;\n  }\n\n  #kvh-header .kvh-nav-link {\n    padding-inline: 9px;\n    font-size: 9.5px;\n  }\n}\n\n@media (max-width: 900px) {\n  #kvh-header {\n    position: sticky;\n  }\n\n  #kvh-header .kvh-announcement {\n    min-height: 27px;\n    font-size: 8.5px;\n  }\n\n  #kvh-header .kvh-main-row {\n    min-height: 72px;\n    grid-template-columns: auto 1fr auto;\n    gap: 11px;\n  }\n\n  #kvh-header .kvh-brand-area {\n    justify-content: center;\n  }\n\n  #kvh-header .kvh-logo {\n    width: 160px;\n  }\n\n  #kvh-header .kvh-search-wrap {\n    grid-column: 1 / -1;\n    grid-row: 2;\n    padding-bottom: 12px;\n  }\n\n  #kvh-header .kvh-main-row {\n    padding-top: 8px;\n  }\n\n  #kvh-header .kvh-mobile-menu-btn {\n    display: grid;\n    grid-column: 1;\n    grid-row: 1;\n  }\n\n  #kvh-header .kvh-brand-area {\n    grid-column: 2;\n    grid-row: 1;\n  }\n\n  #kvh-header .kvh-actions {\n    grid-column: 3;\n    grid-row: 1;\n  }\n\n  #kvh-header .kvh-nav-row {\n    display: none;\n  }\n}\n\n@media (max-width: 430px) {\n  #kvh-header .kvh-shell {\n    width: calc(100% - 18px);\n  }\n\n  #kvh-header .kvh-logo {\n    width: 145px;\n  }\n\n  #kvh-header .kvh-action-btn {\n    width: 42px;\n    height: 42px;\n    flex-basis: 42px;\n    border-radius: 12px;\n  }\n\n  #kvh-header .kvh-search-form,\n  #kvh-header .kvh-search-input {\n    height: 46px;\n    min-height: 46px;\n  }\n\n  #kvh-header .kvh-search-submit {\n    width: 47px;\n    height: 46px;\n    flex-basis: 47px;\n  }\n}\n\n@media (max-width: 355px) {\n  #kvh-header .kvh-logo {\n    width: 126px;\n  }\n\n  #kvh-header .kvh-action-btn {\n    width: 39px;\n    height: 39px;\n    flex-basis: 39px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  #kvh-header *,\n  #kvh-header *::before,\n  #kvh-header *::after,\n  #kvh-mobile-overlay *,\n  #kvh-mobile-overlay *::before,\n  #kvh-mobile-overlay *::after {\n    animation: none !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n\n\n/* =========================================================\n   1) الخط العام\n========================================================= */\n\n:root {\n  --kv-color-bg: #ffffff;\n  --kv-color-dark: #101722;\n  --kv-color-text: #253040;\n  --kv-color-muted: #768394;\n  --kv-color-border: #dfe5ec;\n  --kv-color-soft: #f4f7fa;\n  --kv-color-blue: #158cff;\n  --kv-color-blue-dark: #056bc8;\n  --kv-color-blue-light: #51c6ff;\n  --kv-color-danger: #e82424;\n}\n\nhtml,\nbody,\nmain,\ninput,\ntextarea,\nselect,\nbutton {\n  font-family: \"Cairo\", Arial, Tahoma, sans-serif !important;\n}\n\n/*\n  لا نغيّر الخطوط الداخلية الخاصة بالأيقونات أو عناصر\n  الهيدر والفوتر المخصصين إلا بما هو محدد داخل أكوادهم.\n*/\n#kvh-header,\n#kvh-header *,\n#kv-custom-footer,\n#kv-custom-footer *,\n.kv-footer,\n.kv-footer *,\n#kv-messenger-float,\n#kv-messenger-float * {\n  font-family: \"Cairo\", Arial, Tahoma, sans-serif;\n}\n\n\n/* =========================================================\n   2) الصفحة الرئيسية الداكنة\n========================================================= */\n\nbody.kv-route-home {\n  background-color: #02080f !important;\n  color: #f7f9fc;\n}\n\nbody.kv-route-home main,\nbody.kv-route-home .main-content,\nbody.kv-route-home [class*=\"home-page\"],\nbody.kv-route-home [class*=\"home-builder\"] {\n  color: #f7f9fc;\n}\n\n/* عناوين الأقسام مثل New features products Section */\nbody.kv-route-home main h1,\nbody.kv-route-home main h2,\nbody.kv-route-home main h3,\nbody.kv-route-home main h4,\nbody.kv-route-home main [class*=\"section-title\"],\nbody.kv-route-home main [class*=\"sectionTitle\"],\nbody.kv-route-home main [class*=\"products-title\"],\nbody.kv-route-home main [class*=\"productsTitle\"],\nbody.kv-route-home main [class*=\"heading\"] {\n  color: #f7f9fc !important;\n  text-shadow: 0 5px 22px rgba(0, 0, 0, 0.32);\n}\n\n/* روابط عرض الكل */\nbody.kv-route-home main [class*=\"view-all\"],\nbody.kv-route-home main [class*=\"viewAll\"],\nbody.kv-route-home main [class*=\"show-all\"],\nbody.kv-route-home main [class*=\"showAll\"],\nbody.kv-route-home main a[href*=\"/collections/\"] {\n  color: #eaf6ff !important;\n}\n\n/* زر عرض الكل */\nbody.kv-route-home main [class*=\"view-all\"] button,\nbody.kv-route-home main [class*=\"viewAll\"] button,\nbody.kv-route-home main [class*=\"show-all\"] button,\nbody.kv-route-home main [class*=\"showAll\"] button,\nbody.kv-route-home main a[href*=\"/collections/\"] button {\n  color: #ffffff !important;\n  border-color: rgba(81, 198, 255, 0.42) !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--kv-color-blue),\n      var(--kv-color-blue-dark)\n    ) !important;\n  box-shadow: 0 12px 28px rgba(21, 140, 255, 0.22) !important;\n}\n\n/* أسماء المنتجات */\nbody.kv-route-home main [class*=\"product\"] h2,\nbody.kv-route-home main [class*=\"product\"] h3,\nbody.kv-route-home main [class*=\"product-name\"],\nbody.kv-route-home main [class*=\"productName\"],\nbody.kv-route-home main [class*=\"product-title\"],\nbody.kv-route-home main [class*=\"productTitle\"] {\n  color: #f5f8fc !important;\n  font-weight: 700 !important;\n  line-height: 1.65 !important;\n}\n\n/* السعر الحالي */\nbody.kv-route-home main [class*=\"price\"]:not([class*=\"old\"]):not([class*=\"compare\"]),\nbody.kv-route-home main [class*=\"sale-price\"],\nbody.kv-route-home main [class*=\"salePrice\"] {\n  color: var(--kv-color-blue) !important;\n  font-weight: 800 !important;\n}\n\n/* السعر القديم */\nbody.kv-route-home main [class*=\"old-price\"],\nbody.kv-route-home main [class*=\"oldPrice\"],\nbody.kv-route-home main [class*=\"compare-price\"],\nbody.kv-route-home main [class*=\"comparePrice\"] {\n  color: rgba(206, 217, 228, 0.38) !important;\n  text-decoration-color: rgba(206, 217, 228, 0.42) !important;\n}\n\n\n/* =========================================================\n   3) صفحات المنتجات\n========================================================= */\n\nbody.kv-route-product {\n  background: #ffffff !important;\n  color: var(--kv-color-text) !important;\n}\n\nbody.kv-route-product main,\nbody.kv-route-product .main-content,\nbody.kv-route-product [class*=\"product-page\"],\nbody.kv-route-product [class*=\"productPage\"],\nbody.kv-route-product [class*=\"product-details\"],\nbody.kv-route-product [class*=\"productDetails\"] {\n  color: var(--kv-color-text) !important;\n  background-color: #ffffff;\n}\n\n/* عنوان المنتج الذي ظهر أبيض في الصورة */\nbody.kv-route-product main h1,\nbody.kv-route-product main h2,\nbody.kv-route-product main h3,\nbody.kv-route-product main h4,\nbody.kv-route-product main [class*=\"product-title\"],\nbody.kv-route-product main [class*=\"productTitle\"],\nbody.kv-route-product main [class*=\"title\"] {\n  color: var(--kv-color-dark) !important;\n  text-shadow: none !important;\n}\n\n/* العنوان الرئيسي */\nbody.kv-route-product main h1,\nbody.kv-route-product main [class*=\"product-title\"],\nbody.kv-route-product main [class*=\"productTitle\"] {\n  font-size: clamp(20px, 2.6vw, 32px) !important;\n  font-weight: 800 !important;\n  line-height: 1.65 !important;\n}\n\n/* الوصف والنصوص */\nbody.kv-route-product main p,\nbody.kv-route-product main label,\nbody.kv-route-product main legend,\nbody.kv-route-product main [class*=\"description\"],\nbody.kv-route-product main [class*=\"product-info\"],\nbody.kv-route-product main [class*=\"productInfo\"] {\n  color: var(--kv-color-text) !important;\n  line-height: 1.9 !important;\n}\n\n/* النصوص الثانوية */\nbody.kv-route-product main small,\nbody.kv-route-product main [class*=\"muted\"],\nbody.kv-route-product main [class*=\"hint\"],\nbody.kv-route-product main [class*=\"views\"],\nbody.kv-route-product main [class*=\"viewer\"] {\n  color: var(--kv-color-muted) !important;\n}\n\n/* Breadcrumbs */\nbody.kv-route-product main [class*=\"breadcrumb\"],\nbody.kv-route-product main [class*=\"breadcrumb\"] a,\nbody.kv-route-product main nav[aria-label*=\"breadcrumb\" i],\nbody.kv-route-product main nav[aria-label*=\"breadcrumb\" i] a {\n  color: #4e5b6b !important;\n  font-size: 11px !important;\n}\n\nbody.kv-route-product main [class*=\"breadcrumb\"] a:hover,\nbody.kv-route-product main nav[aria-label*=\"breadcrumb\" i] a:hover {\n  color: var(--kv-color-blue) !important;\n}\n\n/* السعر */\nbody.kv-route-product main [class*=\"price\"]:not([class*=\"old\"]):not([class*=\"compare\"]),\nbody.kv-route-product main [class*=\"sale-price\"],\nbody.kv-route-product main [class*=\"salePrice\"] {\n  color: var(--kv-color-blue-dark) !important;\n  font-weight: 900 !important;\n}\n\nbody.kv-route-product main [class*=\"old-price\"],\nbody.kv-route-product main [class*=\"oldPrice\"],\nbody.kv-route-product main [class*=\"compare-price\"],\nbody.kv-route-product main [class*=\"comparePrice\"] {\n  color: #939daa !important;\n}\n\n/* عداد العرض */\nbody.kv-route-product main [class*=\"countdown\"],\nbody.kv-route-product main [class*=\"timer\"] {\n  color: var(--kv-color-dark) !important;\n  border-color: var(--kv-color-border) !important;\n  background: #eef2f6 !important;\n}\n\nbody.kv-route-product main [class*=\"countdown\"] *,\nbody.kv-route-product main [class*=\"timer\"] * {\n  color: inherit;\n}\n\n/* النماذج */\nbody.kv-route-product main input:not([type=\"checkbox\"]):not([type=\"radio\"]),\nbody.kv-route-product main textarea,\nbody.kv-route-product main select {\n  color: var(--kv-color-dark) !important;\n  border: 1px solid #d8e0e8 !important;\n  border-radius: 12px !important;\n  background: #ffffff !important;\n  box-shadow: none !important;\n  font-size: 12px !important;\n}\n\nbody.kv-route-product main input:not([type=\"checkbox\"]):not([type=\"radio\"]) {\n  min-height: 47px;\n}\n\nbody.kv-route-product main textarea {\n  min-height: 110px;\n  padding: 12px 14px !important;\n}\n\nbody.kv-route-product main input::placeholder,\nbody.kv-route-product main textarea::placeholder {\n  color: #99a4b1 !important;\n  opacity: 1 !important;\n}\n\nbody.kv-route-product main input:focus,\nbody.kv-route-product main textarea:focus,\nbody.kv-route-product main select:focus {\n  border-color: rgba(21, 140, 255, 0.75) !important;\n  outline: 0 !important;\n  box-shadow: 0 0 0 4px rgba(21, 140, 255, 0.09) !important;\n}\n\nbody.kv-route-product main input[type=\"checkbox\"],\nbody.kv-route-product main input[type=\"radio\"] {\n  accent-color: var(--kv-color-blue);\n}\n\n/* أزرار الشراء */\nbody.kv-route-product main button[type=\"submit\"],\nbody.kv-route-product main [class*=\"buy-button\"],\nbody.kv-route-product main [class*=\"buyButton\"],\nbody.kv-route-product main [class*=\"purchase-button\"],\nbody.kv-route-product main [class*=\"purchaseButton\"],\nbody.kv-route-product main [class*=\"add-to-cart\"],\nbody.kv-route-product main [class*=\"addToCart\"] {\n  min-height: 48px !important;\n  color: #ffffff !important;\n  border: 0 !important;\n  border-radius: 10px !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--kv-color-blue),\n      var(--kv-color-blue-dark)\n    ) !important;\n  box-shadow: 0 12px 27px rgba(21, 140, 255, 0.21) !important;\n  font-weight: 800 !important;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease !important;\n}\n\nbody.kv-route-product main button[type=\"submit\"]:hover,\nbody.kv-route-product main [class*=\"buy-button\"]:hover,\nbody.kv-route-product main [class*=\"buyButton\"]:hover,\nbody.kv-route-product main [class*=\"purchase-button\"]:hover,\nbody.kv-route-product main [class*=\"purchaseButton\"]:hover,\nbody.kv-route-product main [class*=\"add-to-cart\"]:hover,\nbody.kv-route-product main [class*=\"addToCart\"]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 17px 35px rgba(21, 140, 255, 0.29) !important;\n}\n\n/* صندوق نموذج الشراء */\nbody.kv-route-product main form,\nbody.kv-route-product main [class*=\"purchase-form\"],\nbody.kv-route-product main [class*=\"purchaseForm\"],\nbody.kv-route-product main [class*=\"order-form\"],\nbody.kv-route-product main [class*=\"orderForm\"] {\n  color: var(--kv-color-text);\n}\n\n/* معرض المنتج */\nbody.kv-route-product main [class*=\"gallery\"],\nbody.kv-route-product main [class*=\"product-image\"],\nbody.kv-route-product main [class*=\"productImage\"] {\n  border-color: #e1e7ee !important;\n  background-color: #ffffff !important;\n}\n\n/* صور المصغرات */\nbody.kv-route-product main [class*=\"thumbnail\"],\nbody.kv-route-product main [class*=\"thumb\"] {\n  border-color: #dce3ea !important;\n  background-color: #ffffff !important;\n}\n\nbody.kv-route-product main [class*=\"thumbnail\"].active,\nbody.kv-route-product main [class*=\"thumb\"].active,\nbody.kv-route-product main [aria-current=\"true\"] {\n  border-color: var(--kv-color-blue) !important;\n}\n\n\n/* =========================================================\n   4) صفحات الأقسام والبحث\n========================================================= */\n\nbody.kv-route-collection,\nbody.kv-route-search {\n  background: #ffffff !important;\n  color: var(--kv-color-text) !important;\n}\n\nbody.kv-route-collection main h1,\nbody.kv-route-collection main h2,\nbody.kv-route-collection main h3,\nbody.kv-route-search main h1,\nbody.kv-route-search main h2,\nbody.kv-route-search main h3 {\n  color: var(--kv-color-dark) !important;\n}\n\nbody.kv-route-collection main p,\nbody.kv-route-search main p {\n  color: var(--kv-color-text) !important;\n}\n\nbody.kv-route-collection main [class*=\"price\"],\nbody.kv-route-search main [class*=\"price\"] {\n  color: var(--kv-color-blue-dark) !important;\n  font-weight: 800 !important;\n}\n\n\n/* =========================================================\n   5) حماية الهيدر والفوتر المخصصين\n========================================================= */\n\n#kvh-header,\n#kvh-header *,\n#kv-custom-footer,\n#kv-custom-footer *,\n.kv-footer,\n.kv-footer *,\n#kv-messenger-float,\n#kv-messenger-float *,\n.kv-messenger-float,\n.kv-messenger-float * {\n  text-shadow: none;\n}\n\n\n/* =========================================================\n   6) الموبايل\n========================================================= */\n\n@media (max-width: 760px) {\n  body.kv-route-home main h1,\n  body.kv-route-home main h2 {\n    font-size: clamp(23px, 7vw, 31px) !important;\n    line-height: 1.45 !important;\n  }\n\n  body.kv-route-product main h1,\n  body.kv-route-product main [class*=\"product-title\"],\n  body.kv-route-product main [class*=\"productTitle\"] {\n    font-size: 21px !important;\n    line-height: 1.65 !important;\n  }\n\n  body.kv-route-product main p,\n  body.kv-route-product main label {\n    font-size: 12px !important;\n  }\n}";
  const GLOBAL_HTML = "<!-- =========================================================\n     Hide Easy Orders Default Footer\n     لا يؤثر على فوتر MaKaYa الجديد .mk-footer\n========================================================== -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- =========================================================\n  KARVORA GLOBAL PREMIUM HEADER V1\n  مكان التركيب الصحيح:\n  إعدادات المتجر → كود الهيدر العام\n\n  مهم:\n  - لا تضعيه داخل UI Blocks.\n  - امسحي أي كود هيدر مخصص قديم قبل لصق هذا الكود.\n  - الهيدر يظهر في الصفحة الرئيسية وصفحات المنتجات والأقسام والسياسات.\n  - رابط \"الرئيسية\" ثابت دائمًا ولا يختفي داخل صفحات المنتجات.\n========================================================== -->\n\n\n\n\n\n\n\n\n<!-- =========================================================\n     الهيدر الجديد\n========================================================= -->\n\n<header id=\"kvh-header\" aria-label=\"هيدر متجر كارفورا\">\n\n  <div class=\"kvh-announcement\">\n    مستلزمات وإكسسوارات تضبط سيارتك ومشوارك\n  </div>\n\n  <div class=\"kvh-shell\">\n\n    <div class=\"kvh-main-row\">\n\n      <!-- زر الموبايل -->\n      <button\n        id=\"kvh-menu-btn\"\n        class=\"kvh-action-btn kvh-mobile-menu-btn\"\n        type=\"button\"\n        aria-label=\"فتح قائمة الأقسام\"\n        aria-expanded=\"false\"\n        aria-controls=\"kvh-mobile-overlay\"\n      >\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n             stroke-width=\"1.9\" stroke-linecap=\"round\">\n          <path d=\"M4 7h16\"/>\n          <path d=\"M4 12h16\"/>\n          <path d=\"M4 17h16\"/>\n        </svg>\n      </button>\n\n      <!-- اللوجو -->\n      <div class=\"kvh-brand-area\">\n        <a\n          class=\"kvh-logo\"\n          href=\"/\"\n          aria-label=\"العودة للصفحة الرئيسية\"\n        >\n          <img\n            src=\"https://files.easy-orders.net/1785215802061779562.png\"\n            alt=\"كارفورا | KARVORA\"\n          >\n        </a>\n      </div>\n\n      <!-- البحث -->\n      <div class=\"kvh-search-wrap\">\n        <form\n          class=\"kvh-search-form\"\n          action=\"/search\"\n          method=\"get\"\n          role=\"search\"\n        >\n          <input\n            class=\"kvh-search-input\"\n            type=\"search\"\n            name=\"q\"\n            placeholder=\"وش تدور عليه لسيارتك؟\"\n            autocomplete=\"off\"\n            autocorrect=\"off\"\n            autocapitalize=\"off\"\n            spellcheck=\"false\"\n            aria-label=\"البحث في متجر كارفورا\"\n          >\n\n          <button\n            class=\"kvh-search-submit\"\n            type=\"submit\"\n            aria-label=\"بحث\"\n          >\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n                 stroke-width=\"1.9\" stroke-linecap=\"round\"\n                 stroke-linejoin=\"round\">\n              <circle cx=\"11\" cy=\"11\" r=\"7\"/>\n              <path d=\"M16.5 16.5L21 21\"/>\n            </svg>\n          </button>\n        </form>\n      </div>\n\n      <!-- السلة -->\n      <div class=\"kvh-actions\">\n        <button\n          id=\"kvh-cart-btn\"\n          class=\"kvh-action-btn\"\n          type=\"button\"\n          aria-label=\"فتح سلة التسوق\"\n        >\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\" stroke-linecap=\"round\"\n               stroke-linejoin=\"round\">\n            <path d=\"M5 8h14l-1 12H6z\"/>\n            <path d=\"M9 8V6a3 3 0 016 0v2\"/>\n          </svg>\n\n          <span\n            id=\"kvh-cart-count\"\n            class=\"kvh-cart-count\"\n            aria-label=\"عدد المنتجات في السلة\"\n          ></span>\n        </button>\n      </div>\n\n    </div>\n\n    <!-- قائمة الديسكتوب -->\n    <div class=\"kvh-nav-row\">\n      <nav class=\"kvh-nav-scroll\" aria-label=\"الأقسام الرئيسية\">\n\n        <!-- الرئيسية ثابتة دائمًا -->\n        <a\n          class=\"kvh-nav-link kvh-home-link\"\n          href=\"/\"\n          data-kvh-path=\"/\"\n        >\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\" stroke-linecap=\"round\"\n               stroke-linejoin=\"round\">\n            <path d=\"M3 11l9-8 9 8\"/>\n            <path d=\"M5 10v10h14V10\"/>\n            <path d=\"M9 20v-6h6v6\"/>\n          </svg>\n\n          الرئيسية\n        </a>\n\n        <span class=\"kvh-nav-divider\" aria-hidden=\"true\"></span>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/new-car-accessories\"\n          data-kvh-path=\"/collections/new-car-accessories\"\n        >\n          وصل حديثًا\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/karvora-picks\"\n          data-kvh-path=\"/collections/karvora-picks\"\n        >\n          اختيارات كارفورا\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/roadside-emergency-tire-tools\"\n          data-kvh-path=\"/collections/roadside-emergency-tire-tools\"\n        >\n          طوارئ الطريق والكفرات\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/car-cleaning-care\"\n          data-kvh-path=\"/collections/car-cleaning-care\"\n        >\n          تنظيف وعناية السيارة\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/car-power-charging\"\n          data-kvh-path=\"/collections/car-power-charging\"\n        >\n          الطاقة والشحن\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/road-trips-camping\"\n          data-kvh-path=\"/collections/road-trips-camping\"\n        >\n          الرحلات والكشتات\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/car-cooling-heating\"\n          data-kvh-path=\"/collections/car-cooling-heating\"\n        >\n          تبريد وتسخين السيارة\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/car-cameras-security\"\n          data-kvh-path=\"/collections/car-cameras-security\"\n        >\n          كاميرات وأمان السيارة\n        </a>\n\n        <a\n          class=\"kvh-nav-link\"\n          href=\"/collections/car-organization-comfort\"\n          data-kvh-path=\"/collections/car-organization-comfort\"\n        >\n          تنظيم وراحة السيارة\n        </a>\n\n      </nav>\n    </div>\n\n  </div>\n\n</header>\n\n\n<!-- =========================================================\n     قائمة الموبايل\n========================================================= -->\n\n<div\n  id=\"kvh-mobile-overlay\"\n  aria-hidden=\"true\"\n>\n  <button\n    class=\"kvh-mobile-backdrop\"\n    type=\"button\"\n    aria-label=\"إغلاق القائمة\"\n    data-kvh-close\n  ></button>\n\n  <aside\n    class=\"kvh-mobile-panel\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    aria-label=\"قائمة أقسام كارفورا\"\n  >\n\n    <div class=\"kvh-mobile-head\">\n\n      <a\n        class=\"kvh-mobile-logo\"\n        href=\"/\"\n        aria-label=\"العودة للرئيسية\"\n      >\n        <img\n          src=\"https://files.easy-orders.net/1785215802061779562.png\"\n          alt=\"كارفورا | KARVORA\"\n        >\n      </a>\n\n      <button\n        class=\"kvh-mobile-close\"\n        type=\"button\"\n        aria-label=\"إغلاق القائمة\"\n        data-kvh-close\n      >\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n             stroke-width=\"2\" stroke-linecap=\"round\">\n          <path d=\"M6 6l12 12\"/>\n          <path d=\"M18 6L6 18\"/>\n        </svg>\n      </button>\n\n    </div>\n\n    <div class=\"kvh-mobile-search\">\n      <form action=\"/search\" method=\"get\" role=\"search\">\n        <input\n          type=\"search\"\n          name=\"q\"\n          placeholder=\"وش تدور عليه لسيارتك؟\"\n          autocomplete=\"off\"\n          aria-label=\"البحث في متجر كارفورا\"\n        >\n\n        <button type=\"submit\" aria-label=\"بحث\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.9\" stroke-linecap=\"round\"\n               stroke-linejoin=\"round\">\n            <circle cx=\"11\" cy=\"11\" r=\"7\"/>\n            <path d=\"M16.5 16.5L21 21\"/>\n          </svg>\n        </button>\n      </form>\n    </div>\n\n    <p class=\"kvh-mobile-nav-title\">\n      تصفح المتجر\n    </p>\n\n    <nav class=\"kvh-mobile-nav\" aria-label=\"أقسام المتجر على الجوال\">\n\n      <!-- الرئيسية ثابتة دائمًا -->\n      <a\n        class=\"kvh-mobile-link kvh-mobile-home\"\n        href=\"/\"\n        data-kvh-path=\"/\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\" stroke-linecap=\"round\"\n               stroke-linejoin=\"round\">\n            <path d=\"M3 11l9-8 9 8\"/>\n            <path d=\"M5 10v10h14V10\"/>\n            <path d=\"M9 20v-6h6v6\"/>\n          </svg>\n        </span>\n\n        الرئيسية\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/new-car-accessories\"\n        data-kvh-path=\"/collections/new-car-accessories\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <path d=\"M12 3l2.2 4.6L19 10l-4.8 2.4L12 17l-2.2-4.6L5 10l4.8-2.4z\"/>\n          </svg>\n        </span>\n\n        وصل حديثًا\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/karvora-picks\"\n        data-kvh-path=\"/collections/karvora-picks\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <circle cx=\"12\" cy=\"12\" r=\"8\"/>\n            <path d=\"M12 7l1.5 3 3.5.5-2.5 2.4.6 3.5-3.1-1.7-3.1 1.7.6-3.5L7 10.5l3.5-.5z\"/>\n          </svg>\n        </span>\n\n        اختيارات كارفورا\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/roadside-emergency-tire-tools\"\n        data-kvh-path=\"/collections/roadside-emergency-tire-tools\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <circle cx=\"12\" cy=\"12\" r=\"7\"/>\n            <circle cx=\"12\" cy=\"12\" r=\"2\"/>\n            <path d=\"M12 5v5M12 14v5M5 12h5M14 12h5\"/>\n          </svg>\n        </span>\n\n        طوارئ الطريق والكفرات\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/car-cleaning-care\"\n        data-kvh-path=\"/collections/car-cleaning-care\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <path d=\"M8 4h8l2 5v10H6V9z\"/>\n            <path d=\"M9 4V2h6v2\"/>\n            <path d=\"M9 12h6\"/>\n          </svg>\n        </span>\n\n        تنظيف وعناية السيارة\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/car-power-charging\"\n        data-kvh-path=\"/collections/car-power-charging\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"3\"/>\n            <path d=\"M13 7l-4 6h4l-2 4 5-7h-4z\"/>\n          </svg>\n        </span>\n\n        الطاقة والشحن\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/road-trips-camping\"\n        data-kvh-path=\"/collections/road-trips-camping\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <path d=\"M3 19l8-14 8 14z\"/>\n            <path d=\"M11 5l3 14\"/>\n          </svg>\n        </span>\n\n        الرحلات والكشتات\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/car-cooling-heating\"\n        data-kvh-path=\"/collections/car-cooling-heating\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <rect x=\"5\" y=\"4\" width=\"14\" height=\"16\" rx=\"3\"/>\n            <path d=\"M5 9h14M12 11v6M9 14h6\"/>\n          </svg>\n        </span>\n\n        تبريد وتسخين السيارة\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/car-cameras-security\"\n        data-kvh-path=\"/collections/car-cameras-security\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <rect x=\"4\" y=\"7\" width=\"16\" height=\"11\" rx=\"3\"/>\n            <circle cx=\"12\" cy=\"12.5\" r=\"3\"/>\n            <path d=\"M8 7l1-2h6l1 2\"/>\n          </svg>\n        </span>\n\n        كاميرات وأمان السيارة\n      </a>\n\n      <a\n        class=\"kvh-mobile-link\"\n        href=\"/collections/car-organization-comfort\"\n        data-kvh-path=\"/collections/car-organization-comfort\"\n      >\n        <span class=\"kvh-mobile-link-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"1.8\">\n            <rect x=\"4\" y=\"5\" width=\"16\" height=\"14\" rx=\"3\"/>\n            <path d=\"M4 10h16M10 10v9M14 10v9\"/>\n          </svg>\n        </span>\n\n        تنظيم وراحة السيارة\n      </a>\n\n    </nav>\n\n    <div class=\"kvh-mobile-bottom\">\n      <a\n        class=\"kvh-mobile-messenger\"\n        href=\"https://m.me/karvora.store\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      >\n        <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\n          <path d=\"M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.5 5.5 3.8 7.2V22l3.4-1.9c.9.2 1.8.4 2.8.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1 12.4l-2.5-2.7-4.8 2.7 5.3-5.6 2.5 2.7 4.8-2.7-5.3 5.6z\"/>\n        </svg>\n\n        كلّمنا على ماسنجر\n      </a>\n    </div>\n\n  </aside>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<!-- =========================================================\n  KARVORA GLOBAL TYPOGRAPHY & COLORS FIX V1\n  مكان التركيب:\n  إعدادات المتجر → كود الهيدر العام\n  ضعيه أسفل كود الهيدر الجديد مباشرة\n\n  الوظيفة:\n  - اعتماد خط Cairo على المتجر\n  - إصلاح ألوان الصفحة الرئيسية الداكنة\n  - إصلاح النصوص البيضاء داخل صفحات المنتجات\n  - تنسيق الأسعار والأزرار والنماذج\n  - لا يغيّر هيدر أو فوتر Karvora المخصص\n========================================================== -->";

  function injectLightPremiumStyles() {
    let style = document.getElementById(LIGHT_PREMIUM_CSS_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = LIGHT_PREMIUM_CSS_ID;
      document.head.appendChild(style);
    }

    style.textContent = LIGHT_PREMIUM_CSS;
  }

  function injectFont() {
    if (document.getElementById(FONT_ID)) return;

    const font = document.createElement("link");
    font.id = FONT_ID;
    font.rel = "stylesheet";
    font.href =
      "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Rajdhani:wght@600;700&display=swap";

    document.head.appendChild(font);
  }

  function injectStyles() {
    if (document.getElementById(CSS_ID)) return;

    const style = document.createElement("style");
    style.id = CSS_ID;
    style.textContent = GLOBAL_CSS;

    document.head.appendChild(style);
  }

  function injectMarkup() {
    if (document.getElementById(HEADER_ID)) return;

    const template = document.createElement("template");
    template.innerHTML = GLOBAL_HTML;

    document.body.insertBefore(
      template.content,
      document.body.firstChild
    );
  }

  function initializeRuntime() {
    injectFont();
    injectStyles();
    injectLightPremiumStyles();
    injectMarkup();

function toggleBlockById(blockId) {
    const block = document.querySelector(`#${blockId}`);
    if (!block) return;
    const isHome = location.pathname === "/" || location.pathname === "/index.html";
    block.style.display = isHome ? "block" : "none";
  }

  function initHideBlocks(blockIds = []) {
    let tryCount = 0;
    const tryInterval = setInterval(() => {
      const allExist = blockIds.every(id => document.querySelector(`#${id}`));
      if (allExist || tryCount > 100) {
        clearInterval(tryInterval);
        blockIds.forEach(toggleBlockById);
      }
      tryCount++;
    }, 50);

    const toggleAll = () => blockIds.forEach(toggleBlockById);
    const observer = new MutationObserver(toggleAll);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('popstate', toggleAll);
    window.addEventListener('pushstate', toggleAll);
    window.addEventListener('replacestate', toggleAll);

    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        toggleAll();
      }
    }, 200);
  }

  // استدعاء الدالة لكل البلوكات اللي عايزين نخفيها
  initHideBlocks(["watch-brands-section", "features-section-wrapper",  "videoBannerBlock" , "custom-reviews-section" , "bannerBlock2"]);



(function () {
  "use strict";

  const HIDDEN_ATTRIBUTE = "data-makaya-default-footer-hidden";

  function hideElement(element) {
    if (!element || element.classList.contains("mk-footer")) {
      return;
    }

    element.setAttribute(HIDDEN_ATTRIBUTE, "true");

    element.style.setProperty("display", "none", "important");
    element.style.setProperty("visibility", "hidden", "important");
    element.style.setProperty("opacity", "0", "important");
    element.style.setProperty("width", "0", "important");
    element.style.setProperty("height", "0", "important");
    element.style.setProperty("min-height", "0", "important");
    element.style.setProperty("max-height", "0", "important");
    element.style.setProperty("margin", "0", "important");
    element.style.setProperty("padding", "0", "important");
    element.style.setProperty("border", "0", "important");
    element.style.setProperty("overflow", "hidden", "important");
    element.style.setProperty("pointer-events", "none", "important");
  }

  function findDefaultFooterWrapper(innerFooter) {
    let currentElement = innerFooter.parentElement;

    while (
      currentElement &&
      currentElement !== document.body &&
      currentElement !== document.documentElement
    ) {
      if (currentElement.classList.contains("mk-footer")) {
        return null;
      }

      const classNames =
        typeof currentElement.className === "string"
          ? currentElement.className.toLowerCase()
          : "";

      const elementId =
        currentElement.id
          ? currentElement.id.toLowerCase()
          : "";

      const tagName = currentElement.tagName.toLowerCase();

      const looksLikeFooter =
        tagName === "footer" ||
        classNames.includes("ab-footer") ||
        classNames.includes("site-footer") ||
        classNames.includes("main-footer") ||
        classNames.includes("footer-section") ||
        elementId.includes("footer");

      if (looksLikeFooter) {
        return currentElement;
      }

      currentElement = currentElement.parentElement;
    }

    return null;
  }

  function hideDefaultFooter() {
    const oldFooters = document.querySelectorAll(".ab-footer-inner");

    oldFooters.forEach(function (innerFooter) {
      hideElement(innerFooter);

      const footerWrapper = findDefaultFooterWrapper(innerFooter);

      if (footerWrapper) {
        hideElement(footerWrapper);
      }
    });
  }

  function initializeFooterHider() {
    hideDefaultFooter();

    /*
      مراقبة الصفحة لأن Easy Orders قد يعيد تحميل
      بعض أجزاء الثيم ديناميكيًا.
    */
    const observer = new MutationObserver(function () {
      hideDefaultFooter();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.addEventListener("load", hideDefaultFooter);

    setTimeout(hideDefaultFooter, 500);
    setTimeout(hideDefaultFooter, 1500);
    setTimeout(hideDefaultFooter, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeFooterHider
    );
  } else {
    initializeFooterHider();
  }
})();



(function () {
  "use strict";

  const HEADER_ID = "kvh-header";
  const OVERLAY_ID = "kvh-mobile-overlay";
  const MENU_BUTTON_ID = "kvh-menu-btn";
  const CART_BUTTON_ID = "kvh-cart-btn";

  let observerTimer = null;

  function isCustomHeader(element) {
    if (!element || element.nodeType !== 1) return false;

    return (
      element.id === HEADER_ID ||
      element.closest("#" + HEADER_ID) !== null ||
      element.querySelector("#" + HEADER_ID) !== null
    );
  }

  /*
    إخفاء الهيدر الأساسي باستخدام الـID والـclass الحقيقيين
    الموجودين في كود Easy Orders.
  */
  function hideNativeHeader() {
    if (!document.body) return;

    document.body.classList.add("kvh-ready");

    document.querySelectorAll(
      "#eo-header, header#eo-header, .ab-header"
    ).forEach(function (header) {
      if (isCustomHeader(header)) return;

      header.setAttribute(
        "data-kv-native-header-hidden",
        "true"
      );

      header.setAttribute(
        "aria-hidden",
        "true"
      );

      [
        ["display", "none"],
        ["visibility", "hidden"],
        ["opacity", "0"],
        ["width", "0"],
        ["height", "0"],
        ["min-width", "0"],
        ["min-height", "0"],
        ["max-width", "0"],
        ["max-height", "0"],
        ["margin", "0"],
        ["padding", "0"],
        ["border", "0"],
        ["overflow", "hidden"],
        ["pointer-events", "none"]
      ].forEach(function (rule) {
        header.style.setProperty(
          rule[0],
          rule[1],
          "important"
        );
      });
    });
  }

  function getOverlay() {
    return document.getElementById(OVERLAY_ID);
  }

  function getMenuButton() {
    return document.getElementById(MENU_BUTTON_ID);
  }

  function openMenu() {
    const overlay = getOverlay();
    const button = getMenuButton();

    if (!overlay) return;

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");

    if (button) {
      button.setAttribute("aria-expanded", "true");
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    const overlay = getOverlay();
    const button = getMenuButton();

    if (!overlay) return;

    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");

    if (button) {
      button.setAttribute("aria-expanded", "false");
    }

    document.documentElement.style.removeProperty("overflow");
    document.body.style.removeProperty("overflow");
  }

  function bindMenu() {
    const button = getMenuButton();

    if (
      button &&
      button.dataset.kvhBound !== "true"
    ) {
      button.dataset.kvhBound = "true";
      button.addEventListener("click", openMenu);
    }

    document.querySelectorAll("[data-kvh-close]").forEach(
      function (closeButton) {
        if (
          closeButton.dataset.kvhBound === "true"
        ) {
          return;
        }

        closeButton.dataset.kvhBound = "true";
        closeButton.addEventListener("click", closeMenu);
      }
    );

    document.querySelectorAll(
      "#kvh-mobile-overlay a"
    ).forEach(function (link) {
      if (link.dataset.kvhMenuLinkBound === "true") {
        return;
      }

      link.dataset.kvhMenuLinkBound = "true";
      link.addEventListener("click", closeMenu);
    });
  }

  /*
    رابط الرئيسية لا يتم إخفاؤه في أي صفحة.
    الكود يضيف فقط is-active للرابط المطابق للمسار الحالي.
  */
  function updateActiveLinks() {
    const rawPath =
      window.location.pathname || "/";

    const currentPath =
      rawPath.length > 1
        ? rawPath.replace(/\/+$/, "")
        : "/";

    document.querySelectorAll(
      "[data-kvh-path]"
    ).forEach(function (link) {
      const linkPath =
        link.getAttribute("data-kvh-path") || "/";

      let active = false;

      if (linkPath === "/") {
        active = currentPath === "/";
      } else {
        active =
          currentPath === linkPath ||
          currentPath.indexOf(linkPath + "/") === 0;
      }

      link.classList.toggle("is-active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /*
    فتح سلة Easy Orders:
    1) يحاول الضغط على زر السلة الأصلي المخفي.
    2) لو لم يجده، يرسل حدث cart-click المتوافق مع المنصة.
  */
  function openNativeCart() {
    const customCart =
      document.getElementById(CART_BUTTON_ID);

    const nativeCart =
      document.querySelector(
        "#eo-header .cart-btn, .ab-header .cart-btn"
      );

    if (
      nativeCart &&
      nativeCart !== customCart
    ) {
      nativeCart.click();
      return;
    }

    if (customCart) {
      customCart.dispatchEvent(
        new CustomEvent("cart-click", {
          bubbles: true
        })
      );
    }
  }

  function bindCart() {
    const cartButton =
      document.getElementById(CART_BUTTON_ID);

    if (
      !cartButton ||
      cartButton.dataset.kvhBound === "true"
    ) {
      return;
    }

    cartButton.dataset.kvhBound = "true";
    cartButton.addEventListener(
      "click",
      openNativeCart
    );
  }

  /*
    مزامنة عداد السلة من العداد الأصلي إن وجد.
  */
  function syncCartCount() {
    const customCount =
      document.getElementById("kvh-cart-count");

    const nativeCount =
      document.querySelector(
        "#header-cart-count, .ab-cart-count"
      );

    if (!customCount) return;

    let value = "";

    if (nativeCount) {
      value =
        String(
          nativeCount.textContent || ""
        ).trim();
    }

    const numericValue =
      Number.parseInt(value, 10);

    if (
      Number.isFinite(numericValue) &&
      numericValue > 0
    ) {
      customCount.textContent =
        numericValue > 99
          ? "99+"
          : String(numericValue);

      customCount.classList.add("is-visible");
    } else {
      customCount.textContent = "";
      customCount.classList.remove("is-visible");
    }
  }

  function initializeHeader() {
    hideNativeHeader();
    bindMenu();
    bindCart();
    updateActiveLinks();
    syncCartCount();

    [250, 700, 1500, 3000].forEach(
      function (delay) {
        window.setTimeout(function () {
          hideNativeHeader();
          syncCartCount();
          updateActiveLinks();
        }, delay);
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeHeader,
      { once: true }
    );
  } else {
    initializeHeader();
  }

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }
  );

  window.addEventListener(
    "popstate",
    updateActiveLinks
  );

  window.addEventListener(
    "pageshow",
    function () {
      hideNativeHeader();
      updateActiveLinks();
      syncCartCount();
    }
  );

  /*
    المنصة قد تعيد تحميل الهيدر أو العداد بعد تحميل الصفحة،
    لذلك تتم مراقبة الصفحة وإعادة المزامنة تلقائيًا.
  */
  const headerObserver =
    new MutationObserver(function () {
      window.clearTimeout(observerTimer);

      observerTimer =
        window.setTimeout(function () {
          hideNativeHeader();
          bindMenu();
          bindCart();
          updateActiveLinks();
          syncCartCount();
        }, 140);
    });

  headerObserver.observe(
    document.documentElement,
    {
      childList: true,
      subtree: true,
      characterData: true
    }
  );
})();



(function () {
  "use strict";

  const ROUTE_CLASSES = [
    "kv-route-home",
    "kv-route-product",
    "kv-route-collection",
    "kv-route-search",
    "kv-route-page"
  ];

  function cleanPath() {
    const path = window.location.pathname || "/";
    return path.length > 1
      ? path.replace(/\/+$/, "")
      : "/";
  }

  function updateKarvoraRouteStyles() {
    if (!document.body) return;

    ROUTE_CLASSES.forEach(function (className) {
      document.body.classList.remove(className);
    });

    const path = cleanPath();

    if (path === "/") {
      document.body.classList.add("kv-route-home");
      return;
    }

    if (path.indexOf("/products/") === 0) {
      document.body.classList.add("kv-route-product");
      return;
    }

    if (path.indexOf("/collections/") === 0) {
      document.body.classList.add("kv-route-collection");
      return;
    }

    if (path.indexOf("/search") === 0) {
      document.body.classList.add("kv-route-search");
      return;
    }

    if (path.indexOf("/pages/") === 0) {
      document.body.classList.add("kv-route-page");
    }
  }

  function initializeKarvoraColors() {
    updateKarvoraRouteStyles();

    [300, 900, 1800].forEach(function (delay) {
      window.setTimeout(
        updateKarvoraRouteStyles,
        delay
      );
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeKarvoraColors,
      { once: true }
    );
  } else {
    initializeKarvoraColors();
  }

  window.addEventListener(
    "pageshow",
    updateKarvoraRouteStyles
  );

  window.addEventListener(
    "popstate",
    updateKarvoraRouteStyles
  );

  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(history, arguments);
    window.setTimeout(updateKarvoraRouteStyles, 0);
  };

  history.replaceState = function () {
    originalReplaceState.apply(history, arguments);
    window.setTimeout(updateKarvoraRouteStyles, 0);
  };
})();
  }

  injectFont();
  injectStyles();
  injectLightPremiumStyles();

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeRuntime,
      { once: true }
    );
  } else {
    initializeRuntime();
  }
})();
