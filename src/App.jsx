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

function MoviesPage() {``
  return (
    <>
      <HeroHeader />
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />}  />
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