import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './components/Login';
import { AdminMessages } from './components/AdminMessages';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import SideProjects from './components/sections/SideProjects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router basename="/personalportfolio">
      <AuthProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200 font-sans">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Skills />
                    <Services />
                    <Experience />
                    <Projects />
                    <SideProjects />
                    <Achievements />
                    <Testimonials />
                    <Blog />
                    <Education />
                    <Contact />
                  </>
                } />
                <Route path="/admin/login" element={<Login />} />
                <Route
                  path="/admin/messages"
                  element={
                    <ProtectedRoute>
                      <AdminMessages />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
