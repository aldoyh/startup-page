import React, { useState } from 'react';

const WordPressTheme = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Startup Company
          </a>
          <button
            className="lg:hidden flex justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`lg:flex lg:items-center lg:justify-between lg:static absolute top-16 left-0 w-full bg-blue-500 lg:bg-transparent ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="lg:ml-5">
              <a
                href="#"
                className="text-lg font-bold hover:text-blue-700 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li className="lg:ml-5">
              <a
                href="#"
                className="text-lg font-bold hover:text-blue-700 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li className="lg:ml-5">
              <a
                href="#"
                className="text-lg font-bold hover:text-blue-700 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Startup Company
            </h1>
            <p className="text-lg text-gray-600">
              We are a startup company that specializes in providing innovative
              solutions to businesses.
            </p>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="bg-white rounded shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-2">Service 1</h3>
                  <p className="text-lg text-gray-600">
                    We provide service 1 to businesses.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="bg-white rounded shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-2">Service 2</h3>
                  <p className="text-lg text-gray-600">
                    We provide service 2 to businesses.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="bg-white rounded shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-2">Service 3</h3>
                  <p className="text-lg text-gray-600">
                    We provide service 3 to businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Startup Company. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WordPressTheme;