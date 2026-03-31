/**
 * Website content - edit all text here for easy updates
 */

export const site = {
  name: "Dhinesh Babu",
  company: "Arivo Labs",
  tagline: "Cloud, data & web systems",
  url: "https://www.dhineshbabu.com",
  email: "dhinesh.babu2511@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhineshbabudata/",
  phone: {
    au: { tel: "+61421597288", display: "+61 421 597 288" },
    in: { tel: "+918220359911", display: "+91 82203 59911" },
  },
  location: "Sydney, NSW, Australia",
  address: {
    lines: ["200 Kissing Point Road", "Dundas, NSW 2117", "Australia"],
  },
};

// --------------------------------------
// WORK PAGE (Case Studies)
// --------------------------------------

export const work = {
  title: "Projects",
  intro:
    "A few systems I've built end to end. Same idea each time: make the steady work predictable, so teams have room to do the interesting part.",
  caseStudies: [
    {
      id: "1",
      title: "Deployment reliability",
      /** Set to "/images/projects/deployments.jpg" etc. when ready; null shows a labeled placeholder */
      coverImage: "/images/projects/deployments.png",
      coverAlt:
        "Visual for deployment reliability — pipelines, releases, or infra abstraction.",
      client: "A team shipping weekly",
      businessChallenge:
        "Deployments were manual and slow. Every release carried unnecessary risk, and the team was spending time on steps they've done before.",
      approachTaken:
        "I set up automated pipelines and repeatable infrastructure. Clear runbooks made it easier for the team to own the process instead of waiting on one person.",
      technologyUsed: [
        "Cloud systems",
        "Deployment pipelines",
        "Monitoring",
        "Infrastructure as code",
      ],
      businessOutcome:
        "Releases became a routine. Less stress, fewer surprises, and more time for actual product work.",
    },
    {
      id: "2",
      title: "Ops dashboards that refresh themselves",
      coverImage: "/images/projects/ops-dashboards.png",
      coverAlt:
        "Visual for ops dashboards — charts or a calm dashboard crop.",
      client: "An operations team",
      businessChallenge:
        "Every week started with the same messy routine: pulling data from multiple tools into spreadsheets. The numbers were often stale, and it took way too long to get something useful.",
      approachTaken:
        "I built automated pipelines to move data on a schedule, then shipped a simple dashboard with clear drill-downs. I also documented the data model so it could evolve safely.",
      technologyUsed: [
        "Data pipelines",
        "Workflow automation",
        "Dashboards",
        "Data models",
      ],
      businessOutcome:
        "Reporting got faster and more consistent. The team stopped copying spreadsheets and started making decisions from data.",
    },
    {
      id: "3",
      title: "Secure data workflows",
      coverImage: "/images/projects/secure-workflows.png",
      coverAlt:
        "Visual for secure workflows — lock, flow, or audit abstraction.",
      client: "A product working with sensitive data",
      businessChallenge:
        "They needed a safe way to process data, with clear access control and audit trails. The existing setup was too ad-hoc, and it didn't hold up well in real reviews.",
      approachTaken:
        "I designed the workflow with encryption in transit and at rest, audit logging, and access controls. Retention and deletion rules were handled like code, so it stayed consistent.",
      technologyUsed: [
        "Secure pipelines",
        "Audit logs",
        "Access controls",
        "Retention policies",
      ],
      businessOutcome:
        "They got through reviews with confidence. The processing flow became easier to trust and easier to explain.",
    },
  ],
};

// --------------------------------------
// ABOUT (Shared)
// --------------------------------------

export const about = {
  title: "Dhinesh Babu",
  portrait: "/images/profile.png",
  portraitAlt:
    "Dhinesh Babu smiling, wearing a black polo shirt against a neutral gray background.",
  content: [
    "I grew up in Chennai in a middle-class home — nothing fancy, plenty of heart. My dad worked in the South Indian music scene; my mum kept our home running. We didn't have spare money for everything, but we had room to ask questions and try things.",
    "I was the kid who took things apart to see how they fit back together. Engineering in Chennai came next, then a Master's in Data Science at La Trobe in Melbourne — a big step I'm still grateful my family backed.",
    "Using products like Alexa made AI feel real to me. I wanted to build things people could use, not only read papers about them.",
    "Melbourne included a long lockdown and a slower season than I expected. Looking back, it pushed me to build better habits, look after myself properly, and choose my next move with more care. Sydney has been that next chapter — lighter, busier, and full of things I chose on purpose.",
    "These days I train Brazilian Jiu-Jitsu and CrossFit — simple anchors that keep me steady. Shipping a real project end to end again reminded me how much I love the craft of building.",
    "Work has taken me through a few different worlds — big tech, telco, measurement, agency. The thread stays the same: cloud, data, automation, and systems that still work the week after you ship.",
    "I run Arivo Labs, where I help teams design and ship practical cloud, web, and data systems with clarity and long-term maintainability.",
  ],
};

