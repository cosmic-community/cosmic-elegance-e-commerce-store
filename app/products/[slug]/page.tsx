// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductDetails from '@/components/ProductDetails'
import ProductReviews from '@/components/ProductReviews'
import RelatedProducts from '@/components/RelatedProducts'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  
  const [product, reviews] = await Promise.all([
    getProduct(slug),
    getProductReviews(slug).catch(() => [])
  ])

  if (!product) {
    notFound()
  }

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + parseInt(review.metadata.rating.key), 0) / reviews.length
    : 0

  const productWithReviews = {
    ...product,
    reviews,
    averageRating,
    reviewCount: reviews.length
  }

  return (
    <div className="container-custom py-8">
      <ProductDetails product={productWithReviews} />
      
      <div className="mt-16">
        <ProductReviews reviews={reviews} averageRating={averageRating} />
      </div>
      
      <div className="mt-16">
        <RelatedProducts 
          currentProduct={product}
          collectionId={product.metadata.collection?.id}
        />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  return {
    title: `${product.metadata.name} - Cosmic Elegance Store`,
    description: product.metadata.description?.replace(/<[^>]*>/g, '').slice(0, 160),
  }
}