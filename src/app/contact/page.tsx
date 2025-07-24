import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import Contact from "@/(components)/sections/contact";


export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}