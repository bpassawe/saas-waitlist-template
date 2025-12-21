// Configuration for the waitlist page
// Contains brand, theme, features, and social settings used throughout the app.
export const config = {
  // Brand Settings
  brandName: "Your SaaS",
  tagline: "Something Amazing is Coming Soon",
  description:
    "The fastest way to validate your SaaS idea. Launch a professional waitlist page and start collecting emails today.",

  // Theme Color (blue, purple, green, pink, orange)
  primaryColor: "purple",

  // Features to Display
  features: [
    {
      icon: "⚡",
      title: "Deploy in 10 Minutes",
      description:
        "No design or coding skills needed. Customize and launch fast.",
    },
    {
      icon: "🎨",
      title: "5 Premium Themes",
      description: "Beautiful color schemes that match any brand instantly.",
    },
    {
      icon: "📱",
      title: "Mobile Perfect",
      description: "Looks stunning on every device, automatically responsive.",
    },
  ],

  // Social Links (optional - leave empty string to hide)
  social: {
    x: "",
    facebook: "",
    youtube: "",
    linkedin: "",
    github: "",
  },

  // Call to Action
  ctaButton: "Join the Waitlist",
  successMessage: "🎉 You're in!  Check your email for next steps.",
};

// Template by Blitz Pattern - https://blitzpattern.com
