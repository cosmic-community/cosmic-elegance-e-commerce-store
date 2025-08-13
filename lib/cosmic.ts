import { createBucketClient } from '@cosmicjs/sdk'
import { Product, Collection, Review } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

export async function getAllProducts(): Promise<Product[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects as Product[]
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProduct(slug: string): Promise<Product | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return object as Product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getAllCollections(): Promise<Collection[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'collections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects as Collection[]
  } catch (error) {
    console.error('Error fetching collections:', error)
    return []
  }
}

export async function getCollection(slug: string): Promise<Collection | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'collections', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return object as Collection
  } catch (error) {
    console.error('Error fetching collection:', error)
    return null
  }
}

export async function getAllReviews(): Promise<Review[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects as Review[]
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}

export async function getProductReviews(productSlug: string): Promise<Review[]> {
  try {
    // First get the product to get its ID
    const product = await getProduct(productSlug)
    if (!product) return []
    
    const { objects } = await cosmic.objects
      .find({ type: 'reviews', 'metadata.product': product.id })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects as Review[]
  } catch (error) {
    console.error('Error fetching product reviews:', error)
    return []
  }
}

export async function getProductsByCollection(collectionId: string): Promise<Product[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'products', 'metadata.collection': collectionId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects as Product[]
  } catch (error) {
    console.error('Error fetching products by collection:', error)
    return []
  }
}