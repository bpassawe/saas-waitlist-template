// Main JavaScript for the waitlist page template
// Handles theme selection, DOM updates, and waitlist logic.
import "./style.css";
import { config } from "./config.js";

// Color theme classes
const themes = {
  blue: {
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    button: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
    accent: "bg-blue-100",
    ring: "focus:ring-blue-500 focus:border-blue-500",
    text: "text-blue-600",
  },
  purple: {
    gradient: "bg-gradient-to-br from-purple-50 to-pink-100",
    button: "bg-purple-600 hover:bg-purple-700 active:bg-purple-800",
    accent: "bg-purple-100",
    ring: "focus:ring-purple-500 focus:border-purple-500",
    text: "text-purple-600",
  },
  green: {
    gradient: "bg-gradient-to-br from-green-50 to-emerald-100",
    button: "bg-green-600 hover:bg-green-700 active:bg-green-800",
    accent: "bg-green-100",
    ring: "focus:ring-green-500 focus:border-green-500",
    text: "text-green-600",
  },
  pink: {
    gradient: "bg-gradient-to-br from-pink-50 to-rose-100",
    button: "bg-pink-600 hover: bg-pink-700 active: bg-pink-800",
    accent: "bg-pink-100",
    ring: "focus: ring-pink-500 focus: border-pink-500",
    text: "text-pink-600",
  },
  orange: {
    gradient: "bg-gradient-to-br from-orange-50 to-amber-100",
    button: "bg-orange-600 hover:bg-orange-700 active:bg-orange-800",
    accent: "bg-orange-100",
    ring: "focus:ring-orange-500 focus:border-orange-500",
    text: "text-orange-600",
  },
};

const theme = themes[config.primaryColor] || themes.blue;

// Generate features HTML
const featuresHTML = config.features
  .map(
    (feature) => `
  <div class="text-center">
    <div class="${theme.accent} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-3xl">${feature.icon}</span>
    </div>
    <h3 class="font-semibold text-lg text-gray-900 mb-2">${feature.title}</h3>
    <p class="text-gray-600">${feature.description}</p>
  </div>
`
  )
  .join("");

// Social media icons with X (formerly Twitter)
const socialIcons = {
  x: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>',

  facebook:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>',

  youtube:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>',

  linkedin:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>',

  github:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>',
};

// Platform display names
const platformNames = {
  x: "X (Twitter)",
  facebook: "Facebook",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  github: "GitHub",
};

// Generate social links HTML with hover effects
const socialHTML = Object.entries(config.social)
  .filter(([_, url]) => url && url.trim() !== "")
  .map(([platform, url]) => {
    const icon = socialIcons[platform];
    if (!icon) return "";

    return `
      <a 
        href="${url}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
        aria-label="${platformNames[platform] || platform}"
        title="${platformNames[platform] || platform}"
      >
        ${icon}
      </a>
    `;
  })
  .join("");

// Main app HTML
document.querySelector("#app").innerHTML = `
  <div class="min-h-screen ${
    theme.gradient
  } flex items-center justify-center px-4 py-12">
    <div class="max-w-4xl w-full">
      
      <!-- Header/Hero Section -->
      <div class="text-center mb-12">
        <div class="mb-8">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ${config.brandName}
          </h1>
          <p class="text-2xl md:text-3xl font-semibold ${theme.text} mb-6">
            ${config.tagline}
          </p>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            ${config.description}
          </p>
        </div>
      </div>

      <!-- Email Signup Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto mb-16">
        <form id="waitlist-form" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg ${
                theme.ring
              } focus:ring-2 focus:outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg ${
                theme.ring
              } focus:ring-2 focus:outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <button 
            type="submit"
            class="w-full ${
              theme.button
            } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            ${config.ctaButton}
          </button>
        </form>
        
        <!-- Success Message (Hidden by default) -->
        <div id="success-message" class="hidden mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p class="text-green-800 text-center font-medium">
            ${config.successMessage}
          </p>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        ${featuresHTML}
      </div>

      <!-- Social Links (if any) -->
      ${
        socialHTML
          ? `
        <div class="flex justify-center gap-6 mt-12">
          ${socialHTML}
        </div>
      `
          : ""
      }

      <!-- Footer -->
      <div class="text-center mt-16 text-gray-500 text-sm">
        <p>&copy; ${new Date().getFullYear()} ${
  config.brandName
}. All rights reserved.</p>
      </div>

    </div>
  </div>
`;

// Form submission handler
const form = document.getElementById("waitlist-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    timestamp: new Date().toISOString(),
  };

  // TODO:  Customers will integrate their email service here
  // Examples:  Mailchimp, ConvertKit, EmailOctopus, etc.

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Show success message
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");

  // Optional: Reset form after delay
  setTimeout(() => {
    form.reset();
    form.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }, 5000);
});
