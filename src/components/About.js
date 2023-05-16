import React from "react";

const About = () => {
    return <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-12">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-10">
               Hi, I'm Shaswat Pradhan a web developer and UI/UX designer with a passion for creating beautiful,functional and user-centred didgital experiences.I am always lookinf for new and innovative ways to bring my client's visions to life.

               I believe that design is about more than just making things look pretty.
            </p>

            <br />

            <p className="text-xl">
            After working with all the javascript technologies like Reactjs, Nodejs, Spring Boot, Moongose. I have a pretty good idea about everything in Frontend Development and software development.
            
            Apart from professional life, I am a Odisha guy and I love to meet, hangout with new people, and travel every where.
            </p>
        </div>
    </div>;
};

export default About;