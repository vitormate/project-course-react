import { GeneralContainer } from "../../styles/Container"

export const Container = (props) => {
  return (
    <GeneralContainer
      minHeight={props.minHeight}
      start={props.start}
      column={props.column}>
      {props.children}
    </GeneralContainer>
  )
}