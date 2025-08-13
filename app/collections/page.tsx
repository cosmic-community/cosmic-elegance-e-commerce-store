import { getAllCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'

export const metadata = {
  title: 'Collections - Cosmic Elegance Store',
  description: 'Explore our curated collections: Fashion, Electronics, and Home & Garden products.',
}

export default async function CollectionsPage() {
  const collections = await getAllCollections()

  return (
    <div className="container-custom py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Our Collections
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collections, each featuring premium products selected for quality and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  )
}