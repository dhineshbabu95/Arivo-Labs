/**
 * Website content — Arivo Labs (business-focused)
 */

export const site = {
  name: "Arivo Labs",
  company: "Arivo Labs",
  tagline: "Digital Transformation Made Simple",
  url: "https://www.arivolabs.com",
  email: "dhinesh.babu2511@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhineshbabudata/",
  location: "Sydney, NSW, Australia",
};

// --------------------------------------
// WORK PAGE (Case studies — optional credibility)
// --------------------------------------

export const work = {
  title: "Case studies",
  intro:
    "Examples of how we reduce manual work and make operations easier to run—with clear outcomes.",
  caseStudies: [
    {
      id: "1",
      title: "Deployment reliability",
      coverImage: "/images/projects/deployments.png",
      coverAlt:
        "Visual for deployment reliability — pipelines, releases, or infra abstraction.",
      client: "A team shipping weekly",
      businessChallenge:
        "Deployments were manual and slow. Every release carried unnecessary risk, and the team was spending time on steps they've done before.",
      approachTaken:
        "We set up automated pipelines and repeatable infrastructure. Clear runbooks made it easier for the team to own the process instead of waiting on one person.",
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
        "We built automated pipelines to move data on a schedule, then shipped a simple dashboard with clear drill-downs. We documented the data model so it could evolve safely.",
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
        "We designed the workflow with encryption in transit and at rest, audit logging, and access controls. Retention and deletion rules were handled consistently.",
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
// ABOUT (Company)
// --------------------------------------

export const about = {
  title: "About Arivo Labs",
  portrait: "/images/profile.png",
  portraitAlt: "Arivo Labs",
  content: [
    "Arivo Labs helps small and medium businesses go from little or no digital presence to a professional setup that saves time and supports better decisions.",
    "We focus on websites people can trust, reporting you can actually use, and automation that removes repetitive work—without turning your business into an IT project.",
    "Our work is practical and scoped around outcomes: clearer visibility, fewer manual steps, and systems you can keep using as you grow.",
    "Based in Sydney, we partner with businesses across Australia that want a serious digital partner—not a pile of tools and buzzwords.",
  ],
};

// --------------------------------------
// SERVICES
// --------------------------------------

export const services = {
  title: "Services",
  intro:
    "Simple, outcome-focused services to help your business look professional online, understand performance, and reduce manual work.",
  items: [
    {
      id: "websites",
      title: "Website development",
      description:
        "We create clean, modern websites that clearly explain your services, build trust, and make it easy for customers to contact or book you.",
      outcome:
        "Look credible online and convert more visitors into paying customers.",
    },
    {
      id: "analytics",
      title: "Analytics & dashboards",
      description:
        "We set up simple dashboards so you can see where leads come from, what is working, and where to improve.",
      outcome: "Stop guessing. Make decisions with confidence.",
    },
    {
      id: "automation",
      title: "Automation",
      description:
        "We automate repetitive tasks like follow-ups, reminders, and lead handling so your team can focus on customers.",
      outcome: "Save hours every week and reduce missed opportunities.",
    },
  ],
};

// --------------------------------------
// CONTACT
// --------------------------------------

export const contact = {
  title: "Contact",
  intro:
    "Tell us what you're trying to fix: no website, unclear numbers, or too much manual work. We'll reply with practical next steps—including a free digital audit if that's the best place to start.",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "What should we know?",
    submit: "Book a call",
  },
  responseTime: "We usually respond within one business day.",
  linkedinLabel: "LinkedIn",
  emailLabel: "Email",
};

// --------------------------------------
// HOMEPAGE
// --------------------------------------

export const home = {
  hero: {
    eyebrow: "Digital transformation made simple",
    headline: "We help businesses go digital and grow faster.",
    subheadline:
      "Websites, automation, and dashboards built for small and medium businesses.",
    supportingLine:
      "No tech jargon. No guesswork. Just practical digital systems that help your business run better.",
    primaryCta: "Book a free audit",
    secondaryCta: "Get started",
    trustChips: [
      "No tech team needed",
      "Clear roadmap",
      "Built for local businesses",
    ],
    tertiaryCta: "See how it works",
    tertiaryHref: "/#how-it-works",
    visual: {
      illustration: true,
      src: null as string | null,
      videoSrc: null as string | null,
      alt: "Arivo Labs — digital presence for local businesses.",
    },
  },
  audience: {
    eyebrow: "Who it's for",
    title: "Built for business owners who need results, not complexity.",
    intro:
      "Arivo Labs is for clinics, gyms, law firms, restaurants, and local service businesses that need a strong digital setup but do not have an in-house tech team.",
    pains: [
      {
        title: "No time",
        text: "You're serving customers, not learning new software.",
      },
      {
        title: "No in-house tech team",
        text: "You need digital results without hiring a full technical team.",
      },
      {
        title: "No real visibility",
        text: "You cannot clearly see what is working or where leads come from.",
      },
      {
        title: "Inconsistent online presence",
        text: "You have little or no online presence that builds customer trust.",
      },
    ],
    closing:
      "If your business is still running with disconnected tools or no system at all, we help you fix that fast.",
  },
  services: {
    title: "Services",
    heading: "What we build with you",
    intro: services.intro,
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "One connected system—from your website to your numbers.",
    intro:
      "Simple flowcharts—no jargon. This is how enquiries, follow-up, and marketing clarity fit together.",
    diagrams: [
      {
        id: "web-to-dashboard",
        label: "Website → dashboard",
        title: "From visits to clear reporting",
        caption:
          "Your website captures enquiries and visits; everything rolls into a dashboard you can read in minutes.",
        visualHint:
          "Asset idea: browser mockup + 3 KPI tiles (Leads, Bookings, Top source).",
      },
      {
        id: "user-automation",
        label: "Customer → automation",
        title: "From busywork to automatic follow-up",
        caption:
          "When a customer acts, the right next step happens—so leads do not get lost in the inbox.",
        visualHint:
          "Asset idea: Zapier-style 3-node flow (Form → Auto → Booked).",
      },
      {
        id: "marketing-insights",
        label: "Marketing → insights",
        title: "From spend guesswork to clarity",
        caption:
          "See which channels bring enquiries—search, referrals, social—without living inside ad tools.",
        visualHint:
          "Asset idea: simple bar chart “Sources” with rounded bars.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Before & after",
    title: "What changes when your digital setup is intentional",
    intro:
      "Side-by-side story your team can understand in seconds—no stock photos, no buzzwords.",
    comparisons: [
      {
        id: "presence",
        beforeLabel: "Before",
        beforeTitle: "No real website",
        beforePoints: [
          "Hard to explain what you do online",
          "Fewer enquiries from search and referrals",
          "Looks “local-only,” not trustworthy-at-a-glance",
        ],
        beforeVisualHint:
          "Visual: muted wireframe / “coming soon” frame (no people).",
        afterLabel: "After",
        afterTitle: "Professional site",
        afterPoints: [
          "Clear services, proof, and contact or booking paths",
          "Mobile-friendly and easy to skim",
          "Customers understand you before they call",
        ],
        afterVisualHint:
          "Visual: polished homepage mock in a laptop frame.",
      },
      {
        id: "operations",
        beforeLabel: "Before",
        beforeTitle: "Manual everything",
        beforePoints: [
          "Copy-paste follow-ups and spreadsheet chaos",
          "No single place to see what is working",
          "Leads slip through when you are busy",
        ],
        beforeVisualHint:
          "Visual: sticky-note + spreadsheet icons (abstract).",
        afterLabel: "After",
        afterTitle: "Automated system",
        afterPoints: [
          "Repeatable follow-up with fewer mistakes",
          "One dashboard for the numbers that matter",
          "Less admin time back in your week",
        ],
        afterVisualHint:
          "Visual: single pipeline graphic Form → Notify → Booked.",
      },
    ],
  },
  results: {
    eyebrow: "Results",
    title: "Outcomes you can feel in the business.",
    intro:
      "We focus on measurable improvements in time, clarity, and efficiency.",
    outcomes: [
      {
        stat: "10–15+ hours per month",
        label: "Saved through automation",
        text: "Automating repetitive admin work gives owners and teams more time to focus on customers.",
      },
      {
        stat: "Faster decisions",
        label: "With clear dashboards",
        text: "See leads and performance in one place, so planning and decisions happen faster.",
      },
      {
        stat: "Increased efficiency",
        label: "With less manual work",
        text: "Fewer repetitive handoffs and better follow-up flow reduce delay and mistakes.",
      },
      {
        stat: "More enquiries",
        label: "From a stronger digital presence",
        text: "A professional website and clear customer journey help convert visitors into clients.",
      },
    ],
    footnote:
      "Exact results depend on your starting point—we'll spell that out before we build anything.",
  },
  process: {
    eyebrow: "Process",
    title: "Simple process. Clear delivery. No surprises.",
    steps: [
      {
        n: "1",
        title: "Understand your business",
        text: "We learn how you win customers, what slows you down, and what \"fully digital\" should mean for you—not a generic template.",
      },
      {
        n: "2",
        title: "Build your solution",
        text: "We design and build the right mix of website, dashboard, and automation for your goals.",
      },
      {
        n: "3",
        title: "Launch",
        text: "We go live with checks on performance, tracking, and the paths that matter—bookings, calls, and forms.",
      },
      {
        n: "4",
        title: "Support",
        text: "We stay available for tweaks, training, and improvements as you use the system and learn what matters most.",
      },
    ],
    cta: "Book a call",
  },
  trust: {
    eyebrow: "Why trust us",
    title: "Enterprise-level discipline, built for small businesses.",
    body:
      "Arivo Labs is led by a Data Analytics Manager with hands-on experience supporting enterprise clients—including banking and large organizations—so the same rigor around data, reliability, and clear reporting backs every project we take on for smaller businesses.",
    stats: [
      { value: "10–15+", label: "Hours saved monthly (typical range)" },
      { value: "One", label: "Dashboard for leads & sources" },
      { value: "4", label: "Clear steps from kickoff to support" },
    ],
    testimonials: [
      {
        quote:
          "Finally one straightforward setup—we can see enquiries and stop losing follow-ups in the inbox.",
        attribution: "Owner, local services business",
      },
      {
        quote:
          "We are not technical. The diagrams and dashboards made it obvious what we were getting and why it mattered.",
        attribution: "Practice manager, health clinic",
      },
    ],
    logoStripNote:
      "Room for industry or partner logos when you have approvals—until then we keep this clean.",
    dont: [
      "We don't disappear after launch.",
      "We don't overload you with buzzwords.",
      "We don't push tools you don't need.",
    ],
    closing:
      "You get professional execution, clear communication, and a focus on business outcomes.",
  },
  contact: {
    title: "Next step",
    heading: "Ready for your digital upgrade?",
    intro:
      "Let us turn your business into a modern, data-informed, and efficient operation without overcomplicating it.",
    reassurance:
      "Quick conversation. Clear next steps. No obligation.",
  },
  /** Legacy section props — used by optional pages / components (Story, About section, etc.). */
  about: {
    title: about.title,
    paragraphs: about.content,
  },
  projects: {
    title: "Case studies",
    heading: "Delivered work with clear outcomes.",
    intro: work.intro,
  },
  beyondWork: {
    title: "Principles",
    heading: "Partnership, clarity, and follow-through.",
    visual: {
      src: "/images/home/beyond-work-original.png",
      alt: "Arivo Labs — digital partnership for local businesses.",
    },
    paragraphs: [
      "We keep scope honest and communication direct—so you always know what is happening and why.",
      "You get handover your team can use: no black-box setups that only we can change.",
      "Our focus is your business looking credible online, understanding the numbers that matter, and spending less time on repetitive admin.",
    ],
  },
  story: {
    title: "Approach",
    heading: "From discovery to launch—without the fluff.",
    intro: "A typical path when you work with Arivo Labs.",
    milestones: [
      {
        phase: "Discovery",
        title: "We learn how you operate",
        text: "We map how customers find you, what slows staff down, and what success should look like—in plain language.",
        posterImage: "/images/story/work-pipelines.webp",
        posterAlt: "Discovery: understanding the business and customer journey.",
      },
      {
        phase: "Build",
        title: "One connected setup",
        text: "Website, dashboards, and automation are built to work together so you are not juggling unrelated tools.",
        posterImage: "/images/story/path-building.webp",
        posterAlt: "Build phase: integrated website and internal workflows.",
      },
      {
        phase: "Launch",
        title: "Handover and tuning",
        text: "We launch with checks on bookings, calls, and forms—then train your team and adjust as you learn what works.",
        posterImage: "/images/story/today-focus.webp",
        posterAlt: "Launch: support and refinement after go-live.",
      },
    ],
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
  lastUpdated: "April 2026",
  sections: [
    {
      heading: "What we collect",
      content:
        "If you use the contact form, we receive your name, email, company, and message. We use that only to respond. We don't sell it or hand it to third parties for marketing.",
    },
    {
      heading: "How we use it",
      content:
        "To answer your note and follow up if it makes sense for your enquiry.",
    },
    {
      heading: "Cookies",
      content:
        "The site may use basic cookies where needed for it to work. We don't run ad trackers by default.",
    },
    {
      heading: "How long we keep it",
      content:
        "Only as long as needed to handle your message and for normal business records.",
    },
    {
      heading: "Your rights",
      content:
        "You can ask to access, correct, or delete your data. Use the Contact page.",
    },
    {
      heading: "Changes",
      content:
        "We may update this page from time to time. The date at the top is the last edit.",
    },
  ],
};

// --------------------------------------
// NAVIGATION
// --------------------------------------

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

// --------------------------------------
// FOOTER
// --------------------------------------

export const footer = {
  tagline:
    "Digital transformation made simple—websites, dashboards, and automation for growing businesses.",
  companyLine: "Arivo Labs",
  links: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ],
};
