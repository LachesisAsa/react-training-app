import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.includes('details');
  console.log(location);
  return (
    <>
      <header>
        {!isDetailsPage && (
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.isActive : css.baseLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? css.isActive : css.baseLink
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? css.isActive : css.baseLink
                  }
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
