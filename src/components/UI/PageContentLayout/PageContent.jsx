import s from "./PageContent.module.scss";

function PageContent({ children, className = '' }) {
    return (
      <main className={`${s.mainlayout} ${className}`}>
        {children}
      </main>
    );
  }
  
  export default PageContent;