import Header from "./Header";
import SideNav from "./SideNav";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <SideNav />
      <main id="main" className="main-content">
        {children}
      </main>
    </>
  );
}

export default Layout;
