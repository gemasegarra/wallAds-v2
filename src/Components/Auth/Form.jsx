import React  from 'react';
import PropTypes from 'prop-types'
import { InputField } from '../StyledComponents/Forms';


const MyForm = ({
  name,
  type,
  onChange,
  onSubmit,
  children,
  label,
  ...props
}) => {
  
  return (
    <> 
      <InputField>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
      />
      </InputField>
    </>
  )
}

MyForm.defaultProps = {
  type: "text",
  className: ""
}

MyForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default MyForm;