// --------------------------------------
// SERVICES (Shared)
// --------------------------------------

export const services = {
  title: "Services",
  intro:
    "If your team does the same manual steps every week, I can help automate them. You keep the interesting problems.",
  items: [
    {
      id: "cloud",
      title: "Cloud & DevOps",
      what: [
        "Infra as code so environments match",
        "CI/CD that doesn't depend on one person",
        "Monitoring and logs that help when things break",
        "Handover notes so your team owns it",
      ],
      who: "Teams that want reliability without hiring a big ops bench.",
      outcome: "Fewer surprises, faster releases, something you can maintain.",
    },
    {
      id: "web",
      title: "Web & internal tools",
      what: [
        "Modern apps and internal dashboards",
        "APIs that are easy to plug in",
        "UI that stays fast and clear",
        "Gradual upgrades from older stacks",
      ],
      who: "Teams shipping products or tools people use daily.",
      outcome: "Something users trust and engineers can extend.",
    },
    {
      id: "data",
      title: "Data pipelines & workflows",
      what: [
        "Scheduled pipelines instead of manual exports",
        "Automation with alerts when jobs fail",
        "Clean models for reporting",
        "Dashboards that update on their own",
      ],
      who: "Teams tired of spreadsheet gymnastics.",
      outcome: "Data people can rely on without babysitting files.",
    },
  ],
};

// --------------------------------------
// CONTACT (Shared)
// --------------------------------------

export const contact = {
  title: "Contact",
  intro:
    "If you want to tighten a workflow, automate something, or talk through an idea, send a note. I also take on selected consulting projects through Arivo Labs.",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "What's going on?",
    submit: "Send message",
  },
  responseTime: "Usually within a day.",
  linkedinLabel: "LinkedIn",
  emailLabel: "Email",
  phoneLabel: "Call / WhatsApp",
  addressLabel: "Location",
};

// --------------------------------------
// HOMEPAGE (Composed)
// --------------------------------------

