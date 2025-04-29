import { useEffect, useState } from "react";

export default function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false); // Modal terbuka atau tidak
  const [isVisible, setIsVisible] = useState(false); // Modal ada di layar atau tidak

  const openModal = () => {
    setIsVisible(true); // Modal muncul
    setIsOpen(true); // Animasi buka jalan
  };

  const closeModal = () => {
    setIsOpen(false); // Animasi tutup jalan
  };

  useEffect(() => {
    if (!isOpen && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false); // Setelah animasi tutup selesai (0.3s), hapus dari layar
      }, 300); // Sama dengan durasi animasi CSS kamu
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      {isVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
          onClick={closeModal} // Klik latar untuk close
        >
          <div
            className={`bg-white p-8 rounded shadow-lg ${
              isOpen ? "animate-slide-up" : "animate-slide-down"
            }`}
            onClick={(e) => e.stopPropagation()} // Supaya klik di dalam modal tidak close
          >
            <h2 className="text-2xl mb-4">Simple Modal</h2>
            <p className="mb-4">Belajar modal dasar dengan animasi.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
