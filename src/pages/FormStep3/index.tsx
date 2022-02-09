import { Container } from './style';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state,dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      navigate('/step4');
    } else {
      alert('Preencha seus dados.')
    }
  }
  
  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }                                                                                   
  const handleGithubChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }                                                                                   
  return (
    <Theme>
      <Container>
        <p>Passo 3/4</p>
        <h1>Legal {state.name}, onde te achamos ?</h1>
        <p>Preencha com os seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
            Qual seu e-mail?
          <input 
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
            Qual seu GitHub?
          <input 
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to='/step2' className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
}