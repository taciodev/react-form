import { Container } from "./style";
import { State } from '../../types/State'

type Props = {
  data: State;
}

export const FinalData = ({ data }:Props) => {
  return (
    <Container>
      <div>
        Nome:
        <span>{data.name}</span>
      </div> 
      <div>
        Level:
        <span>{data.level}</span>
      </div>
      <div>
        Email:
        <span>{data.email}</span>
      </div>
      <div>
        Github:
        <span>{data.github}</span>
      </div>  
    </Container>
  );
}