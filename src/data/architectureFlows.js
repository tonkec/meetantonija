/**
 * Lightweight architecture / flow diagrams for case studies.
 * Labels only — no confidential infrastructure detail.
 *
 * @typedef {Object} ArchitectureStep
 * @property {string} id
 * @property {string} label
 * @property {string} [description]
 */

/**
 * @typedef {Object} ArchitectureFlow
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {ArchitectureStep[]} steps
 */

/** @type {Record<string, ArchitectureFlow>} */
const architectureFlows = {
  trimbox: {
    id: 'trimbox-app-open',
    title: 'Trimbox app-open flow',
    summary:
      'Blocking UI is coordinated and shown sequentially so privacy, subscription and survey surfaces cannot overlap.',
    steps: [
      {
        id: 'trigger',
        label: 'App-open trigger',
        description: 'Startup or foreground event evaluates queued UI.',
      },
      {
        id: 'coordinator',
        label: 'Popup coordinator',
        description: 'Shared flow decides order and gating.',
      },
      {
        id: 'eligibility',
        label: 'Eligibility evaluation',
        description: 'Checks whether each queued surface should show.',
      },
      {
        id: 'privacy',
        label: 'Privacy update',
        description: 'Blocking notice when required.',
      },
      {
        id: 'subscription',
        label: 'Subscription / paywall',
        description: 'Deferred intents coalesce into one open.',
      },
      {
        id: 'survey',
        label: 'Survey or other UI',
        description: 'Remaining queued surfaces after blockers clear.',
      },
    ],
  },
  funderpro: {
    id: 'funderpro-data-flow',
    title: 'FunderPro data flow',
    summary:
      'React Query sits between the UI and API so caching and request deduplication cut redundant traffic.',
    steps: [
      {
        id: 'ui',
        label: 'React UI',
        description: 'Screens request data through hooks.',
      },
      {
        id: 'query',
        label: 'React Query',
        description: 'Cache, dedupe and synchronize server state.',
      },
      {
        id: 'api',
        label: 'API',
        description: 'Backend endpoints for product data.',
      },
      {
        id: 'cache',
        label: 'Caching & dedupe',
        description: 'Repeated requests reuse fresh results.',
      },
    ],
  },
  duga: {
    id: 'duga-architecture',
    title: 'Duga system shape',
    summary:
      'A React client, Auth0, Express API, Socket.IO and PostgreSQL form the shipped product surface.',
    steps: [
      {
        id: 'frontend',
        label: 'React frontend',
        description: 'Vite + TypeScript product UI.',
      },
      {
        id: 'auth',
        label: 'Auth0',
        description: 'Login with app-session enforcement.',
      },
      {
        id: 'api',
        label: 'Express API',
        description: 'REST plus authorized media streaming.',
      },
      {
        id: 'realtime',
        label: 'Socket.IO',
        description: 'Chat, reactions and presence.',
      },
      {
        id: 'db',
        label: 'PostgreSQL',
        description: 'Relational product data via Sequelize.',
      },
    ],
  },
}

export default architectureFlows
