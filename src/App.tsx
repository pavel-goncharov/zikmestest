import {FC} from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button, {BtnTypes} from '@/components/Button/Button';

const App: FC = () => {
  return (
    <main>
      <Form>
        <Input
          placeholder='Ваш номер...'
        />
        <Button
          type={BtnTypes.SUBMIT}
          title='Заказать'
          icon={faArrowRight}
          handler={alert}
        />
      </Form>
    </main>
  );
};

export default App;