import Clients from "../components/Clients";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Nav from "../components/Nav";

export default function landing() {
  return (
    <body className="text-white">
      <Nav />
      <Hero />
      <Content />
      <Footer />
      <Testimonials />
     <Form />
    </body>
  );
}
