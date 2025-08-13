import Link from 'next/link'
import { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const firstImage = product.metadata.images?.[0]
        
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="card group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden">
              {firstImage ? (
                <img
                  src={`${firstImage.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                  alt={product.metadata.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={400}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {product.metadata.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  ${product.metadata.price}
                </span>
                
                {product.metadata.in_stock ? (
                  <span className="text-sm text-green-600 font-medium">
                    In Stock
                  </span>
                ) : (
                  <span className="text-sm text-red-600 font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
              
              {product.metadata.collection && (
                <div className="mt-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.metadata.collection.metadata?.name}
                  </span>
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}