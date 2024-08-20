import Profile from './components/Profile';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Header />
      <Profile />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default App
