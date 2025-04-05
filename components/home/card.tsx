// components/cards/status-card.tsx
import { Card, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex'; // Add Box import here
import { Box } from '../styles/box'; // Add Box import here
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
}

export const StatusCard = ({
  title,
  value = 10,
  color = '$blue600',
  icon,
  iconType,
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

  return (
    <Card
      css={{
        mw: '220px',
        bg: color,
        borderRadius: '$xl',
        px: '$6',
        flexGrow: 1,
        minWidth: '160px',
        boxShadow: '$md', // Adds depth
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' }        
      }}
    >
      <Card.Body css={{ paddingTop: '$10', paddingBottom: '$10' }}>
        <Flex css={{ gap: '$5', alignItems: 'center' }}>
          <Box css={{ color: 'white' }}>
            {displayIcon}
          </Box>
          <Flex direction={'column'}>
            <Text span css={{ color: 'white' }}>
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