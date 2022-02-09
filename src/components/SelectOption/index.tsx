import { Container } from "./style";
import { Icon } from "./style";
import { Info } from "./style";
import { Title } from "./style";
import { Description } from "./style";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export const SelectOption = ({ title, icon, description, selected, onClick }:Props) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}