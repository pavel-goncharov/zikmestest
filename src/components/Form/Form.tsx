import {FC, ReactNode} from 'react';
import '@/components/Form/Form.module.scss';

interface IForm {
  children: ReactNode;
}

const Form: FC<IForm> = (props) => {
  const {children} = props;
  return (
    <form>{children}</form>
  );
}

export default Form;