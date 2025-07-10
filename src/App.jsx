import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteContainer from './components/UI/SiteContainer/SiteContainer';
import HeroHeader from './components/HeroHeader/HeroHeader';
import MainNavigation from './components/MainNavigation/MainNavigation';
import NewsList from './components/NewsList/NewsList';
import ReviewSidebar from './components/ReviewSidebar/ReviewSidebar';
import { ContentfulProvider } from './context/ContentfulContext';
import { DataProvider } from "./context/DataContext"; 
import PageContent from './components/UI/PageContentLayout/PageContent';
import Footer from './components/Footer/Footer';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ScrollToTop from './components/Utils/ScrollToTop';

function HomePage() {
  return (
    <>
      <HeroHeader />
      <PageContent>
        <NewsList />
        <ReviewSidebar />
      </PageContent>
    </>
  );
}


function App() {
  return (
    <>
    <SiteContainer>
    <ContentfulProvider>
      <DataProvider>
        <BrowserRouter>
          <MainNavigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<HomePage />} />
            {/* <Route path="/movies" element={<MoviesPage />}  /> */}
            <Route path="/review/:id" element={<ReviewPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ContentfulProvider>
    </SiteContainer>
    <Footer />
    </>
  );
}

export default App;