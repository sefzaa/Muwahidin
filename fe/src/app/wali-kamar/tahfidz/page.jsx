// src/app/wali-kamar/tahfidz/page.jsx

'use client';

import { useState, Fragment } from 'react';
import { FiSearch, FiEye, FiEdit } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';

// Data dummy
const studentData = [
  { id: 1, name: 'Sefza Auma Tiang Alam', progress: '20%' },
  { id: 2, name: 'Budi Santoso', progress: '50%' },
  { id: 3, name: 'Ole Romeny', progress: '75%' },
  { id: 4, name: 'Boaz Salosa', progress: '30%' },
];

export default function WaliKamarTahfidzPage() {
  // State untuk data santri yang akan ditampilkan/diedit
  const [selectedStudent, setSelectedStudent] = useState(null);

  // State terpisah untuk setiap modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function openViewModal(student) {
    setSelectedStudent(student);
    setIsViewModalOpen(true);
  }

  function closeViewModal() {
    setIsViewModalOpen(false);
  }

  function openEditModal(student) {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tahfidz</h1>
        <div className="relative mb-6">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {studentData.map((student) => (
            <div key={student.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <p className="font-bold text-gray-800 mb-4">{student.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Progress: {student.progress}</p>
                
                {/* === BAGIAN YANG DIUBAH === */}
                <div className='flex space-x-2'>
                  {/* Tombol View */}
                  <button
                    onClick={() => openViewModal(student)}
                    className="p-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    title="Lihat Detail"
                  >
                    <FiEye className="text-base" />
                  </button>
                  {/* Tombol Edit */}
                  <button
                    onClick={() => openEditModal(student)}
                    className="p-1.5 rounded-md bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    title="Edit Progress"
                  >
                    <FiEdit className="text-base" />
                  </button>
                </div>
                {/* ======================== */}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal untuk View Detail Santri */}
      <Transition appear show={isViewModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeViewModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Detail Santri</Dialog.Title>
                        {selectedStudent && (
                            <div className="mt-4 border-t pt-4">
                                <p className="text-sm text-gray-500">Nama Lengkap</p>
                                <p className="font-semibold text-gray-800">{selectedStudent.name}</p>
                                <p className="text-sm text-gray-500 mt-3">Progress Hafalan</p>
                                <p className="font-semibold text-gray-800">{selectedStudent.progress}</p>
                            </div>
                        )}
                        <div className="mt-6"><button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none" onClick={closeViewModal}>Tutup</button></div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
      </Transition>

      {/* Modal untuk Edit Progress */}
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeEditModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Edit Progress: {selectedStudent?.name}</Dialog.Title>
                        <div className="mt-4 border-t pt-4">
                            <p className="text-sm text-gray-500">
                                Form untuk mengedit progress hafalan akan ada di sini.
                            </p>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none" onClick={closeEditModal}>Batal</button>
                            <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none" onClick={closeEditModal}>Simpan</button>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
      </Transition>
    </>
  );
}