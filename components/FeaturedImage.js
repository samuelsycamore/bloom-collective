import _wrapper from "./layout/_wrapper";

export default function FeaturedImage(props) {
  return (
    <section className="block featured-image">
      <_wrapper>
        <div className="row">
          <div className="col">
            <img
              src={props.image}
              className="w-full h-96 object-center object-cover"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
