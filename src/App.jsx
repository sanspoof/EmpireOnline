// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MyButton from './components/Button/Button';
import MainNavigation from './components/MainNaviation/MainNavigation';
import NewsList from './components/NewsList/NewsList';
import { DataProvider } from "./context/DataContext";

function App() {
  
  return (
    <>
    <DataProvider>
        <MainNavigation />
        <MyButton />
        <NewsList/>
    </DataProvider>
    </>
  )
}

export default App
