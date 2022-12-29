import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '24px', //Cant tell why but using the $6 was not working properly, maybe due to Brave Browser
  height: '24px', //Cant tell why but using the $6 was not working properly, maybe due to Brave Browser
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  //data-state is radix-ui provided state to manipulate
  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  //data-state is radix-ui provided state to manipulate
  '&[data-state="checked"]': {
    animation: `${slideIn} 300ms ease-out`,
  },

  //data-state is radix-ui provided state to manipulate
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 300ms ease-out`,
  },
})
