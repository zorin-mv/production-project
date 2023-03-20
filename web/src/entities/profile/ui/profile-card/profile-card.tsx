import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import { getProfileData } from '../../model/selectors/get-profile-data/get-profile-data';
import { getProfileError } from '../../model/selectors/get-profile-error/get-profile-error';
import { getProfileLoading } from '../../model/selectors/get-profile-loading/get-profile-loading';
import classes from './profile-card.module.scss';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  return (
    <div data-testid="profile-card" className={classNames(classes.profileCard, [className])}>
      <div className={classes.header}>
        <Text title={t('Profile')} />
        <Button className={classes.editBtn} theme="outline">
          {t('edit')}
        </Button>
      </div>
      <div className={classes.data}>
        <Input value={data?.firstName} placeholder={t('firstName')} />
        <Input value={data?.lastName} placeholder={t('lastName')} />
      </div>
    </div>
  );
};
