import Clients from "../components/Clients";
import Crisis from "../components/Crisis";
import Science from "../components/Science";
import Layout from "../components/layout/Layout";

export default function portfolio() {
  return (
    <Layout>
      <Clients />
      <Crisis />
      <Science />
    </Layout>
  );
}