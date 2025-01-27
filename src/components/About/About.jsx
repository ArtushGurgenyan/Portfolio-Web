import "./about.style.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("Web Developer");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Web Developer" ? "Creative Design" : "Web Developer"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typingEffect = async () => {
      setDisplayedText("");
      setIsTyping(true);

      for (let i = 0; i < text.length; i++) {
        setDisplayedText((prev) => prev + text[i]);
        if (
          displayedText === "Web Developer" ||
          displayedText === "Creative Design"
        ) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      setIsTyping(false);
    };

    typingEffect();
  }, [text]);

  return (
    <div className="container-about">
      <h1>Hello I`m Artush</h1>
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        earum fugiat quisquam. Ea, possimus? Odit ex mollitia esse ad error,
        alias illo necessitatibus et maiores libero laborum, delectus
        consequuntur."
      </p>
      <h2>
        Lorem ipsum dolor
        <motion.span
          key={text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          {` ${displayedText}`}
        </motion.span>
      </h2>
    </div>
  );
};

export default About;
