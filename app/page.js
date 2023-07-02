import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-grow bg-dotted">
        {/* Main content here */}
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  )
}
