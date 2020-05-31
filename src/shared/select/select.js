/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
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

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Select = ({ details, form }) => {
  const {
    name,
    label,
    // defaultValue,
    options,
    resetOnChange,
    // renderIfPresent,
    required,
  } = details;

  const { control, errors: formErrors, watch, setValue } = form;

  const resetOnChangeListener = watch(resetOnChange);
  const resetOnChangeListenerPrevious = usePrevious(resetOnChangeListener);

  // reset the value if the parent input has changed
  useEffect(() => {
    if (
      resetOnChange &&
      resetOnChangeListenerPrevious &&
      resetOnChangeListenerPrevious !== resetOnChangeListener
    ) {
      // console.log(resetOnChangeListener);
      // console.log(watch(resetOnChange));
      // console.log(`Nullify ${name}`);
      setValue(name, null);
    }
  }, [resetOnChangeListenerPrevious, resetOnChangeListener]);

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
