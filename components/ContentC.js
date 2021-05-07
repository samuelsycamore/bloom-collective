import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function SecondaryContentA( props ) {
  return (
    <section className="mt-96 relative">
      <_wrapper>
        <div className="row grid gap-4 md:grid-cols-2">
          <div className="col max-w-96">
            <_headline>
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}
              </span>{" "}
              {props.headlineNoUnderline}
            </_headline>
          </div>
          <div className="col">
            <_paragraph>
              {props.paragraphOne}
            </_paragraph>
            <_paragraph>
            {props.paragraphTwo}
            </_paragraph>
            <_paragraph>
              {props.paragraphThree}
            </_paragraph>
            <div
              className="flex justify-left items-center gap-4 py-4"
            >
              <img
                src={props.personAvatar}
                className="rounded-full w-16 h-16"
              />
              <div className="person-info">
                <h4 className="font-bold text-xl">{props.personName}</h4>
                <h5>{props.personTitle}</h5>
              </div>
            </div>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
