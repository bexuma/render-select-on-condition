import React from "react";

import { Select } from "../shared";

const renderInput = (details, form) => {
  const { name, inputType } = details;

  switch (inputType) {
    case "select":
      return <Select key={name} details={details} form={form} />;
    default:
      return <p key={911}>Error in utils/renderInput.js</p>;
  }
};

export default renderInput;
