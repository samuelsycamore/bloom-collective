import Clients from "../components/Clients";
import Crisis from "../components/Crisis";
import Science from "../components/Science";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Layout from "../components/layout/Layout";

export default function index() {
  return (
    <Layout lightNav>
      <Hero />
      <Clients />
      <Crisis />
      <Science />
      <Testimonials />
      <Form />
    </Layout>
  );
}
