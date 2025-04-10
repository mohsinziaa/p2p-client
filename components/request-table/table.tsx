// /components/request-table/table.tsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, Collapse } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { purchaseRequests } from './data';
import { TableHeader, RequestRow, ItemsTableHeader, ItemRow } from './render-cell';
import { Pagination } from './pagination';

interface PurchaseTableProps {
  searchTerm: string;
  statusFilter: 'all' | 'approved' | 'pending' | 'hold' | 'rejected';
}

export const PurchaseTable: React.FC<PurchaseTableProps> = ({ searchTerm, statusFilter }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const mainTableRef = useRef<HTMLDivElement | null>(null);
  const itemTablesRef = useRef<Array<HTMLDivElement | null>>([]);
  
  // Filter requests based on search term and status filter
  const filteredRequests = useMemo(() => {
    let filtered = purchaseRequests;
    
    // Apply status filter first
    if (statusFilter !== 'all') {
      filtered = filtered.filter(request => request.status === statusFilter);
    }
    
    // Then apply search filter if there is one
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(request => 
        request.reqNumber.toLowerCase().includes(lowerCaseSearchTerm) ||
        request.site.toLowerCase().includes(lowerCaseSearchTerm) ||
        request.generatedBy.toLowerCase().includes(lowerCaseSearchTerm) ||
        request.items.some(item => 
          item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.category.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.supplier.toLowerCase().includes(lowerCaseSearchTerm)
        )
      );
    }
    
    return filtered;
  }, [searchTerm, statusFilter]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(filteredRequests.length / rowsPerPage);
  
  // Reset to first page when search term or status filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  // Get current page data
  const indexOfLastRequest = currentPage * rowsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - rowsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

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

  // Sync horizontal scrolling between main table and item tables
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
      {/* Main table container */}
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

          {currentRequests.length > 0 ? (
            currentRequests.map((request, index) => {
              const absoluteIndex = indexOfFirstRequest + index;
              return (
                <Collapse
                  key={`${request.reqNumber}-${absoluteIndex}`}
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
                            key={`${item.name}-${itemIndex}`}
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
            })
          ) : (
            <Flex css={{ 
              padding: '$10', 
              justifyContent: 'center', 
              alignItems: 'center',
              borderBottom: '1px solid $border'
            }}>
              <Text css={{ color: '$accents7' }}>
                {statusFilter !== 'all' 
                  ? `No ${statusFilter} requests found`
                  : 'No matching requests found'}
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
      
      {/* Pagination component - only show if there are results */}
      {filteredRequests.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredRequests.length}
          itemsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
};