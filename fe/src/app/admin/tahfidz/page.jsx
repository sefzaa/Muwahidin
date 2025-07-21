// app/admin/tahfidz/page.jsx

'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { FiTarget, FiUsers, FiUser } from 'react-icons/fi';

// Data dummy, nantinya ini bisa diambil dari API
const tahfidzData = [
  { id: 1, className: 'Kelas 1', targetSurah: 'An-Naba' },
  { id: 2, className: 'Kelas 2', targetSurah: 'An-Nazi\'at' },
  { id: 3, className: 'Kelas 3', targetSurah: '\'Abasa' },
  { id: 4, className: 'Kelas 4', targetSurah: 'At-Takwir' },
  { id: 5, className: 'Kelas 5', targetSurah: 'Al-Infitar' },
  { id: 6, className: 'Kelas 6', targetSurah: 'Al-Mutaffifin' },
];

export default function TahfidzAdminPage() {
  // State untuk mengontrol modal "Atur Target"
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tahfidz</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Data Tahfidz</h2>

          <div className="space-y-4">
            {tahfidzData.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center justify-between">
                
                {/* Bagian Kiri: Ikon, Nama Kelas, dan Target */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mr-4">
                     <FiTarget className="text-pink-500 text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{item.className}</p>
                    <p className="text-sm text-gray-500">Target: {item.targetSurah}</p>
                    {/* Tombol untuk membuka modal */}
                    <button 
                      onClick={openModal} 
                      className="text-sm text-blue-600 hover:underline font-semibold"
                    >
                      Atur Target
                    </button>
                  </div>
                </div>

                {/* Bagian Kanan: Tombol Putra & Putri */}
                <div className="flex items-center space-x-3">
                  <Link href={`/admin/tahfidz/${item.id}/putri`} passHref>
                    <span className="cursor-pointer px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center">
                      <FiUser className="mr-2" /> Putri
                    </span>
                  </Link>
                  <Link href={`/admin/tahfidz/${item.id}/putra`} passHref>
                    <span className="cursor-pointer px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center">
                      <FiUsers className="mr-2" /> Putra
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk "Atur Target" */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Atur Target
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Form untuk mengatur target hafalan akan ada di sini.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}