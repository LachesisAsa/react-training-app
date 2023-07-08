import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Events } from 'pages/Events/Events';
import { EventsSubPage } from 'pages/EventsSubPage/EventsSubPage';
import { Search } from 'pages/Search/Search';
import { EventDetailsPage } from 'pages/EventDetailsPage/EventDetailsPage';
import { Test } from './Test/Test';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search" element={<Search />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="search/:id/details" element={<EventDetailsPage />}>
          <Route path="test" element={<Test />} />
        </Route>
      </Route>
    </Routes>
  );
};
