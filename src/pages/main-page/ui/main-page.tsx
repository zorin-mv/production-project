import { Counter } from 'entities/counter-component';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('mainPage')}</div>
      <Counter />
    </div>
  );
};

export default MainPage;
