# SaaS Waitlist Template 🚀

> **By [Blitz Pattern](https://blitzpattern.com)** - Professional templates for fast-moving founders

A beautiful, customizable waitlist/coming soon page template for SaaS products, built with vanilla JavaScript and Tailwind CSS v3.

[![License](https://img.shields.io/badge/license-Commercial-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/website-blitzpattern.com-green.svg)](https://blitzpattern.com)

## 💡 Purchase & Licensing

**Like this template?** Get a license for your projects:

- 🎯 **Personal License** - $29 - One project
- 🚀 **Commercial License** - $79 - Unlimited projects

👉 **[Purchase on Gumroad](https://blitzpattern.gumroad.com/l/waitlist-template)**

All purchases include:

- ✅ Full source code
- ✅ Lifetime updates
- ✅ Email support
- ✅ Commercial use rights
- ✅ Documentation

## ✨ Features

- 🎨 **5 Beautiful Color Themes** - Blue, Purple, Green, Pink, Orange
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔧 **Easy Customization** - Single config file, no coding required
- 📧 **Email Collection Form** - Ready for integration with any email service
- 🔗 **Social Media Integration** - X (Twitter), Facebook, YouTube, LinkedIn, GitHub
- ✨ **Smooth Animations** - Hover effects and transitions throughout
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎯 **No Framework Required** - Pure JavaScript, easy to understand

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Customize Your Template

Edit `src/config.js` to personalize everything:

```javascript
export const config = {
  // Brand Settings
  brandName: "YourSaaS",
  tagline: "Something Amazing is Coming Soon",
  description: "Join the waitlist and be the first to know when we launch.",

  // Theme Color:  blue, purple, green, pink, or orange
  primaryColor: "blue",

  // Features Section
  features: [
    {
      icon: "⚡",
      title: "Your Feature",
      description: "Feature description here",
    },
    // Add more features...
  ],

  // Social Links (leave empty string "" to hide)
  social: {
    x: "https://x.com/yourusername",
    facebook: "https://facebook.com/yourpage",
    youtube: "https://youtube.com/@yourchannel",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },

  // Call to Action
  ctaButton: "Join the Waitlist",
  successMessage: "🎉 Success! You're on the list.",
};
```

### 4. Build for Production

```bash
npm run build
```

Your production files will be in the `dist/` folder.

## 🎨 Customization Guide

### Change Color Theme

In `src/config.js`, set `primaryColor` to one of:

- `"blue"` - Professional and trustworthy (default)
- `"purple"` - Creative and innovative
- `"green"` - Growth and eco-friendly
- `"pink"` - Fun and energetic
- `"orange"` - Bold and exciting

The entire page (gradients, buttons, accents) updates automatically!

### Modify Features

Edit the `features` array in `src/config.js`:

```javascript
features: [
  {
    icon: "🚀", // Any emoji
    title: "Fast Launch",
    description: "Get online in minutes, not hours.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Professional design that converts.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your data is protected.",
  },
];
```

### Add/Remove Social Links

In `src/config.js`, update the `social` object:

```javascript
social: {
  x: "https://x.com/yourhandle",           // X (formerly Twitter)
  facebook: "https://facebook.com/page",   // Facebook
  youtube: "https://youtube.com/@channel", // YouTube
  linkedin: "https://linkedin.com/in/you", // LinkedIn
  github: "https://github.com/username"    // GitHub
}
```

**To hide an icon**, set it to an empty string:

```javascript
facebook: "",  // Won't display
```

### Customize Text

All text can be changed in `src/config.js`:

- `brandName` - Your product/company name
- `tagline` - Main headline
- `description` - Subheading text
- `ctaButton` - Button text
- `successMessage` - Message after form submission

## 📧 Email Integration

This template is ready to integrate with any email service. The form currently shows a success message - you'll need to connect it to your email provider.

### Supported Services

- **Mailchimp** - Popular email marketing platform
- **ConvertKit** - Creator-focused email service
- **EmailOctopus** - Affordable alternative
- **Custom API** - Any service with an API

### Integration Example

In `src/main.js`, find the form submission handler (around line 188):

```javascript
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    timestamp: new Date().toISOString(),
  };

  // TODO: Add your email service integration here
  // Example: await fetch('YOUR_API_ENDPOINT', { ...  })

  console.log("Waitlist signup:", formData);

  // Show success message
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
});
```

Replace the `TODO` section with your email service API call.

## 🛠️ Tech Stack

- **Vite 5+** - Build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **Vanilla JavaScript** - No complex frameworks, easy to understand
- **PostCSS** - CSS processing

## 📁 Project Structure

```
saas-waitlist-template/
├── src/
│   ├── main.js          # Main application logic
│   ├── style.css        # Tailwind imports and custom styles
│   └── config.js        # Customization settings (EDIT THIS!)
├── public/              # Static assets
├── index.html           # Entry point
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── . gitignore
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

**Done! ** Your template is live in ~60 seconds.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 🎯 Use Cases

Perfect for:

- 🚀 SaaS product launches
- 💡 Validating startup ideas
- 📱 App pre-launch campaigns
- 🎨 Portfolio project showcases
- 🔧 Client projects
- 📚 Course/eBook launches
- 🎪 Event registrations
- 🎁 Beta program signups

## 🐛 Troubleshooting

### Styles not loading?

Make sure Tailwind is installed:

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```

### Icons not showing?

Check your `src/config.js` - social links need valid URLs or empty strings.

### Form not working?

Check the browser console (F12) for errors. The form currently just shows a success message - you need to integrate with an email service for real functionality.

### Build errors?

Try clearing cache and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📄 License

This template requires a license for use in projects.

**Available Licenses:**

- **Personal License** ($29) - Use in one personal or commercial project
- **Commercial License** ($79) - Unlimited projects and client work

📄 See [LICENSE](LICENSE) file for full terms.

🛒 **[Purchase a License](https://blitzpattern.gumroad.com/l/waitlist-template)**

## 🤝 Support

Need help?

- 📧 **Email:** hello@blitzpattern.com
- 🌐 **Website:** [blitzpattern.com](https://blitzpattern.com)
- 💬 **Gumroad:** Message through your purchase
- 🐛 **Issues:** [GitHub Issues](https://github.com/bpassawe/saas-waitlist-template/issues) (customers only)

**Response time:** Usually within 24 hours for customers

## 🎯 Roadmap

Future enhancements:

- [ ] Dark mode support
- [ ] Additional color themes
- [ ] Countdown timer component
- [ ] Newsletter subscription counter
- [ ] Email service integration examples
- [ ] Video setup tutorial
- [ ] More layout variations
- [ ] Animation options

## 🙏 Credits

Built with:

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) inspiration

## 📝 Changelog

### v1.0.0 (2025-12-19)

- ✨ Initial release
- 🎨 5 color themes
- 📱 Fully responsive design
- 🔗 Social media integration (X, Facebook, YouTube, LinkedIn, GitHub)
- ✨ Hover effects and animations
- 📧 Email signup form
- 📚 Comprehensive documentation

---

**Made with ⚡ by [Blitz Pattern](https://blitzpattern.com)**

_Launch faster. Build better. Ship smarter. _ 🚀

© 2025 Blitz Pattern. All rights reserved.

[Website](https://blitzpattern.com) • [Templates](https://blitzpattern.gumroad.com) • [Support](mailto:hello@blitzpattern.com)

_Start collecting emails for your next big idea today!_ 🚀
