import {FC, useState, MouseEvent} from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button, {BtnTypes} from '@/components/Button/Button';
import {IArgsPost, IPost} from '@/types/post';

const App: FC = () => {
  const [phone, setPhone] = useState<string>('');
  
  async function getResponse(e: MouseEvent<HTMLButtonElement>, phoneArg: string): Promise<void> {
    e.preventDefault();
    const url: string = 'https://jsonplaceholder.typicode.com/posts';
    const newPost: IArgsPost = {title: phoneArg, body: 'bodyPost', userId: 11};
    
    const response: IPost = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json());
    
    setPhone('');
  }

  function onChangeHandler(newPhone: string): void {
    setPhone(newPhone);
  }

  return (
    <main>
      <Form>
        <Input
          value={phone}
          onChangeHandler={onChangeHandler}
          placeholder='Ваш номер...'
        />
        <Button
          type={BtnTypes.SUBMIT}
          title='Заказать'
          icon={faArrowRight}
          handler={e => getResponse(e, phone)}
        />
      </Form>
    </main>
  );
};

export default App;