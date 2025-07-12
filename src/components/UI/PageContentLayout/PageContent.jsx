function PageContent({ children }) {
    return (
      <main className="grid grid-cols-12 gap-6 items-start pb-6">
        {children}
      </main>
    );
  }
  
  export default PageContent;