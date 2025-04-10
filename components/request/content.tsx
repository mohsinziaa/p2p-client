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

// Define a type for possible status filters
type StatusFilter = 'all' | 'approved' | 'pending' | 'hold' | 'rejected';

export const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Add state for status filter
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const handleSearchChange = (e: React.ChangeEvent<any>) => {
    setSearchTerm(e.target.value);
  };

  // Update the status click handler to set the filter
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
              value={125} 
              color={statusFilter === 'all' ? '$blue800' : '$blue600'} 
              iconType="total" 
              onClick={() => handleStatusClick('all')} 
            />
            <StatusCard 
              title="Approved" 
              value={89} 
              color={statusFilter === 'approved' ? '$green800' : '$green600'} 
              iconType="approved" 
              onClick={() => handleStatusClick('approved')} 
            />
            <StatusCard 
              title="Pending" 
              value={23} 
              color={statusFilter === 'pending' ? '$yellow800' : '$yellow600'} 
              iconType="pending" 
              onClick={() => handleStatusClick('pending')} 
            />
            <StatusCard 
              title="On Hold" 
              value={13} 
              color={statusFilter === 'hold' ? '#B7560F' : '#DD6B20'} 
              iconType="hold" 
              onClick={() => handleStatusClick('hold')} 
            />
            <StatusCard 
              title="Rejected" 
              value={13} 
              color={statusFilter === 'rejected' ? '$red800' : '$red600'} 
              iconType="rejected" 
              onClick={() => handleStatusClick('rejected')} 
            />
          </Flex>       
        </Box>
      </Flex>

      {/* Rest of the content remains the same */}
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

        {/* Pass the status filter to the table component */}
        <PurchaseTable searchTerm={searchTerm} statusFilter={statusFilter} />
      </Flex>
    </Box>
  );
};