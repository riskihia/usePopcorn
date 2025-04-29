import { useEffect, useState } from "react";

function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-md px-4 py-2 sticky top-0">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Left - Hamburger Icon */}
        <div className="flex justify-start">
          <button className="text-gray-700" onClick={onMenuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-[#FE7743] text-center">
            Toram Market
          </div>
        </div>

        {/* Right - Avatar */}
        <div className="flex justify-end">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/300"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div id="HEADER">
      <img src="../imgs/hero_image.png" alt="hero image" className="w-full" />
    </div>
  );
}

function CallToAction() {
  return (
    <div id="CTA">
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-[#FE7743] text-3xl font-bold">
          What your finding?
        </h1>
        <h2 className="text-2xl font-bold">Start with us?</h2>
        <p className="text-gray-500">
          Find and buy item for your life and dont get it until you found it
        </p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative">
      <input
        className="bg-white outline-[#FE7743] px-4 py-3 w-full rounded-full pr-12"
        type="text"
        placeholder="Search..."
      />
      <svg
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-200 w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    </div>
  );
}

function Devider() {
  return (
    <div id="DEVIDER" className="mx-4">
      <h3 className="text-xl font-semibold">Category</h3>
    </div>
  );
}

function Product({ source }) {
  return (
    <div className="rounded-2xl bg-white w-5/12 flex flex-col">
      <div className="product-images-wrapper self-center p-4">
        <img src={source} alt="Product account images" className="w-20 h-20" />
      </div>
      <div className="product-description-wrapper rounded-b-2xl text-white bg-[#FE7743]">
        <div className=" flex flex-col px-4 py-2">
          <span className="font-bold">Spina</span>
          <span>Buy Items</span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white mt-12 p-4">
      <h5 className="text-xl font-semibold">PT. Toram Market</h5>
      <span className="text-gray-400">By Riski 2025</span>
    </div>
  );
}

function Overlay({ onClose }) {
  const [animation, setAnimation] = useState("animate-slide-up");

  const handleClose = () => {
    setAnimation("animate-slide-down"); // mulai animasi keluar
    setTimeout(() => {
      onClose(); // tutup setelah animasi selesai
    }, 300); // 300ms sesuai waktu animasi CSS
  };

  return (
    <div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 "></div>

      <Modal animation={animation} onClose={handleClose} />
    </div>
  );
}

function Modal({ animation, onClose }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-3/6 bg-white rounded-t-2xl p-4 ${animation}`}
    >
      <div className="icon-wrapper mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 place-self-end"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={onClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="status mb-8">
        <div className="flex justify-between items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/300"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold">Username people</h3>

          <button className="bg-[#FE7743] text-white px-6 py-2 rounded-full">
            Seller
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 option">
        <div className="text-xl font-bold">Profile</div>
        <div className="text-xl font-semibold">Settings</div>
        <div className="text-xl font-semibold">Logout</div>
      </div>
    </div>
  );
}

function useBodyScrollLock(isLocked) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}

export default function Toram() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useBodyScrollLock(isMenuOpen);

  return (
    <>
      <main className="md:w-8/12 lg:w-1/2 xl:w-1/3 2xl:w-1/4 m-auto bg-[#EFEEEA] relative">
        {/* <Header /> */}
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <Hero />
        <CallToAction />
        <div id="SEARCH" className="my-8 px-4">
          <Search />
        </div>
        <Devider />
        <div className=" flex  m-4 justify-between">
          <Product source="../imgs/product_account_images.png" />
          <Product source="../imgs/product_item_images.png" />
        </div>
        <Footer />

        {isMenuOpen && <Overlay onClose={() => setIsMenuOpen(false)} />}
      </main>
    </>
  );
}
