# FoSAN Website Design & Development Guide

## Project Overview

**Project Name:** Food Safety Ambassadors Network (FoSAN) Landing Page  
**Organization:** Nigerian-based NGO focused on food safety education and advocacy  
**Objective:** Create a modern, responsive landing page that reflects FoSAN's mission of promoting science-based food safety education across the food value chain

---

## 1. Brand Identity

### 1.1 Organization Mission
FoSAN is a registered non-governmental organization made up of scientists and professionals committed to advancing food safety education across the food value chain—from farm to fork. The organization works to increase awareness, improve practices, strengthen advocacy, and support stakeholders in delivering safer food to consumers.

### 1.2 Visual Identity
- **Brand Aesthetic:** Professional yet approachable, authoritative, community-focused
- **Visual Theme:** Clean, modern, trust-building
- **Imagery Direction:** Nigerian food markets, food preparation settings, people practicing clean food handling, bright and real community-focused photography

---

## 2. Color System

### 2.1 Primary Colors

| Color Name | Hex Code | Usage | RGB |
|------------|----------|-------|-----|
| **Deep Green** | `#016444` | Primary brand color, headings, CTAs, main UI elements | rgb(1, 102, 68) |
| **Golden Yellow** | `#f9c742` | Accent color, highlights, secondary CTAs, badges | rgb(253, 199, 66) |

### 2.2 Secondary Colors

| Color Name | Hex Code | Usage | RGB |
|------------|----------|-------|-----|
| **Navy Blue** | `#032964` | Footer sections, alternate dark backgrounds | rgb(3, 41, 100) |
| **Turquoise** | `#04A8BE` | Card accents, icons, visual variety | rgb(4, 168, 190) |
| **Light Teal** | `#46C09C` | Supporting color for cards and icons | rgb(70, 192, 156) |

### 2.3 Neutral Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Pure White** | `#ffffff` | Primary backgrounds, cards |
| **Off Black** | `#101111` | Body text, paragraphs |
| **White with opacity** | `rgba(255, 255, 255, 0.9)` | Overlay text |

### 2.4 Color Application Rules

**Background Patterns:**
- Alternating sections: White (`#fff`) → White → Deep Green (`#016444`) → White
- Maintain consistent visual rhythm

**Text on Backgrounds:**
- White backgrounds → Deep Green headings + Off Black body text
- Deep Green backgrounds → White text + Golden Yellow accents
- Navy backgrounds → White text

**CTAs (Call-to-Actions):**
- Primary CTA: Golden Yellow background (`#f9c742`) with Deep Green text (`#016444`)
- Secondary CTA: Deep Green background (`#016444`) with White text
- Outlined CTA: Transparent with Golden Yellow border (`#f9c742`)

---

## 3. Typography System

### 3.1 Font Families

**Headings:** `'Libre Baskerville', serif`  
**Body Text:** `'Poppins', sans-serif`

### 3.2 Font Loading
Fonts are imported via Google Fonts in `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
```

### 3.3 Typography Scale

| Element | Font Family | Font Size | Font Weight | Line Height | Color |
|---------|-------------|-----------|-------------|-------------|-------|
| **H1 (Hero)** | Libre Baskerville | 3.5rem (56px) - 4rem (64px) | 400 | tight | White or Deep Green |
| **H2 (Section Headings)** | Libre Baskerville | 2.5rem (40px) - 3rem (48px) | 400 | tight | Deep Green |
| **H3 (Card Titles)** | Libre Baskerville | 1.25rem (20px) - 1.5rem (24px) | 400 | snug | Deep Green |
| **Body Large** | Poppins | 1.125rem (18px) - 1.25rem (20px) | 400 | relaxed | Off Black |
| **Body Regular** | Poppins | 1rem (16px) | 400 | normal | Off Black |
| **Body Small** | Poppins | 0.875rem (14px) | 400 | normal | Off Black |
| **Badges/Labels** | Poppins | 0.875rem (14px) | 600 | normal | Context-dependent |
| **CTAs** | Poppins | 1rem (16px) | 600 | normal | Context-dependent |

### 3.4 Responsive Typography
- Mobile (< 640px): Use smaller end of scale
- Tablet (640px - 1024px): Mid-range
- Desktop (> 1024px): Larger end of scale

