/**
 * Engineering stories — concise production problems and contributions.
 * Verified from Trimbox, FunderPro and Duga content. Do not invent metrics
 * beyond values explicitly provided (e.g. FunderPro 40% API traffic reduction).
 *
 * `homepage: true` prefers which story represents a product on the homepage.
 * Homepage always shows one story per featured case study.
 * Project pages always show every story for that projectSlug.
 *
 * @typedef {Object} EngineeringStory
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {string} context
 * @property {string} problem
 * @property {string[]} contribution
 * @property {string[]} outcome
 * @property {string[]} [technologies]
 * @property {string} project
 * @property {string} [projectSlug]
 * @property {boolean} [homepage]
 */

/** @type {EngineeringStory[]} */
const engineeringStories = [
  {
    id: 'funderpro-api-traffic',
    title: 'Reducing redundant API traffic',
    summary:
      'Reduced redundant API traffic by introducing React Query and reworking how the frontend fetched and cached data.',
    context:
      'The FunderPro application was performing unnecessary API requests, creating redundant network traffic and making data fetching less efficient.',
    problem:
      'Repeated requests increased network usage and made frontend data synchronization harder to maintain.',
    contribution: [
      'Introduced React Query',
      'Reworked data fetching',
      'Improved caching',
      'Reduced unnecessary API calls',
    ],
    outcome: ['Reduced redundant API calls by 40%'],
    technologies: ['React', 'TypeScript', 'React Query', 'API Integration'],
    project: 'FunderPro',
    projectSlug: 'funderpro',
    homepage: true,
  },
  {
    id: 'duplicate-paywalls',
    title: 'Preventing duplicate paywalls',
    summary:
      'Stopped overlapping subscription paywalls when multiple open requests arrived during a blocking app-open dialog.',
    context:
      'The Trimbox app could receive multiple requests to open a subscription paywall while another app-open dialog was blocking the interface.',
    problem:
      'Multiple deferred requests could register independently and all trigger after the blocking dialog was dismissed, causing overlapping or duplicate paywalls.',
    contribution: [
      'Introduced a single pending paywall intent',
      'Coalesced repeated requests into one deferred action',
      'Dispatched the intent once after the blocking dialog closed',
      'Cleared pending state and subscriptions correctly',
      'Added regression tests for the deferred flow',
    ],
    outcome: [
      'Prevented duplicated subscription flows',
      'Improved reliability of app-open behaviour around paywalls',
    ],
    technologies: ['React Native', 'TypeScript', 'RevenueCat', 'Jest'],
    project: 'Trimbox',
    projectSlug: 'trimbox',
    homepage: true,
  },
  {
    id: 'duga-auth-sessions',
    title: 'Auth sessions that revoke immediately',
    summary:
      'Coordinated Auth0 tokens with custom app sessions so revoked access stops across the API and live sockets.',
    context:
      'Duga authenticates with Auth0, then enforces its own hashed app sessions for product access, email verification and onboarding locks.',
    problem:
      'Auth0 tokens alone were not enough — revoked app sessions needed to stop API access and realtime activity immediately.',
    contribution: [
      'Validated Auth0 JWTs on the API via JWKS',
      'Enforced hashed app sessions that can be revoked',
      'Propagated session revocation over Socket.IO',
      'Gated routes until email verification and onboarding complete',
    ],
    outcome: [
      'Revoked sessions stop product access promptly',
      'Auth, onboarding and realtime surfaces stay aligned',
    ],
    technologies: ['Auth0', 'React', 'Express', 'Socket.IO', 'TypeScript'],
    project: 'Duga',
    projectSlug: 'duga',
    homepage: true,
  },
  {
    id: 'funderpro-onboarding-kyc',
    title: 'Improving onboarding and KYC flows',
    summary:
      'Modernized onboarding and KYC experiences so identity verification stayed clear while supporting business requirements.',
    context:
      'User onboarding and identity verification are critical parts of a fintech product.',
    problem:
      'Sign-up, KYC and onboarding needed to improve the overall user journey without weakening business requirements.',
    contribution: [
      'Enhanced sign-up',
      'Improved the KYC flow',
      'Strengthened onboarding across the user journey',
    ],
    outcome: [
      'Made onboarding and KYC flows clearer for users',
      'Kept critical fintech verification aligned with product requirements',
    ],
    technologies: ['React', 'TypeScript', 'Frontend Architecture'],
    project: 'FunderPro',
    projectSlug: 'funderpro',
  },
  {
    id: 'duga-realtime-chat',
    title: 'Real-time chat across a full product surface',
    summary:
      'Built Socket.IO messaging with reactions, typing, mentions and group admin flows inside a full-stack dating and community app.',
    context:
      'Duga needed live conversation — not a static inbox — across one-to-one and group chat while the rest of the product kept moving.',
    problem:
      'Messages, reactions, typing indicators and group admin events had to stay consistent between the React client and Express API.',
    contribution: [
      'Implemented Socket.IO chat on client and server',
      'Added reactions, typing indicators and mentions',
      'Supported media sharing and group-chat admin flows',
      'Kept TanStack React Query in sync with live updates',
    ],
    outcome: [
      'Shipped production realtime chat at duga.chat',
      'Connected live messaging to the broader product surface',
    ],
    technologies: ['Socket.IO', 'React', 'React Query', 'Node.js', 'Express'],
    project: 'Duga',
    projectSlug: 'duga',
  },
  {
    id: 'app-open-dialogs',
    title: 'Coordinating app-open dialogs',
    summary:
      'Sequenced privacy, pricing, survey and subscription UI so startup dialogs could not overlap or race.',
    context:
      'Privacy updates, pricing messages, surveys and subscription UI could all attempt to open during Trimbox app startup.',
    problem:
      'Ungated dialogs could overlap, appear in the wrong order, or continue after authentication state changed.',
    contribution: [
      'Coordinated dialogs through a shared popup flow',
      'Ensured blocking UI appeared sequentially',
      'Guarded asynchronous evaluation against logout or navigation changes',
      'Handled application background and foreground transitions',
      'Added coverage for interruption and race-condition scenarios',
    ],
    outcome: [
      'Created a more predictable app-open experience',
      'Reduced risk of overlapping or orphaned dialogs',
    ],
    technologies: ['React Native', 'TypeScript', 'Jest'],
    project: 'Trimbox',
    projectSlug: 'trimbox',
  },
  {
    id: 'duga-moderated-uploads',
    title: 'Private uploads with moderation built in',
    summary:
      'Shipped S3 photo uploads with Sharp preprocessing and AWS Rekognition moderation for profiles and chat media.',
    context:
      'Duga users share photos for profiles and chat, so uploads had to stay private, performant and moderation-aware.',
    problem:
      'Media could not be treated as public files — processing, storage and streaming needed authorized backend control.',
    contribution: [
      'Processed uploads with Multer and Sharp',
      'Stored media in Amazon S3',
      'Ran AWS Rekognition moderation labels',
      'Streamed files through authorized backend routes',
    ],
    outcome: [
      'Kept photo sharing private and moderation-aware',
      'Connected uploads to profiles, chat and forum flows',
    ],
    technologies: [
      'Amazon S3',
      'AWS Rekognition',
      'Sharp',
      'Express',
      'Node.js',
    ],
    project: 'Duga',
    projectSlug: 'duga',
  },
  {
    id: 'funderpro-product-experience',
    title: 'Modernizing the product experience',
    summary:
      'Improved usability using insights from user interviews, focusing on simpler interfaces and clearer workflows.',
    context: 'The existing UI could be made more intuitive.',
    problem:
      'Important workflows were harder to understand than they needed to be.',
    contribution: [
      'Simplified interfaces',
      'Improved usability with insights from user interviews',
      'Made important workflows easier to understand',
    ],
    outcome: [
      'Improved usability of important product workflows',
      'Brought product thinking into day-to-day UI decisions',
    ],
    technologies: ['React', 'CSS', 'Frontend Architecture'],
    project: 'FunderPro',
    projectSlug: 'funderpro',
  },
  {
    id: 'remote-experiments',
    title: 'Remote-configured product experiments',
    summary:
      'Made paywalls, surveys and eligibility adjustable with Firebase Remote Config without shipping a new app version.',
    context:
      'Trimbox needed to adjust paywalls, surveys and eligibility rules without requiring a new mobile release.',
    problem:
      'Hard-coded experiment behaviour forced app releases for product changes and made safe fallbacks harder to guarantee.',
    contribution: [
      'Implemented Firebase Remote Config flags and defaults',
      'Added eligibility and exposure logic for experiments',
      'Integrated analytics events for experiment visibility',
      'Handled configuration failures with safe fallbacks',
      'Added tests for default and edge-case behaviour',
    ],
    outcome: [
      'Enabled product behaviour to be adjusted remotely',
      'Preserved safe fallback behaviour when configuration failed',
    ],
    technologies: [
      'React Native',
      'Firebase Remote Config',
      'Mixpanel',
      'Jest',
    ],
    project: 'Trimbox',
    projectSlug: 'trimbox',
  },
  {
    id: 'subscription-pricing',
    title: 'Subscription and pricing flows',
    summary:
      'Hardened RevenueCat offerings and pricing presentation so invalid or mismatched values could not drive checkout.',
    context:
      'Trimbox subscription UI depends on RevenueCat offerings and careful presentation of monthly and annual pricing.',
    problem:
      'Pricing presentation and checkout needed validation around currency precision, zero-decimal currencies and mismatched offer values.',
    contribution: [
      'Worked with RevenueCat offerings and paywall variants',
      'Validated currency precision and zero-decimal currency cases',
      'Blocked checkout paths when pricing values were invalid or mismatched',
      'Improved annual and monthly pricing presentation for clearer purchase decisions',
    ],
    outcome: [
      'Reduced risk around pricing presentation',
      'Made invalid subscription values harder to reach checkout',
    ],
    technologies: ['React Native', 'RevenueCat', 'TypeScript', 'Jest'],
    project: 'Trimbox',
    projectSlug: 'trimbox',
  },
  {
    id: 'funderpro-fintech-capabilities',
    title: 'Building new fintech capabilities',
    summary:
      'Expanded a production fintech platform with affiliate and coupon capabilities inside the existing product.',
    context:
      'The platform continued expanding with new business requirements.',
    problem:
      'New fintech capabilities had to land inside a mature production application rather than as isolated features.',
    contribution: [
      'Implemented an affiliate system',
      'Added coupon creation',
      'Shipped related frontend functionality in the production app',
    ],
    outcome: [
      'Extended the mature FunderPro application with new affiliate and coupon capabilities',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'API Integration'],
    project: 'FunderPro',
    projectSlug: 'funderpro',
  },
  {
    id: 'funderpro-engineering-standards',
    title: 'Raising frontend engineering standards',
    summary:
      'Raised frontend engineering standards through recurring technical knowledge sharing on React, TypeScript and React Query.',
    context:
      'As a senior engineer, I helped improve the frontend team’s shared knowledge.',
    problem:
      'Faster feature development depended on stronger shared understanding of React, TypeScript, JavaScript and React Query.',
    contribution: [
      'Hosted weekly knowledge-sharing sessions',
      'Covered React, TypeScript, JavaScript and React Query',
      'Focused on practical patterns that accelerate feature work',
    ],
    outcome: [
      'Helped other frontend engineers become more productive',
      'Accelerated feature development through shared technical standards',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'React Query'],
    project: 'FunderPro',
    projectSlug: 'funderpro',
  },
]

export default engineeringStories
