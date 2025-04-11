// components/cards/status-card.tsx
import { Card, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { Box } from '../styles/box';
import { 
  ClipboardList,  // Total
  CheckCircle,    // Approved
  Clock,          // Pending
  AlertCircle,    // On Hold
  XCircle,        // Rejected
  type Icon as LucideIcon 
} from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: number | string;
  color?: string;
  icon?: React.ReactNode;
  iconType?: 'total' | 'approved' | 'pending' | 'hold' | 'rejected';
  onClick?: () => void;
}

export const StatusCard = ({
  title,
  value = 10,
  color = '$blue600',
  icon,
  iconType,
  onClick,
}: StatusCardProps) => {
  const getDefaultIcon = () => {
    switch (iconType) {
      case 'approved': return <CheckCircle size={20} />;
      case 'pending': return <Clock size={20} />;
      case 'hold': return <AlertCircle size={20} />;
      case 'rejected': return <XCircle size={20} />;
      case 'total':
      default: return <ClipboardList size={20} />;
    }
  };

  const displayIcon = icon || getDefaultIcon();

  // Add this handler to ensure clicks work
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card
      css={{
        mw: '200px',
        bg: color,
        borderRadius: '$xl',
        px: '$0',
        flexGrow: 1,
        minWidth: '130px',
        boxShadow: '$md',
        transition: 'transform 0.2s',
        fontSize: '$sm',
        '&:hover': { 
          transform: 'scale(1.02)',
          cursor: 'pointer'
        }        
      }}
      onClick={handleClick} 
      isPressable
    >
      <Card.Body css={{ 
        paddingTop: '$10', 
        paddingBottom: '$10',
        '&:hover': {
          cursor: 'pointer' // Ensure cursor shows pointer on hover
        }
      }}>
        <Flex css={{ gap: '$5', alignItems: 'center' }}>
          <Box css={{ color: 'white' }}>
            {displayIcon}
          </Box>
          <Flex direction={'column'}>
            <Text span css={{ color: 'white', paddingBottom: '$3' }}>
              {title}
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4' }} align={'center'}>
          <Text
            span
            size={'$xl'}
            css={{ color: 'white' }}
            weight={'semibold'}
          >
            {value}
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  );
};