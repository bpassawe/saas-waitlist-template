# 📧 Email Integration Guide

Connect your waitlist to popular email services to automatically collect signups.

---

## Table of Contents

1. [Overview](#overview)
2. [Mailchimp Integration](#mailchimp-integration)
3. [ConvertKit Integration](#convertkit-integration)
4. [EmailOctopus Integration](#emailoctopus-integration)
5. [Custom API Integration](#custom-api-integration)
6. [Testing Your Integration](#testing-your-integration)

---

## Overview

### Current Setup

Right now, your form:

- ✅ Collects name and email
- ✅ Validates input
- ✅ Shows success message
- ❌ **Doesn't save data anywhere**

The form handler logs to console:

```javascript
console.log("Waitlist signup:", formData);
```

### What You'll Do

Replace the console.log with an API call to your email service.

### Choose Your Service

| Service          | Cost             | Ease   | Best For                |
| ---------------- | ---------------- | ------ | ----------------------- |
| **Mailchimp**    | Free up to 500   | Easy   | Beginners, most popular |
| **ConvertKit**   | Free up to 1,000 | Easy   | Creators, bloggers      |
| **EmailOctopus** | Free up to 2,500 | Easy   | Budget-conscious        |
| **Custom API**   | Varies           | Medium | Specific needs          |

---

## Mailchimp Integration

**Time:** 15 minutes  
**Cost:** Free for up to 500 contacts

### Step 1: Create Mailchimp Account

1. Go to [mailchimp.com](https://mailchimp.com)
2. Click "Sign Up Free"
3. Complete registration
4. Verify email

### Step 2: Create an Audience

1. In Mailchimp dashboard, click "Audience"
2. Click "Audience dashboard"
3. If no audience exists, click "Create Audience"
4. Fill in details:
   - Audience name: "Waitlist Signups"
   - Default from email: your@email.com
   - Campaign URL: your website
5. Click "Save"

### Step 3: Get API Key

1. Click your profile icon → "Account & billing"
2. Go to "Extras" → "API keys"
3. Click "Create A Key"
4. Name it: "Waitlist Template"
5. **Copy the key** (starts with something like `abc123... `)
6. **Save it securely** - you won't see it again!

### Step 4: Get Audience ID

1. Go to "Audience" → "All contacts"
2. Click "Settings" → "Audience name and defaults"
3. Find "Audience ID" (looks like: `a1b2c3d4e5`)
4. **Copy this ID**

### Step 5: Install Mailchimp Package

In your terminal:

```bash
npm install @mailchimp/mailchimp_marketing
```

### Step 6: Update Your Code

**File:** `src/main.js`

Find the form handler (around line 188) and replace it with:

```javascript
// Form submission handler
const form = document.getElementById("waitlist-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  try {
    // Send to Mailchimp
    const response = await fetch(
      "https://YOUR-SERVER.us1.list-manage.com/subscribe/post-json?u=YOUR_USER_ID&id=YOUR_LIST_ID",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          EMAIL: formData.email,
          FNAME: formData.name,
        }),
      }
    );

    // Show success message
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");

    console.log("Successfully subscribed:", formData.email);
  } catch (error) {
    console.error("Subscription error:", error);
    alert("Oops! Something went wrong. Please try again.");
  }

  // Reset form after 5 seconds
  setTimeout(() => {
    form.reset();
    form.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }, 5000);
});
```

### Step 7: Get Your Mailchimp Form URL

**Better Method - Use Mailchimp's Embedded Form:**

1. Go to Audience → "Signup forms"
2. Click "Embedded forms"
3. Look for the form action URL:
   ```html
   <form
     action="https://yourname.us1.list-manage.com/subscribe/post?u=abc123&id=xyz789"
   ></form>
   ```
4. Copy the URL (everything in quotes)
5. Use this in your fetch call

**Or use Mailchimp API directly (requires server):**

For a simple client-side solution, use the embedded form method above.

### Better Solution: Use a Backend

**Mailchimp API requires a server** for security (can't expose API key in browser).

**Quick Options:**

1. **Netlify Functions** (free)
2. **Vercel Serverless Functions** (free)
3. **Zapier** (no-code solution)

See "Using Zapier" section below for easiest method.

---

## ConvertKit Integration

**Time:** 10 minutes  
**Cost:** Free for up to 1,000 subscribers

### Step 1: Create ConvertKit Account

1. Go to [convertkit.com](https://convertkit.com)
2. Sign up (no credit card required)
3. Complete onboarding

### Step 2: Create a Form

1. Go to "Grow" → "Landing Pages & Forms"
2. Click "Create New"
3. Choose "Inline form" or "Modal"
4. Use template or start blank
5. Design doesn't matter - we just need the form ID
6. Click "Save"

### Step 3: Get Form ID

1. After saving, click "Embed"
2. Look for the form ID in the embed code
3. Or find it in the URL: `convertkit.com/forms/123456`
4. Copy the number (e.g., `123456`)

### Step 4: Get API Key

1. Click your profile → "Settings"
2. Go to "Advanced" → "API & Webhooks"
3. Copy your "API Key"

### Step 5: Update Your Code

**File:** `src/main.js`

```javascript
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  try {
    const response = await fetch(
      "https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "YOUR_API_KEY", // ⚠️ Warning: Exposing API key (see note below)
          email: formData.email,
          first_name: formData.name,
        }),
      }
    );

    if (response.ok) {
      // Show success
      form.classList.add("hidden");
      successMessage.classList.remove("hidden");
      console.log("Successfully subscribed!");
    } else {
      throw new Error("Subscription failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Oops! Something went wrong. Please try again.");
  }

  // Reset after 5 seconds
  setTimeout(() => {
    form.reset();
    form.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }, 5000);
});
```

**⚠️ Security Note:** This exposes your API key. Better to use a serverless function (see below).

---

## EmailOctopus Integration

**Time:** 10 minutes  
**Cost:** Free for up to 2,500 subscribers

### Step 1: Create Account

1. Go to [emailoctopus.com](https://emailoctopus.com)
2. Sign up free
3. Verify email

### Step 2: Create a List

1. Click "Lists" → "Create a list"
2. Name it: "Waitlist"
3. Complete setup

### Step 3: Get API Key

1. Click your name → "API & SMTP"
2. Copy your API key

### Step 4: Get List ID

1. Go to "Lists"
2. Click your list
3. Look in the URL: `emailoctopus.com/lists/abc123-def456`
4. Copy the list ID

### Step 5: Update Your Code

```javascript
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  try {
    const response = await fetch(
      "https://emailoctopus.com/api/1.6/lists/YOUR_LIST_ID/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "YOUR_API_KEY",
          email_address: formData.email,
          fields: {
            FirstName: formData.name,
          },
        }),
      }
    );

    if (response.ok) {
      form.classList.add("hidden");
      successMessage.classList.remove("hidden");
    } else {
      throw new Error("Subscription failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }

  setTimeout(() => {
    form.reset();
    form.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }, 5000);
});
```

---

## Using Zapier (Easiest No-Code Solution)

**Perfect if you want to avoid backend code!**

**Time:** 10 minutes  
**Cost:** Free for up to 100 tasks/month

### Step 1: Create Zapier Account

1. Go to [zapier.com](https://zapier.com)
2. Sign up free

### Step 2: Create a Webhook Zap

1. Click "Create Zap"
2. **Trigger:** Search "Webhooks by Zapier"
3. Choose "Catch Hook"
4. Click "Continue"
5. **Copy the webhook URL** (like: `https://hooks.zapier.com/hooks/catch/123456/abcdef`)

### Step 3: Update Your Form

**File:** `src/main.js`

```javascript
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    timestamp: new Date().toISOString(),
  };

  try {
    // Send to Zapier webhook
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      // Show success
      form.classList.add("hidden");
      successMessage.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }

  setTimeout(() => {
    form.reset();
    form.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }, 5000);
});
```

### Step 4: Test the Webhook

1. Submit your form once
2. Go back to Zapier
3. Click "Test trigger"
4. You should see your test data!

### Step 5: Connect to Email Service

1. Click "Continue"
2. **Action:** Search for your email service (Mailchimp, ConvertKit, etc.)
3. Choose "Add/Update Subscriber"
4. Connect your account
5. Map fields:
   - Email → Email field from webhook
   - Name → Name field from webhook
6. Test the action
7. Turn on your Zap!

**Done!** Now form submissions go to your email service automatically.

---

## Using Serverless Functions (Best Practice)

**Why? ** Keeps API keys secure on the server.

### Option 1: Vercel Serverless Function

**File structure:**

```
your-project/
├── api/
│   └── subscribe.js  ← Create this
├── src/
└── ...
```

**File:** `api/subscribe.js`

```javascript
// Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  try {
    // Example: ConvertKit
    const response = await fetch(
      "https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY, // ← Secure!
          email: email,
          first_name: name,
        }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      throw new Error("Subscription failed");
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to subscribe" });
  }
}
```

**Update form handler:**

```javascript
const response = await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

**Add environment variable in Vercel:**

1. Project Settings → Environment Variables
2. Add: `CONVERTKIT_API_KEY` = your API key
3. Redeploy

### Option 2: Netlify Function

**File structure:**

```
your-project/
├── netlify/
│   └── functions/
│       └── subscribe.js  ← Create this
├── src/
└── ...
```

**File:** `netlify/functions/subscribe.js`

```javascript
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email } = JSON.parse(event.body);

  try {
    const response = await fetch("YOUR_EMAIL_SERVICE_API", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.API_KEY,
        email: email,
        name: name,
      }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Subscription failed" }),
    };
  }
};
```

**Update form handler:**

```javascript
const response = await fetch("/. netlify/functions/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

---

## Custom API Integration

Have your own backend? Here's the pattern:

### Your Backend Endpoint

Example in Node.js/Express:

```javascript
app.post("/api/waitlist", async (req, res) => {
  const { name, email } = req.body;

  // Validate
  if (!email || !name) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Save to database
  await db.waitlist.create({ name, email, createdAt: new Date() });

  // Send welcome email (optional)
  await sendEmail({
    to: email,
    subject: "Welcome to the waitlist!",
    body: `Hi ${name}, thanks for joining! `,
  });

  res.json({ success: true });
});
```

### Update Form Handler

```javascript
const response = await fetch("https://your-backend.com/api/waitlist", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN", // If needed
  },
  body: JSON.stringify(formData),
});

if (response.ok) {
  // Success!
}
```

---

## Testing Your Integration

### Test Checklist:

- [ ] Submit form with valid email
- [ ] Check email service dashboard - new subscriber?
- [ ] Try invalid email - shows error?
- [ ] Try duplicate email - handled correctly?
- [ ] Check browser console - no errors?
- [ ] Receive confirmation email? (if configured)

### Test Different Scenarios:

**Valid submission:**

```
Name: John Doe
Email:  john@example.com
Expected: Success message, added to list
```

**Invalid email:**

```
Name: Jane
Email: not-an-email
Expected: HTML5 validation error
```

**Duplicate email:**

```
Submit same email twice
Expected: Either silent success or "already subscribed" message
```

### Debug Common Issues:

**Form submits but nothing happens:**

- Check browser console (F12) for errors
- Verify API endpoint is correct
- Check network tab to see request/response

**CORS errors:**

```
Access to fetch blocked by CORS policy
```

- Use serverless function or backend
- Or use Zapier webhook

**API key invalid:**

- Double-check you copied the key correctly
- Make sure key has correct permissions
- Some services have separate API keys for different functions

---

## Security Best Practices

### ❌ DON'T:

- Expose API keys in frontend code
- Commit API keys to GitHub
- Use production keys in development

### ✅ DO:

- Use serverless functions for API calls
- Store keys in environment variables
- Use Zapier for simple no-code solution
- Add rate limiting (prevent spam)
- Validate email format server-side

### Example: Secure Setup

**Frontend (public):**

```javascript
// No API keys here!
fetch("/api/subscribe", {
  method: "POST",
  body: JSON.stringify({ email, name }),
});
```

**Backend (private):**

```javascript
// API key is safe here
const apiKey = process.env.EMAIL_SERVICE_API_KEY;
```

---

## Spam Protection

### Add reCAPTCHA (Optional)

**File:** `index.html`

Add before closing `</body>`:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

**In form:**

```html
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
```

**Verify server-side** before subscribing.

### Add Honeypot Field (Simple)

**In form HTML:**

```html
<!-- Hidden field - bots will fill this -->
<input
  type="text"
  name="website"
  style="display: none"
  tabindex="-1"
  autocomplete="off"
/>
```

**Check in handler:**

```javascript
if (document.querySelector('input[name="website"]').value !== "") {
  // This is probably a bot - ignore
  console.log("Bot detected");
  return;
}
```

---

## Email Collection Checklist

- [ ] Email service account created
- [ ] API credentials obtained
- [ ] Integration code added
- [ ] Tested with real submission
- [ ] Verified subscriber appears in service
- [ ] Error handling in place
- [ ] Success message shows
- [ ] No sensitive data exposed in frontend
- [ ] GDPR/privacy compliant (if applicable)

---

## Need Help?

- 📧 **Email:** hello@blitzpattern.com
- 📚 **Other Docs:** [docs/](.) folder
- 🐛 **Issues:** [GitHub Issues](https://github.com/bpassawe/saas-waitlist-template/issues)

---

**Happy integrating!** 📧

_Template by [Blitz Pattern](https://blitzpattern.com)_
