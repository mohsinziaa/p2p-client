// /components/request-table/render-cell.tsx
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { StatusBadge, PriorityBadge, ErpStatusBadge } from './table.styled';
import { RequestHeader, RequestLine } from './data';

interface RequestLineRowProps {
  line: RequestLine;
  request: RequestHeader;
  lineIndex: number;
  totalLines: number;
}

export const RequestLineRow: React.FC<RequestLineRowProps> = ({ line, request, lineIndex, totalLines }) => {
  return (
    <Flex
      css={{
        padding: '$3',
        borderBottom: lineIndex < totalLines - 1 ? '1px solid $border' : 'none',
        alignItems: 'center',
        fontSize: '$sm'
      }}
    >
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left', pl: '$2' }}>{request.requestNumber}</Box>
      <Box css={{ flex: 1, minWidth: '90px', textAlign: 'left' }}>{line.itemId}</Box>
      <Box css={{ flex: 1, minWidth: '140px', textAlign: 'left' }}>{line.itemName}</Box>
      <Box css={{ flex: 1, minWidth: '160px', textAlign: 'left' }}>{line.remarks}</Box>
      <Box css={{ flex: 0.5, minWidth: '60px', textAlign: 'left' }}>{line.quantity}</Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>
        <StatusBadge type={line.requestItemStatus}>
          {line.requestItemStatus.charAt(0).toUpperCase() + line.requestItemStatus.slice(1)}
        </StatusBadge>
      </Box>
    </Flex>
  );
};

interface RequestHeaderRowProps {
  request: RequestHeader;
  index: number;
  expanded: boolean;
  onClick: () => void;
}

export const RequestHeaderRow: React.FC<RequestHeaderRowProps> = ({ request, index, expanded, onClick }) => {
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
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left', pl: '$2' }}>{request.requestNumber}</Box>
      <Box css={{ flex: 0.9, minWidth: '100px', textAlign: 'left' }}>{request.createdDate}</Box>
      <Box css={{ flex: 1, minWidth: '110px', textAlign: 'left' }}>{request.createdBy}</Box>
      <Box css={{ flex: 0.8, minWidth: '90px', textAlign: 'left' }}>{request.siteId}</Box>
      <Box css={{ flex: 0.7, minWidth: '80px', textAlign: 'left' }}>
        <PriorityBadge type={request.requestPriority}>
          {request.requestPriority.charAt(0).toUpperCase() + request.requestPriority.slice(1)}
        </PriorityBadge>
      </Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>
        <StatusBadge type={request.requestStatus}>
          {request.requestStatus.charAt(0).toUpperCase() + request.requestStatus.slice(1)}
        </StatusBadge>
      </Box>
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left' }}>
        <ErpStatusBadge type={request.erpStatus}>
          {request.erpStatus.split('-')
          .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
        </ErpStatusBadge>
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
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left', pl: '$2' }}>Request #</Box>
      <Box css={{ flex: 0.9, minWidth: '100px', textAlign: 'left' }}>Created Date</Box>
      <Box css={{ flex: 1, minWidth: '110px', textAlign: 'left' }}>Created By</Box>
      <Box css={{ flex: 0.8, minWidth: '90px', textAlign: 'left' }}>Site ID</Box>
      <Box css={{ flex: 0.7, minWidth: '80px', textAlign: 'left' }}>Priority</Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>Status</Box>
      <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left', pr: '$8'  }}>ERP Status</Box>
    </Flex>
  );
};

export const RequestLinesTableHeader: React.FC = () => {
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
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left', pl: '$2' }}>Request #</Box>
      <Box css={{ flex: 1, minWidth: '90px', textAlign: 'left' }}>Item ID</Box>
      <Box css={{ flex: 1, minWidth: '140px', textAlign: 'left' }}>Item Name</Box>
      <Box css={{ flex: 1, minWidth: '160px', textAlign: 'left' }}>Remarks</Box>
      <Box css={{ flex: 0.5, minWidth: '60px', textAlign: 'left' }}>Qty</Box>
      <Box css={{ flex: 0.8, minWidth: '100px', textAlign: 'left' }}>Status</Box>
    </Flex>
  );
};