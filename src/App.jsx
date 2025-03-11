// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import HeroHeader from './components/HeroHeader/HeroHeader';
import MainNavigation from './components/MainNavigation/MainNavigation';
import NewsList from './components/NewsList/NewsList';
import ReviewList from './components/ReviewList/ReviewList';
import { ContentfulProvider } from './context/ContentfulContext';
import { DataProvider } from "./context/DataContext";

function App() {
  
  return (
    <>
    <ContentfulProvider>
    <DataProvider>
        <MainNavigation />
        <HeroHeader />
        <NewsList/>
        <ReviewList/>
    </DataProvider>
    </ContentfulProvider>
    </>
  )
}

export default App
