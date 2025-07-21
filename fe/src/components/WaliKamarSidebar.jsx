// src/components/WaliKamarSidebar.jsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiClipboard, FiBriefcase } from 'react-icons/fi';
import clsx from 'clsx';

const navLinks = [
  { section: 'Kegiatan',
    items: [
      { name: 'Tahfidz', href: '/wali-kamar/tahfidz', icon: FiClipboard },
      { name: 'Hadist', href: '/wali-kamar/hadist', icon: FiClipboard },
      { name: 'Bahasa Arab', href: '/wali-kamar/bahasa-arab', icon: FiBriefcase },
    ]
  }
];

// 1. Terima 'props' bernama 'onMenuSelect'
export default function WaliKamarSidebar({ onMenuSelect }) {
  const pathname = usePathname();

  // 2. Buat fungsi yang akan dipanggil saat menu diklik
  const handleMenuClick = () => {
    // Cek apakah fungsi onMenuSelect ada (hanya ada di mode mobile)
    if (onMenuSelect) {
      onMenuSelect();
    }
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-md flex-col md:relative md:flex">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold text-indigo-600">Dabang</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul>
          {/* 3. Tambahkan onClick ke setiap elemen <li> yang berisi Link */}
          <li onClick={handleMenuClick}>
            <Link href="/wali-kamar">
              <span className={clsx(
                'flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200',
                {
                  'bg-indigo-100 text-indigo-600 font-semibold': pathname === '/wali-kamar',
                  'hover:bg-gray-100': pathname !== '/wali-kamar'
                }
              )}>
                <FiHome className="h-5 w-5 mr-3" />
                Dashboard
              </span>
            </Link>
          </li>
          
          {navLinks.map((section) => (
            <li key={section.section} className="mt-6">
              <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{section.section}</h2>
              <ul className="mt-2 space-y-1">
                {section.items.map((link) => (
                  <li key={link.name} onClick={handleMenuClick}>
                    <Link href={link.href}>
                      <span className={clsx(
                        'flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200',
                        {
                          'bg-indigo-100 text-indigo-600 font-semibold': pathname.startsWith(link.href),
                          'hover:bg-gray-100': !pathname.startsWith(link.href)
                        }
                      )}>
                        <link.icon className="h-5 w-5 mr-3" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}