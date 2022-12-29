import { Box, BoxProps, Text } from '@mecbonjourno-ui/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Teste de elemento Box</Text>,
  },
  argTypes: {
    control: {
      type: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
