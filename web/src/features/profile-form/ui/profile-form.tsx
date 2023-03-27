import { yupResolver } from '@hookform/resolvers/yup';
import { getProfileData, IProfile, profileActions, useFetchProfileByTokenQuery } from 'entities/profile';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { errorAdapter } from 'shared/lib/error-adapter/error-adapter';

import { profileFormSchema } from '../model/constants/form-validation';
import { ProfileCard } from './profile-card';
import classes from './profile-form.module.scss';
import { ProfileHeader } from './profile-header';

interface IProfileFormProps {
  className?: string;
}

export const ProfileForm = ({ className }: IProfileFormProps) => {
  const { isLoading, error } = useFetchProfileByTokenQuery();
  const data = useSelector(getProfileData);
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    values: data,
    mode: 'onTouched',
    resolver: yupResolver(profileFormSchema),
  });

  const onSubmit = (data: IProfile) => {
    dispatch(profileActions.updateProfile(data));
    dispatch(profileActions.setReadonly(true));
  };

  const errorWithoutEmptyProfile = useMemo(() => {
    if (error && 'status' in error) {
      return error.status === 409 ? undefined : error;
    }

    return error;
  }, [error]);

  return (
    <div data-testid="profile-form" className={classNames(classes.profileForm, [className])}>
      <ProfileHeader formReset={reset} onSubmit={handleSubmit(onSubmit)} />
      <ProfileCard
        isLoading={isLoading}
        error={errorWithoutEmptyProfile && error && errorAdapter(error)}
        control={control}
        inputErrors={errors}
      />
    </div>
  );
};
