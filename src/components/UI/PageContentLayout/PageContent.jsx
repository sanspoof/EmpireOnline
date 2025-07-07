function PageContent({ children }) {
    return (
      <main className="grid grid-cols-14 gap-6 items-start">
        {children}
      </main>
    );
  }
  
  export default PageContent;