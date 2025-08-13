// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name: string;
    description: string;
    price: number;
    images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    collection?: Collection;
    in_stock?: boolean;
    sku?: string;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    product: Product;
    verified_purchase?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

// Utility types
export type ProductWithReviews = Product & {
  reviews?: Review[];
  averageRating?: number;
  reviewCount?: number;
};