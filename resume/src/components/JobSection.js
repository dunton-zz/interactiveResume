import React from "react";
import { uuid } from "uuidv4";

const JobSection = props => {
  const { title, company, dates, location, responsibilities } = props;

  const renderResponsibilities = () => {
    return responsibilities.map(text => {
      const key = uuid();
      return <li key={key}>{text}</li>;
    });
  };
  console.log(props);
  return (
    <div>
      <h1>{company}</h1>
      <h2>{title}</h2>
      <h4>{location}</h4>
      <h3>{dates}</h3>
      <ul>{renderResponsibilities()}</ul>
    </div>
  );
};

export default JobSection;
