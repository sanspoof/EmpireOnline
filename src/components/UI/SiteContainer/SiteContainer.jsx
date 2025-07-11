function SiteContainer({ children }) {
    return (
    <div className="body-padding">
      <div className="ml-auto mr-auto max-w-(--site-container-max-width) min-h-screen border-l border-l-gray-500 border-r border-r-gray-500 ">
        {children}
      </div>
    </div>
    );
  }
  
  export default SiteContainer;