import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface IStorybookFromProviderProps {
  children: ReactNode;
}

const StorybookFormProvider = ({ children }: IStorybookFromProviderProps) => {
  const methods = useForm();
  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export const withRHF =
  () =>
  (Story: FC): StoryFnReactReturnType =>
    (
      <StorybookFormProvider>
        <Story />
      </StorybookFormProvider>
    );
