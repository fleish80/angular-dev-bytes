import {Meta, Story} from '@storybook/angular';
import {BytButtonComponent} from './byt-button.component';

export default {
  title: 'BytButtonComponent',
  component: BytButtonComponent,
} as Meta<BytButtonComponent>;

const Template: Story<BytButtonComponent> = (args: BytButtonComponent) => ({
  moduleMetadata: {
    imports: [BytButtonComponent]
  },
  template: `<button byt-button [color]="color">Primary</button>`,
  props: {
    ...args
  }
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
}

export const NegativePrimary = Template.bind({});
NegativePrimary.args = {
  color: 'negative'
}

// export const PrimaryAnother = {
//   render: (args: BytButtonComponent) => ({
//     props: args,
//   }),
//   args: {color: 'primary'},
//   // moduleMetadata: {
//   //   imports: [BytButtonComponent]
//   // },
//   // template: `<button byt-button [color]="color">Primary</button>`
// };
