import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Admissions from './components/Admissions';
import Campus from './components/Campus';
import Research from './components/Research';
import Faculty from './components/Faculty';
import StudentLife from './components/StudentLife';
import Alumni from './components/Alumni';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        {/* 1 */}
        <Hero />
        {/* 2 */}
        <About />
        {/* 3 */}
        <Programs />
        {/* 4 */}
        <Admissions />
        {/* 5 */}
        <Campus />
        {/* 6 */}
        <Research />
        {/* 7 */}
        <Faculty />
        {/* 8 */}
        <StudentLife />
        {/* 9 */}
        <Alumni />
        {/* 10 */}
        <FAQ />
        {/* 11 */}
        <CTA />
        {/* Extra: Contact below CTA but still part of page */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
