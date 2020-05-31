import React from "react";
import { useForm } from "react-hook-form";

import template from "./template";
import { Container, FormContainer, Button } from "./styled";
import { renderInput } from "../../utils";

const Form = () => {
  const form = useForm({
    defaultValues: {
      facultyId: {
        value: 1,
        label: "Факультет 1",
      },
      specialityId: {
        value: 1,
        label: "Специальность 1",
      },
      groupId: {
        value: 2,
        label: "Группа 2",
      },
    },
  });

  const onSubmit = (data) => {
    console.log("result", data);
  };

  return (
    <Container>
      <FormContainer onSubmit={form.handleSubmit(onSubmit)}>
        <h1>Ваш профиль</h1>

        {template.map((payload) => renderInput(payload, form))}

        <Button type="submit">Внести изменения</Button>
      </FormContainer>
    </Container>
  );
};

export default Form;
