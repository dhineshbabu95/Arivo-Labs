/**
 * Website content - edit all text here for easy updates
 */

export const site = {
  name: "Arivo Labs",
  company: "Arivo Labs",
  tagline: "Cloud, Data & AI Systems for Growing Businesses",
  url: "https://www.dhineshbabu.com",
  email: "dhinesh.babu2511@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhineshbabudata/",
  location: "Sydney, NSW, Australia",
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
  title: "About Arivo Labs",
  portrait: "/images/profile.png",
  portraitAlt: "Arivo Labs brand mark",
  content: [
    "Arivo Labs is a systems-focused technology studio helping businesses modernize how they build, ship, and operate software.",
    "We work across cloud engineering, automation, data platforms, and digital product infrastructure to remove operational bottlenecks and improve delivery confidence.",
    "Our approach is practical and outcome-driven: understand the business constraint, design clean architecture, and deliver solutions that stay maintainable as the business scales.",
    "Based in Sydney, we partner with teams across Australia and globally on high-impact platform and automation initiatives.",
  ],
};

// --------------------------------------
// SERVICES (Shared)
// --------------------------------------

export const services = {
  title: "Services",
  intro:
    "Arivo Labs provides these services to help product and operations teams move faster with reliable cloud, data, and automation systems.",
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
    "Tell us what you're building or where you're blocked. Arivo Labs responds with a clear technical direction and practical next steps.",
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
};

// --------------------------------------
// HOMEPAGE (Composed)
// --------------------------------------

export const home = {
  hero: {
    eyebrow: "Cloud, Data & AI Engineering",
    headline: "Arivo Labs builds reliable systems for ambitious teams.",
    subheadline:
      "We design and deliver cloud platforms, automated data workflows, and modern web systems that scale with your business.",
    primaryCta: "Book a discovery call",
    secondaryCta: "Connect on LinkedIn",
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
        phase: "Foundation",
        title: "Why Arivo Labs started",
        text: "Arivo Labs began to solve a recurring problem: growing teams needed reliable systems, but not added operational complexity.",
        posterImage: "/images/story/work-pipelines.webp",
        posterAlt:
          "Cloud and platform engineering foundations for startup and growth teams.",
      },
      {
        phase: "Delivery",
        title: "Execution with ownership",
        text: "We partner closely with product and operations teams to design, build, and ship systems that teams can confidently run after handover.",
        posterImage: "/images/story/path-building.webp",
        posterAlt:
          "Collaborative delivery model focused on reliability and maintainability.",
      },
      {
        phase: "Today",
        title: "What we focus on",
        text: "Arivo Labs focuses on cloud, data, and AI systems that reduce manual effort and create compounding business value.",
        posterImage: "/images/story/today-focus.webp",
        posterAlt:
          "Modern cloud, data, and AI stack supporting business growth.",
      },
    ],
  },
  about: {
    title: "About",
    paragraphs: about.content,
  },
  projects: {
    title: "Case Studies",
    heading: "Systems delivered for real business outcomes.",
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
    heading: "Cloud, data, and automation services by Arivo Labs.",
    intro: services.intro,
  },
  beyondWork: {
    title: "Why Arivo Labs",
    heading: "Engineering clarity, ownership, and long-term reliability.",
    visual: {
      src: "/images/home/beyond-work-original.png",
      alt: "Optional — training, gym, or life outside the desk.",
    },
    paragraphs: [
      "We focus on building systems that your team can confidently run after handover, not fragile setups that depend on external support forever.",
      "Every engagement balances speed and maintainability so you can ship quickly today without creating operational pain tomorrow.",
      "From architecture to delivery, we prioritize measurable business outcomes, clear documentation, and sustainable execution.",
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
    { href: "/work", label: "Work" },
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
    "Cloud, data, and AI systems engineered for business growth.",
  companyLine: "Founder, Arivo Labs",
  links: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ],
};
