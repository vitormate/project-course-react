import { ContainerNewProject } from "../styles/NewProject"

import { ProjectForm } from "../components/project/ProjectForm"

export const NewProject = () => {
    return(
      <ContainerNewProject>
        <h1>Criar Projeto</h1>
        <p>Criar seu projeto para depois adicionar os serviços</p>
        <ProjectForm btnText='Criar Projeto'/>
      </ContainerNewProject>
    )
  }