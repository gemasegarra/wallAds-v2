import React, { createContext, useState, useContext, createElement } from "react";

import { Form } from '../StyledCompoents/Forms'

const formContext = createContext();

export function reusableForm({ initialValues, onSubmit, children }) {
  const [formValues, setFormValues] = useState(initialValues);
  return (
    <formContext.Provider value={[formValues, setFormValues]}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(formValues);
        }}
      >
        {children}
      </Form>
    </formContext.Provider>
  );
}

export function Input(props) {
  const [formValues, setFormValues] = useContext(formContext);
  return createElement(props.component || "input", {
    ...props,
    value: formValues[props.name],
    onChange: e => {
      e.preventDefault();
      setFormValues({
        ...formValues,
        [props.name]: e.target.value
      });
    }
  });
}