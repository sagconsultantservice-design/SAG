import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

// Layout
import PageLayout from './components/layout/PageLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Service Pages
import ROCFilings from './pages/services/ROCFilings';
import CompanyIncorporation from './pages/services/CompanyIncorporation';
import IncomeTax from './pages/services/IncomeTax';
import GST from './pages/services/GST';
import TDS from './pages/services/TDS';
import MSME from './pages/services/MSME';
import DSC from './pages/services/DSC';
import Trademark from './pages/services/Trademark';
import VisaTurnover from './pages/services/VisaTurnover';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/roc-filings" element={<ROCFilings />} />
          <Route path="/services/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/services/income-tax" element={<IncomeTax />} />
          <Route path="/services/gst" element={<GST />} />
          <Route path="/services/tds" element={<TDS />} />
          <Route path="/services/msme" element={<MSME />} />
          <Route path="/services/dsc" element={<DSC />} />
          <Route path="/services/trademark" element={<Trademark />} />
          <Route path="/services/visa-turnover" element={<VisaTurnover />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App