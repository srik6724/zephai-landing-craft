import { useEffect } from "react";

const DemoCalendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/zephaiautomation"
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
  );
};

export default DemoCalendar;