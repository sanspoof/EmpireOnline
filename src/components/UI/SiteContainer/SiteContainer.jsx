function SiteContainer({ children }) {
    return (
      <div className="bg-indigo-700 ml-auto mr-auto max-w-(--site-container-max-width) px-8">
        {children}
      </div>
    );
  }
  
  export default SiteContainer;