---

## 4. Component Library

### 4.1 Buttons/CTAs

**Primary Button:**
```tsx
style={{
  backgroundColor: '#f9c742',
  color: '#016444',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  padding: '1rem 2rem',
  borderRadius: '9999px' // fully rounded
}}
```

**Secondary Button:**
```tsx
style={{
  backgroundColor: '#016444',
  color: 'white',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  padding: '1rem 2rem',
  borderRadius: '9999px'
}}
```

**Outlined Button:**
```tsx
style={{
  backgroundColor: 'transparent',
  border: '2px solid #f9c742',
  color: 'white',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  padding: '1rem 2rem',
  borderRadius: '9999px'
}}
```

**Hover States:**
- Add `transform: scale(1.05)` on hover
- Transition: `all 0.3s ease`

### 4.2 Badges/Tags

**Section Badge:**
```tsx
style={{
  backgroundColor: '#016444' or '#f9c742',
  color: '#f9c742' or '#016444', // inverse of background
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: '0.5rem 1rem',
  borderRadius: '9999px',
  display: 'inline-block'
}}
```

### 4.3 Cards

**Standard Card:**
- Background: White
- Border radius: `1rem` (16px)
- Padding: `1.5rem` (24px)
- Shadow on hover: `shadow-lg`
- Transition: `all 0.3s ease`

**Program Card:**
- Image height: `12rem` (192px)
- Image hover effect: Scale 1.1
- Icon container: Colored background with 20% opacity
- Rounded corners: `1rem`

### 4.4 Icons

**Icon Library:** `lucide-react`

**Icon Sizes:**
- Small: 20px
- Medium: 24px
- Large: 28px

**Icon Containers:**
```tsx
style={{
  width: '3rem',
  height: '3rem',
  borderRadius: '0.75rem',
  backgroundColor: `${color}20`, // 20% opacity
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}
```

---

## 5. Layout System

### 5.1 Container Specifications

**Max Width:** `1280px` (max-w-7xl)  
**Padding:** 
- Mobile: `1rem` (16px)
- Tablet: `1.5rem` (24px)
- Desktop: `2rem` (32px)

### 5.2 Section Spacing

**Vertical Padding:**
- Standard section: `py-20` (5rem / 80px top & bottom)
- Compact section: `py-16` (4rem / 64px top & bottom)

**Content Spacing:**
- Section header to content: `mb-16` (4rem / 64px)
- Between cards/items: `gap-8` (2rem / 32px)
- Between content blocks: `mb-8` to `mb-12`

### 5.3 Grid Systems

**2-Column Layout (Tablet+):**
```tsx
className="grid md:grid-cols-2 gap-8"
```

**3-Column Layout (Desktop):**
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

**Responsive Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 6. Site Structure & Copy

### 6.1 Header Component

**Structure:**
- Logo (SVG with shield and palm tree)
- Navigation menu (Desktop: inline, Mobile: hamburger)
- "Get Involved" CTA button

**Navigation Links:**
- About
- Programs
- Impact
- Contact

**Logo Specifications:**
- Shield design with palm tree
- Deep Green (`#016444`) and Golden Yellow (`#f9c742`)
- Height: 40px (desktop), 32px (mobile)

---

### 6.2 Section 1: Hero

**Background:** Deep Green (`#016444`)  
**Layout:** Single column, centered content

**Copy:**

**Support Badge:**
"Building safer food systems through education, training, policy engagement, and community action."

**Headline:**
"Advancing Food Safety for **Healthier Communities**"
- Highlight "Healthier Communities" in Golden Yellow

**Subheading:**
"The Food Safety Ambassadors Network (FoSAN) is a Nigerian-based NGO promoting science-based food safety education, awareness, advocacy, and safer practices across the food value chain — from farm to fork."

**CTAs:**
- Primary: "Partner With Us" (Golden Yellow background)
- Secondary: "Join the Network" (Outlined)

**Stats Bar:**
Three mini stats showing:
1. "Farm to Fork"
2. "Science-Based Education"
3. "Community Action"

**Images:**
- Nigerian food market scenes
- Food preparation settings
- Community-focused photography
- Suggested search: "nigerian food market fresh vegetables"




