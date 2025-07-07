function SiteContainer({ children }) {
    return (
    <div className="px-16">
      <div className="bg-indigo-900 ml-auto mr-auto max-w-(--site-container-max-width) min-h-screen">
        {children}
      </div>
    </div>
    );
  }
  
  export default SiteContainer;