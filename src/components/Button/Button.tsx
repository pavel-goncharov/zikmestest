import {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

import styles from '@/components/Button/Button.module.scss';

export enum BtnTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

interface IButton {
  type?: BtnTypes;
  title?: string;
  icon?: IconDefinition;
  handler: (arg: any) => void;
}

const Button: FC<IButton> = (props) => {
  const {type, title, icon, handler} = props;
  return (
    <button
      type={type || BtnTypes.BUTTON}
      onClick={handler}
      className={styles.button}
    >
      <div className={styles.container}>
        {title && <span className={styles.title}>{title}</span>}
        {icon && <FontAwesomeIcon icon={icon} className={styles.icon}/>}
      </div>
    </button>
  );
}

export default Button;