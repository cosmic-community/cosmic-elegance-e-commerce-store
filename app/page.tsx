import { getAllProducts, getAllCollections, getAllReviews } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import CollectionShowcase from '@/components/CollectionShowcase'
import FeaturedReviews from '@/components/FeaturedReviews'

export default async function HomePage() {
  const [products, collections, reviews] = await Promise.all([
    getAllProducts(),
    getAllCollections(),
    getAllReviews().catch(() => [])
  ])

  const featuredProducts = products.slice(0, 6)

  return (
    <div className="space-y-16">
      <Hero />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products across fashion, electronics, and home categories.
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <CollectionShowcase collections={collections} />
      
      <FeaturedReviews reviews={reviews} />
    </div>
  )
}