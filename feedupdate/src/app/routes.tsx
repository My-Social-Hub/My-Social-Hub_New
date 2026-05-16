import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { StubPage } from './components/StubPage';
import { WelcomePage } from './pages/WelcomePage';
import { FeedPage } from './pages/FeedPage';

/**
 * Route map mirrors the handoff README (Surfaces & Routes table).
 * Pages are stubs for now — each will be replaced with its hi-fi screen
 * implementation per design_handoff_mysocialhub/screens/.
 */
export const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },

  // Auth
  { path: '/auth/login', element: <StubPage title="Login" /> },
  { path: '/auth/register', element: <StubPage title="Sign up" /> },
  { path: '/auth/forgot', element: <StubPage title="Forgot password" /> },
  { path: '/auth/verify', element: <StubPage title="Verify email" /> },

  // Onboarding
  { path: '/onboarding/*', element: <StubPage title="Onboarding" /> },

  // App shell + tabs
  {
    path: '/app',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/app/feed" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'search', element: <StubPage title="Search" description="Tabbed results across People / Hubs / Posts / Services / Listings." /> },
      { path: 'discover', element: <StubPage title="Discover" /> },
      { path: 'my-communities', element: <StubPage title="My Hubs" /> },
      { path: 'tradehub', element: <StubPage title="TradeHub" description="Peer-to-peer marketplace with escrow, offers and disputes." /> },
      { path: 'services', element: <StubPage title="Services" description="Bookable professional services marketplace." /> },
      { path: 'hub-live', element: <StubPage title="Hub Live" description="Live streams, voice rooms and paid trainings." /> },
      { path: 'messages', element: <StubPage title="Messages" /> },
      { path: 'messages/:id', element: <StubPage title="Conversation" /> },
      { path: 'notifications', element: <StubPage title="Notifications" /> },
      { path: 'premium', element: <StubPage title="Premium" description="Pro / Pro+ / Business plans with monthly &amp; yearly toggle." /> },
      { path: 'premium/checkout', element: <StubPage title="Premium checkout" /> },
      { path: 'professional-hub', element: <StubPage title="Professional Hub" /> },
      { path: 'professional-hub/verify', element: <StubPage title="Verify professional identity" /> },
      { path: 'metrics', element: <StubPage title="Metrics" /> },
      { path: 'studio/post', element: <StubPage title="Create Post" /> },
      { path: 'studio/clips', element: <StubPage title="Hub Clips" description="Vertical short-form video — Premium-gated." /> },
      { path: 'studio/analytics', element: <StubPage title="Studio Analytics" /> },
      { path: 'settings', element: <StubPage title="Settings" /> },
      { path: 'settings/*', element: <StubPage title="Settings" /> },
    ],
  },

  // Community
  { path: '/community/:id', element: <StubPage title="Community" /> },
  { path: '/community/:id/admin', element: <StubPage title="Hub admin" /> },
  { path: '/community/:id/post/:postId', element: <StubPage title="Post detail" /> },

  // Profile
  { path: '/profile/me', element: <StubPage title="My Profile" /> },
  { path: '/profile/:username', element: <StubPage title="Profile" /> },

  // TradeHub
  { path: '/listing/:id', element: <StubPage title="Listing detail" /> },
  { path: '/checkout', element: <StubPage title="Checkout" /> },
  { path: '/orders', element: <StubPage title="My orders" /> },
  { path: '/orders/:id', element: <StubPage title="Order detail" /> },
  { path: '/seller/:id', element: <StubPage title="Seller shop" /> },

  // Services
  { path: '/services/:id', element: <StubPage title="Service detail" /> },
  { path: '/services/category/:slug', element: <StubPage title="Service category" /> },
  { path: '/services/order', element: <StubPage title="Service order" /> },

  // Hub Live detail
  { path: '/live/:streamId', element: <StubPage title="Live stream" /> },
  { path: '/voice/:roomId', element: <StubPage title="Voice room" /> },
  { path: '/training/:id', element: <StubPage title="Paid training" /> },

  // Admin
  { path: '/admin', element: <StubPage title="Admin dashboard" /> },
  { path: '/admin/users', element: <StubPage title="Admin · Users" /> },
  { path: '/admin/metrics', element: <StubPage title="Admin · Metrics" /> },

  // Legal
  { path: '/terms', element: <StubPage title="Terms of Service" /> },
  { path: '/privacy', element: <StubPage title="Privacy Policy" /> },

  // 404
  { path: '*', element: <StubPage title="Not found" description="That page does not exist yet." /> },
]);
