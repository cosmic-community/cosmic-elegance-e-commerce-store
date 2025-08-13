import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Premium Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Curated collections of fashion, electronics, and home essentials with authentic customer reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn-primary text-lg px-8 py-3 rounded-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}