---

### 6.3 Section 3: About Snapshot

**Background:** White (`#fff`)  
**Layout:** Centered content, single column

**Copy:**

**Badge:** "About FoSAN"

**Heading:**
"Who We Are"

**Body Copy (Paragraph 1):**
"The Food Safety Ambassadors Network (FoSAN) is a registered non-governmental organization made up of scientists and professionals committed to advancing food safety education across the food value chain."

**Body Copy (Paragraph 2):**
"We work to increase awareness, improve practices, strengthen advocacy, and support stakeholders in delivering safer food to consumers."

**CTA:**
"Learn More About FoSAN" (Deep Green button)

---

### 6.4 Section 4: What We Do (Programs)

**Background:** White (`#fff`)  
**Layout:** 3-column grid of program cards

**Copy:**

**Badge:** "Our Programs"

**Heading:**
"Our Work"

**Intro:**
"FoSAN advances food safety through education, training, advocacy, and collaboration."

**Program Cards (5 total):**

1. **Food Safety Training & Workshops**
   - Icon: GraduationCap (Green `#016444`)
   - Description: "Practical training for food handlers, vendors, retailers, caterers, hospitality workers, and consumers."
   - Image: Kitchen training scene

2. **Short Courses & Certification**
   - Icon: BookOpen (Turquoise `#04A8BE`)
   - Description: "Capacity-building programs for professionals, inspectors, regulators, and health-related stakeholders."
   - Image: Handwashing/hygiene scene

3. **Public Awareness Campaigns**
   - Icon: Megaphone (Golden Yellow `#f9c742`)
   - Description: "Food safety education through print, electronic, and community-based outreach."
   - Image: Community education scene

4. **Policy Engagement**
   - Icon: Scale (Light Teal `#46C09C`)
   - Description: "Advocacy and collaboration with regulatory bodies to strengthen food safety systems and standards."
   - Image: Fresh vegetables market

5. **Ambassadors' Summit**
   - Icon: Users2 (Navy `#032964`)
   - Description: "A platform for knowledge-sharing, networking, and capacity development."
   - Image: Community gathering

**CTA:**
"Explore Our Programs" (Golden Yellow button)

---

### 6.5 Section 2: Why Food Safety Matters

**Background:** White (`#fff`)  
**Layout:** 2-column (text left, points grid right)

**Copy:**

**Badge:** "Why It Matters"

**Heading:**
"Food Safety Is a Public Health Priority"

**Body Copy (Paragraph 1):**
"Food safety is essential to protecting lives, strengthening food systems, and supporting sustainable development. Unsafe food can lead to illness, loss of income, reduced productivity, and declining public trust."

**Body Copy (Paragraph 2):**
"FoSAN believes that when stakeholders across the food supply chain are equipped with the right knowledge and practical skills, food safety risks can be reduced and healthier communities can thrive."

**Mini Points (4-card grid):**
1. 🛡️ Protects health and well-being (Green)
2. 📈 Supports food security (Turquoise)
3. 👥 Builds consumer trust (Golden Yellow)
4. ❤️ Strengthens communities and livelihoods (Light Teal)

**Icons:** Shield, TrendingUp, Users, Heart

---

### 6.6 Section 5: Who We Serve

**Background:** White (`#fff`)  
**Layout:** 3-column grid with icon + text items

**Copy:**

**Badge:** "Who We Serve"

**Heading:**
"Serving Stakeholders Across the Food Value Chain"

**Intro:**
"Our work supports a wide range of stakeholders involved in food production, handling, service, regulation, and consumption."

**Stakeholder List (9 items):**

1. 🏪 Market women and fresh food retailers
2. 🍴 Street food vendors
3. 👨‍🍳 Caterers, bakers, and confectioners
4. 🏢 Restaurants and hospitality professionals
5. 🩺 Health inspectors and environmental officers
6. 🩺 Nutritionists, dieticians, and health professionals
7. 🌱 Farmers and extension officers
8. 🎓 Schools, childcare centers, and supermarkets
9. 👥 Consumers and community groups

**Icons:** Store, Utensils, ChefHat, Building2, Stethoscope, Stethoscope, Sprout, GraduationCap, Users

