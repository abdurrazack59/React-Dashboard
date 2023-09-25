import { useEffect, useState } from "react";

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function handleSideNav() {
    if (isSideNavOpen) {
      closeNav();
    } else {
      openNav();
    }
    setIsSideNavOpen((prev) => !prev);
  }

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    openNav();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function openNav() {
    const sideNavEl = document.getElementById("mySidenav");
    const mainEl = document.getElementById("main");
    if (sideNavEl !== null && mainEl !== null) {
      sideNavEl.style.width = "250px";
      mainEl.style.marginLeft = windowSize.innerWidth < 541 ? "0px" : "250px";
    }
  }

  function closeNav() {
    const sideNavEl = document.getElementById("mySidenav");
    const mainEl = document.getElementById("main");
    if (sideNavEl !== null && mainEl !== null) {
      sideNavEl.style.width = "0px";
      mainEl.style.marginLeft = "0px";
    }
  }

  return (
    <>
      <header id="header" className="header">
        <div className="header-content">
          <span className="hamburger" onClick={handleSideNav}>
            &#9776;
          </span>
          <div className="logo">
            <img src="" alt="logo" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
