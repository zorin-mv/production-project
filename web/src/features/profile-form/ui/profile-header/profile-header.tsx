import { getProfileReadonly, IProfile, profileActions } from 'entities/profile';
import { useCallback } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { TextComponent } from 'shared/ui/text';

import classes from './profile-header.module.scss';

interface IProfileHeaderProps {
  formReset?: UseFormReset<IProfile>;
  onSubmit?: () => void;
  className?: string;
}

export const ProfileHeader = ({ className, formReset, onSubmit }: IProfileHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    formReset?.();
    dispatch(profileActions.setReadonly(true));
  }, [formReset, dispatch]);

  return (
    <div data-testid="profile-header" className={classNames(classes.profileHeader, [className])}>
      <TextComponent title={t('Profile')} />
      {readonly ? (
        <Button theme="outline" onClick={onEdit}>
          {t('edit')}
        </Button>
      ) : (
        <div>
          <Button theme="outlineRed" onClick={onCancelEdit}>
            {t('cancel')}
          </Button>
          <Button className={classes.saveBtn} theme="outline" onClick={onSubmit}>
            {t('save')}
          </Button>
        </div>
      )}
    </div>
  );
};
