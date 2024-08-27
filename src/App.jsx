import Profile from './components/Profile';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeComponent from './components/ThemeComponent';


const App = () => {
  return (
    <main className="overflow-x-hidden bg-cyan-50 dark:bg-black tracking-tighter dark:text-gray-200 antialiased">
      <Header />
      <ThemeComponent/>
      <Profile />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </main>
  )
}

export default App
