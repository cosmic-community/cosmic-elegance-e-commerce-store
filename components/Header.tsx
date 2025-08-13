import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Cosmic Elegance
            </span>
          </Link>
          
          <Navigation />
        </div>
      </div>
    </header>
  )
}