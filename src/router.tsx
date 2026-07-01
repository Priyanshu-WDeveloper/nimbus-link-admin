import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './routes/__root';
import { RequireAuth } from './components/require-auth';
import DashboardPage from './routes/index';
import ContactUsPage from './routes/contact-us';
import MediaLibraryPage from './routes/media-library';
import NewConnectionPage from './routes/new-connection';
import SettingsPage from './routes/settings';
import UsersPage from './routes/users';
import WebsiteConfigPage from './routes/website-configuration';
import LoginPage from './routes/login';
import SignupPage from './routes/signup';
import LogoutPage from './routes/logout';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/logout', element: <LogoutPage /> },
  {
    path: '/',
    element: <RequireAuth><RootLayout /></RequireAuth>,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'contact-us', element: <ContactUsPage /> },
      { path: 'media-library', element: <MediaLibraryPage /> },
      { path: 'new-connection', element: <NewConnectionPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'website-configuration', element: <WebsiteConfigPage /> },
    ],
  },
]);