**Layout Note:** Each item has Deep Green icon container with Golden Yellow icon

---

### 6.7 Section 6: Why Partner With FoSAN (Impact)

**Background:** Deep Green (`#016444`)  
**Layout:** 2-column (benefits left, visual right)

**Copy:**

**Badge:** "Partnership Benefits"

**Heading:**
"Why Work With Us"

**Body:**
"Partnering with FoSAN means contributing to healthier communities, safer food systems, and stronger public awareness around food safety."

**Benefits List (5 items with checkmarks):**
1. ✅ Improve food safety knowledge and practices
2. ✅ Support stronger compliance and standards
3. ✅ Build trust in food systems
4. ✅ Strengthen community health and well-being
5. ✅ Contribute to SDG-related outcomes in food security and health

**CTA:**
"Become a Partner" (Golden Yellow button)

**Visual Element:**
- Right side: Grid of colored blocks (Golden Yellow, Turquoise, Light Teal, Navy)
- Center overlay card with "Together - We Build Safer Communities"

---

### 6.8 Section 7: Get Involved

**Background:** White (`#fff`)  
**Layout:** 3-column action cards + full-width footer CTA

**Copy:**

**Badge:** "Get Involved"

**Heading:**
"Join the Movement for Safer Food"

**Intro:**
"FoSAN welcomes collaboration with partners, sponsors, volunteers, professionals, students, and advocates who are passionate about promoting food safety."

**Action Cards (3):**

1. **Partner**
   - Icon: HandHeart (Green `#016444`)
   - Description: "Collaborate with us to expand education, advocacy, and community impact."
   - CTA: "Partner With FoSAN"

2. **Sponsor**
   - Icon: DollarSign (Turquoise `#04A8BE`)
   - Description: "Support programs that strengthen food safety knowledge and capacity."
   - CTA: "Sponsor a Program"

3. **Volunteer**
   - Icon: Users (Golden Yellow `#f9c742`)
   - Description: "Join a growing network of people committed to healthier, safer communities."
   - CTA: "Volunteer With Us"

**Footer CTA Block:**
- Background: Navy Blue (`#032964`)
- Pattern: Subtle dot grid in Golden Yellow

**Heading:**
"Let's Build Safer Food Systems Together"

**Body:**
"To partner with, sponsor, or volunteer with FoSAN, get in touch with us today."

**Contact Info:**
- Email: info@fosan.org
- Phone: +234 123 456 7890

**CTA:**
"Get Started Today" (Golden Yellow button)

---

### 6.9 Footer Component

**Background:** Deep Green (`#016444`)  
**Layout:** Multi-column with logo, links, and social

**Structure:**
- Column 1: Logo + tagline
- Column 2: Quick Links (About, Programs, Impact, Contact)
- Column 3: Contact information
- Column 4: Social media links

**Bottom Bar:**
"© 2024 Food Safety Ambassadors Network. All rights reserved."

**Colors:**
- Text: White with reduced opacity (0.8-0.9)
- Links: White, hover Golden Yellow
- Divider: White with 20% opacity

---

## 7. Responsive Behavior

### 7.1 Mobile (< 640px)
- Stack all multi-column layouts vertically
- Reduce heading sizes by 25-30%
- Hamburger menu for navigation
- Full-width CTAs
- Smaller padding and spacing

### 7.2 Tablet (640px - 1024px)
- 2-column grids where applicable
- Medium-sized typography
- Maintain visual hierarchy
- Comfortable touch targets (min 44px)

### 7.3 Desktop (> 1024px)
- Full 3-column grids
- Maximum typography scale
- Enhanced hover states
- Optimal line lengths (60-80 characters)

---

## 8. Image Requirements

### 8.1 Image Sources
Use Unsplash API for placeholder images with relevant search terms:
- "nigerian food market"
- "food safety kitchen training"
- "african woman washing hands hygiene"
- "community education nigeria"
- "fresh vegetables market africa"

### 8.2 Image Specifications
- Format: WebP with JPEG fallback
- Aspect Ratios: 16:9 for hero, 4:3 for cards
- Loading: Lazy load below fold
- Alt text: Descriptive and contextual

