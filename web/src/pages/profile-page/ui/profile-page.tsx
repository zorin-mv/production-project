import { profileReducer } from 'entities/profile/model/slice/profile-slice';
import { classNames } from 'shared/lib/class-names';
import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader';

import classes from './profile-page.module.scss';

interface IProfilePageProps {
  className?: string;
}

const redusersList: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: IProfilePageProps) => (
  <DynamicModuleLoader reducers={redusersList}>
    <div
      data-testid="profile-page"
      className={classNames(classes.profilePage, [className])}
    />
  </DynamicModuleLoader>
);

export default ProfilePage;
