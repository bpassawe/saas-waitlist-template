# 🚀 Getting Started with SaaS Waitlist Template

**Welcome! ** This guide will help you go from zero to deployed in 15 minutes.

---

## What You'll Need

Before starting, make sure you have:

- ✅ **Node.js** (v16 or higher) - [Download here](https://nodejs.org)
- ✅ **Code Editor** - VS Code recommended ([Download](https://code.visualstudio.com))
- ✅ **Terminal/Command Prompt** - Built into your OS
- ✅ **Basic text editing skills** - That's it! No coding required.

**Check your Node.js version:**

```bash
node --version
# Should show v16.0.0 or higher
```

---

## Step 1: Download & Extract (2 minutes)

### If You Purchased from Gumroad:

1. **Check your email** for the download link
2. **Click the download button** in the email
3. **Save** `saas-waitlist-template-v1.0.0.zip` to your computer
4. **Right-click the ZIP** → "Extract All" or "Extract Here"
5. **Open the extracted folder**

### Verify Files:

You should see:

```
saas-waitlist-template/
├── src/
│   ├── config.js
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── README.md
└── ... other files
```

✅ **If you see these files, you're ready! **

---

## Step 2: Install Dependencies (3 minutes)

### Open Terminal in Your Project:

**On Windows:**

1. Open the project folder in File Explorer
2. Hold `Shift` + Right-click in empty space
3. Select "Open PowerShell window here" or "Open in Terminal"

**On Mac:**

1. Open Terminal app
2. Type `cd ` (with space after)
3. Drag your project folder into Terminal
4. Press Enter

### Install Packages:

```bash
# Install all required packages
npm install

# Wait 1-2 minutes for installation to complete
```

**You'll see:** Lots of text scrolling. This is normal!

**Success message:**

```
added 234 packages in 45s
```

✅ **Installation complete!**

---

## Step 3: Start Development Server (1 minute)

```bash
npm run dev
```

**You'll see:**

```
  VITE v5.0.0  ready in 543 ms

  ➜  Local:    http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open your browser** and go to:

```
http://localhost:5173
```

🎉 **You should see your waitlist page!**

---

## Step 4: Customize Your Template (5 minutes)

### Open the Config File:

1. **Open** `src/config.js` in your code editor
2. **You'll see** this:

```javascript
export const config = {
  brandName: "YourSaaS",
  tagline: "Something Amazing is Coming Soon",
  description: "Join the waitlist.. .",
  primaryColor: "blue",
  // ... more settings
};
```

### Make It Yours:

**Update these values:**

```javascript
export const config = {
  // Your branding
  brandName: "My Awesome SaaS", // ← Your product name
  tagline: "The Future of Project Management", // ← Your tagline
  description:
    "Join 1,000+ founders on the waitlist for the easiest way to manage your projects.",

  // Pick a color theme
  primaryColor: "purple", // ← blue, purple, green, pink, or orange

  // Your features
  features: [
    {
      icon: "⚡", // ← Any emoji
      title: "Lightning Fast",
      description: "Get things done in half the time.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Bank-level security for your data.",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Professional tools without the price tag.",
    },
  ],

  // Your social links (leave "" to hide)
  social: {
    x: "https://x.com/yourhandle",
    facebook: "", // Hidden if empty
    youtube: "",
    linkedin: "",
    github: "",
  },

  // Button and message text
  ctaButton: "Join the Waitlist",
  successMessage: "🎉 Success! You're on the list.",
};
```

### Save and See Changes:

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Go back to your browser**
3. **Page auto-refreshes** with your changes!

✅ **Your template is customized!**

---

## Step 5: Test Everything (2 minutes)

### Test the Form:

1. **Fill in** the name field
2. **Enter** an email address
3. **Click** "Join the Waitlist"
4. **You should see** the success message

**Check the console** (F12 → Console tab):

```javascript
Waitlist signup:  { name: "John", email: "john@example.com", ...  }
```

This logs submissions. Later you'll connect to an email service.

### Test Responsiveness:

1. **Press F12** to open developer tools
2. **Click** the device/mobile icon (or Ctrl+Shift+M)
3. **Try different sizes:**
   - iPhone SE (375px)
   - iPad (768px)
   - Laptop (1440px)

**Looks good everywhere? ** ✅ Perfect!

---

## Step 6: Build for Production (2 minutes)

When you're ready to deploy:

```bash
npm run build
```

**You'll see:**

```
✓ built in 1.23s
dist/index.html               0.65 kB
dist/assets/index-abc123.js   42.31 kB
dist/assets/index-def456.css  8.12 kB
```

Your production files are now in the `dist/` folder!

✅ **Ready to deploy!**

---

## Quick Start Checklist

- [ ] Node.js installed (v16+)
- [ ] Template downloaded and extracted
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Config file customized (`src/config.js`)
- [ ] Form tested and working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Production build created (`npm run build`)

---

## What's Next?

Choose your path:

### 🎨 **Customize Further**

Read the **[Customization Guide](CUSTOMIZATION.md)** to:

- Add more features
- Change colors and styling
- Modify layout

### 🌐 **Deploy Your Site**

Read the **[Deployment Guide](DEPLOYMENT.md)** to:

- Deploy to Vercel (60 seconds, free)
- Deploy to Netlify
- Use custom domain

### 📧 **Connect Email Service**

Read the **[Email Integration Guide](EMAIL-INTEGRATION.md)** to:

- Connect Mailchimp
- Connect ConvertKit
- Use custom API

---

## Need Help?

- 📧 **Email:** hello@blitzpattern.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/bpassawe/saas-waitlist-template/issues)
- 📚 **More Docs:** Check the [docs/](.) folder

---

**Happy building! ** 🚀

_Template by [Blitz Pattern](https://blitzpattern.com)_
