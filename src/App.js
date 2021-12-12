import Home from "./components/home/home";
import Provenance from "./components/provenance/provenance";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import Gallery from "./components/gallery";
import MintFvt from "./components/mint-fvt";
import Welcome from "./components/welcome/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/provenance"
          element={
            <Layout>
              <Provenance />{" "}
            </Layout>
          }
        />
        <Route
          exact
          path="/gallery"
          element={
            <Layout>
              <Gallery />{" "}
            </Layout>
          }
        />
        <Route
          exact
          path="/welcome"
          element={
            <Layout>
              <Welcome />{" "}
            </Layout>
          }
        />
        <Route
          exact
          path="/mint-fvt"
          element={
            <Layout>
              <MintFvt />{" "}
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
