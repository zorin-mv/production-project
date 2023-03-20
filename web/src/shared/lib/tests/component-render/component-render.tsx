import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/store-provider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { IStateSchema } from 'shared/config/store';

export interface IComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState} withoutPersist>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
