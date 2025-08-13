import { Review } from '@/types'

interface ProductReviewsProps {
  reviews: Review[]
  productId: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductReviews({ reviews, productId }: ProductReviewsProps) {
  const productReviews = reviews.filter(review => 
    review.metadata.product.id === productId
  )

  const averageRating = productReviews.length > 0
    ? productReviews.reduce((sum, review) => 
        sum + parseInt(review.metadata.rating.key), 0
      ) / productReviews.length
    : 0

  if (!productReviews.length) {
    return (
      <div className="card">
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Customer Reviews
          </h3>
          <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Customer Reviews
          </h3>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-sm text-gray-600">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({productReviews.length} review{productReviews.length !== 1 ? 's' : ''})
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {productReviews.map((review) => (
          <div key={review.id} className="card">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">
                      {review.metadata.customer_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {review.metadata.customer_name}
                    </h4>
                    <StarRating rating={parseInt(review.metadata.rating.key)} />
                  </div>
                </div>
                
                {review.metadata.verified_purchase && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    ✓ Verified Purchase
                  </span>
                )}
              </div>
              
              <p className="text-gray-700">
                {review.metadata.review_text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}