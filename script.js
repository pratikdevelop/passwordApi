require("dotenv").config();
require("./config/conn");
const Plan = require('./models/plan');
const plans = [
  {
    id: "null",
    title: "Free Plan",
    amount: 0,
    currency: "USD",
    interval: "month",
    intervalCount: 1,
    features: [
      {
        icon: "💾",
        text: "500 MB Storage",
      },
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "👥",
        text: "1 Organization",
      },
      {
        icon: "📧",
        text: "5 User Invitations",
      },
      {
        icon: "🔑",
        text: "5 Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Get Started",
    hasTrial: "false",
    queryParams: {
      plan: "free",
      action: "signup",
    },
    trialQueryParams: {},
  },
  {
    id: "P-683760842Y234025BM3WGQ6Y",
    title: "Enterprise Plan (Yearly)",
    amount: 100,
    currency: "usd",
    interval: "year",
    intervalCount: 1,
    features: [
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "🔐",
        text: "Passwordless SSO Integration",
      },
      {
        icon: "💾",
        text: "10 GB Storage",
      },
      {
        icon: "👥",
        text: "Unlimited Organizations",
      },
      {
        icon: "📧",
        text: "Unlimited User Invitations",
      },
      {
        icon: "🔑",
        text: "Unlimited Password Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "enterprise",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "enterprise",
      action: "trial",
    },
  },
  {
    id: "P-959072281U895714BM3WGQCA",
    title: "Enterprise Plan (Monthly)",
    amount: 6,
    currency: "usd",
    interval: "month",
    intervalCount: 1,
    features: [
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "🔐",
        text: "Passwordless SSO Integration",
      },
      {
        icon: "💾",
        text: "10 GB Storage",
      },
      {
        icon: "👥",
        text: "Unlimited Organizations",
      },
      {
        icon: "📧",
        text: "Unlimited User Invitations",
      },
      {
        icon: "🔑",
        text: "Unlimited Password Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "enterprise",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "enterprise",
      action: "trial",
    },
  },
  {
    id: "P-6XR17625JV867584NM3WGF7I",
    title: "Premium Plan (yearly)",
    amount: 60,
    currency: "usd",
    interval: "year",
    intervalCount: 1,
    features: [
      {
        icon: "💾",
        text: "5 GB Storage",
      },
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "👥",
        text: "10 Organizations",
      },
      {
        icon: "📧",
        text: "100 User Invitations",
      },
      {
        icon: "🔑",
        text: "100 Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "premium",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "premium",
      action: "trial",
    },
  },
  {
    id: "P-5GV04444VF2894031M3VR2MY",
    title: "Premium Plan (yearly)",
    amount: 6,
    currency: "usd",
    interval: "month",
    intervalCount: 1,
    features: [
      {
        icon: "💾",
        text: "5 GB Storage",
      },
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "👥",
        text: "10 Organizations",
      },
      {
        icon: "📧",
        text: "100 User Invitations",
      },
      {
        icon: "🔑",
        text: "100 Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "premium",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "premium",
      action: "trial",
    },
  },
  {
    id: "P-93233881XJ483274HM3WGPGA",
    title: "Basic Plan (Yearly)",
    amount: 40,
    currency: "usd",
    interval: "year",
    intervalCount: 1,
    features: [
      {
        icon: "💾",
        text: "1 GB Storage",
      },
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "👥",
        text: "2 Organizations",
      },
      {
        icon: "📧",
        text: "15 User Invitations",
      },
      {
        icon: "🔑",
        text: "15 Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "basic",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "basic",
      action: "trial",
    },
  },
  {
    id: "P-85R761525X622673PM3WGOTQ",
    title: "Basic Plan (Monthly)",
    amount: 4,
    currency: "usd",
    interval: "month",
    intervalCount: 1,
    features: [
      {
        icon: "💾",
        text: "1 GB Storage",
      },
      {
        icon: "📦",
        text: "Store passwords, notes, cards, ID proofs",
      },
      {
        icon: "👥",
        text: "2 Organizations",
      },
      {
        icon: "📧",
        text: "15 User Invitations",
      },
      {
        icon: "🔑",
        text: "15 Shares",
      },
    ],
    buttonLink: "/auth/signup",
    buttonText: "Buy Now",
    hasTrial: "true",
    queryParams: {
      plan: "basic",
      action: "purchase",
    },
    trialLink: "/auth/signup",
    trialQueryParams: {
      plan: "basic",
      action: "trial",
    },
  },
];


const createPlan = async (plan) => {
  try {
    const newPlan = new Plan({
      paypalPlanId: plan.id,
      planName: plan.title,
      description: '', // Add description if needed
      amount: plan.amount * 100, // Convert amount to cents
      currency: plan.currency.toLowerCase(), // Ensure currency is lowercase
      interval: plan.interval,
      intervalCount: plan.intervalCount,
      features: plan.features,
      buttonLink: plan.buttonLink,
      buttonText: plan.buttonText,
      hasTrial: plan.hasTrial === "true", // Convert string to boolean
      queryParams: plan.queryParams,
      trialLink: plan.trialLink,
      trialQueryParams: plan.trialQueryParams,
    });

    // Save the plan to the database
    await newPlan.save();
    console.log(`Plan ${plan.title} saved successfully!`);
  } catch (error) {
    console.error(`Error saving plan ${plan.title}:`, error);
  }
};

plans.forEach(createPlan);