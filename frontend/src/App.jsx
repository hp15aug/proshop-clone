import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
        <Footer></Footer>
      </main>
    </div>
  )
}