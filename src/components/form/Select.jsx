import { ContainerSelect } from "../../styles/Select"

export const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <ContainerSelect>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Seleciona uma opção</option>

        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}

      </select>

    </ContainerSelect>
  )
}