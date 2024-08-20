import Profile from './components/Profile';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Header />
      <Profile />
      <AboutMe />
      <Portfolio />
      {/* <Contact /> */}
      <Resume />
      <Footer />
    </main>
  )
}

export default App
