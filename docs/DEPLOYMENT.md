# 🌐 Deployment Guide

Deploy your waitlist page to the web for free!

---

## Deployment Options

| Platform          | Cost   | Speed   | Difficulty | Best For                 |
| ----------------- | ------ | ------- | ---------- | ------------------------ |
| **Vercel**        | Free   | 60 sec  | Easy       | Most users (recommended) |
| **Netlify**       | Free   | 2 min   | Easy       | Alternative to Vercel    |
| **GitHub Pages**  | Free   | 5 min   | Medium     | GitHub users             |
| **Custom Server** | Varies | 15+ min | Hard       | Advanced users           |

**We recommend: Vercel** - Fastest and easiest!

---

## Option 1: Deploy to Vercel (Recommended)

**Time:** 60 seconds  
**Cost:** Free  
**Features:** Auto-deploy, custom domains, SSL, CDN

### Prerequisites:

- GitHub account
- Code pushed to GitHub

### Step 1: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### Step 2: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

### Step 3: Import Project

1. Click "Add New..." → "Project"
2. Find your repository in the list
3. Click "Import"

### Step 4: Configure (Auto-detected!)

Vercel automatically detects Vite projects:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Just click "Deploy"! **

### Step 5: Wait for Deployment

⏱️ Takes 30-90 seconds

You'll see:

- Building...
- Optimizing...
- Deploying...
- ✅ Success!

### Step 6: Get Your URL

Your site is live at:

```
https://your-repo-name.vercel.app
```

**Test it! ** Open the URL and verify everything works.

### Bonus: Auto-Deployments

Every time you push to GitHub:

```bash
git add .
git commit -m "Update tagline"
git push
```

Vercel automatically rebuilds and redeploys! 🎉

---

## Option 2: Deploy to Netlify

**Time:** 2 minutes  
**Cost:** Free  
**Features:** Similar to Vercel

### Step 1: Build Your Project

```bash
npm run build
```

This creates the `dist/` folder.

### Step 2: Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up"
3. Choose "Sign up with GitHub"

### Step 3: Deploy

**Method A: Drag & Drop (Fastest)**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `dist/` folder onto the page
3. Wait 30 seconds
4. Done! Your site is live!

**Method B: Connect to GitHub (Better)**

1. Click "Add new site" → "Import an existing project"
2. Connect to GitHub
3. Select your repository
4. Build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
5. Click "Deploy site"

### Get Your URL:

```
https://random-name-123.netlify.app
```

**Change the URL:**

- Site settings → Site details → Change site name

---

## Option 3: GitHub Pages

**Time:** 5 minutes  
**Cost:** Free  
**Features:** Good for public repos

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

Create or update `vite.config.js`:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  base: "/your-repo-name/", // ← Your GitHub repo name
});
```

### Step 4: Deploy

```bash
npm run deploy
```

Wait 1-2 minutes.

### Step 5: Enable GitHub Pages

1. Go to your GitHub repo
2. Settings → Pages
3. Source: `gh-pages` branch
4. Click "Save"

Your site is at:

```
https://yourusername.github.io/your-repo-name/
```

---

## Custom Domain Setup

### For Vercel:

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel: Project → Settings → Domains
3. Add your domain: `yourdomain.com`
4. Vercel gives you DNS records
5. Add records to your domain provider:

   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

6. Wait 10-60 minutes for DNS propagation
7. Vercel automatically adds SSL (HTTPS)

### For Netlify:

1. Netlify dashboard → Domain settings
2. Add custom domain
3. Follow similar DNS setup
4. Netlify handles SSL automatically

---

## Environment Variables

If you need environment variables (for API keys, etc.):

### Vercel:

1. Project → Settings → Environment Variables
2. Add key-value pairs:
   ```
   Name: VITE_API_KEY
   Value: your-api-key-here
   ```
3. Redeploy

### Access in code:

```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Note:** Prefix with `VITE_` to expose to client!

---

## Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` works locally
- [ ] `dist/` folder created
- [ ] No errors in console (F12)
- [ ] All links work (social, etc.)
- [ ] Form submits properly
- [ ] Mobile responsive
- [ ] Images/assets load
- [ ] Config fully customized (no "YourSaaS" text)

---

## After Deployment

### Test Your Live Site:

- [ ] Visit your URL
- [ ] Test form submission
- [ ] Check on mobile device (real phone)
- [ ] Test all social links
- [ ] Verify colors/styling correct
- [ ] Check browser console for errors (F12 → Console)
- [ ] Test different browsers (Chrome, Firefox, Safari)

### Share Your URL:

- Add to README
- Add to Gumroad product description
- Share on social media
- Add to your email signature

---

## Troubleshooting

### Build Fails

**Error:** `npm run build` fails

**Fix:**

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Deployment

**Error:** Site shows "404 Not Found"

**Fix Vercel/Netlify:**

- Check Output Directory is `dist`
- Make sure `npm run build` completed

**Fix GitHub Pages:**

- Check `base` in vite.config.js matches repo name
- Verify gh-pages branch exists

### Styles Not Loading

**Error:** Site loads but no styling

**Fix:**

- Check browser console for errors
- Verify Tailwind CSS installed: `npm install -D tailwindcss`
- Rebuild: `npm run build`
- Clear cache and reload (Ctrl+Shift+R)

### Custom Domain Not Working

**Error:** Domain doesn't resolve

**Fix:**

- Wait 24-48 hours (DNS propagation can be slow)
- Verify DNS records are correct
- Use [dnschecker.org](https://dnschecker.org) to check propagation
- Make sure you saved changes in domain provider

---

## Updating Your Deployed Site

### Automatic (Vercel/Netlify with GitHub):

```bash
# Make changes to your code
git add .
git commit -m "Update homepage copy"
git push

# Wait 30-60 seconds - site auto-updates!
```

### Manual (GitHub Pages):

```bash
npm run deploy
```

### Manual (Netlify Drag & Drop):

```bash
npm run build
# Drag new dist/ folder to Netlify
```

---

## Performance Tips

### Optimize for Speed:

**Already Optimized! **

Vite automatically:

- ✅ Minifies CSS/JS
- ✅ Optimizes images
- ✅ Tree-shakes unused code
- ✅ Code-splits for faster loading

### Check Performance:

1. Open your deployed site
2. Press F12 → "Lighthouse" tab (Chrome)
3. Click "Generate report"
4. Should score 90+ in all categories!

---

## Deployment Costs

### Free Tier Limits:

**Vercel Free:**

- ✅ Unlimited sites
- ✅ Automatic SSL
- ✅ 100GB bandwidth/month
- ✅ Good for 99% of waitlist pages

**Netlify Free:**

- ✅ Unlimited sites
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month

**GitHub Pages:**

- ✅ Free for public repos
- ✅ 1GB storage
- ✅ 100GB bandwidth/month

**All free tiers are more than enough for a waitlist page!**

---

## Need Help?

- 📧 **Email:** hello@blitzpattern.com
- 📚 **Other Docs:** [docs/](.) folder
- 🐛 **Issues:** [GitHub Issues](https://github.com/bpassawe/saas-waitlist-template/issues)

---

**Happy deploying!** 🚀

_Template by [Blitz Pattern](https://blitzpattern.com)_
