import savings from '../img/savings.svg'

import { NavBar } from '../components/layout/NavBar'
import { Footer } from '../components/layout/Footer'

import { LinkButton } from '../components/layout/LinkButton'
import { ContainerHome } from '../styles/Home'

export const Home = () => {
  return(
    <>
      <ContainerHome>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to='/newproject' text='Criar Projeto' />
        <img src={savings} alt='Costs'></img>
      </ContainerHome>
    </>
  )
}