export const home = {
  hero: {
    eyebrow: "Data, AI & automation",
    headline: "I build systems that handle the repeat work.",
    subheadline:
      "Cloud, data pipelines, and small web tools — the kind that keep helping after the handover. I enjoy work that holds up in the real world.",
    primaryCta: "Say hello",
    secondaryCta: "LinkedIn",
    /** Right column on large screens — set src when asset exists (see IMAGE_SLOTS.md) */
    visual: {
      src: null as string | null,
      /** When `src` is null, this loop plays in the right-hand frame (path under /public). */
      videoSrc: "/media/hero-ambient.mp4" as string | null,
      alt: "Optional hero still — workspace, systems sketch, or you in context.",
    },
  },
  story: {
    title: "Story",
    heading: "From tinkering as a kid to building for work.",
    intro: "Short version of the path — roots, study, and what I care about now.",
    /**
     * Each milestone can show a wide “poster” on the card (`posterImage` + `posterAlt`).
     * Paths after resize (see IMAGE_SLOTS.md): growing-up, study-data, alexa-moment,
     * melbourne, sydney, work-pipelines, path-building, today-focus → `/images/story/*.webp`
     */
    milestones: [
      {
        phase: "Growing up",
        title: "Curious kid",
        text: "Chennai, humble home — I took things apart to learn how they worked.",
        /** Chapter poster — wide “movie strip” above card; null = labeled placeholder */
        posterImage: "/images/story/growing-up.webp",
        posterAlt:
          "Growing up in Chennai — childhood, home, or curiosity / tinkering mood.",
      },
      {
        phase: "Study",
        title: "Engineering, then data",
        text: "Engineering in Chennai, then a Master's in Data Science at La Trobe in Melbourne.",
        posterImage: "/images/story/study-data.webp",
        posterAlt:
          "Study chapter — university campus, engineering, or data science learning.",
      },
      {
        phase: "AI",
        title: "Alexa moment",
        text: "Voice assistants made AI feel tangible. I wanted to build, not only study.",
        posterImage: "/images/story/alexa-moment.webp",
        posterAlt:
          "Voice assistant or hands-free tech — tangible AI, not generic robot stock.",
      },
      {
        phase: "Melbourne",
        title: "A slower chapter",
        text: "Lockdowns and a quieter life taught me patience and better habits — useful lessons I took with me.",
        posterImage: "/images/story/melbourne-original.png",
        posterAlt:
          "Melbourne — quiet city mood, coffee, or reflective slower chapter.",
      },
      {
        phase: "Sydney",
        title: "Fresh start",
        text: "Moved to Sydney, chose training and routine on purpose: BJJ, CrossFit, and a clearer head.",
        posterImage: "/images/story/sydney.webp",
        posterAlt:
          "Sydney harbour or city energy — fresh start, training, routine.",
      },
      {
        phase: "Work",
        title: "Pipelines and platforms",
        text: "Telco and measurement work in Melbourne and Sydney — lots of AWS, automation, and making jobs repeatable.",
        posterImage: "/images/story/work-pipelines.webp",
        posterAlt:
          "Cloud, pipelines, or platforms — telco / measurement / AWS automation mood.",
      },
      {
        phase: "Path",
        title: "Still building",
        text: "Sydney, agency-side work — still deep in data, automation, and shipping things that last.",
        posterImage: "/images/story/path-building.webp",
        posterAlt:
          "Agency or shipping work — collaboration, shipping, data and automation.",
      },
      {
        phase: "Today",
        title: "What I focus on",
        text: "Reliable systems and automation so teams get time back for the work only people can do.",
        posterImage: "/images/story/today-focus.webp",
        posterAlt:
          "Today — reliable systems, automation, teams getting time back.",
      },
    ],
  },
  about: {
    title: "About",
    paragraphs: about.content,
  },
  projects: {
    title: "Projects",
    heading: "Work that made the week a bit easier.",
    intro:
      "Three examples. Each one was about less manual effort and fewer last-minute surprises.",
    labels: {
      stuck: "What was messy",
      changed: "What I changed",
      viewDetails: "See the details",
    },
  },
  services: {
    title: "Services",
    heading: "Cloud, data, and web — built to last.",
    intro: services.intro,
  },
  beyondWork: {
    title: "Beyond work",
    heading: "Training keeps me honest.",
    visual: {
      src: "/images/home/beyond-work-original.png",
      alt: "Optional — training, gym, or life outside the desk.",
    },
    paragraphs: [
      "Outside of work I spend time on the mat and in the gym — Brazilian Jiu-Jitsu and CrossFit. They're a simple way to show up for myself, the same way I try to show up for a team at work.",
      "Jiu-jitsu is patience and control under pressure. CrossFit is doing the work even when you're not in the mood — both translate back to how I like to build.",
      "I'm at my best when something ships, people actually use it, and the docs are clear enough for the next person to improve it.",
    ],
  },
  contact: {
    title: "Contact",
    heading: "If that sounds right, say hi.",
    intro: contact.intro,
  },
  projectsSection: {
    viewAllLabel: "Full write-ups",
  },
};

// --------------------------------------
// PRIVACY POLICY
// --------------------------------------

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "March 2026",
  sections: [
    {
      heading: "What I collect",
      content:
        "If you use the contact form, I get your name, email, company, and message. I only use that to reply. I don't sell it or hand it to third parties.",
    },
    {
      heading: "How I use it",
      content:
        "To answer your note and follow up if it makes sense. I don't sell or rent personal data.",
    },
    {
      heading: "Cookies",
      content:
        "The site may use basic cookies where needed for it to work. No ad or analytics trackers by default.",
    },
    {
      heading: "How long I keep it",
      content:
        "Only as long as needed to handle your message and for normal records.",
    },
    {
      heading: "Your rights",
      content:
        "You can ask to see, fix, or delete your data. Use the Contact page.",
    },
    {
      heading: "Changes",
      content:
        "I might update this page sometimes. The date at the top is the last edit.",
    },
  ],
};

// --------------------------------------
// NAVIGATION
// --------------------------------------

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
};

// --------------------------------------
// FOOTER
// --------------------------------------

export const footer = {
  tagline:
    "Cloud, data, AI, and internal tools — built to stay useful after launch.",
  companyLine: "Founder, Arivo Labs",
  links: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ],
};
