// /components/content.tsx
import React, { useState } from 'react';
import { Text, Link, Button, Input } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { StatusCard } from './card';
import { PurchaseTable } from '../request-table/table';
import { DotsIcon } from '../icons/accounts/dots-icon';
import { ExportIcon } from '../icons/accounts/export-icon';
import { InfoIcon } from '../icons/accounts/info-icon';
import { TrashIcon } from '../icons/accounts/trash-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { AddRequest } from './add-request';
import { requestHeaders } from '../request-table/data';

type StatusFilter = 'all' | 'approved' | 'semi-approved' | 'pending' | 'hold' | 'rejected';

// Calculate the total number of requests (all statuses)
const totalRequests = requestHeaders.length;

// Calculate approved requests
const approvedRequests = requestHeaders.filter(
  request => request.requestStatus === 'approved'
).length;

// Calculate pending requests
const pendingRequests = requestHeaders.filter(
  request => request.requestStatus === 'pending'
).length;

// Calculate on hold requests
const onHoldRequests = requestHeaders.filter(
  request => request.requestStatus === 'hold'
).length;

// Calculate rejected requests
const rejectedRequests = requestHeaders.filter(
  request => request.requestStatus === 'rejected'
).length;

// Calculate semi approved requests
const semiApprovedRequests = requestHeaders.filter(
  request => request.requestStatus === 'semi-approved'
).length;

export const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const handleSearchChange = (e: React.ChangeEvent<any>) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusClick = (status: StatusFilter) => {
    console.log(`Status card clicked: ${status}`);
    setStatusFilter(status);
  };

  return (
    <Box css={{ overflow: 'hidden', height: '100%', px: '$6', '@md': { px: '$12' } }}>
      <Flex direction={'column'} gap="8" css={{ mt: '$6' }}>
        <Box>
          <Text
            h3
            css={{
              textAlign: 'center',
              '@sm': { textAlign: 'inherit' },
              mb: '$4'
            }}
          >
            Purchase Status
          </Text>
          <Flex
            css={{
              gap: '$4',
              '@md': { gap: '$8' },
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > *': {
                width: 'calc(50% - $4)',
                '@xs': { width: 'calc(33.33% - $4)' },
                '@sm': { width: 'auto', flex: '1 1 0%' },
                minWidth: '120px',
              }
            }}
          >
            <StatusCard 
              title="Requests" 
              value={totalRequests} 
              color={statusFilter === 'all' ? '$blue700' : '$blue600'} 
              iconType="total" 
              onClick={() => handleStatusClick('all')} 
            />
            <StatusCard 
              title="Approved" 
              value={approvedRequests} 
              color={statusFilter === 'approved' ? '#22c55e' : '#16a34a'} 
              iconType="approved" 
              onClick={() => handleStatusClick('approved')} 
            />
            <StatusCard 
              title="Semi Approved" 
              value={semiApprovedRequests} 
              color={statusFilter === 'semi-approved' ? '#4ade80' : '#22c55e'} 
              iconType="approved" 
              onClick={() => handleStatusClick('semi-approved')} 
            />
            <StatusCard 
              title="Pending" 
              value={pendingRequests} 
              color={statusFilter === 'pending' ? '$yellow700' : '$yellow600'} 
              iconType="pending" 
              onClick={() => handleStatusClick('pending')} 
            />
            <StatusCard 
              title="On Hold" 
              value={onHoldRequests} 
              color={statusFilter === 'hold' ? '#DD6B20' : '#B7560F'} 
              iconType="hold" 
              onClick={() => handleStatusClick('hold')} 
            />
            <StatusCard 
              title="Rejected" 
              value={rejectedRequests} 
              color={statusFilter === 'rejected' ? '$red700' : '$red600'} 
              iconType="rejected" 
              onClick={() => handleStatusClick('rejected')} 
            />
          </Flex>       
        </Box>
      </Flex>

      <Flex
        direction={'column'}
        justify={'center'}
        css={{
          width: '100%',
          py: '$6',
          mt: '$6'
        }}
      >
        <Box css={{ mb: '$10' }}>
          <Text h3>Purchase Requests</Text>
          <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
          >
            <Flex
              css={{
                'gap': '$6',
                'flexWrap': 'wrap',
                '@sm': {flexWrap: 'nowrap'},
              }}
              align={'center'}
            >
              <Input
                css={{width: '100%', maxW: '410px'}}
                placeholder="Search Requisition"
                value={searchTerm}
                onChange={handleSearchChange}
                clearable
              />
              <SettingsIcon />
              <TrashIcon />
              <InfoIcon />
              <DotsIcon />
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
              <AddRequest />
              <Button auto iconRight={<ExportIcon />}>
                Export to CSV
              </Button>
            </Flex>
          </Flex>
        </Box>
        <PurchaseTable searchTerm={searchTerm} statusFilter={statusFilter} />
      </Flex>
    </Box>
  );
};