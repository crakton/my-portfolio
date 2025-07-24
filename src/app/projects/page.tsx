import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import Projects from "@/(components)/projects";


export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}