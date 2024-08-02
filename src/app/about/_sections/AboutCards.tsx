import React from "react";

function AboutCard({ i }: { i: number }) {
  return (
    <div className="text-gray-600 min-h-screen w-full">
      <div className={`py-24 mx-auto flex md:flex-row flex-col gap-8`}>
        <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/460x500"
          />
        </div>
        <div
          className={`flex flex-col flex-wrap ${i % 2 === 0 ? "order-first" : "order-last"} lg:py-6 w-full lg:text-left text-center`}
        >
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg font-medium mb-3">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutCards() {
  return (
    <section className="min-h-screen w-full flex flex-col py-16">
      {[0, 1, 2].map((v, i) => (
        <AboutCard key={i} i={i} />
      ))}
    </section>
  );
}
