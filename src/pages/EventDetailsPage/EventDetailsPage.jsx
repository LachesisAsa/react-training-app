import { useFetchEvent } from 'hooks/useFetchEvent';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';

export const EventDetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname.includes('search');

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width={250}/>
          <p>Genres: {event.classifications[0].genre.name}</p>
          <p>SubGenres: {event.classifications[0].subGenre.name}</p>
          {isSearchPage && (
            <>
              <Link to="test" state={location.state}>
                Test
              </Link>
              <Outlet />
            </>
          )}
        </div>
      )}
    </>
  );
};
