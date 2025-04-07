import React, { useState, useRef, useEffect } from 'react';
import {Text, Link, Collapse, Button} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import NextLink from 'next/link';
import { StatusCard } from './card';
import {StyledBadge} from '../table/table.styled';

const purchaseRequests = [
   {
      reqNumber: 'PR-1001',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'approved'
    },

    {
      reqNumber: 'PR-1001',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'pending'
    },

    {
      reqNumber: 'PR-1001',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },    
];

export const Content = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const mainTableRef = useRef<HTMLDivElement>(null);
  const itemTablesRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  useEffect(() => {
    const mainTable = mainTableRef.current;
    if (!mainTable) return;

    const handleScroll = () => {
      const scrollLeft = mainTable.scrollLeft;
      itemTablesRef.current.forEach(table => {
        if (table) table.scrollLeft = scrollLeft;
      });
    };

    mainTable.addEventListener('scroll', handleScroll);
    return () => mainTable.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box css={{overflow: 'hidden', height: '100%', px: '$12', '@xsMax': {px: '$10'}}}>
      <Flex direction={'column'} gap="12" css={{mt: '$8'}}>
        <Box>
          <Text
            h3
            css={{
              'textAlign': 'center',
              '@sm': {textAlign: 'inherit'},
            }}
          >
            Purchase Requests
          </Text>
          <Flex
            css={{
              gap: '$8',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > *': {
                width: 'calc(50% - $8)',
                minWidth: '160px',
                '@sm': {
                  width: 'auto',
                  flex: '1 1 0%'
                }
              }
            }}
          >
            <StatusCard 
              title="Requests" 
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
              color="#DD6B20"
              iconType="hold"
            />
            <StatusCard 
              title="Rejected" 
              value={13} 
              color="$red600"
              iconType="rejected"
            />
          </Flex>       
        </Box>
      </Flex>

      <Flex
        direction={'column'}
        justify={'center'}
        css={{
          'width': '100%',
          'py': '$10',
          'px': 0,
          'mt': '$8',
          '@sm': {px: '$12'},
        }}
      >
        <Flex justify={'between'} wrap={'wrap'}>
          <Text
            h3
            css={{
              'textAlign': 'center',
              '@lg': {textAlign: 'inherit'},
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
                '@lg': {textAlign: 'inherit'},
              }}
            >
              View All
            </Link>
          </NextLink>
        </Flex>

        <Box
          ref={mainTableRef}
          css={{
            'overflowX': 'auto',
            'width': '100%',
            'border': '1px solid $border',
            'borderRadius': '$lg',
            '&::-webkit-scrollbar': { height: '6px' },
            '&::-webkit-scrollbar-track': { background: '$accents1' },
            '&::-webkit-scrollbar-thumb': { 
              background: '$accents5',
              borderRadius: '3px',
            },
            '& .nextui-collapse-view': { p: '0' },
            '& .nextui-collapse-title': { fontWeight: '$semibold' },
          }}
        >
          <Box css={{ minWidth: '800px' }}>
            <Flex
              css={{
                backgroundColor: '$accents1',
                padding: '$8 $10',
                borderRadius: '$sm $sm 0 0',
                fontWeight: '$semibold',
                borderBottom: '1px solid $border',
                display: 'none',
                '@sm': { display: 'flex' },
              }}
            >
              <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left', pl: '$8' }}>Req Number</Box>
              <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left' }}>Site</Box>
              <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left' }}>Date Created</Box>
              <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left' }}>No. of Items</Box>
              <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left', pr: '$12' }}>Status</Box>
            </Flex>

            {purchaseRequests.map((request, index) => (
              <Collapse
                key={request.reqNumber}
                title={
                  <Flex
                    css={{
                      width: '100%',
                      padding: '$8 $10',
                      borderBottom: '1px solid $border',
                    }}
                  >
                    <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left', pl: '$8' }}>{request.reqNumber}</Box>
                    <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left' }}>{request.site}</Box>
                    <Box css={{ flex: 1, minWidth: '180px', textAlign: 'left' }}>{request.dateCreated}</Box>
                    <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left' }}>{request.items.length} items</Box>
                    <Box css={{ flex: 1, minWidth: '120px', textAlign: 'left', pr: '$8' }}>

                    <StyledBadge type={request.status as any}>
                     {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                     </StyledBadge>

                    </Box>
                  </Flex>
                }
                expanded={expandedRow === index}
                css={{
                  borderBottom: expandedRow === index ? 'none' : '1px solid $border',
                  borderRadius: 0,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '$accents0',
                  },
                  '&:last-child': {
                    borderBottom: 'none',
                    borderRadius: '0 0 $lg $lg',
                  },
                }}
              >
                <Box css={{ 
                  p: '$8', 
                  backgroundColor: '$accents0',
                  borderLeft: '1px solid $border',
                  borderRight: '1px solid $border',
                }}>
                  <Text h4 css={{ mb: '$4', textAlign: 'left', pl: '$8' }}>Items</Text>
                  <Box 
                    ref={el => itemTablesRef.current[index] = el}
                    css={{ 
                      overflowX: 'auto',
                      width: '100%',
                      '&::-webkit-scrollbar': { height: '0px' },
                    }}
                  >
<Box css={{ minWidth: '1000px' }}> {/* Increased minWidth to accommodate more columns */}
  <Flex
    css={{
      backgroundColor: '$accents1',
      padding: '$6 $10',
      borderRadius: '$sm',
      fontWeight: '$semibold',
      mb: '$4',
    }}
  >
    <Box css={{ flex: 1, textAlign: 'left', pl: '$8' }}>Req Number</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Generated By</Box>
    <Box css={{ flex: 1.5, textAlign: 'left' }}>Item Name</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Category</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Quantity</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Unit Price</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Supplier</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Delivery Date</Box>
    <Box css={{ flex: 1, textAlign: 'left' }}>Total</Box>
    <Box css={{ flex: 1, textAlign: 'left', pr: '$8' }}>Notes</Box>
  </Flex>
  {request.items.map((item, itemIndex) => (
    <Flex
      key={itemIndex}
      css={{
        padding: '$6 $10',
        borderBottom: '1px solid $border',
        alignItems: 'center',
      }}
    >
      <Box css={{ flex: 1, textAlign: 'left', pl: '$8' }}>{request.reqNumber}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{request.generatedBy}</Box>
      <Box css={{ flex: 1.5, textAlign: 'left' }}>{item.name}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.category}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.quantity}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>${item.price}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.supplier}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>{item.deliveryDate}</Box>
      <Box css={{ flex: 1, textAlign: 'left' }}>${item.quantity * item.price}</Box>
      <Box css={{ flex: 1, textAlign: 'left', pr: '$8' }}>{item.notes}</Box>
    </Flex>
  ))}
</Box>
                  </Box>
                </Box>
              </Collapse>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};