# 📘 FAECOM INC — Ultimate Website Editing & Customization Guide

Welcome to the complete, step-by-step guide for managing, editing, and updating the **FAECOM INC** web application. This guide covers how to change text, logo, colors, images, service details, and database contents with zero confusion!

---

## 📌 Table of Contents
1. [🚀 Quick Start (Running Locally)](#1--quick-start-running-locally)
2. [🎨 Colors, Fonts & Design Tokens](#2--colors-fonts--design-tokens)
3. [🖼️ Logo, Images & Assets Directory](#3️-logo-images--assets-directory)
4. [📝 Editing Website Content Page by Page](#4--editing-website-content-page-by-page)
   - [A. Header Navbar & Logo](#a-header-navbar--logo)
   - [B. Home Page Hero Section](#b-home-page-hero-section)
   - [C. Statistics & Numbers](#c-statistics--numbers)
   - [D. Services Pages](#d-services-pages)
   - [E. Software We Know Section](#e-software-we-know-section)
   - [F. Footer & Contact Details](#f-footer--contact-details)
5. [🗄️ Admin Panel & Supabase Database (Projects & Blogs)](#5️-admin-panel--supabase-database-projects--blogs)
6. [📱 Responsive Breakpoints & Mobile Layout](#6--responsive-breakpoints--mobile-layout)
7. [🚀 Deploying Changes to Vercel & GitHub](#7--deploying-changes-to-vercel--github)

---

## 1. 🚀 Quick Start (Running Locally)

To view and test your website changes on your computer:

1. Open **Terminal** on your Mac.
2. Navigate to your project folder:
   ```bash
   cd /Users/prathamnagarmote/Desktop/faecom-web
   ```
3. Start the local server:
   ```bash
   npm run dev
   ```
4. Open your web browser and go to: `http://localhost:3000`
5. To test building for production (checking for syntax/type errors):
   ```bash
   npm run build
   ```

---

## 2. 🎨 Colors, Fonts & Design Tokens

All global colors and typography variables are stored in one single file:
📄 **`app/globals.css`**

### Main Color Tokens:
- `--primary`: `#0F1238` *(Deep Luxury Navy/Purple)*
- `--accent`: `#FF6B2C` *(Vibrant Architectural Orange)*
- `--bg-light`: `#F8FAFC` *(Clean Off-White Background)*
- `--font-body`: `Outfit`, Inter, sans-serif

**To change a global color across the entire site:**
1. Open `app/globals.css`.
2. Edit `--primary` or `--accent`.
3. Save the file — the entire site will instantly update!

---

## 3. 🖼️ Logo, Images & Assets Directory

All website static images live inside the public folder:
📁 **`/public/images/`**

### Logo Image:
- File path: `/public/images/logo.png`
- Used in: `components/Nav.tsx`

**How to replace the Logo image:**
1. Save your new PNG logo as `logo.png`.
2. Replace `/public/images/logo.png` in Finder.
3. If you need to change its display width & height:
   - Open `components/Nav.tsx` (Lines 71–79).
   - Change `width={72}` and `height={72}`.
   - Open `components/Nav.module.css` (Line 56–74) to change logo text size & tagline size.

---

## 4. 📝 Editing Website Content Page by Page

### A. Header Navbar & Logo
📁 **Files:** `components/Nav.tsx` & `components/Nav.module.css`

- **Logo Title ("FAECOM INC"):** Edit Line 81 in `components/Nav.tsx`.
- **Logo Tagline ("We bring success stories for your future!"):** Edit Line 82 in `components/Nav.tsx`.
- **Logo Title Font Size:** Edit `.logoTitle` in `components/Nav.module.css`:
  ```css
  .logoTitle {
    font-size: clamp(22px, 1.8vw, 27px);
  }
  ```
- **Logo Subline Font Size:** Edit `.logoSubline` in `components/Nav.module.css`:
  ```css
  .logoSubline {
    font-size: clamp(12.5px, 1.05vw, 15px);
  }
  ```
- **Navigation Links (`HOME`, `ABOUT`, `SERVICES`, etc.):** Edit `NAV_LINKS` array at top of `components/Nav.tsx`.
- **CTA Button ("LET'S BUILD TOGETHER"):** Edit Line 110 in `components/Nav.tsx`.

---

### B. Home Page Hero Section
📁 **Files:** `app/page.tsx` & `app/page.module.css`

#### 1. Eyebrow Tagline:
- **Location in Code:** `app/page.tsx` (Line 870)
- **Text:** `ENGINEERING THE FUTURE. BUILDING EXCELLENCE.`
- **Styles:** `.heroTag` in `app/page.module.css` (Line 302).

#### 2. Main 4-Line Heading:
- **Location in Code:** `app/page.tsx` (Lines 874–907)
- **Text:**
  - `DESIGNING`
  - `TOMORROW.`
  - `DELIVERING`
  - `EXCELLENCE.`
- **Styles:** `.heroLineNavy` and `.heroLineOrange` in `app/page.module.css` (Lines 333–357).
- **Font Size:** `font-size: clamp(36px, 5.2vw, 86px);`

#### 3. Hero Description Subtext:
- **Location in Code:** `app/page.tsx` (Lines 910–915)
- **Text:** `From Concept to Completion – We deliver Integrated Solutions in Architecture, Structure, BIM, and MEP.`
- **Styles:** `.heroSub` in `app/page.module.css` (Line 361).

---

### C. Statistics & Numbers
📁 **File:** `app/page.tsx` (Lines 288–295)

Look for `HERO_STATS` array:
```typescript
const HERO_STATS = [
  { val: '1000+', label: 'PROJECTS DELIVERED' },
  { val: '90+', label: 'GLOBAL CLIENTS' },
  { val: '5+', label: 'COUNTRIES SERVED' },
  { val: '25+', label: 'YEARS OF COMBINED ENGINEERING EXPERIENCE' },
  { val: 'ONE-STOP FOR ALL', label: 'ARCHITECTURAL • STRUCTURAL • MEP • BIM' },
  { val: '24-48 HR', label: 'CLIENT RESPONSE TIME' },
];
```

---

### D. Services Pages
📁 **Directory:** `app/services/`

Each service has its own dedicated folder and `page.tsx`:
- `lgs/page.tsx` — Light Gauge Steel
- `structural-steel/page.tsx` — Structural Engineering
- `bim/page.tsx` — BIM Modeling
- `mep/page.tsx` — MEP Systems
- `bim-solutions-3d/page.tsx` — BIM Integrated 3D
- `icf/page.tsx` — ICF Solutions
- `timber/page.tsx` — Timber Engineering
- `rebar-concrete/page.tsx` — Rebar & Concrete
- `third-party-review/page.tsx` — Third Party Review

---

### E. Software We Know Section
📁 **File:** `app/page.tsx` (Lines 450–490)

Look for `SOFTWARE_CATEGORIES` array. You can add or rename any software tool (Tekla, Revit, SDS2, STAAD.Pro, etc.) and update its logo image path in `/public/images/software/`.

---

### F. Footer & Contact Details
📁 **Files:** `components/Footer.tsx` & `components/Footer.module.css`

Edit contact emails, phone numbers, office addresses, and social media links directly inside `components/Footer.tsx`.

---

## 5. 🗄️ Admin Panel & Supabase Database (Projects & Blogs)

Your website is connected live to **Supabase Database & Storage Bucket**. You don't need to touch code to add new projects or blogs!

### Accessing the Admin Panel:
1. Open browser and visit: `http://localhost:3000/adminpanel` (or `https://your-website-url.com/adminpanel`)
2. Log in with your admin password.

### What You Can Do in Admin Panel:
- ➕ **Add New Project**: Upload cover image, add title, client, location, year, discipline (Structural, BIM, MEP, Architectural), and description.
- ✏️ **Edit Project**: Update any existing project data in real-time.
- 🗑️ **Delete Project**: Remove old projects instantly.
- 📰 **Blog Management**: Write and publish new blog posts with images and markdown content.

---

## 6. 📱 Responsive Breakpoints & Mobile Layout

Header responsiveness is managed in `components/Nav.module.css`:

- **Desktop View (1550px+):** Displays full Logo, Subline, 7 Menu Links, and CTA button.
- **Below 1550px:** Hides `.logoSubline` to preserve breathing room between logo title and menu links.
- **Below 1380px:** Automatically switches to the sleek mobile drawer icon (`.burger`) to guarantee **zero collision** on smaller laptops, tablets, and phones!

---

## 7. 🚀 Deploying Changes to Vercel & GitHub

Whenever you finish making edits to text or code, save your changes and run these 3 simple commands in Terminal:

```bash
# 1. Add all modified files
git add .

# 2. Save your changes with a message
git commit -m "Update logo size and text content"

# 3. Push to GitHub (Vercel will auto-deploy in 1 min!)
git push origin development
```

---

🎉 **You are all set! Keep this guide handy whenever you want to update your website.**
