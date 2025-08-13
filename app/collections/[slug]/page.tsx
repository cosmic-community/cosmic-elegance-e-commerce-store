// app/collections/[slug]/page.tsx
import { getCollection, getProductsByCollection } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  
  const [collection, products] = await Promise.all([
    getCollection(slug),
    getProductsByCollection(slug).catch(() => [])
  ])

  if (!collection) {
    notFound()
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-12">
        {collection.metadata.featured_image && (
          <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
            <img
              src={`${collection.metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={collection.metadata.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {collection.metadata.name}
                </h1>
                {collection.metadata.description && (
                  <p className="text-xl md:text-2xl max-w-2xl">
                    {collection.metadata.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!collection.metadata.featured_image && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {collection.metadata.name}
            </h1>
            {collection.metadata.description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {collection.metadata.description}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          {products.length} {products.length === 1 ? 'product' : 'products'} in this collection
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = await getCollection(slug)
  
  if (!collection) {
    return {
      title: 'Collection Not Found'
    }
  }

  return {
    title: `${collection.metadata.name} - Cosmic Elegance Store`,
    description: collection.metadata.description || `Explore our ${collection.metadata.name} collection`,
  }
}