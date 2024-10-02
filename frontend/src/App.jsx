import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
        <Footer></Footer>
      </main>
    </div>
  )
}