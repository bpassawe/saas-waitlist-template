# ❓ Frequently Asked Questions

Common questions about the SaaS Waitlist Template.

---

## General Questions

### What is this template for?

A waitlist page (also called "coming soon" page) to:

- Collect email signups before launching your product
- Validate your SaaS idea
- Build an audience early
- Create buzz for your launch

### Do I need coding skills?

**No!** Just edit one config file (`src/config.js`) to customize everything:

- Change text
- Pick colors
- Add your social links
- Modify features

No HTML, CSS, or JavaScript knowledge required.

### What's included?

- ✅ Complete source code
- ✅ 5 pre-built color themes
- ✅ Fully responsive design
- ✅ Email signup form
- ✅ Social media integration
- ✅ Comprehensive documentation
- ✅ Lifetime updates
- ✅ Email support

### How long does setup take?

- **Customization:** 5-10 minutes
- **Local testing:** 2 minutes
- **Deployment:** 2-5 minutes

**Total: 10-15 minutes** from download to live site!

---

## Technical Questions

### What technologies are used?

- **Vite** - Build tool (fast!)
- **Tailwind CSS** - Styling framework
- **Vanilla JavaScript** - No complex frameworks
- **HTML5** - Semantic markup

### What are the system requirements?

- Node.js v16 or higher
- Any code editor (VS Code recommended)
- Modern browser (Chrome, Firefox, Safari)
- Terminal/Command prompt

### Does it work on Windows/Mac/Linux?

**Yes! ** Works on all operating systems.

### Do I need to know React/Vue/Angular?

**No!** This template uses vanilla JavaScript - much simpler!

### Can I use TypeScript?

Currently JavaScript only, but you can convert it if you know TypeScript.

### Is it mobile-friendly?

**Yes!** Fully responsive:

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktops

Auto-adapts to any screen size.

### What browsers are supported?

All modern browsers:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

**Not supported:**

- ❌ Internet Explorer 11 or older

---

## Customization Questions

### How do I change colors?

Edit `src/config.js`:

```javascript
primaryColor: "purple"; // blue, purple, green, pink, orange
```

That's it! Everything updates automatically.

### Can I add my own colors?

