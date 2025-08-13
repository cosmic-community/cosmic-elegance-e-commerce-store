'use client'

import { useState } from 'react'
import { Collection, Product } from '@/types'

interface ProductFiltersProps {
  products: Product[]
  collections?: Collection[]
  onFilterChange?: (filters: FilterState) => void
}

interface FilterState {
  collection?: string
  priceRange?: {
    min: number
    max: number
  }
  inStock?: boolean
  sortBy?: 'name' | 'price-low' | 'price-high' | 'newest'
}

export default function ProductFilters({ 
  products, 
  collections = [], 
  onFilterChange 
}: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({})
  const [isOpen, setIsOpen] = useState(false)

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange?.(updatedFilters)
  }

  const clearFilters = () => {
    const clearedFilters: FilterState = {}
    setFilters(clearedFilters)
    onFilterChange?.(clearedFilters)
  }

  const hasActiveFilters = Object.keys(filters).some(key => 
    filters[key as keyof FilterState] !== undefined
  )

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full btn-outline flex items-center justify-between"
        >
          <span>Filters</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`space-y-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Filters ({products.length} products)
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-primary hover:text-primary-dark text-sm"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Collection Filter */}
        {collections.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Collection</h4>
            <div className="space-y-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collection"
                  checked={!filters.collection}
                  onChange={() => updateFilters({ collection: undefined })}
                  className="text-primary"
                />
                <span className="text-sm text-gray-700">All Collections</span>
              </label>
              {collections.map((collection) => (
                <label key={collection.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="collection"
                    checked={filters.collection === collection.id}
                    onChange={() => updateFilters({ collection: collection.id })}
                    className="text-primary"
                  />
                  <span className="text-sm text-gray-700">
                    {collection.metadata.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Stock Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Availability</h4>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(e) => updateFilters({ 
                inStock: e.target.checked ? true : undefined 
              })}
              className="text-primary"
            />
            <span className="text-sm text-gray-700">In Stock Only</span>
          </label>
        </div>

        {/* Sort Options */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Sort By</h4>
          <select
            value={filters.sortBy || ''}
            onChange={(e) => updateFilters({ 
              sortBy: e.target.value as FilterState['sortBy'] || undefined 
            })}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Default</option>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  )
}