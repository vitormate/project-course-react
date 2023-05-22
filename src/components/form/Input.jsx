import { ContainerInput } from "../../styles/Input"

export const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <ContainerInput>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </ContainerInput>
  )
}