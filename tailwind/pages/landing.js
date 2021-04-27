import Clients from "../components/Clients";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Nav from "../components/Nav";

export default function landing() {
  return (
    <>
      <Nav />
      <Content />
      <Footer />
      <Testimonials />
     <Form />
    </>
  );
}
