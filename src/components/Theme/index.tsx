import { ReactNode } from "react";
import * as C from "./style";
import { Header } from '../Header';
import { Footer } from "../Footer";
import { SidebarItem } from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
}

export const Theme = ({ children }:Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>

            <SidebarItem 
              title='Pessoal'
              description='Se indentifique'
              icon='profile'
              path='/'
              active={state.currentStep === 1}
            />

            <SidebarItem 
              title='Profissional'
              description='Seu nível'
              icon='book'
              path='/step2'
              active={state.currentStep === 2}
            />

            <SidebarItem 
              title='Contatos'
              description='Como te achar'
              icon='email'
              path='/step3'
              active={state.currentStep === 3}
            />

            <SidebarItem 
              title='Dados'
              description='Informações Cadastradas'
              icon='data'
              path='/step4'
              active={state.currentStep === 4}
            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
        <Footer />
      </C.Area>
    </C.Container>
  );
}