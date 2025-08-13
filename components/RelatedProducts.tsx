import { Product } from '@/types'
import ProductGrid from './ProductGrid'

interface RelatedProductsProps {
  currentProduct: Product
  collectionId?: string
}

export default function RelatedProducts({ 
  currentProduct, 
  collectionId 
}: RelatedProductsProps) {
  // For now, return null since we don't have access to all products
  // This would need to be implemented with proper data fetching
  return null
}