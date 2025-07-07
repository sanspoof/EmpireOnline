function PageContent({ children }) {
    return (
      <main className="grid grid-cols-14">
        {children}
      </main>
    );
  }
  
  export default PageContent;