// /components/request/content.tsx
import React from 'react';
import { Text, Link } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import NextLink from 'next/link';
import { StatusCard } from './card';
import { PurchaseTable } from '../request-table/table';

export const Content = () => {
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
            Purchase Requests
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
            <StatusCard title="Requests" value={125} color="$blue600" iconType="total" />
            <StatusCard title="Approved" value={89} color="$green600" iconType="approved" />
            <StatusCard title="Pending" value={23} color="$yellow600" iconType="pending" />
            <StatusCard title="On Hold" value={13} color="#DD6B20" iconType="hold" />
            <StatusCard title="Rejected" value={13} color="$red600" iconType="rejected" />
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
        <Flex justify={'between'} wrap={'wrap'} css={{ mb: '$4' }}>
          <Text
            h3
            css={{
              textAlign: 'center',
              '@lg': { textAlign: 'inherit' },
            }}
          >
            Purchase Orders
          </Text>
          <NextLink href="/accounts">
            <Link
              block
              color="primary"
              css={{
                textAlign: 'center',
                '@lg': { textAlign: 'inherit' },
              }}
            >
              View All
            </Link>
          </NextLink>
        </Flex>

        <PurchaseTable />
      </Flex>
    </Box>
  );
};