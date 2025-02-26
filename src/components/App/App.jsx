import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Home from '../../pages/Home/Home.jsx';
import Catalog from '../../pages/Catalog/Catalog.jsx';
import CamperPage from '../../pages/CamperPage/CamperPage.jsx';
import Header from '../Header/Header.jsx';
import Features from '../Features/Features.jsx';
import Reviews from '../Reviews/Reviews.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:camperId" element={<CamperPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
