import {FC} from 'react';
import styles from '@/components/Input/Input.module.scss';

export enum InputTypes {
  TEXT = 'text'
}

interface IInput {
  type?: InputTypes;
  placeholder: string;
}

const Input: FC<IInput> = (props) => {
  const {type, placeholder} = props;
  return (
    <label className={styles.container}>
      <input
        type={type || InputTypes.TEXT}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;