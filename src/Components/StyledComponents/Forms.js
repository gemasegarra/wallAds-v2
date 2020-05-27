import styled from 'styled-components';

export const Login = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const Form = styled.form`
  border: 1px solid #db7093; 
  border-radius: 3px;
  padding: 2.4rem; 
  margin-bottom: 1rem;
  background-color: white;
  
  h1 {
    color: #8e3b56;
  }
`;

export const InputField = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    margin-right:1rem;
  }
  input {
    border: none;
    border-bottom: 1px solid #db7093;
    outline: none;
    -webkit-appearance:none;
  } 
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #db7093;
  font-size: 1rem;
  margin: auto;
  padding: 0.25rem 1rem;
  border: 1px solid #db7093;
  border-radius: 3px;
  &:hover {
    background-color: #F6F6F6;
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const FilterContainer = styled.div`
  padding: 1rem;
  background-color: #F6F6F6;
`;

export const SearchForm = styled.form`
  max-width: 80%;
  margin: auto;
`;

export const SearchContainer = styled.div`
  padding: 1rem;
  border-radius: 40px;
  background-color: white;
    @media (max-width: 425px){
      padding: 10px;    }
  input {
    width: calc(100% - 200px);
    margin-left:40px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #db7093;
      @media (max-width: 425px){
        width: 50%;
        margin-left:20px;
    }
  }
  button {
    margin-left: 20px;
    padding: 7px 20px;
    border: none;
    border-radius: 3px;
    background-color: #db7093;
    color: #F6F6F6;
    cursor: pointer;
    font-size: 1rem;
      @media (max-width: 425px){
        padding: 3px 10px;
        font-size: 0.5rem;
  }
  }
`;

export const SelectForm = styled.div`
  margin: 1rem;
`;
