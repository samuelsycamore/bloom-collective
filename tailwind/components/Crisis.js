import _wrapper from "./layout/_wrapper";
import _subheader from "./layout/_subheader";
import _paragraph from "./layout/_paragraph";

export default function Crisis() {
  return (
    <section className="block content_one">
      <_wrapper>
        <div className="row flex flex-col place-items-center
        md:flex-row">
          <div className="col max-w-xl p-10">
            <_subheader>Content During Crisis</_subheader>
            <_paragraph>Majid Al Futtaim is the leading shopping mall, communities, retail and leisure pioneer across the Middle East, Africa and Asia. Find out how Bloom Collective mobilised to help them communicate during a time of crisis.</_paragraph>
            <button
                className="px-5 py-3 w-1/3
                text-yellow-400
                border-2 border-yellow-400
                hover:bg-yellow-400 hover:text-black
                transition duration-300 ease-in-out
                transform hover:-translate-y-1 hover:scale-105"
              >
                Learn more
              </button>
          </div>
          <div className="col hidden md:block sm:w-1/2">
            <img className="w-96" src="../phone.svg" />
          </div>
        </div>
        </_wrapper>
    </section>
  );
}