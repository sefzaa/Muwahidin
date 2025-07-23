// src/app/admin/direktur/page.jsx

'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiEdit, FiPlus } from 'react-icons/fi';

// Data dummy. Nantinya ini diambil dari API.
const direkturData = [
  { id: 1, name: 'Sefza Auma Tiang Alam', username: 'sefzaauma' }
];

export default function DirekturPage() {
  // State untuk data direktur yang akan diedit
  const [selectedDirektur, setSelectedDirektur] = useState(null);

  // State terpisah untuk setiap modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Fungsi untuk modal Tambah Akun
  function openAddModal() { setIsAddModalOpen(true); }
  function closeAddModal() { setIsAddModalOpen(false); }

  // Fungsi untuk modal Edit Akun
  function openEditModal(direktur) {
    setSelectedDirektur(direktur);
    setIsEditModalOpen(true);
  }
  function closeEditModal() {
    setIsEditModalOpen(false);
    setSelectedDirektur(null);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Direktur</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Akun Direktur</h2>
            <button
              onClick={openAddModal}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm font-semibold"
            >
              <FiPlus className="mr-2" />
              Tambah Akun
            </button>
          </div>

          {/* Kartu Akun Direktur */}
          <div className="space-y-4">
            {direkturData.map((direktur) => (
              <div key={direktur.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">{direktur.name}</p>
                  <p className="text-sm text-gray-500">username: {direktur.username}</p>
                </div>

                {/* Tombol Edit */}
                <button
                  onClick={() => openEditModal(direktur)}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                  title="Edit Akun"
                >
                  <FiEdit className="text-lg" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============== MODAL TAMBAH AKUN ============== */}
      <Transition appear show={isAddModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeAddModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Tambah Akun Direktur</Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Form untuk menambah akun baru akan ada di sini.</p>
                  {/* Contoh Form */}
                  <div className="mt-4 space-y-4">
                    <input type="text" placeholder="Nama Lengkap" className="w-full p-2 border rounded-md" />
                    <input type="text" placeholder="Username" className="w-full p-2 border rounded-md" />
                    <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-2">
                  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200" onClick={closeAddModal}>Batal</button>
                  <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" onClick={closeAddModal}>Simpan</button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* ============== MODAL EDIT AKUN ============== */}
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeEditModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Edit Akun: {selectedDirektur?.name}</Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Form untuk mengedit akun akan ada di sini.</p>
                  {/* Contoh Form dengan data yang sudah ada */}
                   <div className="mt-4 space-y-4">
                    <input type="text" defaultValue={selectedDirektur?.name} className="w-full p-2 border rounded-md" />
                    <input type="text" defaultValue={selectedDirektur?.username} className="w-full p-2 border rounded-md" />
                    <input type="password" placeholder="Password Baru (opsional)" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-2">
                  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200" onClick={closeEditModal}>Batal</button>
                  <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={closeEditModal}>Update</button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}