import Logo from "../UI/Logo/Logo";

function footer() {
  return (
    <footer className="px-16 ">
      <div className="p-16 text-center ml-auto mr-auto max-w-(--site-container-max-width) border-t border-l border-r border-gray-500">
        <Logo />
      </div>
    </footer>
  );
}

export default footer;