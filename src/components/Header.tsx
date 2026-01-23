'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import Container from './Container';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (url: string) => {
    setOpenSubmenu(openSubmenu === url ? null : url);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary font-display">
              {siteDetails.siteName.split('.')[0]}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.text} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
                      onMouseEnter={() => setOpenSubmenu(item.url)}
                    >
                      {item.text}
                      <HiChevronDown className="w-4 h-4" />
                    </button>
                    {openSubmenu === item.url && (
                      <ul
                        className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {item.children.map((child) => (
                          <li key={child.text}>
                            <Link
                              href={child.url}
                              className="block px-4 py-2 text-foreground hover:bg-warm-gray hover:text-primary transition-colors"
                            >
                              {child.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href={`tel:${siteDetails.contact.primaryPhone}`}
                className="bg-primary text-white hover:bg-primary-light px-6 py-2 rounded-full transition-colors font-medium"
              >
                Call {siteDetails.contact.primaryPhone}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-foreground focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div id="mobile-menu" className="lg:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.text}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.url)}
                      className="w-full text-left px-6 py-3 text-foreground hover:bg-warm-gray flex items-center justify-between"
                    >
                      {item.text}
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === item.url ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSubmenu === item.url && (
                      <ul className="bg-warm-gray">
                        {item.children.map((child) => (
                          <li key={child.text}>
                            <Link
                              href={child.url}
                              className="block px-10 py-2 text-foreground hover:bg-primary hover:text-white transition-colors"
                              onClick={toggleMenu}
                            >
                              {child.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="block px-6 py-3 text-foreground hover:bg-warm-gray transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href={`tel:${siteDetails.contact.primaryPhone}`}
                className="block w-full bg-primary text-white hover:bg-primary-accent px-6 py-3 rounded-full text-center transition-colors font-medium"
                onClick={toggleMenu}
              >
                Call {siteDetails.contact.primaryPhone}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
