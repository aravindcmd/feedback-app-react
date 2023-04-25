import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/share/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>AboutPage</h1>
        <p>
          This is a react app to leave the feedback for the product or service
        </p>
        <p>v1</p>
        <Link to="/">Back to home</Link>
      </div>
      AboutPage
    </Card>
  );
}

export default AboutPage;
