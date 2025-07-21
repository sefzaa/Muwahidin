// app/admin/tahfidz/[classId]/[gender]/page.jsx

'use client'

import { useState, Fragment } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiSearch, FiChevronRight, FiEye } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';

const studentData = [
  { id: 1, name: 'Sefza Auma Tiang Alam', progress: '20%' },
  { id: 2, name: 'Budi Santoso', progress: '50%' },
  { id: 3, name: 'Citra Lestari', progress: '75%' },
  { id: 4, name: 'Dewi Anggraini', progress: '30%' },
  { id: 5, name: 'Eko Prasetyo', progress: '90%' },
  { id: 6, name: 'Fitri Handayani', progress: '10%' },
  { id: 7, name: 'Gilang Ramadhan', progress: '45%' },
  { id: 8, name: 'Hesti Purwanti', progress: '100%' },
];

export default function TahfidzGenderDetailPage() {
  const params = useParams();
  const { classId, gender } = params;
  const genderTitle = gender.charAt(0).toUpperCase() + gender.slice(1);

  // State untuk kontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State untuk menyimpan data santri yang dipilih
  const [selectedStudent, setSelectedStudent] = useState(null);

  function closeModal() {
    setIsModalOpen(false);
    // Kosongkan data santri setelah modal ditutup
    setTimeout(() => setSelectedStudent(null), 300);
  }

  function openModal(student) {
    setSelectedStudent(student);
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        {/* BARIS 1: Breadcrumbs (Posisi Tetap) */}
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/admin/tahfidz" className="hover:underline">
            Data Tahfidz
          </Link>
          <FiChevronRight className="mx-2" />
          <span className="font-semibold text-gray-700">Lihat Detail Kelas {classId}</span>
        </nav>

        {/* ================================================================== */}
        {/* BAGIAN YANG DIUBAH                                                 */}
        {/* ================================================================== */}
        
        {/* BARIS 2: Search Bar di kiri, Judul di kanan */}
        <div className="flex items-center mb-6">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full max-w-sm bg-gray-100 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 ml-auto mr-4">{genderTitle}</h2>
        </div>

        {/* ================================================================== */}
        {/* Bagian Grid Kartu Santri (Tidak Berubah)                         */}
        {/* ================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {studentData.map((student) => (
            <div key={student.id} className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <p className="font-bold text-gray-800 mb-4">{student.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Progress: {student.progress}</p>
                <button
                  onClick={() => openModal(student)}
                  className="p-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiEye className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Komponen Modal (Tidak Berubah) */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Detail Santri
                        </Dialog.Title>
                        {selectedStudent && (
                            <div className="mt-4 border-t pt-4">
                            <p className="text-sm text-gray-500">Nama Lengkap</p>
                            <p className="font-semibold text-gray-800">{selectedStudent.name}</p>
                            <p className="text-sm text-gray-500 mt-3">Progress Hafalan</p>
                            <p className="font-semibold text-gray-800">{selectedStudent.progress}</p>
                            </div>
                        )}
                        <div className="mt-6">
                            <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none" onClick={closeModal}>
                            Tutup
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
      </Transition>
    </>
  );
}