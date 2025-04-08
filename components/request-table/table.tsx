// /components/request-table/table.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Text, Collapse } from '@nextui-org/react';
import { Box } from '../styles/box';
import { purchaseRequests } from './data';
import { TableHeader, RequestRow, ItemsTableHeader, ItemRow } from './render-cell';

export const PurchaseTable: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const mainTableRef = useRef<HTMLDivElement | null>(null);
  const itemTablesRef = useRef<Array<HTMLDivElement | null>>([]);

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
    return () => {
      if (mainTable) {
        mainTable.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box
      ref={mainTableRef}
      css={{
        overflowX: 'auto',
        width: '100%',
        border: '1px solid $border',
        borderRadius: '$lg',
        '&::-webkit-scrollbar': { height: '4px' },
        '&::-webkit-scrollbar-track': { background: '$accents1' },
        '&::-webkit-scrollbar-thumb': { 
          background: '$accents5',
          borderRadius: '2px',
        },
        '& .nextui-collapse-view': { p: '0' },
        '& .nextui-collapse-title': { 
          fontWeight: '$semibold',
          width: '100%', 
          p: '0'
        },
      }}
    >
      <Box css={{ minWidth: '750px' }}>
        <TableHeader />

        {purchaseRequests.map((request, index) => (
          <Collapse
            key={index}
            title={
              <RequestRow
                request={request}
                index={index}
                expanded={expandedRow === index}
                onClick={() => toggleRow(index)}
              />
            }
            expanded={expandedRow === index}
            onChange={() => toggleRow(index)}
            css={{
              borderBottom: '1px solid $border',
              borderRadius: 0,
              boxShadow: 'none',
              '&:last-child': {
                borderBottom: 'none',
                borderRadius: '0 0 $lg $lg',
              },
            }}
          >
            <Box css={{ 
              backgroundColor: '$accents0',
              borderLeft: '1px solid $border',
              borderRight: '1px solid $border',
              p: '$2',
            }}>
              <Text h4 css={{ mb: '$2', textAlign: 'left', pl: '$2', fontSize: '$sm' }}>Items</Text>
              <Box 
                ref={(el: HTMLDivElement | null) => {
                  itemTablesRef.current[index] = el;
                }}
                css={{ 
                  overflowX: 'auto',
                  width: '100%',
                  '&::-webkit-scrollbar': { height: '4px' },
                  '&::-webkit-scrollbar-track': { background: '$accents1' },
                  '&::-webkit-scrollbar-thumb': { 
                    background: '$accents5',
                    borderRadius: '2px',
                  },
                }}
              >
                <Box css={{ minWidth: '900px' }}>
                  <ItemsTableHeader />
                  {request.items.map((item, itemIndex) => (
                    <ItemRow 
                      key={itemIndex} 
                      item={item} 
                      request={request} 
                      itemIndex={itemIndex} 
                      totalItems={request.items.length} 
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Collapse>
        ))}
      </Box>
    </Box>
  );
};