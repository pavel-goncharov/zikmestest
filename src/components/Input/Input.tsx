import {FC} from 'react';
import styles from '@/components/Input/Input.module.scss';

export enum InputTypes {
  TEXT = 'text'
}

interface IInput {
  type?: InputTypes;
  value: string;
  onChangeHandler: (newValue: string) => void;
  placeholder: string;
}

const Input: FC<IInput> = (props) => {
  const {type, value, onChangeHandler, placeholder} = props;
  return (
    <label className={styles.container}>
      <input
        value={value}
        onChange={e => onChangeHandler(e.target.value)}
        type={type || InputTypes.TEXT}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;