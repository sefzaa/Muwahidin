// src/app/admin/pengurus/page.jsx

'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiEdit, FiPlus } from 'react-icons/fi';

// Data dummy dipisah untuk Putra dan Putri
const pengurusPutra = [
  { id: 1, name: 'Ahmad Subarjo', username: 'ahmad_s' },
  { id: 2, name: 'Budi Hartono', username: 'budi_h' },
  { id: 5, name: 'Eko Widodo', username: 'eko_w' },
  { id: 7, name: 'Guntur Saputra', username: 'guntur_s' },
  { id: 8, name: 'Hasanuddin', username: 'hasanuddin' },
];

const pengurusPutri = [
  { id: 3, name: 'Citra Kirana', username: 'citra_k' },
  { id: 4, name: 'Dewi Lestari', username: 'dewi_l' },
  { id: 6, name: 'Fitria Rahmawati', username: 'fitria_r' },
  { id: 9, name: 'Indah Permatasari', username: 'indah_p' },
  { id: 10, name: 'Joko Susilo', username: 'joko_s' } // Asumsi ini Putri untuk contoh
];

export default function PengurusPage() {
  const [selectedPengurus, setSelectedPengurus] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function openAddModal() { setIsAddModalOpen(true); }
  function closeAddModal() { setIsAddModalOpen(false); }

  function openEditModal(pengurus) {
    setSelectedPengurus(pengurus);
    setIsEditModalOpen(true);
  }
  function closeEditModal() {
    setIsEditModalOpen(false);
    setSelectedPengurus(null);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pengurus</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Akun Pengurus</h2>
            <button
              onClick={openAddModal}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm font-semibold"
            >
              <FiPlus className="mr-2" />
              Tambah Akun
            </button>
          </div>
          
          {/* Bagian Pengurus Putra */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-600 border-b pb-2 mb-4">Putra</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pengurusPutra.map((pengurus) => (
                <div key={pengurus.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-800">{pengurus.name}</p>
                    <p className="text-sm text-gray-500">username: {pengurus.username}</p>
                  </div>
                  <button onClick={() => openEditModal(pengurus)} className="p-2 rounded-full text-gray-500 hover:bg-gray-200" title="Edit Akun">
                    <FiEdit className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Pengurus Putri */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-600 border-b pb-2 mb-4">Putri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pengurusPutri.map((pengurus) => (
                <div key={pengurus.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-800">{pengurus.name}</p>
                    <p className="text-sm text-gray-500">username: {pengurus.username}</p>
                  </div>
                  <button onClick={() => openEditModal(pengurus)} className="p-2 rounded-full text-gray-500 hover:bg-gray-200" title="Edit Akun">
                    <FiEdit className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
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
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Tambah Akun Pengurus</Dialog.Title>
                <div className="mt-4">
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
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Edit Akun: {selectedPengurus?.name}</Dialog.Title>
                <div className="mt-4">
                   <div className="mt-4 space-y-4">
                    <input type="text" defaultValue={selectedPengurus?.name} className="w-full p-2 border rounded-md" />
                    <input type="text" defaultValue={selectedPengurus?.username} className="w-full p-2 border rounded-md" />
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