import { rootImageUrl } from 'rootImageUrl'

/**
 * Featured case studies for the homepage (quality over quantity).
 * Optional fields may be omitted — CaseStudyCard must render safely without them.
 *
 * PLACEHOLDERS (do not invent facts in UI):
 * - Trimbox: product shots under public/projects/trimbox/ (paywall, privacy-update, privacy-onboarding).
 * - Duga: product shots under public/projects/duga/ (dashboard, settings, report, illustration).
 * - Measurable outcomes: qualitative only unless metrics are approved.
 */

/**
 * @typedef {Object} CaseStudyArchitecture
 * @property {string[]} [frontend]
 * @property {string[]} [backend]
 * @property {string[]} [infrastructure]
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} role
 * @property {string} [projectType]
 * @property {string} [company]
 * @property {string} [period]
 * @property {string} context
 * @property {string[]} responsibilities
 * @property {string[]} challenges
 * @property {string[]} solution
 * @property {string[]} outcomes
 * @property {string[]} technologies
 * @property {string[]} [storyIds]
 * @property {string[]} [keyFeatures]
 * @property {CaseStudyArchitecture} [architecture]
 * @property {string} [learned]
 * @property {string} [image]
 * @property {string|ProjectScreenshot}[] [photos]
 * @property {string} [liveUrl]
 * @property {string} [repositoryUrl]
 * @property {{label: string, href: string}[]} [repositoryLinks]
 * @property {boolean} [confidential]
 * @property {boolean} [featured]
 * @property {boolean} [personal]
 */

/**
 * @typedef {Object} ProjectScreenshot
 * @property {string} src
 * @property {string} alt
 * @property {string} [caption]
 * @property {number} [width]
 * @property {number} [height]
 */

