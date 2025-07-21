// src/components/Sidebar.jsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiClipboard, FiBriefcase, FiUser, FiUsers } from 'react-icons/fi';
import clsx from 'clsx';

const navLinks = [
  { section: 'Kegiatan',
    items: [
      { name: 'Tahfidz', href: '/admin/tahfidz', icon: FiClipboard },
      { name: 'Hadist', href: '/admin/hadist', icon: FiClipboard },
      { name: 'Bahasa Arab', href: '/admin/bahasa-arab', icon: FiBriefcase },
    ]
  },
  { section: 'Manajemen Data',
    items: [
      { name: 'Direktur', href: '/admin/direktur', icon: FiUser },
      { name: 'Pengurus', href: '/admin/pengurus', icon: FiUsers },
      { name: 'Santri', href: '/admin/santri', icon: FiUsers },
      { name: 'Orang Tua', href: '/admin/orang-tua', icon: FiUsers },
    ]
  }
];

export default function Sidebar({ onMenuSelect }) {
  const pathname = usePathname();

  const handleMenuClick = () => {
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
          <li onClick={handleMenuClick}>
            <Link href="/admin">
              <span className={clsx('flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200',
                { 'bg-indigo-100 text-indigo-600 font-semibold': pathname === '/admin' }
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
                      <span className={clsx('flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200',
                        { 'bg-indigo-100 text-indigo-600 font-semibold': pathname.startsWith(link.href) }
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