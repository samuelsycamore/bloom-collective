import Clients from "../components/Clients";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

export default function landing() {
  return (
    <>
      <HeaderNav />
      <Hero />
      <Clients />
      <Content />
      <Content />
      <Footer />
      <Testimonials />
      <Form />
    </>
  );
}
