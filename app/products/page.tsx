import { getAllProducts } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import ProductFilters from '@/components/ProductFilters'

export const metadata = {
  title: 'All Products - Cosmic Elegance Store',
  description: 'Browse our complete collection of premium products across all categories.',
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          All Products
        </h1>
        <p className="text-lg text-gray-600">
          Explore our complete collection of {products.length} premium products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <ProductFilters products={products} />
        </aside>
        
        <div className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}