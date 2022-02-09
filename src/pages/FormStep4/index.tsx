import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { FinalData } from '../../components/FinalData';

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state,dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else if (state.email === '' && state.github === '') {
      navigate('/step3');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  const handleFinishStep = () => {
    alert('Os dados foram enviados!');
  }
                               
  return (
    <Theme>
      <Container>
        <p>Passo 4/4</p>
        <h1>Confirme seus dados</h1>
        <p>Caso seus queira alterar volte algumas etapas.</p>

        <hr />
        
        <FinalData 
          data={state}
        />

        <button onClick={handleFinishStep}>Finalizar</button>
      </Container>
    </Theme>
  );
}