import Clients from "../components/Clients";
import ContentOne from "../components/ContentOne";
import ContentTwo from "../components/ContentTwo";
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
      <ContentOne />
      <ContentTwo />
      <Testimonials />
      <Form />
      <Footer />
    </Layout>
  );
}
