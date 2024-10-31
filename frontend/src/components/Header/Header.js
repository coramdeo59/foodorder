import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import styles from './header.module.css';
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Satimpay- So Simple
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {user ? (
              <li className={styles.menuItem}>
                <Link to="/dashboard" className={styles.userLink}>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {user.name}
                </Link>
                <div className={styles.dropdownMenu}>
                  <Link to="/profile" className={styles.dropdownLink}>
                    Profile
                  </Link>
                  <Link to="/orders" className={styles.dropdownLink}>
                    Orders
                  </Link>
                  <button className={styles.logoutButton} onClick={logout}>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <li className={styles.menuItem}>
                <Link to="/login" className={styles.userLink}>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Login
                </Link>
              </li>
            )}
            
            <li className={styles.menuItem}>
              <Link to="/cart" className={styles.cartLink}>
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Cart
                {cart?.totalCount > 0 && (
                  <span className={styles.cartCount}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}