// app/admin/layout.jsx

'use client';

import { useState, Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar'; 
import UserProfileDropdown from '@/components/UserProfileDropdown';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar untuk Mobile dengan Tombol Close (X) */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={closeSidebar}>
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
                <Sidebar onMenuSelect={closeSidebar} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Sidebar untuk Desktop */}
      <div className="hidden md:flex md:w-64 md:flex-shrink-0">
        <Sidebar />
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