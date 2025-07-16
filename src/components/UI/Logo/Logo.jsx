function Logo({ darkOnly = false }) {
    return (
        <div className={`empire-logo ${darkOnly ? 'empire-logo-dark' : ''}`}>
            REEL
        </div>
    );
  }

  export default Logo;