import { useRoutes } from 'react-router-dom';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import { FormStep4 } from './pages/FormStep4';

export const Router = () => {
  return useRoutes([
    {path: '/', element: <FormStep1 />},
    {path: '/step2', element: <FormStep2 />},
    {path: '/step3', element: <FormStep3 />},
    {path: '/step4', element: <FormStep4 />}
  ]);
}