### 8.3 Logo (SVG)
- Custom SVG shield with palm tree
- Colors: Deep Green and Golden Yellow
- Scalable without quality loss
- Inline SVG for better control

---

## 9. Technical Stack

### 9.1 Framework & Libraries
- **React** (TypeScript)
- **Tailwind CSS v4** (utility-first styling)
- **Lucide React** (icon library)
- **React Router** (if multi-page needed)

### 9.2 File Structure
```
/src
  /app
    /components
      - Header.tsx
      - Hero.tsx
      - WhyFoodSafety.tsx
      - About.tsx
      - Programs.tsx
      - WhoWeServe.tsx
      - Impact.tsx
      - CallToAction.tsx
      - Footer.tsx
      /figma
        - ImageWithFallback.tsx (protected)
    - App.tsx (main component)
  /styles
    - fonts.css
    - theme.css
```

### 9.3 Component Import Pattern
```tsx
import { ComponentName } from "./components/ComponentName";
```

---

## 10. Accessibility Guidelines

### 10.1 Color Contrast
- Ensure WCAG AA compliance (4.5:1 for normal text)
- Deep Green on White: ✅ Passes
- White on Deep Green: ✅ Passes
- Deep Green on Golden Yellow: ⚠️ Use sparingly, mainly for CTAs

### 10.2 Semantic HTML
- Use proper heading hierarchy (H1 → H2 → H3)
- `<section>` for major content areas
- `<nav>` for navigation
- `<button>` or `<a>` appropriately

### 10.3 Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus states
- Logical tab order

### 10.4 Screen Readers
- Meaningful alt text for images
- ARIA labels where needed
- Skip navigation link

---

## 11. Performance Optimization

### 11.1 Images
- Lazy loading for below-fold images
- Appropriate sizing and compression
- Use `ImageWithFallback` component for error handling

### 11.2 Fonts
- Preload critical fonts
- `font-display: swap` for FOUT prevention
- Subset fonts if possible

### 11.3 Code Splitting
- Component-level code splitting
- Lazy load non-critical components
- Optimize bundle size

---

## 12. Quality Checklist

### 12.1 Visual QA
- [ ] All colors match brand guidelines
- [ ] Typography is consistent across sections
- [ ] Spacing follows the system
- [ ] Images load properly with fallbacks
- [ ] Hover states work correctly
- [ ] Responsive breakpoints are smooth

### 12.2 Content QA
- [ ] All copy matches approved content
- [ ] No typos or grammatical errors
- [ ] Links point to correct destinations
- [ ] Contact information is accurate
- [ ] CTAs are clear and actionable

### 12.3 Technical QA
- [ ] No console errors
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] Performance benchmarks met (Lighthouse score > 90)

### 12.4 Pre-Launch
- [ ] Replace placeholder email/phone with real contacts
- [ ] Update social media links
- [ ] Test all forms and CTAs
- [ ] Set up analytics tracking
- [ ] Configure SEO meta tags

---

## 13. Future Enhancements

### Phase 2 Considerations
- Blog/News section for updates
- Events calendar for summits and workshops
- Team/Ambassador profiles
- Photo gallery from field work
- Online registration forms
- Multi-language support (English + local languages)
- Resource library/downloads section

---

## 14. Brand Voice & Messaging

### 14.1 Tone
- **Authoritative** but not intimidating
- **Educational** but accessible
- **Professional** but warm
- **Action-oriented** and empowering

### 14.2 Key Messages
1. Food safety is a public health priority
2. Science-based education creates change
3. Community collaboration strengthens systems
4. From farm to fork, everyone plays a role
5. Safer food systems lead to healthier communities

### 14.3 Avoid
- Overly technical jargon without context
- Fear-based messaging
- Generic stock imagery that doesn't reflect Nigerian context
- Passive voice in CTAs

---

## 15. Contact & Support

**Developer Questions:** Reference this guide first, then consult with product/design team  
**Content Updates:** All copy changes must go through content approval process  
**Design Changes:** Maintain brand consistency per this guide

**Document Version:** 1.0  
**Last Updated:** April 9, 2026  
**Maintained By:** Product Team

---

*This guide is a living document and will be updated as the project evolves.*
