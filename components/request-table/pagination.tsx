// /components/request-table/pagination.tsx
import React from 'react';
import { Button, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const visiblePages = 3;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);
    
    if (end - start + 1 < visiblePages) {
      start = Math.max(1, end - visiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage + 1;
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <Flex 
      css={{
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '$4',
        px: '$8',
        backgroundColor: '$accents1',
        border: '1px solid $border',
        borderTop: 'none',
        borderRadius: '0 0 $lg $lg',
      }}
    >
      <Text css={{ fontSize: '$sm', color: '$accents7' }}>
        {indexOfFirstItem}-{indexOfLastItem} of {totalItems}
      </Text>
      
      <Flex css={{ gap: '$1', alignItems: 'center' }}>
        <Button
          auto
          light
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
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
          onClick={() => onPageChange(currentPage - 1)}
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
            onClick={() => onPageChange(page)}
            css={{ 
              minWidth: '32px',
              height: '32px',
              p: '0',
              margin: '0 2px',
              fontWeight: currentPage === page ? '$semibold' : '$normal',
              ...(currentPage === page ? {
                background: '$primary',
                color: '$white',
                boxShadow: '$md',
                '&:hover': { background: '$primary', opacity: 0.9 }
              } : {
                background: 'transparent',
                color: '$text',
                '&:hover': { background: '$accents1' }
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
          onClick={() => onPageChange(currentPage + 1)}
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
          onClick={() => onPageChange(totalPages)}
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
  );
};