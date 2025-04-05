import React from 'react';
import {Text, Link} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';
import NextLink from 'next/link';
import { StatusCard } from './card';

export const Content = () => (
   <Box css={{overflow: 'hidden', height: '100%'}}>
      {/* Available Balance Section */}
      <Flex
         css={{
            'px': '$12',
            'mt': '$8',
            '@xsMax': {px: '$10'},
            'gap': '$12',
         }}
         direction={'column'}
      >
         <Box>
         <Text
            h3
            css={{
               'textAlign': 'center',
               '@sm': {
               textAlign: 'inherit',
               },
            }}
         >
            Requisition Status
         </Text>
         <Flex
            css={{
               gap: '$8',
               flexWrap: 'wrap',
               justifyContent: 'center',
               // Mobile-first approach
               '& > *': {  // Targets all direct children (cards)
                  width: 'calc(50% - $8)', // 2 cards per row accounting for gap
                  minWidth: '160px',       // Minimum card width
                  '@sm': {
                  width: 'auto',         // Reset for larger screens
                  flex: '1 1 0%'        // Flexible sizing on desktop
                  }
               }
            }}
            >

            <StatusCard 
               title="Total Requisitions" 
               value={125} 
               color="$blue600" 
               iconType="total"
            />
            <StatusCard 
               title="Approved" 
               value={89} 
               color="$green600" 
               iconType="approved"
            />
            <StatusCard 
               title="Pending" 
               value={23} 
               color="$yellow600" 
               iconType="pending"
            />
            <StatusCard 
               title="On Hold" 
               value={13} 
               color="#DD6B20"  // Changed from red to orange
               iconType="hold"
            />
            <StatusCard 
               title="Rejected" 
               value={13} 
               color="$red600"     // Red for rejected
               iconType="rejected"
            />

            </Flex>       
         </Box>
      </Flex>

      {/* Table Latest Users */}
      <Flex
         direction={'column'}
         justify={'center'}
         css={{
            'width': '100%',
            'py': '$10',
            'px': '$10',
            'mt': '$8',
            '@sm': {px: '$20'},
         }}
      >
         <Flex justify={'between'} wrap={'wrap'}>
            <Text
               h3
               css={{
                  'textAlign': 'center',
                  '@lg': {
                     textAlign: 'inherit',
                  },
               }}
            >
               Purchase Orders
            </Text>
            <NextLink href="/accounts">
               <Link
                  block
                  color="primary"
                  css={{
                     'textAlign': 'center',
                     '@lg': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  View All
               </Link>
            </NextLink>
         </Flex>
         <TableWrapper />
      </Flex>
   </Box>
);