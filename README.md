# Cosmic Elegance E-commerce Store

![App Preview](https://imgix.cosmicjs.com/22c3cf80-77fb-11f0-a051-23c10f41277a-photo-1523275335684-37898b6baf30-1755058093550.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated e-commerce website built with Next.js 15 that showcases your product catalog with modern design principles. Features products organized by collections, customer reviews, and an elegant shopping experience.

## ✨ Features

- 🛍️ **Dynamic Product Catalog** - Browse products with detailed information, images, and pricing
- ⭐ **Customer Review System** - Display verified customer reviews with star ratings
- 📦 **Collection Organization** - Products organized by Fashion, Electronics, and Home & Garden
- 🔍 **Search & Filter** - Find products quickly with advanced filtering options
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, professional design with smooth interactions
- ⚡ **Next.js 15** - Built with the latest Next.js features and App Router

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689c0f47efcf4b47c154dbb1&clone_repository=689c1075efcf4b47c154dbdd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Design a content model for an e-commerce store with products, collections, and customer reviews

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React** - UI component library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the bucket containing your e-commerce data

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cosmic-elegance-store
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   The following environment variables are automatically configured for your Cosmic bucket:
   - `COSMIC_BUCKET_SLUG` - Your bucket identifier
   - `COSMIC_READ_KEY` - For reading content from your bucket
   - `COSMIC_WRITE_KEY` - For write operations (if needed)

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your e-commerce store.

## 📚 Cosmic SDK Examples

### Fetching Products with Collections

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with their collections
const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related collection data

// Get products by collection
const fashionProducts = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.collection': 'collection-id'
  })
  .depth(1)
```

### Getting Product Reviews

```typescript
// Get reviews for a specific product
const productReviews = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1) // Include product data
```

### Collection-based Navigation

```typescript
// Get all collections for navigation
const collections = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## 🎨 Cosmic CMS Integration

This application integrates with your Cosmic bucket's content structure:

### Content Types

- **Products** (`products`) - Your main product catalog with images, prices, descriptions
- **Collections** (`collections`) - Product categories like Fashion, Electronics, Home & Garden  
- **Reviews** (`reviews`) - Customer reviews linked to products with ratings

### Key Features

- **Dynamic Routing** - Product and collection pages generated from Cosmic content
- **Image Optimization** - Cosmic's imgix integration for responsive images
- **Real-time Content** - Changes in Cosmic CMS appear immediately on the site
- **Type Safety** - Full TypeScript integration with your content model

## 🚀 Deployment Options

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Environment variables are automatically configured
3. Deploy with zero configuration

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Environment variables are automatically configured

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js applications.

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com/docs) headless CMS
<!-- README_END -->