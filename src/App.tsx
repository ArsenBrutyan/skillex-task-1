import { lazy, Suspense } from "react";
import { Layout } from "./components";

const ProductsList = lazy(() => import("./components/ProductsList/index"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <ProductsList />
      </Suspense>
    </Layout>
  );
}

export default App;
