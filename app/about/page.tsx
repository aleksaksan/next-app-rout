import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Next App",
  description: "about page",
};

const About = () => {
  return (
    <div className="page">
      <h1>Select subitem</h1>
    </div>
  );
};

export default About;
