import HeroD from "../components/HeroD";
import ContentG from "../components/ContentG";
import FeaturedImage from "../components/FeaturedImage";
import Layout from "../components/layout/Layout";

export default function caseStudy() {
  return (
    <Layout lightNav>
      <HeroD
        headline="Majid Al Futtaim Advanced Analytics"
        background="https://source.unsplash.com/random"
      />
      <FeaturedImage image="https://source.unsplash.com/random" />
      <ContentG
        headlineNoUnderline="businesses with content workflows."
        paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
        paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
        paragraphThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
      />
    </Layout>
  );
}
