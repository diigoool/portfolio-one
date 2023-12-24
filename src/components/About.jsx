import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non minus
          quo necessitatibus inventore, fugit asperiores, repellat cupiditate
          corrupti animi, quae enim eligendi hic in libero! Similique quis
          eligendi, eveniet optio sint vero tenetur quo earum adipisci
          laboriosam eaque exercitationem molestias reprehenderit voluptatem in
          debitis pariatur illum soluta vitae inventore cumque.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          reprehenderit cumque assumenda similique fugit. Non, molestiae.
          Necessitatibus earum soluta maxime, sunt aperiam illo voluptas sit
          natus ullam officia voluptate delectus est dignissimos blanditiis
          mollitia molestiae expedita, ducimus nihil. Temporibus, nisi ab
          commodi veniam esse in accusantium laboriosam voluptatibus impedit
          perferendis?
        </p>
      </div>
    </div>
  );
};

export default About;
