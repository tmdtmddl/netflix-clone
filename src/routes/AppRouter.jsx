import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Layout from "../components/Layout";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import LearnReact from "./LearnReact";
import UseState from "./LearnReact/LearnuseState";
import LearnUseEffect from "./LearnReact/learn-useEffect";
import LearnUseRef from "./LearnReact/learn-useRef";

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
        <Route path="/Learn-react">
          <Route index element={<LearnReact />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<LearnUseEffect />} />
          <Route path="useRef" element={<LearnUseRef />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
// import LearnUseMemo from "./LearnReact/learn-useMemo/useMemo";
//  {/* <Route path="usememo" element={<LearnUseMemo />} /> */}
