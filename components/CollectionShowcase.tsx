import { Collection } from '@/types'
import CollectionCard from './CollectionCard'

interface CollectionShowcaseProps {
  collections: Collection[]
}

export default function CollectionShowcase({ collections }: CollectionShowcaseProps) {
  if (!collections.length) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collections of premium products designed to enhance your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  )
}