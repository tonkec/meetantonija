/**
 * Technologies grouped by how they are used in product work.
 * Only includes stack verified in projects data or supplied experience.
 * Omitted until verified: React Navigation, React Native Testing Library.
 */

const technologyGroups = [
  {
    id: 'mobile',
    title: 'Mobile product development',
    items: ['React Native', 'Expo', 'iOS', 'Android', 'EAS'],
  },
  {
    id: 'frontend',
    title: 'Frontend engineering',
    items: [
      'React',
      'TypeScript',
      'React Query',
      'state management',
      'component architecture',
    ],
  },
  {
    id: 'product-systems',
    title: 'Product systems',
    items: [
      'Firebase Remote Config',
      'Mixpanel',
      'RevenueCat',
      'analytics',
      'experimentation',
    ],
  },
  {
    id: 'testing-delivery',
    title: 'Testing and delivery',
    items: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Maestro',
      'Expo EAS Build',
      'Jenkins',
    ],
  },
]

export default technologyGroups
