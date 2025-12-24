# 🐛 Troubleshooting Guide

Common issues and how to fix them.

---

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Development Server Issues](#development-server-issues)
3. [Styling Issues](#styling-issues)
4. [Form Issues](#form-issues)
5. [Build Issues](#build-issues)
6. [Deployment Issues](#deployment-issues)
7. [Email Integration Issues](#email-integration-issues)

---

## Installation Issues

### ❌ "npm: command not found"

**Problem:** Node.js/npm not installed

**Solution:**

1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Install LTS version
3. Restart terminal
4. Verify: `node --version`

### ❌ "npm install" fails

**Problem:** Package installation errors

**Solution 1: Clear cache**

```bash
npm cache clean --force
npm install
```

**Solution 2: Delete and reinstall**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3: Use different registry**

```bash
npm install --registry=https://registry.npmjs.org/
```

### ❌ Permission errors (Mac/Linux)

**Problem:** EACCES error

**Solution:**

```bash
sudo chown -R $USER ~/. npm
npm install
```

**Don't use `sudo npm install`** - it can cause more issues!

---

## Development Server Issues

### ❌ "Port 5173 is already in use"

**Problem:** Another process using the port

**Solution 1: Kill the process**

**Windows:**

```bash
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux:**

```bash
lsof -ti: 5173 | xargs kill -9
```

**Solution 2: Use different port**

```bash
npm run dev -- --port 3000
```

### ❌ Server starts but page is blank

**Problem:** Build error not showing

**Solution:**

1. Check terminal for errors
2. Press `Ctrl+C` to stop server
3. Clear cache: `rm -rf dist node_modules/. vite`
4. Restart: `npm run dev`
5. Check browser console (F12)

### ❌ Changes not reflecting

**Problem:** Hot reload not working

**Solution 1: Hard refresh**

- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**Solution 2: Restart server**

```bash
# Stop with Ctrl+C
npm run dev
```

**Solution 3: Clear Vite cache**

```bash
rm -rf node_modules/. vite
npm run dev
```

---

## Styling Issues

### ❌ No styles loading (page looks broken)

**Problem:** Tailwind CSS not working

**Solution 1: Verify Tailwind installed**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```

**Solution 2: Check tailwind.config.js**

Make sure content paths are correct:

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

**Solution 3: Check style.css imports**

**File:** `src/style.css`

Should have:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Solution 4: Restart dev server**

```bash
npm run dev
```

### ❌ Custom colors not working

**Problem:** Theme colors not applying

**Solution:**

Check `src/config. js` - `primaryColor` must be one of:

- `"blue"`
- `"purple"`
- `"green"`
- `"pink"`
- `"orange"`

**Case sensitive! ** Must be lowercase.

### ❌ Layout broken on mobile

**Problem:** Responsive design not working

**Solution:**

Check `index.html` has viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Should already be there! If not, add it.

---

## Form Issues

### ❌ Form doesn't submit

**Problem:** Click does nothing

**Solution 1: Check console**

1. Press F12
2. Go to Console tab
3. Look for JavaScript errors
4. Share error message if you need help

**Solution 2: Check form IDs**

Make sure IDs match in `src/main.js`:

```javascript
const form = document.getElementById("waitlist-form"); // Must match HTML
const successMessage = document.getElementById("success-message");
```

### ❌ Success message doesn't appear

**Problem:** Form submits but no feedback

**Solution:**

Check `src/main.js` form handler has:

```javascript
form.classList.add("hidden");
successMessage.classList.remove("hidden");
```

Also verify success message div exists in HTML.

### ❌ Email validation not working

**Problem:** Invalid emails accepted

**Solution:**

Make sure input type is `email`:

```html
<input type="email" id="email" name="email" required />
```

HTML5 validation happens automatically!

### ❌ Form resets too quickly/slowly

**Problem:** Timing issue

**Solution:**

Adjust timeout in `src/main.js`:

```javascript
setTimeout(() => {
  form.reset();
  form.classList.remove("hidden");
  successMessage.classList.add("hidden");
}, 5000); // ← Change this number (milliseconds)
```

- 3000 = 3 seconds
- 5000 = 5 seconds (default)
- 10000 = 10 seconds

---

## Build Issues

### ❌ "npm run build" fails

**Problem:** Build errors

**Solution 1: Check for syntax errors**

- Look for error message in terminal
- Fix the file mentioned
- Common: missing comma, bracket, quote

**Solution 2: Clear and rebuild**

```bash
rm -rf dist node_modules/.vite
npm run build
```

**Solution 3: Check dependencies**

```bash
npm install
npm run build
```

### ❌ Build succeeds but files are huge

**Problem:** Bundle size too large

**Solution:**

This is normal for development mode. Production build is optimized!

Verify you're using:

```bash
npm run build
# NOT npm run dev
```

### ❌ Missing files after build

**Problem:** Assets not copied

**Solution:**

Put static files in `public/` folder:

```
your-project/
├── public/
│   ├── favicon.ico
│   └── logo.png
└── src/
```

They'll be copied to `dist/` on build.

---

## Deployment Issues

### ❌ Vercel: Build failed

**Problem:** Deployment fails on Vercel

**Solution 1: Check build locally**

```bash
npm run build
# Fix any errors
```

**Solution 2: Check build settings**

Vercel settings should be:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Solution 3: Check Node version**

In project root, create `package.json` entry:

```json
{
  "engines": {
    "node": ">=16. 0.0"
  }
}
```

### ❌ Vercel: 404 Not Found

**Problem:** Site deploys but shows 404

**Solution:**

Check Output Directory is set to `dist` in Vercel settings.

### ❌ Netlify: Failed to build

**Problem:** Netlify can't build

**Solution:**

Check build settings in Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 16 or higher

### ❌ Styles missing on deployed site

**Problem:** Works locally, broken on deployment

**Solution 1: Clear build cache**

**Vercel:**

- Deployments → Click 3 dots → Redeploy → "Use existing build cache" OFF

**Netlify:**

- Site settings → Build & deploy → Clear build cache

**Solution 2: Check build logs**

Look for Tailwind warnings or errors in deployment logs.

### ❌ Custom domain not working

**Problem:** Domain doesn't resolve

**Solution:**

1. Wait 24-48 hours for DNS propagation
2. Check DNS settings in domain provider
3. Verify records:

   ```
   Type: A
   Name: @
   Value: (Vercel/Netlify IP)

   Type: CNAME
   Name: www
   Value: (Vercel/Netlify domain)
   ```

4. Use [dnschecker.org](https://dnschecker.org) to verify

---

## Email Integration Issues

### ❌ Form submits but email not received

**Problem:** Integration not working

**Solution 1: Check console**

```javascript
console.log("Submitting:", formData);
```

Is this logging? If not, form handler isn't running.

**Solution 2: Check API credentials**

- API key correct?
- List/Form ID correct?
- Copy-paste errors?

**Solution 3: Check email service dashboard**

- Login to Mailchimp/ConvertKit/etc.
- Check for failed requests
- Look at error logs

### ❌ CORS error

**Problem:**

```
Access to fetch blocked by CORS policy
```

**Solution:**

Use one of these:

1. **Zapier webhook** (easiest)
2. **Serverless function** (Vercel/Netlify)
3. **Your own backend**

Can't make direct API calls from browser for most services!

### ❌ "Invalid API key"

**Problem:** Authentication failed

**Solution:**

1.  Regenerate API key in service dashboard
2.  Copy carefully (no extra spaces!)
3.  Use environment variable in production:
    ```javascript
    const apiKey = import.meta.env.VITE_API_KEY;
    ```

### ❌ Duplicate emails

**Problem:** Same email subscribed twice

**Solution:**

Most services handle this automatically. Check your service settings:

- Mailchimp: Updates existing subscriber
- ConvertKit: Creates duplicate unless you check
- EmailOctopus: Returns error

Handle in code:

```javascript
catch (error) {
  if (error.message.includes('already subscribed')) {
    // Still show success!
    form.classList.add('hidden')
    successMessage.classList.remove('hidden')
  }
}
```

---

## Browser-Specific Issues

### ❌ Works in Chrome, broken in Safari

**Problem:** Safari-specific bug

**Solution:**

Check console in Safari (Develop → Show Web Inspector).

Common issues:

- ES6 features not supported (rare with Vite)
- Fetch API issues (Vite handles polyfills)

### ❌ Works on desktop, broken on mobile

**Problem:** Mobile-specific issue

**Solution:**

1. Test in Chrome DevTools mobile view (F12 → Toggle device)
2. Check actual mobile device
3. Common issues:
   - Touch events vs click events (should work with Tailwind)
   - Viewport settings (check meta tag)
   - Font sizes too small

---

## Performance Issues

### ❌ Page loads slowly

**Problem:** Slow performance

**Solution 1: Check bundle size**

```bash
npm run build
# Check dist/ file sizes
```

Should be:

- index.html: < 5KB
- CSS: < 15KB
- JS: < 50KB

**Solution 2: Optimize images**

- Use WebP format
- Compress images
- Use CDN for large assets

**Solution 3: Check network tab**

F12 → Network → Reload

- What's loading slowly?
- Any failed requests?

### ❌ High CPU usage in dev mode

**Problem:** Computer fan running loud

**Solution:**

This is normal for Vite dev server!

Production build is much lighter:

```bash
npm run build
npm run preview
```

---

## Git/GitHub Issues

### ❌ Can't push to GitHub

**Problem:** Push rejected

**Solution 1: Pull first**

```bash
git pull origin main
git push origin main
```

**Solution 2: Force push (careful!)**

```bash
git push --force origin main
```

**Only use if you're sure!**

### ❌ Files not showing on GitHub

**Problem:** Uploaded but not visible

**Solution:**

Check `.gitignore` - make sure you're not ignoring important files!

Should ignore:

```
node_modules/
dist/
. env
*. log
```

Should NOT ignore:

```
src/
public/
index.html
package. json
```

---

## Getting Help

### Before asking for help:

1. ✅ Check this troubleshooting guide
2. ✅ Read error message carefully
3. ✅ Search Google for error
4. ✅ Check GitHub Issues
5. ✅ Try on different browser

### When asking for help, include:

- **Error message** (full text)
- **What you tried** (steps)
- **Environment:**
  - OS: Windows/Mac/Linux
  - Node version: `node --version`
  - Browser: Chrome/Firefox/Safari
- **Screenshots** if relevant
- **Code snippet** if you made changes

### Where to get help:

- 📧 **Email:** hello@blitzpattern.com
- 🐛 **GitHub Issues:** [Open an issue](https://github.com/bpassawe/saas-waitlist-template/issues)
- 💬 **Community:** [Discussions](https://github.com/bpassawe/saas-waitlist-template/discussions)

---

## Quick Fixes Summary

| Problem             | Quick Fix                                   |
| ------------------- | ------------------------------------------- |
| Styles not loading  | `npm install -D tailwindcss && npm run dev` |
| Port in use         | `npm run dev -- --port 3000`                |
| Build fails         | `rm -rf dist && npm run build`              |
| Changes not showing | `Ctrl+Shift+R` (hard refresh)               |
| Form not working    | Check browser console (F12)                 |
| Vercel 404          | Output directory = `dist`                   |
| CORS error          | Use serverless function or Zapier           |
| Slow performance    | Run `npm run build` for production          |

---

**Still stuck?** Email hello@blitzpattern.com with details!

_Template by [Blitz Pattern](https://blitzpattern.com)_
