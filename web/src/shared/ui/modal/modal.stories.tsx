import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
  quibusdam rerum excepturi, cum consequuntur nostrum autem a in
  voluptatum magnam voluptas asperiores tempore itaque? Dolore soluta
  reprehenderit ipsum, iure adipisci, distinctio voluptatem fuga
  molestias, praesentium velit nobis.`,
  isOpen: true,
};
Default.parameters = { loki: { skip: true } };
