import Welcome from "../components/Welcome";
import Header from "../components/Header";
// import Actividades from "../components/Actividades";
import About from "../components/About";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <div className="bg-cover bg-center bg-my_bg_image">
      <Header />
      <Welcome />
      {/* <Actividades /> */}
      <About />
      <Contacto />
      <Footer />
    </div>
  );
}