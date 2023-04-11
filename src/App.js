// import './App.css';
import './index.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro';
import Services from './components/Services';
import Whowe from './components/Whowe'
import Numbers from './components/Numbers';
import Footer from './components/Footer';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Numbers />
      <TrustedBy />
      <Testimonials />
      <Whowe />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
