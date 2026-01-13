import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import chevronRightSvg from "@/assets/icons/chevronRight.svg";
import chevronDownSvg from "@/assets/icons/chevronDown.svg";
import closeSearchSvg from "@/assets/icons/closeSearch.svg";
import hamburgerSvg from "@/assets/icons/hamburger.svg";
import closeSvg from "@/assets/icons/close.svg";
import logoSvg from "@/assets/icons/logo.svg";
import { menuItems } from "@/constants/menu";
import styles from "./Header.module.css";
import type { MenuItem } from "@/types";

type HeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenu(null);
    setIsSearchOpen(false);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClearSearch = () => {
    onSearchChange("");
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
        onSearchChange("");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen, onSearchChange]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedScroll = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;

      const scrollDelta = currentScrollY - lastScrollY;

      if (scrollDelta > 0) {
        accumulatedScroll += scrollDelta;
        if (accumulatedScroll > 200) {
          nav.classList.add(styles.hidden);
        }
      } else {
        accumulatedScroll = 0;
        nav.classList.remove(styles.hidden);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.container}>
            <button
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
              className={styles.hamburger}
              aria-expanded={isMobileMenuOpen}
            >
              <img
                alt="Menu icon"
                src={hamburgerSvg}
                className={styles.hamburgerIcon}
              />
            </button>
            <img src={logoSvg} alt="LOGOTYPE" className={styles.logo} />
            <div className={styles.searchArea}>
              <div
                className={classNames(styles.searchWrapper, {
                  [styles.searchOpen]: isSearchOpen,
                })}
              >
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  ref={searchInputRef}
                  placeholder="Search posts..."
                  className={styles.searchInput}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
                {isSearchOpen && searchQuery && (
                  <button
                    className={styles.clearButton}
                    onClick={handleClearSearch}
                    aria-label="Clear search"
                  >
                    <img
                      src={closeSearchSvg}
                      className={styles.clearSearchSvg}
                    />
                  </button>
                )}
              </div>
              <button
                onClick={handleSearchClick}
                className={styles.searchButton}
                aria-label={isSearchOpen ? "Close search" : "Open search"}
              >
                {isSearchOpen ? (
                  <div
                    aria-label="Close Search"
                    className={styles.closeSearchSvg}
                  />
                ) : (
                  <div aria-label="Search" className={styles.searchIcon} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className={styles.desktopNav} ref={navRef}>
        <div className={styles.desktopNavContainer}>
          <ul className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.desktopMenuItem}>
                <button className={styles.desktopMenuLink}>
                  <span>{item.label}</span>
                  {item.submenu && (
                    <img
                      src={chevronDownSvg}
                      alt="chevron down icon"
                      className={styles.desktopDropdownIcon}
                    />
                  )}
                </button>
                {item.submenu && (
                  <ul className={styles.desktopSubmenu}>
                    {item.submenu.map((subItem: MenuItem, subIndex: number) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>{subItem.label}</a>
                        <img
                          src={chevronRightSvg}
                          alt="chevron down icon"
                          className={styles.submenuChevronRight}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu} />
      )}
      <div
        className={classNames(styles.mobileMenu, {
          [styles.open]: isMobileMenuOpen,
        })}
      >
        <div className={styles.mobileMenuHeader}>
          <img src={logoSvg} alt="LOGOTYPE" className={styles.mobileMenuLogo} />
          <button
            className={styles.closeButton}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <img src={closeSvg} alt="Close" className={styles.closeIcon} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileMenuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.mobileMenuItem}>
                <button
                  className={styles.mobileMenuLink}
                  onClick={() => toggleSubmenu(index)}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <img
                      src={chevronDownSvg}
                      alt=""
                      className={classNames(styles.dropdownIcon, {
                        [styles.open]: openSubmenu === index,
                      })}
                    />
                  )}
                </button>
                {item.submenu && (
                  <ul
                    className={classNames(styles.mobileSubmenu, {
                      [styles.open]: openSubmenu === index,
                    })}
                  >
                    {item.submenu.map((subItem: MenuItem, subIndex: number) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link}
                          className={styles.mobileSubmenuLink}
                          onClick={toggleMobileMenu}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
