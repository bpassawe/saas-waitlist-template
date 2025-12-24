# 🎨 Customization Guide

This guide covers everything you can customize in your waitlist template.

---

## Table of Contents

1. [Branding](#branding)
2. [Color Themes](#color-themes)
3. [Features Section](#features-section)
4. [Social Media Links](#social-media-links)
5. [Form Settings](#form-settings)
6. [Advanced Customization](#advanced-customization)

---

## Branding

All branding is controlled in `src/config.js`.

### Product Name

```javascript
brandName: "My SaaS Product";
```

**Where it appears:**

- Main headline (large text at top)
- Browser tab title
- Footer copyright

**Tips:**

- Keep it short (2-4 words ideal)
- Make it memorable
- Use proper capitalization

### Tagline

```javascript
tagline: "The Future of Project Management";
```

**Where it appears:**

- Below your product name
- Prominent colored text

**Tips:**

- 5-10 words is perfect
- Focus on benefit, not feature
- Make it compelling

**Examples:**

- ✅ "Launch Your Startup in Days, Not Months"
- ✅ "Email Marketing Made Simple"
- ✅ "The Easiest Way to Manage Projects"
- ❌ "A SaaS Application" (too generic)

### Description

```javascript
description: "Join 1,000+ founders on the waitlist...";
```

**Where it appears:**

- Below tagline
- Smaller, detailed text

**Tips:**

- 15-25 words
- Include call to action
- Mention benefits or social proof

---

## Color Themes

Change the entire look with one line!

### Available Themes:

```javascript
primaryColor: "blue"; // Choose one:
```

**Options:**

| Color      | Use Case                  | Personality         |
| ---------- | ------------------------- | ------------------- |
| `"blue"`   | Professional, trustworthy | Corporate, reliable |
| `"purple"` | Creative, innovative      | Modern, premium     |
| `"green"`  | Growth, eco-friendly      | Natural, positive   |
| `"pink"`   | Fun, energetic            | Playful, bold       |
| `"orange"` | Action-oriented           | Exciting, urgent    |

### What Changes:

- ✅ Background gradient
- ✅ Button colors
- ✅ Text accents
- ✅ Feature backgrounds
- ✅ Form focus states

**All automatically! ** No other changes needed.

### Example:

```javascript
// Professional SaaS
primaryColor: "blue";

// Creative agency
primaryColor: "purple";

// Fitness app
primaryColor: "green";

// Fashion brand
primaryColor: "pink";

// Urgent campaign
primaryColor: "orange";
```

---

## Features Section

Show off your product's benefits.

### Default Structure:

```javascript
features: [
  {
    icon: "⚡",
    title: "Feature Title",
    description: "Feature description here.",
  },
  // Add more...
];
```

### Customizing Features:

**You can have 2-6 features** (3 is recommended).

#### Example with 3 Features:

```javascript
features: [
  {
    icon: "🚀",
    title: "Launch Faster",
    description: "Get to market in weeks, not months.  Save time and money.",
  },
  {
    icon: "💰",
    title: "Save Money",
    description: "Cut costs by 50% compared to traditional solutions.",
  },
  {
    icon: "📈",
    title: "Grow Quickly",
    description: "Scale from 10 to 10,000 users without breaking a sweat.",
  },
];
```

### Choosing Icons:

**Use emojis! ** They work everywhere:

**Popular options:**

- Speed: ⚡ 🚀 ⏱️ 💨
- Money: 💰 💵 💸 💳
- Growth: 📈 📊 🌱 🔥
- Security: 🔒 🔐 🛡️ ✅
- Quality: 💎 ⭐ ✨ 👑
- Easy: 🎯 🎨 🔧 🛠️
- Users: 👥 👤 🤝 💬

**Find more:** [Emojipedia. org](https://emojipedia.org)

### Writing Good Descriptions:

**Formula: Benefit + Proof**

✅ **Good:**

- "Lightning fast performance that keeps users engaged."
- "Bank-level security trusted by Fortune 500 companies."
- "24/7 support with average 5-minute response time."

❌ **Avoid:**

- "We have good performance."
- "Security included."
- "Support available."

---

## Social Media Links

### Structure:

```javascript
social: {
  x: "https://x.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  youtube: "https://youtube.com/@yourchannel",
  linkedin:  "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
}
```

### Showing/Hiding Icons:

**To show:** Add full URL

```javascript
x: "https://x.com/yourbrand"; // ✅ Shows icon
```

**To hide:** Use empty string

```javascript
facebook: ""; // ❌ Icon hidden
```

### Getting Your URLs:

**X (Twitter):**

```
https://x.com/yourusername
or
https://twitter.com/yourusername (still works)
```

**Facebook:**

- Page: `https://facebook.com/yourpage`
- Profile: `https://facebook.com/yourname`

**YouTube:**

- Channel: `https://youtube.com/@yourchannel`
- or: `https://youtube.com/c/YourChannel`

**LinkedIn:**

- Personal: `https://linkedin.com/in/yourname`
- Company: `https://linkedin.com/company/yourcompany`

**GitHub:**

```
https://github.com/yourusername
```

### Tips:

- Only show platforms you're active on
- Make sure links work before deploying
- Use brand accounts, not personal (for business)

---

## Form Settings

### Button Text:

```javascript
ctaButton: "Join the Waitlist";
```

**Alternatives:**

- "Get Early Access"
- "Reserve Your Spot"
- "Sign Me Up"
- "Notify Me"
- "Get Started"
- "Join the Beta"

**Tips:**

- Action-oriented verbs
- Keep it short (2-4 words)
- Create urgency

### Success Message:

```javascript
successMessage: "🎉 Success! You're on the list.";
```

**Alternatives:**

- "🎉 You're in! Check your email for next steps."
- "✅ Welcome aboard! We'll be in touch soon."
- "🚀 Thanks! You'll be the first to know."
- "💪 Awesome! Expect an email from us shortly."

**Tips:**

- Use emoji for emotion
- Be enthusiastic
- Set expectations (check email, we'll contact you, etc.)

---

## Advanced Customization

### Changing the Layout

If you want to modify the HTML structure:

**File:** `src/main.js` (around line 120)

You'll find template strings with HTML. Modify carefully!

### Adding Custom CSS

**File:** `src/style.css`

Add your custom styles at the bottom:

```css
/* Custom styles */
. my-custom-class {
  /* Your styles here */
}
```

### Modifying Colors (Beyond Themes)

Want exact brand colors?

**File:** `src/main.js` (lines 6-42)

Modify theme objects:

```javascript
const themes = {
  blue: {
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    button: "bg-blue-600 hover:bg-blue-700",
    // ... modify these
  },
};
```

**Or add a new theme:**

```javascript
const themes = {
  // ... existing themes
  custom: {
    gradient: "bg-gradient-to-br from-cyan-50 to-teal-100",
    button: "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800",
    accent: "bg-cyan-100",
    ring: "focus:ring-cyan-500 focus:border-cyan-500",
    text: "text-cyan-600",
  },
};
```

Then use it:

```javascript
primaryColor: "custom";
```

### Adding More Form Fields

Want to collect more info?

**File:** `src/main.js` (form section, around line 140)

Add fields:

```html
<div>
  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
    Company Name
  </label>
  <input
    type="text"
    id="company"
    name="company"
    class="w-full px-4 py-3 border border-gray-300 rounded-lg..."
    placeholder="Your company"
  />
</div>
```

And update the form handler:

```javascript
const formData = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  company: document.getElementById("company").value, // ← Add this
  timestamp: new Date().toISOString(),
};
```

---

## Customization Checklist

Before deploying, make sure you've customized:

- [ ] Brand name (`brandName`)
- [ ] Tagline (`tagline`)
- [ ] Description (`description`)
- [ ] Color theme (`primaryColor`)
- [ ] Features (3 items with icons, titles, descriptions)
- [ ] Social links (hide unused ones)
- [ ] Button text (`ctaButton`)
- [ ] Success message (`successMessage`)

---

## Examples & Inspiration

### SaaS Product:

```javascript
brandName: "TaskFlow",
tagline: "Project Management Made Simple",
primaryColor: "blue",
features:  [
  { icon: "⚡", title: "Lightning Fast", description: "..." },
  { icon: "👥", title: "Team Collaboration", description: "..." },
  { icon: "📊", title: "Smart Analytics", description: "..." }
]
```

### Mobile App:

```javascript
brandName: "FitTrack",
tagline: "Your Personal Fitness Coach",
primaryColor: "green",
features: [
  { icon: "🏃", title:  "Track Workouts", description: "..." },
  { icon: "🥗", title: "Meal Planning", description: "..." },
  { icon: "📈", title: "See Progress", description: "..." }
]
```

### Course/eBook:

```javascript
brandName: "Code Mastery",
tagline: "Learn Web Development in 30 Days",
primaryColor: "purple",
features: [
  { icon: "📚", title: "12 Modules", description: "..." },
  { icon: "💻", title: "Real Projects", description: "..." },
  { icon: "🎓", title: "Certificate", description: "..." }
]
```

---

## Need More Help?

- 📧 **Email:** hello@blitzpattern.com
- 📚 **Other Guides:** [docs/](.) folder
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/bpassawe/saas-waitlist-template/issues)

---

**Happy customizing! ** 🎨

_Template by [Blitz Pattern](https://blitzpattern.com)_
