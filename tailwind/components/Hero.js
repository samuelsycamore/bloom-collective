export default function Hero() {
  return (
    <div className="block hero">
      <div className="wrapper">
        <div
          className="row flex justify-center items-center
        sm:justify-start"
        >
          <div
            className="col absolute z-10 max-w-md
           text-white text-center
           m-5
           sm:text-left"
          >
            <div className="content p-5">
              <div className="title">
                <h1
                  className="text-3xl font-semibold
                sm:text-5xl
                "
                >
                  <span className="line-yellow text-yellow-400 inline-block">
                    Business-driven
                  </span>{" "}
                  <br />
                  content workflows
                </h1>
              </div>
              <p className="py-5">
                Every business needs to be a content producer. Let Bloom
                Collective show you how to do it right.
              </p>
              <div
                class="flex flex-col gap-5
              sm:flex-row"
              >
                <button
                  className="px-5 py-3 w-full 
              bg-yellow-400
              text-black
              border-2 border-yellow-400
              transition duration-300 ease-in-out
              transform hover:-translate-y-1 hover:scale-105"
                >
                  Learn more
                </button>
                <button className="px-5 py-3 w-full 
                border-2 border-yellow-400
                hover:bg-yellow-400 hover:text-black
                transition duration-300 ease-in-out
                transform hover:-translate-y-1 hover:scale-105">
                  Watch video
                </button>
              </div>
            </div>
          </div>
          <div className="col w-full h-screen">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
