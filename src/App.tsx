import {FC, useState, MouseEvent} from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button, {BtnTypes} from '@/components/Button/Button';
import Notification, {NotificationModes} from '@/components/Notification/Notification';
import {IArgsPost, IPost} from '@/types/post';
import '@/App.module.scss';

const App: FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [notification, setNotification] = useState<string>('');
  const [notificationClass, setNotificationClass] = useState<NotificationModes>(NotificationModes.INIT);
  
  async function getResponse(e: MouseEvent<HTMLButtonElement>, phoneArg: string): Promise<void> {
    e.preventDefault();
    if(phoneArg) {
      const url: string = 'https://jsonplaceholder.typicode.com/posts';
      const newPost: IArgsPost = {title: phoneArg, body: 'bodyPost', userId: 11};
      
      const response: IPost = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }).then(res => res.json());
      
      const message: string = `JSONPlaceholder создал пост #${response.id} с заголовком ${response.title}`;
      setNotification(message);
      setNotificationClass(NotificationModes.MSG);
    } else {
      const message: string = `Поле должно быть заполнено!`;
      setNotification(message);
      setNotificationClass(NotificationModes.ERROR);
    }
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
      <Notification
        title={notification}
        mode={notificationClass}
      />
    </main>
  );
};

export default App;