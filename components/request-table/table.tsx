// /components/request-table/table.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Text, Collapse, Button } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { purchaseRequests } from './data';
import { TableHeader, RequestRow, ItemsTableHeader, ItemRow } from './render-cell';

export const PurchaseTable: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const mainTableRef = useRef<HTMLDivElement | null>(null);
  const itemTablesRef = useRef<Array<HTMLDivElement | null>>([]);
  
  // Enhanced pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(purchaseRequests.length / rowsPerPage);
  
  // Calculate visible pages for pagination (max 5 visible pages)
  const getVisiblePages = () => {
    const visiblePages = 3;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);
    
    if (end - start + 1 < visiblePages) {
      start = Math.max(1, end - visiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // Get current page data
  const indexOfLastRequest = currentPage * rowsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - rowsPerPage;
  const currentRequests = purchaseRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const toggleRow = (index: number) => {
    const absoluteIndex = indexOfFirstRequest + index;
    setExpandedRow(expandedRow === absoluteIndex ? null : absoluteIndex);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    setExpandedRow(null);
    setCurrentPage(pageNumber);
    
    // Scroll to top of table when page changes
    if (mainTableRef.current) {
      mainTableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    <Box css={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%',
      borderRadius: '$lg',
      boxShadow: '$sm',
      overflow: 'hidden',
    }}>
      <Box
        ref={mainTableRef}
        css={{
          overflowX: 'auto',
          width: '100%',
          border: '1px solid $border',
          borderBottom: 'none',
          borderRadius: '$lg $lg 0 0',
          '&::-webkit-scrollbar': { height: '6px' },
          '&::-webkit-scrollbar-track': { background: '$accents1' },
          '&::-webkit-scrollbar-thumb': { 
            background: '$accents4',
            borderRadius: '3px',
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

          {currentRequests.map((request, index) => {
            const absoluteIndex = indexOfFirstRequest + index;
            return (
              <Collapse
                key={absoluteIndex}
                title={
                  <RequestRow
                    request={request}
                    index={index}
                    expanded={expandedRow === absoluteIndex}
                    onClick={() => toggleRow(index)}
                  />
                }
                expanded={expandedRow === absoluteIndex}
                onChange={() => toggleRow(index)}
                css={{
                  borderBottom: '1px solid $border',
                  borderRadius: 0,
                  boxShadow: 'none',
                  '&:last-child': {
                    borderBottom: expandedRow === absoluteIndex ? '1px solid $border' : 'none',
                  },
                }}
              >
                <Box css={{ 
                  backgroundColor: '$accents0',
                  borderLeft: '1px solid $border',
                  borderRight: '1px solid $border',
                  p: '$2',
                }}>
                  <Text h4 css={{ 
                    mb: '$2', 
                    textAlign: 'left', 
                    pl: '$2', 
                    fontSize: '$sm',
                    color: '$accents7',
                  }}>
                    Items
                  </Text>
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
            );
          })}
        </Box>
      </Box>
      
<Flex 
  css={{
    justifyContent: 'space-between',
    alignItems: 'center',
    py: '$4',
    px: '$8',
    backgroundColor: '$accents0',
    border: '1px solid $border',
    borderTop: 'none',
    borderRadius: '0 0 $lg $lg',
  }}
>
  <Text css={{ fontSize: '$sm', color: '$accents7' }}>
    {indexOfFirstRequest + 1}-{Math.min(indexOfLastRequest, purchaseRequests.length)} of {purchaseRequests.length}
  </Text>
  
  <Flex css={{ gap: '$1', alignItems: 'center' }}>
    <Button
      auto
      light
      size="sm"
      disabled={currentPage === 1}
      onClick={() => handlePageChange(1)}
      css={{ 
        minWidth: '32px', 
        p: '0',
        color: currentPage === 1 ? '$accents5' : '$accents9', 
      }}
    >
      «
    </Button>
    <Button
      auto
      light
      size="sm"
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
      css={{ 
        minWidth: '32px', 
        p: '0',
        color: currentPage === 1 ? '$accents5' : '$accents9',
      }}
    >
      ‹
    </Button>
    
    {getVisiblePages().map(page => (
      <Button
        key={page}
        auto
        size="sm"
        color={currentPage === page ? 'primary' : 'default'}
        onClick={() => handlePageChange(page)}
        css={{ 
          minWidth: '32px',
          height: '32px',
          p: '0',
          margin: '0 2px',
          fontWeight: currentPage === page ? '$semibold' : '$normal',
          ...(currentPage === page ? {
            // Active button styling
            background: '$primary',
            color: '$white',
            boxShadow: '$md',
            '&:hover': {
              background: '$primary',
              opacity: 0.9
            }
          } : {
            // Inactive button styling
            background: 'transparent',
            color: '$text',
            '&:hover': {
              background: '$accents1',
            }
          })
        }}
      >
        {page}
      </Button>
    ))}
    
    <Button
      auto
      light
      size="sm"
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
      css={{ 
        minWidth: '32px', 
        p: '0',
        color: currentPage === totalPages ? '$accents5' : '$accents9',
      }}
    >
      ›
    </Button>
    <Button
      auto
      light
      size="sm"
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(totalPages)}
      css={{ 
        minWidth: '32px', 
        p: '0',
        color: currentPage === totalPages ? '$accents5' : '$accents9',
      }}
    >
      »
    </Button>
  </Flex>
</Flex>

    </Box>
  );
};