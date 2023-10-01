import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { menu } from "./routes/menu";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" Component={Dashboard} />
          {menu.map((routes, index) => (
            <Route
              key={index}
              path={routes.path}
              Component={routes.component}
            />
          ))}
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
