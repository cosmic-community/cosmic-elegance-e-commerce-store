import { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        {product.metadata.images && product.metadata.images.length > 0 ? (
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={`${product.metadata.images[0].imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={product.metadata.name}
              className="w-full h-full object-cover"
              width={800}
              height={800}
            />
          </div>
        ) : (
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
        
        {product.metadata.images && product.metadata.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.metadata.images.slice(1, 5).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded">
                <img
                  src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={`${product.metadata.name} view ${index + 2}`}
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.metadata.name}
          </h1>
          
          {product.metadata.collection && (
            <p className="text-primary font-medium">
              {product.metadata.collection.metadata?.name}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">
            ${product.metadata.price}
          </span>
          
          {product.metadata.in_stock ? (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              In Stock
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          )}
        </div>
        
        <div 
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: product.metadata.description }}
        />
        
        {product.metadata.sku && (
          <div className="text-sm text-gray-500">
            SKU: {product.metadata.sku}
          </div>
        )}
        
        <div className="space-y-4">
          <button
            className={`w-full btn-primary ${
              !product.metadata.in_stock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!product.metadata.in_stock}
          >
            {product.metadata.in_stock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          
          <button className="w-full btn-outline">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}