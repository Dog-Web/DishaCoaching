import React, { ReactNode,useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className="bg-[#D3C5E5] text-dark-gray p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
              {/* Ensure the image path is correct */}
              {/* Adjust the height as needed */}
              <div className="flex flex-row items-center justify-center text-[25px] font-bold text-[#375E97]"> <img src='logo_disha.png' alt='Logo' className='h-20' />DCA</div>
              <ul className="hidden md:flex space-x-8">
                  <li><a href="#" className="text-dark-gray hover:text-[#375E97]">About Us</a></li>
                  <li><a href="#" className="text-dark-gray hover:text-[#375E97]">Contact</a></li>
                  <li><a href="#" className="text-dark-gray hover:text-[#375E97]">Login</a></li>
              </ul>
              <div className="md:hidden">
                  <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-dark-gray focus:outline-none"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
                  </button>
              </div>
          </nav>
          {isMenuOpen && (
              <div className="md:hidden bg-light-purple shadow-md p-4">
                  <ul>
                      <li className="py-2"><a href="#" className="text-dark-gray hover:text-[#375E97]">About Us</a></li>
                      <li className="py-2"><a href="#" className="text-dark-gray hover:text-[#375E97]">Contact</a></li>
                      <li className="py-2"><a href="#" className="text-dark-gray hover:text-[#375E97]">Login</a></li>
                  </ul>
              </div>
          )}
      </header>
  );
};


  const Footer: React.FC = () => (
    <footer className="bg-[#D3C5E5] text-dark-gray py-8">
      <div className="container mx-auto text-center space-y-4">
        <p className="font-bold text-[#375E97] text-lg">
        Disha Current affairs classes
                </p>
        <p>
        Disha Current affairs classes gets you ready with current affairs.
        </p>
        <div className="space-y-2">
          <p><span className="font-bold">Address:</span> Benz Circle, Vijayawada; Ashoknagar, Hyderabad</p>
          <p><span className="font-bold">Email:</span> saratchandraiasacademy@gmail.com</p>
          <p><span className="font-bold">Phone:</span> 9494188688 and 9494688188</p>
        </div>
        <p className="text-sm mt-4">© 2024 Disha Academy. All rights reserved.</p>
      </div>
    </footer>
  );

export default Layout;
