import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteContainer from './components/UI/SiteContainer/SiteContainer';
import HeroHeader from './components/HeroHeader/HeroHeader';
import MainNavigation from './components/MainNavigation/MainNavigation';
import NewsList from './components/NewsList/NewsList';
import ReviewSidebar from './components/ReviewSidebar/ReviewSidebar';
import { ContentfulProvider } from './context/ContentfulContext';
// import { DataProvider } from "./context/DataContext"; 
import { ThemeProvider } from './context/ThemeContext'; 
import PageContent from './components/UI/PageContentLayout/PageContent';
import Footer from './components/Footer/Footer';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ScrollToTop from './components/Utils/ScrollToTop';
import SettingsContainer from './components/UI/SettingsContainer/SettingsContainer';
import Settings from './components/Settings/Settings';

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

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
    <ThemeProvider>
    <SiteContainer>
    <ContentfulProvider>
        <BrowserRouter>
          <MainNavigation onSettingsClick={() => setShowSettings(true)} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<HomePage />} />
            {/* <Route path="/movies" element={<MoviesPage />}  /> */}
            <Route path="/review/:id" element={<ReviewPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
    </ContentfulProvider>
      <SettingsContainer showSettings={showSettings} onClose={() => setShowSettings(false)} >
        <Settings />
      </SettingsContainer>
    </SiteContainer>
    <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;