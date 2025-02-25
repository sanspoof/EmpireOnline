// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MyButton from './components/Button/Button';
import HeroHeader from './components/HeroHeader/HeroHeader';
import MainNavigation from './components/MainNavigation/MainNavigation';
import NewsList from './components/NewsList/NewsList';
import { DataProvider } from "./context/DataContext";

function App() {
  
  return (
    <>
    <DataProvider>
        <MainNavigation />
        <HeroHeader />
        <MyButton />
        <NewsList/>
    </DataProvider>
    </>
  )
}

export default App
