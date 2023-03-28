import { Meta } from '@storybook/angular';
import { BytButtonComponent } from './byt-button.component';

export default {
  title: 'BytButtonComponent',
  component: BytButtonComponent,
} as Meta<BytButtonComponent>;

export const Primary = {
  render: (args: BytButtonComponent) => ({
    props: args,
  }),
  args: {},
};
