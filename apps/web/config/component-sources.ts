const sourceLoaders: Record<string, () => Promise<{ default: string }>> = {
  'admit-one-3-d-holographic-ticket': () => import('./component-sources/admit-one-3-d-holographic-ticket'),
  'agent-orchestration-dashboard': () => import('./component-sources/agent-orchestration-dashboard'),
  'auth-section-1': () => import('./component-sources/auth-section-1'),
  'bloom-select': () => import('./component-sources/bloom-select'),
  'cold-flame-drift': () => import('./component-sources/cold-flame-drift'),
  'contribution-skyline': () => import('./component-sources/contribution-skyline'),
  'credit-card-form': () => import('./component-sources/credit-card-form'),
  'dashboard-may-look-minimal': () => import('./component-sources/dashboard-may-look-minimal'),
  'daybreak-editorial': () => import('./component-sources/daybreak-editorial'),
  'digital-journal-album': () => import('./component-sources/digital-journal-album'),
  'digital-signature-modal': () => import('./component-sources/digital-signature-modal'),
  'draggable-widget-grid': () => import('./component-sources/draggable-widget-grid'),
  'flow-ai-canvas': () => import('./component-sources/flow-ai-canvas'),
  'hero-ascii-one': () => import('./component-sources/hero-ascii-one'),
  'ink-orbit-hero': () => import('./component-sources/ink-orbit-hero'),
  'isometric-dashboard': () => import('./component-sources/isometric-dashboard'),
  'kinetic-hover': () => import('./component-sources/kinetic-hover'),
  'live-notification-feed': () => import('./component-sources/live-notification-feed'),
  'particle-wordmark': () => import('./component-sources/particle-wordmark'),
  'post-planner-calendar': () => import('./component-sources/post-planner-calendar'),
  'prisma-hero': () => import('./component-sources/prisma-hero'),
  'proma-content-workspace': () => import('./component-sources/proma-content-workspace'),
  'property-comparison-dashboard': () => import('./component-sources/property-comparison-dashboard'),
  'quadrant-workspace-setup': () => import('./component-sources/quadrant-workspace-setup'),
  'raster-dynamics-wordmark': () => import('./component-sources/raster-dynamics-wordmark'),
  'seo-agent-chat-ui': () => import('./component-sources/seo-agent-chat-ui'),
  'share-file-dialog': () => import('./component-sources/share-file-dialog'),
  'skeuomorphic-notebook': () => import('./component-sources/skeuomorphic-notebook'),
  'skeuomorphic-verify-email': () => import('./component-sources/skeuomorphic-verify-email'),
  'skiper39': () => import('./component-sources/skiper39'),
  'split-signup-modal': () => import('./component-sources/split-signup-modal'),
  'ticket-stub-footer': () => import('./component-sources/ticket-stub-footer'),
  'travel-booking-bento': () => import('./component-sources/travel-booking-bento'),
  'velocity-spring-system': () => import('./component-sources/velocity-spring-system'),
  'voyage-planner': () => import('./component-sources/voyage-planner'),
  'waves-shaders-homlu-ui': () => import('./component-sources/waves-shaders-homlu-ui'),
}

export async function getComponentSource(slug: string) {
  const loadSource = sourceLoaders[slug]
  if (!loadSource) return null
  return (await loadSource()).default
}
