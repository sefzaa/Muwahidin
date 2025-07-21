// src/components/UserProfileDropdown.jsx

'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

export default function UserProfileDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 rounded-md hover:bg-gray-100 p-2">
        <img
          className="h-9 w-9 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80"
          alt="User avatar"
        />
        <div className="text-left hidden sm:block">
          {/* Nanti ini bisa dibuat dinamis sesuai role */}
          <p className="text-sm font-medium text-gray-700">Mustfiq</p>
          <p className="text-xs text-gray-500">Wali Kamar</p>
        </div>
        <FiChevronDown className="h-4 w-4 text-gray-400" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>Profil</a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`${active ? 'bg-gray-100' : ''} block w-full px-4 py-2 text-left text-sm text-red-600`}>Keluar</a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}