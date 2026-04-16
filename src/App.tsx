import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import ErrorBoundary from './components/shared/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import QuotePage from './pages/QuotePage';
import IntakePage from './pages/IntakePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';

// Sub-services
import AIService from './pages/services/AIService';
import AppService from './pages/services/AppService';
import AutomationService from './pages/services/AutomationService';
import DashboardService from './pages/services/DashboardService';
import EcommerceService from './pages/services/EcommerceService';
import WebService from './pages/services/WebService';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/apps" element={<AppService />} />
          <Route path="/services/automation" element={<AutomationService />} />
          <Route path="/services/dashboards" element={<DashboardService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          <Route path="/services/web" element={<WebService />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/intake" element={<IntakePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
