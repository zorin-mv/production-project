import { ErrorMessage } from '@hookform/error-message';
import { getProfileReadonly } from 'entities/profile/model/selectors/get-profile-readonly/get-profile-readonly';
import { IProfile } from 'entities/profile/model/types/profle';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Input } from 'shared/ui/input';
import { Spinner } from 'shared/ui/spinner';
import { TextComponent } from 'shared/ui/text';

import classes from './profile-card.module.scss';

interface IProfileCardProps {
  control?: Control<IProfile, any>;
  className?: string;
  isLoading?: boolean;
  error?: string;
  inputErrors?: FieldErrors<IProfile>;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const { className, error, isLoading, control, inputErrors } = props;

  const { t } = useTranslation('profile');
  const { t: commonT } = useTranslation();
  const readonly = useSelector(getProfileReadonly);

  if (error) {
    return (
      <div data-testid="profile-card" className={classNames(classes.profileCard, [className, classes.error])}>
        <TextComponent theme="error" text={error} />
      </div>
    );
  }

  return (
    <div
      data-testid="profile-card"
      className={classNames(classes.profileCard, [className], { [classes.loading]: isLoading })}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.data}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { ref, ...otherField } }) => (
              <Input placeholder={t('firstName')} readonly={readonly} inputRef={ref} {...otherField} />
            )}
            name="firstName"
          />
          <ErrorMessage
            errors={inputErrors}
            name="firstName"
            render={({ message }) => <TextComponent text={commonT(message)} theme="error" />}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { ref, ...otherField } }) => (
              <Input placeholder={t('lastName')} readonly={readonly} inputRef={ref} {...otherField} />
            )}
            name="lastName"
          />
          <ErrorMessage
            errors={inputErrors}
            name="lastName"
            render={({ message }) => <TextComponent text={commonT(message)} theme="error" />}
          />
        </div>
      )}
    </div>
  );
};
