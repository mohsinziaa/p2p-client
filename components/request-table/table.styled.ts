// /components/request-table/table.styled.ts
import { styled } from '@nextui-org/react';

type StatusBadgeProps = {
  type: 'approved' | 'pending' | 'hold' | 'rejected' | 'semi-approved';
};

type PriorityBadgeProps = {
  type: 'normal' | 'urgent';
};

type ErpStatusBadgeProps = {
  type: 'request' | 'quotation' | 'purchase-order' | 'mrn' | 'invoiced' | 'paid';
};

export const StatusBadge = styled('span', {
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

export const PriorityBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'capitalize',
  padding: '$2 $3',
  fontSize: '0.75rem',
  fontWeight: '$bold',
  borderRadius: '6px',
  variants: {
    type: {
      'normal': {
        backgroundColor: '$blue50',
        color: '$blue700',
        border: '1px solid $blue200',
      },
      'urgent': {
        backgroundColor: '$red100',
        color: '$red700',
        border: '1px solid $red200',
      },
    },
  },
});

export const ErpStatusBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'capitalize',
  padding: '$2 $3',
  fontSize: '0.75rem',
  fontWeight: '$bold',
  borderRadius: '6px',
  variants: {
    type: {
      'request': {
        backgroundColor: '$gray100',
        color: '$gray700',
        border: '1px solid $gray200',
      },
      'quotation': {
        backgroundColor: '$purple100',
        color: '$purple700',
        border: '1px solid $purple200',
      },
      'purchase-order': {
        backgroundColor: '$blue100',
        color: '$blue700',
        border: '1px solid $blue200',
      },
      'mrn': {
        backgroundColor: '$yellow100',
        color: '$yellow700',
        border: '1px solid $yellow200',
      },
      'invoiced': {
        backgroundColor: '$green100',
        color: '$green700',
        border: '1px solid $green200',
      },
      'paid': {
        backgroundColor: '$green200',
        color: '$green800',
        border: '1px solid $green300',
      },
    },
  },
});