Yes! See [Customization Guide](CUSTOMIZATION.md#modifying-colors-beyond-themes) for details.

### How many features can I show?

**2-6 features** recommended (3 is optimal).

More than 6 makes the page too long.

### Can I add more form fields?

Yes! See [Customization Guide](CUSTOMIZATION.md#adding-more-form-fields).

Common additions:

- Company name
- Phone number
- Dropdown selections
- Checkboxes

### Can I change the layout?

Yes, but requires HTML knowledge. The structure is in `src/main.js`.

**For most users:** The default layout works great!

### Can I remove social icons?

Yes! Just set to empty string in config:

```javascript
social: {
  x: "",  // Hidden
  facebook: "",  // Hidden
  github: "https://github.com/you"  // Shown
}
```

### Can I add a logo?

Yes! Add your logo image to `public/` folder and modify the HTML in `src/main.js` to include an `<img>` tag.

---

## Deployment Questions

### Where can I host this?

**Free options:**

- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Cloudflare Pages

**Paid options:**

- Your own server
- AWS S3 + CloudFront
- DigitalOcean

### How much does hosting cost?

**FREE!**

All recommended platforms have generous free tiers:

- Vercel: Unlimited projects, 100GB bandwidth
- Netlify: Same
- GitHub Pages: 1GB storage, 100GB bandwidth

Perfect for waitlist pages!

### Can I use a custom domain?

**Yes! ** Example: `yourstartup.com`

1. Buy domain ($10-15/year)
2. Connect to Vercel/Netlify
3. Follow [Deployment Guide](DEPLOYMENT.md#custom-domain-setup)

### Does it include SSL (HTTPS)?

**Yes!** Automatic on Vercel/Netlify.

Your site will be `https://...` secure.

### How do I update the live site?

**If connected to GitHub:**

```bash
git add .
git commit -m "Update content"
git push
```

Site auto-updates in 30-60 seconds!

**Manual:**
Rebuild and redeploy.

---

## Email Integration Questions

### Does it collect emails automatically?

**Out of the box:** No - it just logs to console.

**With setup (15 min):** Yes! Integrates with:

- Mailchimp
- ConvertKit
- EmailOctopus
- Any email service

See [Email Integration Guide](EMAIL-INTEGRATION.md).

### Which email service should I use?

**Recommendations:**

| Service      | Free Tier      | Best For         |
| ------------ | -------------- | ---------------- |
| Mailchimp    | 500 contacts   | Beginners        |
| ConvertKit   | 1,000 contacts | Creators         |
| EmailOctopus | 2,500 contacts | Budget-conscious |

All great options!

### Do emails go to spam?

Email deliverability depends on your email service, not the template.

**Tips:**

- Use professional domain (@yourcompany.com)
- Warm up your email sending
- Follow email service best practices
- Include unsubscribe link

### Can I export the email list?

Yes! Export from your email service dashboard (Mailchimp, ConvertKit, etc.).

### Does it send confirmation emails?

Configure in your email service:

- Mailchimp: Automate → Welcome email
- ConvertKit: Sequences → Welcome sequence
- EmailOctopus: Automations

---

## Licensing Questions

### What can I do with Personal License?

- ✅ Use in **ONE** personal or commercial project
- ✅ Modify and customize
- ✅ Launch your product
- ✅ Collect unlimited emails
- ✅ Lifetime updates
- ✅ Email support

**One project = One domain/product**

### What can I do with Commercial License?

- ✅ Everything in Personal License
- ✅ **UNLIMITED** projects
- ✅ Use for **client work**
- ✅ Build websites for customers
- ✅ Priority support

Perfect for agencies and freelancers!

### Can I resell this template?

**❌ No** - You cannot resell the template itself.

**✅ Yes** - You can sell websites you build using it (Commercial License).

### Can I remove "Template by Blitz Pattern"?

**Yes!** Feel free to remove footer credits.

(We appreciate attribution but don't require it!)

### Do I get updates?

**Yes! Lifetime updates included.**

Re-download from your Gumroad library anytime to get latest version.

### Can I get a refund?

**Yes! ** 30-day money-back guarantee.

Email hello@blitzpattern.com if not satisfied.

---

## Support Questions

### How do I get help?

- 📧 **Email:** hello@blitzpattern.com
- 📚 **Documentation:** Read the [docs/](.) folder
- 🐛 **GitHub Issues:** [Report bugs](https://github.com/bpassawe/saas-waitlist-template/issues)
- ❓ **This FAQ:** Check here first!

### What's the response time?

**Usually within 24 hours** (often faster!).

### Do you offer custom development?

For small tweaks, we'll help via email.

For major customization, email us for a quote.

### Can you set it up for me?

We provide support to help you set it up.

For full setup service, email hello@blitzpattern.com for pricing.

---

## Comparison Questions

### How is this different from website builders?

| Feature        | This Template    | Website Builders |
| -------------- | ---------------- | ---------------- |
| Cost           | $29 one-time     | $10-30/month     |
| Customization  | Full control     | Limited          |
| Performance    | Very fast        | Slower           |
| Own the code   | Yes              | No               |
| Cancel anytime | N/A - you own it | Must keep paying |

### Why not just code it myself?

**You could!** But this saves time:

- ✅ Pre-built responsive design
- ✅ Professional styling
- ✅ Form validation included
- ✅ Documentation and support
- ✅ Tested and production-ready

**Your time is worth more than $29! **

### Why not use a free template?

Free templates often:

- ❌ Poor documentation
- ❌ No support
- ❌ Outdated code
- ❌ Hidden issues

**This template:**

- ✅ Professional support
- ✅ Regular updates
- ✅ Comprehensive docs
- ✅ Production-tested

### Can I use ChatGPT/AI to build this?

Sure! But:

- Takes longer (lots of prompting)
- Code quality varies
- No support when stuck
- No updates

**This template:** Works immediately, professionally designed, supported.

---

## Use Case Questions

### Can I use this for a mobile app?

**Yes!** Perfect for collecting interest before launching your app.

### Can I use this for a course/eBook?

**Yes!** Great for pre-launch signups and early bird lists.

### Can I use this for a newsletter?

**Yes!** Connect to your email service and start building your list.

### Can I use this for an event?

**Yes!** Customize for event registration and attendee collection.

### Can I add a waitlist counter?

Not included by default, but you can add:

```javascript
description: "Join 1,234 founders on the waitlist";
```

Update manually or connect to your email service API to show real count.

### Can I add a countdown timer?

Not included in v1.0, but:

- Coming in future update (free for customers!)
- Or you can add custom code

---

## Future Updates

### What updates are planned?

Roadmap includes:

- [ ] Dark mode toggle
- [ ] Countdown timer component
- [ ] More color themes
- [ ] Additional layout variations
- [ ] Video background option
- [ ] Advanced form fields

**All free for customers!**

### How do I get updates?

1. Check your email for update notifications
2. Or re-download from Gumroad library anytime
3. Compare `CHANGELOG.md` to see what's new

### Will my customizations be overwritten?

**Yes** if you replace files directly.

**Best practice:**

1. Keep a backup of your customized `src/config.js`
2. Update to new version
3. Copy your config back
4. Test locally before deploying

---

## Troubleshooting Questions

### Something's not working, what do I do?

1. Check [Troubleshooting Guide](TROUBLESHOOTING.md)
2. Check browser console (F12) for errors
3. Try on different browser
4. Email hello@blitzpattern.com with details

### Styles aren't loading?

See [Troubleshooting: Styling Issues](TROUBLESHOOTING.md#styling-issues)

Quick fix:

```bash
npm install -D tailwindcss
npm run dev
```

### Form doesn't submit?

See [Troubleshooting: Form Issues](TROUBLESHOOTING.md#form-issues)

Check browser console (F12) for errors.

### Build fails?

See [Troubleshooting: Build Issues](TROUBLESHOOTING.md#build-issues)

Quick fix:

```bash
rm -rf node_modules
npm install
npm run build
```

---

## Business Questions

### Can I white-label this for clients?

**Yes!** With Commercial License:

- Remove all Blitz Pattern branding
- Present as your own work
- Charge clients your rates

### Can agencies use this?

**Yes!** Commercial License perfect for agencies:

- Unlimited client projects
- Speed up delivery
- Increase margins

### Can I include this in a package?

**Yes!** (Commercial License)

Example: "Startup Launch Package" that includes waitlist page setup.

### Can I modify and resell?

**Modify:** Yes!  
**Resell the template:** No.  
**Sell completed websites:** Yes! (Commercial License)

---

## Still Have Questions?

### Not answered here?

📧 **Email:** hello@blitzpattern.com

Include:

- Your question
- License type (if purchased)
- What you're trying to build

We typically respond within 24 hours!

---

**Happy launching!** 🚀

_Template by [Blitz Pattern](https://blitzpattern.com)_
