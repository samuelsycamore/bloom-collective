import _paragraph from "./layout/_paragraph";

export default function GoBig() {
  return (
    <section className="goBig flex flex-col">
      <div className="row max-w-xl mx-auto px-5 py-12">
        <div className="col flex flex-col justify-end items-center h-96">
        <h1
                className="text-3xl font-semibold
                sm:text-5xl"
              >
                <span className="line-yellow text-yellow-300 inline-block">
                  Go Big,
                </span>
                or Go Home.
              </h1>
          <p className="py-5 text-center">
          Bloom Collective is a full-service digital consulting agency specializing in content strategy, design and production. We have experience working across Asia Pacic, North America and the Middle East.
          </p>
        </div>
      </div>
      <div className="row w-full">
        <div className="col">
          <img className="object-cover w-full max-h-96" src="https://source.unsplash.com/random" />
        </div>
      </div>
    </section>
  );
}
