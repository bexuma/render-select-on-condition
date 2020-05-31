/* eslint-disable react/prop-types */
import React from "react";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";

import { Row, Label, Content, ErrorMessage } from "./styled";

const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    fontStyle: "italic",
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

const Select = ({ details, form }) => {
  const {
    name,
    label,
    defaultValue,
    options,
    resetOnChange,
    renderIfPresent,
    required,
  } = details;
  const { control, errors: formErrors, setValue, watch, unregister } = form;

  return (
    <Row>
      <Label>
        {label}
        {required && <span>*</span>}
      </Label>
      <Content>
        <Controller
          as={<ReactSelect styles={customStyles} options={options} />}
          name={name}
          control={control}
          onChange={([selected]) => selected}
          defaultValue={defaultValue}
          placeholder="Выбрать из списка"
          rules={{ required }}
        />

        <ErrorMessage>
          {formErrors[name] &&
            formErrors[name].type === "required" &&
            "Пожалуйста, выберите один из вариантов."}
        </ErrorMessage>
      </Content>
    </Row>
  );
};

export default Select;
