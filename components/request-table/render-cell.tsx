// /components/request-table/render-cell.tsx
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { StyledBadge } from './table.styled';
import { Item, PurchaseRequest } from './data';

interface ItemRowProps {
  item: Item;
  request: PurchaseRequest;
  itemIndex: number;
  totalItems: number;
}

export const ItemRow: React.FC<ItemRowProps> = ({ item, request, itemIndex, totalItems }) => {
  return (
    <Flex
      css={{
        padding: '$3',
        borderBottom: itemIndex < totalItems - 1 ? '1px solid $border' : 'none',
        alignItems: 'center',
        fontSize: '$sm'
      }}
    >
      <Box css={{ flex: 0.8, textAlign: 'left', pl: '$2' }}>{request.reqNumber}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{request.generatedBy}</Box>
      <Box css={{ flex: 1.5, textAlign: 'left' }}>{item.name}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.category}</Box>
      <Box css={{ flex: 0.6, textAlign: 'left' }}>{item.quantity}</Box>
      <Box css={{ flex: 0.8, textAlign: 'left' }}>${item.price}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.supplier}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.deliveryDate}</Box>
      <Box css={{ flex: 0.8, textAlign: 'left' }}>${item.quantity * item.price}</Box>
    </Flex>
  );
};

interface RequestRowProps {
  request: PurchaseRequest;
  index: number;
  expanded: boolean;
  onClick: () => void;
}

export const RequestRow: React.FC<RequestRowProps> = ({ request, index, expanded, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      css={{
        width: '100%',
        padding: '$4',
        borderBottom: expanded ? '1px solid $border' : 'none',
        fontSize: '$sm',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '$accents0',
        },
      }}
    >
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left', pl: '$2' }}>{request.reqNumber}</Box>
      <Box css={{ flex: 1, minWidth: '100px', textAlign: 'left' }}>{request.site}</Box>
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left' }}>{request.dateCreated}</Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>{request.items.length} items</Box>
      <Box css={{ flex: 0.8, minWidth: '80px', textAlign: 'left' }}>
        <StyledBadge type={request.status}>
          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
        </StyledBadge>
      </Box>
    </Flex>
  );
};

export const TableHeader: React.FC = () => {
  return (
    <Flex
      css={{
        backgroundColor: '$accents1',
        padding: '$4',
        borderRadius: '$sm $sm 0 0',
        fontWeight: '$semibold',
        borderBottom: '1px solid $border',
        fontSize: '$sm',
      }}
    >
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left', pl: '$2' }}>Req Number</Box>
      <Box css={{ flex: 1, minWidth: '100px', textAlign: 'left' }}>Site</Box>
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left' }}>Date Created</Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>No. of Items</Box>
      <Box css={{ flex: 0.8, minWidth: '80px', textAlign: 'left', pr: '$9' }}>Status</Box>
    </Flex>
  );
};

export const ItemsTableHeader: React.FC = () => {
  return (
    <Flex
      css={{
        backgroundColor: '$accents1',
        padding: '$3',
        borderRadius: '$sm',
        fontWeight: '$semibold',
        mb: '$2',
        fontSize: '$sm'
      }}
    >
      <Box css={{ flex: 0.8, textAlign: 'left', pl: '$2' }}>Req No.</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>Req By</Box>
      <Box css={{ flex: 1.5, textAlign: 'left' }}>Item Name</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>Category</Box>
      <Box css={{ flex: 0.6, textAlign: 'left' }}>Qty</Box>
      <Box css={{ flex: 0.8, textAlign: 'left' }}>Unit Price</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>Supplier</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>Delivery Date</Box>
      <Box css={{ flex: 0.8, textAlign: 'left' }}>Total</Box>
    </Flex>
  );
};