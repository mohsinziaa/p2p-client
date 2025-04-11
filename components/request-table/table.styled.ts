// /components/request-table/table.styled.ts
import { styled } from '@nextui-org/react';

type StyledBadgeProps = {
  type: 'approved' | 'semi-approved' | 'pending' | 'rejected' | 'hold';
};

export const StyledBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'capitalize',
  padding: '$2 $3',
  fontSize: '0.75rem',
  fontWeight: '$bold',
  borderRadius: '6px',
  variants: {
    type: {
      'approved': {
        backgroundColor: '$green50',
        color: '$green700',
        border: '1px solid $green200',
      },
      'semi-approved': { 
        backgroundColor: '$green200',
        color: '$green600',
        border: '1px solid $green200',
      },      
      'pending': {
        backgroundColor: '$yellow100',
        color: '$yellow600',
        border: '1px solid $yellow200'
      },
      'hold': {
        backgroundColor: '$yellow100',
        color: '#DD6B20',
        border: '1px solid $yellow200'
      },
      'rejected': {
        backgroundColor: '$red100',
        color: '$red600',
        border: '1px solid $red200'
      },
    },
  },
});