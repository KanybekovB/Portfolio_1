import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Homepage } from "./pages/Homepage";
import { Marketplace } from "./pages/Marketplace";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="marketplace" element={<Marketplace />}/>
        </Route>
      </Routes>
    </>
  );
}
