import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/680dd0af429e411905b9935c/1ipqvebp9";
    script.async = true;
    script.charSet = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chat;
