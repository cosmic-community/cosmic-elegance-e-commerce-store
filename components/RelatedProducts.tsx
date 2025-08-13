import { Product } from '@/types'
import ProductGrid from './ProductGrid'

interface RelatedProductsProps {
  products: Product[]
  currentProductId: string
  collectionId?: string
}

export default function RelatedProducts({ 
  products, 
  currentProductId, 
  collectionId 
}: RelatedProductsProps) {
  // Filter out current product and optionally filter by collection
  let relatedProducts = products.filter(product => product.id !== currentProductId)
  
  if (collectionId) {
    relatedProducts = relatedProducts.filter(product =>
      product.metadata.collection?.id === collectionId
    )
  }
  
  // Limit to 4 products
  relatedProducts = relatedProducts.slice(0, 4)
  
  if (!relatedProducts.length) {
    return null
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          You Might Also Like
        </h2>
        
        <ProductGrid products={relatedProducts} />
      </div>
    </section>
  )
}