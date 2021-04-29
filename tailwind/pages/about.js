import Clients from "../components/Clients";
import ContentOne from "../components/ContentOne";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Testimonials from "../components/Testimonials";
import Nav from "../components/Nav";
import Layout from "../components/layout/Layout";

export default function landing() {
  return (
    <Layout>
      <Nav />
      <Clients />
      <ContentOne />
      <Footer />
      <Testimonials />
     <Form />
    </Layout>
  );
}
