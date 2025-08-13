import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="card group hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {collection.metadata.featured_image ? (
          <img
            src={`${collection.metadata.featured_image.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
            alt={collection.metadata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={600}
            height={450}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {collection.metadata.name}
        </h3>
        
        {collection.metadata.description && (
          <p className="text-gray-600 line-clamp-2">
            {collection.metadata.description}
          </p>
        )}
        
        <div className="mt-4">
          <span className="text-primary font-medium group-hover:underline">
            Shop Collection →
          </span>
        </div>
      </div>
    </Link>
  )
}