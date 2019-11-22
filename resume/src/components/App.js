import React from "react";
import { uuid } from "uuidv4";
import JobSection from "./JobSection";
import { data } from "../data";

function App() {
  const renderJobSections = () => {
    return data.jobSections.map(section => {
      const key = uuid();
      return <JobSection {...section} key={key} />;
    });
  };

  return <div>{renderJobSections()}</div>;
}

export default App;
