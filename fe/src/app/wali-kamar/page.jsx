// src/app/wali-kamar/page.jsx

export default function WaliKamarDashboardPage() {
  return (
    <div>
      {/* Konten untuk dashboard Wali Kamar bisa diletakkan di sini.
        Misalnya ringkasan statistik, notifikasi, atau shortcut.
        Untuk saat ini, kita biarkan simpel sesuai desain.
      */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800">
          Selamat Datang di Dashboard Wali Kamar
        </h2>
        <p className="mt-2 text-gray-600">
          Silakan pilih menu dari sidebar untuk memulai.
        </p>
      </div>
    </div>
  );
}