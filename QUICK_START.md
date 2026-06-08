# 🚀 Quick Start Guide for Developers

Welcome to the AccuMaxio v2.0 codebase! This guide will get you up and running quickly.

---

## ⚡ 5-Minute Setup

```bash
# 1. Clone the repo (if you haven't)
git clone [your-repo-url]
cd practice-management

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

That's it! The site should now be running with dark mode working.

---

## 🧪 Quick Test

1. **Toggle Theme**: Click the sun/moon icon in the header
2. **Test Mobile**: Resize browser window to < 768px
3. **Check Animations**: Scroll down the homepage
4. **Verify Links**: Click through navigation items

---

## 🎨 Making Your First Change

### Example: Change Primary Color

1. Open `src/app/globals.css`
2. Find `--primary: #2563eb;` (around line 6)
3. Change to any color: `--primary: #10b981;` (green)
4. Save and see instant update

### Example: Add a New Section

1. Create file: `src/components/sections/my-section.tsx`
```tsx
"use client";

export function MySection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--foreground)]">
          My New Section
        </h2>
      </div>
    </section>
  );
}
```

2. Add to homepage: `src/app/page.tsx`
```tsx
import { MySection } from "@/components/sections/my-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MySection /> {/* Add here */}
      ...
    </>
  );
}
```

---

## 🎯 Common Tasks

### Adding a New Page

```bash
# 1. Create page directory
mkdir src/app/my-page

# 2. Create page file
touch src/app/my-page/page.tsx
```

```tsx
// src/app/my-page/page.tsx
export const metadata = {
  title: "My Page | AccuMaxio",
  description: "Description here",
};

export default function MyPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">My Page</h1>
    </div>
  );
}
```

### Adding a New Component

```bash
# Create component file
touch src/components/ui/my-component.tsx
```

```tsx
// src/components/ui/my-component.tsx
import { cn } from "@/lib/utils";

interface MyComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn("p-4 bg-[var(--card)] rounded-lg", className)}>
      {children}
    </div>
  );
}
```

### Using Animations

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content fades in on scroll
</motion.div>
```

---

## 💡 Essential Patterns

### Dark Mode Support

```tsx
// Option 1: CSS Variables (Recommended)
<div className="bg-[var(--background)] text-[var(--foreground)]">

// Option 2: Tailwind Dark Mode
<div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
```

### Responsive Design

```tsx
<div className="
  px-4        {/* Mobile: 16px padding */}
  sm:px-6     {/* Tablet: 24px padding */}
  lg:px-8     {/* Desktop: 32px padding */}
">
```

### Using Icons

```tsx
import { Star, Check, ArrowRight } from "lucide-react";

<Star className="h-5 w-5 text-[var(--primary)]" />
<Check className="h-4 w-4 text-[var(--success)]" aria-hidden />
```

---

## 📚 Key Files to Know

```
src/
├── app/
│   ├── globals.css          # ← All design system variables
│   ├── layout.tsx           # ← Root layout (add global stuff here)
│   └── page.tsx             # ← Homepage
│
├── components/
│   ├── ui/                  # ← Base components (button, card, etc)
│   ├── layout/              # ← Header, footer
│   ├── sections/            # ← Homepage sections
│   ├── theme-provider.tsx   # ← Theme management
│   └── theme-toggle.tsx     # ← Theme switcher
│
└── lib/
    └── utils.ts             # ← Helper functions (cn, etc)
```

---

## 🐛 Troubleshooting

### Dark Mode Not Working
- Check if `<html suppressHydrationWarning>` is in layout.tsx
- Verify ThemeProvider wraps all content
- Clear localStorage: `localStorage.clear()`

### Animations Not Showing
- Check if `prefers-reduced-motion` is enabled in OS
- Verify Framer Motion is imported correctly
- Check console for errors

### Colors Not Updating
- Make sure using `var(--variable-name)` not hardcoded
- Check if dark mode uses `.dark` class
- Verify globals.css is imported

### Build Failing
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 🎓 Learning Path

### Day 1: Basics
1. ✅ Run the project
2. ✅ Toggle dark mode
3. ✅ Change a color
4. ✅ Add a section

### Day 2: Components
1. Read existing components in `src/components/sections/`
2. Understand the pattern
3. Create a new section
4. Add animations

### Day 3: Styling
1. Read `globals.css` design system
2. Use CSS variables
3. Apply utility classes
4. Test dark mode

### Week 1: Mastery
1. Build a complete page
2. Add SEO metadata
3. Implement a form
4. Deploy to Vercel

---

## 🔗 Helpful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/icons/
- **Design Guide**: [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)

---

## ✅ Checklist for New Developers

Before your first commit:

- [ ] Project runs without errors
- [ ] Understand folder structure
- [ ] Know how to add a page
- [ ] Know how to add a component
- [ ] Understand dark mode system
- [ ] Read DESIGN_SYSTEM_GUIDE.md
- [ ] Test your changes in mobile view
- [ ] Test dark mode works
- [ ] Lint passes: `npm run lint`
- [ ] Build succeeds: `npm run build`

---

## 🚀 Ready to Code?

You're all set! Here's what to do next:

1. **Read**: [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)
2. **Explore**: Components in `src/components/sections/`
3. **Build**: Your first feature
4. **Ask**: Questions if stuck

**Pro Tip**: Copy existing patterns. The codebase has excellent examples of everything you need.

---

## 💬 Need Help?

- **Documentation**: Check the 4 guide files in root
- **Examples**: Look at existing components
- **Console**: Check browser console for errors
- **Team**: Ask your teammates!

---

**Happy coding! 🎉**

*Remember: If something works in an existing component, you can use the same pattern.*
