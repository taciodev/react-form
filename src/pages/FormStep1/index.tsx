import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state,dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      alert('Preencha seus dados.')
    }
  }
  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }                                                                                   
  return (
    <Theme>
      <Container>
        <p>Passo 1/4</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label>
            Seu nome Completo
          <input 
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
}