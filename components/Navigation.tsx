'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/collections', label: 'Collections' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.href
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-gray-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}