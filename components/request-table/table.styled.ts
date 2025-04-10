// /components/request-table/table.styled.ts
import { styled } from '@nextui-org/react';

type StyledBadgeProps = {
  type: 'approved' | 'pending' | 'rejected' | 'hold';
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
      approved: {
        backgroundColor: '$green100',
        color: '$green600',
      },
      pending: {
        backgroundColor: '$yellow100',
        color: '$yellow600',
      },
      hold: {
        backgroundColor: '$yellow100',
        color: '#DD6B20',
      },
      rejected: {
        backgroundColor: '$red100',
        color: '$red600',
      },
    },
  },
});