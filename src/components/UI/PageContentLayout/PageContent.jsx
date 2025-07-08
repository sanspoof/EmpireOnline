function PageContent({ children }) {
    return (
      <main className="grid grid-cols-14 gap-10 items-start pb-4">
        {children}
      </main>
    );
  }
  
  export default PageContent;