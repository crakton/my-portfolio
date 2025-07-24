import About from "@/(components)/about";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
}
