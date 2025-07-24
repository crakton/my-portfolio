import About from "@/(components)/about";
import Footer from "@/(components)/footer";
import Hero from "@/(components)/hero";
import Navbar from "@/(components)/navbar";
import Projects from "@/(components)/projects";
import Contact from "@/(components)/sections/contact";
import ParticleBackground from "@/(components)/ui/partical-background";


export default function Home() {
async function fetchRepositories() {
  console.log('🚀 Fetching repositories from API route...');
  
  try {
    const response = await fetch('/api/github/repos?sort=updated&per_page=20');
    
    console.log('📥 API Response:');
    console.log('  📊 Status:', response.status);
    console.log('  📈 Status Text:', response.statusText);
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('❌ API Error:', result);
      throw new Error(result.message || 'Failed to fetch repositories');
    }
    
    console.log('✅ Repositories fetched successfully:');
    console.log('  📦 Count:', result.data.length);
    console.log('  🚦 Rate limit remaining:', result.meta.rateLimit.remaining);
    
    return result.data;
  } catch (error) {
    console.error('💥 Error fetching repositories:', error);
    throw error;
  }
}
  return (
    <main className="relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}
