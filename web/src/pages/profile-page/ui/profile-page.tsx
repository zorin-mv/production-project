import { profileReducer } from 'entities/profile';
import { ProfileForm } from 'features/profile-form';
import { classNames } from 'shared/lib/class-names';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/dynamic-module-loader';

import classes from './profile-page.module.scss';

interface IProfilePageProps {
  className?: string;
}

const redusersList: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: IProfilePageProps) => (
  <DynamicModuleLoader reducers={redusersList}>
    <div data-testid="profile-page" className={classNames(classes.profilePage, [className])}>
      <ProfileForm />
    </div>
  </DynamicModuleLoader>
);

export default ProfilePage;
