import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Layout from "../components/Layout";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Signin />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
