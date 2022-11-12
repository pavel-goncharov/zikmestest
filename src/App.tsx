import {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import '@/styles/styles.module.scss';

const App: FC = () => {
  return (
    <main>
      <FontAwesomeIcon icon={faArrowRight}/>
    </main>
  );
};

export default App;