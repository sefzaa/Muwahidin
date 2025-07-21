// src/app/wali-kamar/layout.jsx

'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'; // <-- Pastikan Dialog di-import
import { FiMenu, FiX } from 'react-icons/fi'; // <-- Tambahkan ikon X untuk tombol tutup

import WaliKamarSidebar from '@/components/WaliKamarSidebar';
import UserProfileDropdown from '@/components/UserProfileDropdown';

export default function WaliKamarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">

      {/* ================================================================== */}
      {/* Sidebar untuk Tampilan Mobile (Struktur yang Disempurnakan)       */}
      {/* ================================================================== */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={closeSidebar}>
          
          {/* Latar Belakang Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          {/* Konten Sidebar yang Muncul */}
          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              {/* Gunakan Dialog.Panel untuk membungkus sidebar */}
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* Tombol Close di dalam sidebar */}
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={closeSidebar}
                        >
                            <FiX className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </Transition.Child>

                {/* Kirim fungsi 'closeSidebar' ke komponen sidebar */}
                <WaliKamarSidebar onMenuSelect={closeSidebar} />

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Sidebar untuk Tampilan Desktop */}
      <div className="hidden md:flex md:w-64 md:flex-shrink-0">
        <WaliKamarSidebar />
      </div>
      
      {/* Konten Utama */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <header className="flex h-16 flex-shrink-0 items-center justify-between border-b bg-white px-4">
          <div className="flex items-center">
            <button 
                type="button" 
                className="p-2.5 text-gray-700 md:hidden" 
                onClick={() => setSidebarOpen(true)}
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 ml-2 md:ml-0">Dashboard</h1>
          </div>
          <UserProfileDropdown />
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
        </main>
      </div>
    </div>
  );
}