/** @type {CaseStudy[]} */
const caseStudies = [
  {
    slug: 'trimbox',
    title: 'Trimbox',
    projectType: 'Professional product work',
    company: 'Mode Mobile',
    period: 'March 2026 – Present',
    summary:
      'Subscription inbox product — production React Native work on paywalls, app-open coordination, experiments and pricing.',
    role: 'Senior Frontend & Full-Stack Engineer',
    workType: 'Professional product work',
    emphasis: 'primary',
    featuredBadge: 'Featured',
    context:
      'Trimbox is Mode Mobile’s inbox-cleaning product. I contribute to production React Native product features and supporting infrastructure — subscriptions, analytics, remote configuration and release workflows — as part of a larger team. I do not claim sole ownership of the product architecture.',
    responsibilities: [
      'Implementing subscription and experiment flows in a production React Native application',
      'Coordinating app-open UI to prevent overlapping dialogs and paywalls',
      'Adding analytics and Remote Config behaviour with safe fallbacks',
      'Expanding automated coverage for critical purchase flows',
      'Supporting iOS and Android release-related work with Expo and EAS',
    ],
    challenges: [
      'Preventing duplicate paywalls when multiple open requests arrived during a blocking app-open dialog',
      'Sequencing privacy, pricing, survey and subscription UI so startup dialogs could not overlap or race',
      'Adjusting paywalls, surveys and eligibility remotely without requiring a new app release',
      'Validating RevenueCat offerings and pricing presentation so invalid values could not drive checkout',
    ],
    solution: [
      'Introduced a single pending paywall intent that coalesces repeated requests and dispatches once after blocking UI closes',
      'Coordinated dialogs through a shared popup flow with auth/navigation guards and background/foreground handling',
      'Implemented Firebase Remote Config flags, eligibility/exposure logic, analytics and safe configuration fallbacks',
      'Hardened offerings and pricing presentation, including currency precision and checkout blocking for invalid values',
      'Added regression coverage for deferred paywalls, race conditions and experiment edge cases',
    ],
    outcomes: [
      'Improved reliability of subscription and app-open behaviour',
      'Prevented overlapping user flows around paywalls and startup dialogs',
      'Enabled safer remote configuration of product experiments',
      'Increased test coverage for critical subscription behaviour',
      'Reduced risk around pricing presentation',
    ],
    highlight:
      'Coordinated paywalls and app-open UI so subscription and startup surfaces could not overlap or race.',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'RevenueCat',
      'Firebase Remote Config',
      'Jest',
    ],
    storyIds: [
      'duplicate-paywalls',
      'app-open-dialogs',
      'remote-experiments',
      'subscription-pricing',
    ],
    image: '/projects/trimbox/paywall.jpg',
    photos: [
      {
        src: '/projects/trimbox/paywall.jpg',
        alt: 'Trimbox subscription paywall showing annual and monthly plans with a continue CTA',
        caption:
          'Subscription and pricing presentation with annual and monthly offerings',
        width: 503,
        height: 1024,
      },
      {
        src: '/projects/trimbox/privacy-update.jpg',
        alt: 'Trimbox mobile screen showing inbox keep and unsubscribe actions with a Privacy Policy Updated dialog in front',
        caption:
          'App-open privacy notice coordinated over the inbox product surface',
        width: 488,
        height: 1024,
      },
      {
        src: '/projects/trimbox/privacy-onboarding.jpg',
        alt: 'Trimbox onboarding screen explaining that emails stay private, with a Next CTA',
        caption: 'Privacy messaging during onboarding',
        width: 484,
        height: 1024,
      },
    ],
    liveUrl: 'https://www.trimbox.io/',
    confidential: true,
    featured: true,
  },
  {
    slug: 'duga',
    title: 'Duga',
    projectType: 'Independent product',
    company: 'Personal project',
    period: '2024 – Present',
    personal: true,
    workType: 'Independent product',
    emphasis: 'secondary',
    summary:
      'Independent full-stack dating and community product — Auth0, realtime chat, moderated uploads and forum.',
    role: 'Creator & lead full-stack engineer',
    context:
      'Duga exists as a safer queer space for meeting and conversation in the Balkan region. The product needed more than a thin UI demo: authentication, profiles, moderation-aware uploads, real-time messaging and community discussion had to work together as one application.',
    responsibilities: [
      'Designed and built the Vite/React/TypeScript frontend and Express/PostgreSQL backend as the primary maintainer',
      'Implemented Auth0 authentication with app-session enforcement, email verification and onboarding locks',
      'Built real-time messaging with Socket.IO, including reactions, typing indicators and group-chat admin flows',
      'Shipped photo uploads to Amazon S3 with Sharp preprocessing and AWS Rekognition moderation',
      'Delivered a community forum with questions, answers, votes, mentions and image support',
      'Deployed the frontend on Netlify and the API on Heroku, including staging and production environments',
    ],
    keyFeatures: [
      'Auth0 login, email verification and gated onboarding',
      'User profiles, browsing and photo management (up to five photos)',
      'Real-time chat with emojis, media, mentions, reactions and group admin tools',
      'Photo comments and likes with moderation-aware uploads',
      'Community forum with categories, Q&A, votes, replies and reactions',
      'In-app notifications and user reporting via EmailJS',
      'Responsive UI for desktop and mobile',
      'Legal pages for privacy, cookies and terms',
    ],
    solution: [
      'Split the product into a TypeScript React client and an Express API with Sequelize models and migrations',
      'Used TanStack React Query for server state and Socket.IO for live chat, comments and presence',
      'Secured API access with Auth0 JWT validation and hashed app sessions that can be revoked over sockets',
      'Stored uploads in S3 and streamed them through authorized backend routes',
      'Encrypted sensitive message and profile text at rest with an application encryption key',
    ],
    challenges: [
      'Coordinating Auth0 tokens with custom app sessions so revoked sessions stop immediately',
      'Building a real-time Socket.IO surface for messages, reactions, typing, likes and group admin events',
      'Keeping photo uploads private, performant and moderation-aware with S3, Sharp and Rekognition',
      'Designing a relational schema and REST API that spans users, chats, uploads, notifications and forum content',
      'Shipping and maintaining staging vs production across Netlify and Heroku',
    ],
    architecture: {
      frontend: [
        'React 18 + TypeScript on Vite',
        'React Router with auth, post-login and onboarding guards',
        'TanStack React Query for API state',
        'Auth0 React SDK and axios API client',
        'Socket.IO client for live updates',
        'React Hook Form + Zod for forms',
        'Tailwind CSS and Framer Motion',
      ],
      backend: [
        'Node.js + Express REST API',
        'PostgreSQL with Sequelize ORM and migrations',
        'Socket.IO for bi-directional realtime events',
        'Auth0 JWT validation via JWKS',
        'Multer + Sharp for upload processing',
        'Amazon S3 for media storage and authorized streaming',
        'AWS Rekognition for image moderation labels',
      ],
      infrastructure: [
        'Netlify for the frontend (including production host wiring)',
        'Heroku for staging and production API apps',
        'Sentry on the frontend for error monitoring',
        'Swagger docs on the backend',
      ],
    },
    outcomes: [
      'Shipped a production full-stack product at duga.chat',
      'Connected auth, realtime chat, moderated uploads and forum into one maintainable system',
      'Established staging and production deployment paths for frontend and API',
    ],
    highlight:
      'Shipped Auth0, realtime chat, moderated uploads and a forum as one full-stack product.',
    learned:
      'Building Duga end to end taught me how frontend product flows and backend boundaries have to stay aligned — especially around auth sessions, realtime events and private media access. Owning both sides made trade-offs concrete: schema design, Socket.IO event contracts, moderation pipelines and deployment environments all show up as user-facing reliability.',
    technologies: [
      'React',
      'TypeScript',
      'React Query',
      'Auth0',
      'Socket.IO',
      'Express',
      'PostgreSQL',
    ],
    storyIds: [
      'duga-auth-sessions',
      'duga-realtime-chat',
      'duga-moderated-uploads',
    ],
    image: '/projects/duga/illustration.png',
    photos: [
      '/projects/duga/dashboard.png',
      '/projects/duga/settings.png',
      '/projects/duga/report.png',
      '/projects/duga/illustration.png',
    ],
    liveUrl: 'https://duga.chat/',
    repositoryUrl: 'https://github.com/tonkec/duga_frontend_v2',
    repositoryLinks: [
      {
        label: 'Frontend repository',
        href: 'https://github.com/tonkec/duga_frontend_v2',
      },
      {
        label: 'Backend repository',
        href: 'https://github.com/tonkec/duga_backend',
      },
    ],
    featured: true,
  },
  {
    slug: 'funderpro',
    title: 'FunderPro',
    projectType: 'Professional product work',
    company: 'Mochalabs',
    period: 'September 2023 – March 2026',
    workType: 'Professional product work',
    emphasis: 'secondary',
    summary:
      'Trading-focused fintech product — React Query, onboarding, KYC, UX improvements and knowledge sharing.',
    role: 'Senior React Developer',
    context:
      'FunderPro is a trading-focused fintech product supporting onboarding, KYC, affiliate, and promotional flows for a proprietary trading company. The work focused on improving core user flows, frontend architecture, application performance and developer productivity while continuously shipping new product features — without claiming sole ownership of the platform.',
    responsibilities: [
      'Reduced redundant API traffic by introducing React Query and reworking data fetching',
      'Improved enhanced sign-up and KYC experiences',
      'Improved usability using insights from user interviews',
      'Expanded production affiliate and coupon capabilities',
      'Raised frontend engineering standards through recurring technical knowledge sharing',
    ],
    challenges: [
      'Unnecessary API requests created redundant network traffic and made data synchronization harder to maintain',
      'Onboarding and identity verification needed a clearer journey while supporting business requirements',
      'Existing UI patterns made important workflows harder to understand',
      'A mature production codebase needed new capabilities without isolating them as one-off features',
      'Frontend engineers needed shared React, TypeScript and React Query knowledge to ship faster',
    ],
    solution: [
      'Introduced React Query, reworked data fetching and improved caching to cut unnecessary API calls',
      'Enhanced sign-up, KYC and onboarding flows as part of the critical user journey',
      'Simplified interfaces and clarified workflows using insights from user interviews',
      'Extended the production application with an affiliate system, coupon creation and related frontend functionality',
      'Hosted weekly knowledge-sharing sessions on React, TypeScript, JavaScript and React Query',
    ],
    outcomes: [
      'Reduced redundant API calls by 40%',
      'Made onboarding and KYC flows clearer for users',
      'Improved usability of important product workflows',
      'Expanded the platform with affiliate and coupon capabilities',
      'Helped frontend engineers become more productive through recurring knowledge sharing',
    ],
    highlight:
      'Cut redundant API traffic by 40% with React Query while improving onboarding, KYC and mature product flows.',
    technologies: ['React', 'TypeScript', 'React Query', 'JavaScript'],
    photos: [
      rootImageUrl + 'funderpro/1.png',
      rootImageUrl + 'funderpro/2.png',
      rootImageUrl + 'funderpro/3.png',
    ],
    storyIds: [
      'funderpro-api-traffic',
      'funderpro-onboarding-kyc',
      'funderpro-product-experience',
      'funderpro-fintech-capabilities',
      'funderpro-engineering-standards',
    ],
    image: rootImageUrl + 'funderpro/1.png',
    liveUrl: 'https://funderpro.com/',
    featured: true,
  },
  {
    slug: 'casumo',
    title: 'Casumo',
    projectType: 'Professional product work',
    company: 'Casumo',
    period: '2022 – 2023',
    summary:
      'Led Knockout-to-React migration work and player-facing feature delivery on a large online gaming platform.',
    role: 'Senior React Developer',
    context:
      'Casumo is an online casino platform. A major challenge was migrating a large Knockout.js codebase to React while keeping the product usable.',
    responsibilities: [
      'Led migration work from Knockout.js to React',
      'Collaborated with design, backend and QA on player-facing features',
      'Contributed GraphQL-backed feature development',
      'Integrated external services including Contentful and Keycloak',
    ],
    challenges: [
      'Migrating a large existing codebase without compromising functionality',
      'Working effectively in a large remote engineering organisation',
    ],
    solution: [
      'Component-based React architecture with TypeScript',
      'Incremental migration strategy alongside ongoing feature delivery',
      'CMS and auth integrations via Contentful and Keycloak',
    ],
    outcomes: [
      'Improved maintainability by moving core UI toward React',
      'Supported continued delivery of platform features during migration',
    ],
    technologies: ['React', 'TypeScript', 'Contentful', 'Keycloak', 'GraphQL'],
    image: rootImageUrl + 'casumo/cubes.jpg',
    liveUrl: 'https://casumo.com/',
    featured: false,
  },
  {
    slug: 'revuto',
    title: 'Revuto',
    company: 'AsyncLabs',
    period: '2020 – 2021',
    projectType: 'Professional product work',
    summary:
      'Subscription management web product — sole frontend developer ownership.',
    role: 'Mid React Developer',
    context:
      'Revuto helps users manage subscriptions. As the sole developer, ownership spanned architecture, API integration and day-to-day product delivery.',
    responsibilities: [
      'Owned platform development end to end',
      'Integrated APIs with Axios, interceptors and React Context',
      'Built subscription management and account flows',
      'Improved data visualisation for subscription insights',
    ],
    challenges: [
      'Operating as the sole developer with full ownership of stability and architecture',
    ],
    solution: [
      'Stable React architecture with Context-based state',
      'Careful API integration and error handling',
    ],
    outcomes: [
      'Delivered a maintainable subscription-management frontend as sole developer',
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'TypeScript', 'Axios'],
    image: rootImageUrl + 'revuto/graph.jpg',
    liveUrl: 'https://revuto.com/',
    featured: false,
  },
]

/** Featured order: Trimbox → FunderPro → Duga */
export const featuredCaseStudies = ['trimbox', 'funderpro', 'duga']
  .map((slug) => caseStudies.find((study) => study.slug === slug))
  .filter(Boolean)

export default caseStudies
