function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-2 rounded-b-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Left - Hamburger Icon */}
        <div className="flex justify-start">
          <button className="text-gray-700">
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
          <div className="text-2xl font-bold text-[#FE7743] text-center">
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

export default function Toram() {
  return (
    <>
      <main className="lg:w-1/3 m-auto">
        <Header />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
