import Clients from "../components/Clients";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Nav from "../components/Nav";
import Layout from "../components/layout/Layout";

export default function landing() {
  return (
    <Layout home>
      <Hero />
      <Clients />
      <Content />
      <Testimonials />
      <Form />
      <Footer />
    </Layout>
  );
}
