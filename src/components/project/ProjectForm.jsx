import { ContainerForm } from "../../styles/ProjectForm"

import { Input } from "../form/Input";
import { Select } from "../form/Select";
import { SubmitButton } from "../form/SubmitButton";

export const ProjectForm = ({ btnText }) => {
  return (
    <>
      <ContainerForm>
        <Input
          type='text'
          text='Nome do projeto'
          name='name'
          placeholder='Insira o nome do projeto'
        />

        <Input
          type='number'
          text='Orçamento do projeto'
          name='budget'
          placeholder='Insira o orçamento do projeto'
        />

        <Select
          name='category_id'
          text='Selecione uma categoria'
        />

        <SubmitButton text={btnText}/>
      </ContainerForm>
    </>
  )
}