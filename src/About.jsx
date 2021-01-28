import React from "react";
import web from "../src/images/ankit.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        
        name="About"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        hire="Email"
        text="-Ankit Rikame"
      />

      
      <p className="about">
      <h1> Ankit Rikame | WebDeveloper</h1>
      <h3> Eat | Code | Sleep | Repeat</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        modi officiis nostrum quasi quia aspernatur quaerat, obcaecati natus ea,
        magnam repudiandae velit molestias quae quisquam voluptas beatae vel

        ullam alias quod. Tenetur, officiis quis? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Perferendis modi officiis nostrum quasi
        quia aspernatur quaerat, obcaecati natus ea, magnam repudiandae velit
        molestias quae quisquam voluptas beatae vel ullam alias quod. Tenetur,
        officiis quis

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        modi officiis nostrum quasi quia aspernatur quaerat, obcaecati natus ea,
        
       
      </p>
    </>
  );
};

export default About;
