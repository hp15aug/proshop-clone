import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
        <Footer />
        <ToastContainer />
      </main>
    </div>
  )
}