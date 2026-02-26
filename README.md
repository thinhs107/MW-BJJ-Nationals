# Midwest BJJ Nationals — Next.js Website

Modern, combat-sports-inspired website for the Midwest BJJ Nationals tournament built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
mwbjjn/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with Google Fonts (Bebas Neue, Barlow)
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav with mobile menu + scroll effect
│   ├── Hero.tsx             # Full-screen hero with animated mat + stripes
│   ├── Ticker.tsx           # Scrolling announcement ticker
│   ├── Countdown.tsx        # Live countdown to April 18, 2026
│   ├── EventInfo.tsx        # 3-card grid (date, location, format)
│   ├── About.tsx            # Split panel with rotating BJJ emblem
│   ├── Divisions.tsx        # 4-card divisions grid
│   ├── Rules.tsx            # Gi + No-Gi rules side by side
│   ├── RegisterCTA.tsx      # Bold CTA strip with register button
│   ├── Contact.tsx          # Contact details + map placeholder
│   ├── Footer.tsx           # Full footer with links
│   ├── CursorEffect.tsx     # Custom red cursor with ring (client)
│   └── ScrollReveal.tsx     # Intersection observer scroll animations (client)
└── public/                  # Static assets
```

---

## 🎨 Design System

### Colors
| Variable    | Value     | Usage               |
|-------------|-----------|---------------------|
| `--red`     | `#CC0000` | Primary accent      |
| `--red-hot` | `#FF1A1A` | Hover states        |
| `--red-dark`| `#8B0000` | Gradients           |
| `--black`   | `#0A0A0A` | Background          |
| `--black-card` | `#161616` | Card backgrounds  |
| `--white`   | `#F5F5F5` | Primary text        |
| `--gold`    | `#C9A84C` | Date highlight      |

### Typography
- **Display**: Bebas Neue — headings, numbers
- **Condensed**: Barlow Condensed — labels, nav, buttons
- **Body**: Barlow — body text, descriptions

---

## ✨ Features

- **Live countdown clock** — real-time ticking to April 18, 2026
- **Animated hero** — rotating mat grid, moving light stripes
- **Scrolling ticker** — tournament announcement marquee
- **Custom cursor** — red dot with trailing ring
- **Scroll reveal** — elements fade in as you scroll
- **Mobile responsive** — hamburger menu, stacked layouts
- **Custom scrollbar** — red accent
- **Noise texture overlay** — subtle grain for depth
- All outbound links to original mwbjjn.com rule pages preserved
- SmoothComp registration link throughout

---

## 🔗 Key Links
- Register: https://smoothcomp.com/en/event/29767
- Gi Rules: https://mwbjjn.com/rules/
- No-Gi Rules: https://mwbjjn.com/no-gi-rules/

## 📞 Contact
- Tel: (502) 384-7084
- Cell: (502) 422-1957
