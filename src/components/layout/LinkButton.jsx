import { Link } from "react-router-dom";

import { Button } from "../../styles/LinkButton";

export const LinkButton = ({ to, text }) => {
  return(
    <Button>
      <Link to={to}>{text}</Link>
    </Button>
  )
}