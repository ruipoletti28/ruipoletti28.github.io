import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
