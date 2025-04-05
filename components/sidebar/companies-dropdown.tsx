// components/companies-dropdown.tsx
import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { AcmeIcon } from '../icons/acme-icon'; // Reusing existing icon

export const CompaniesDropdown = () => {
  return (
    <Box>
      <Flex align={'center'} css={{ gap: '$7' }}>
        <AcmeIcon /> {/* Keeping existing icon */}
        <Box>
          <Text
            h3
            size={'$xl'}
            weight={'medium'}
            css={{
              m: 0,
              color: '$accents9',
              lineHeight: '$lg',
              mb: '-$5',
            }}
          >
            Matco Foods
          </Text>
          <Text
            span
            weight={'medium'}
            size={'$xs'}
            css={{ color: '$accents8' }}
          >
            Karachi, PK
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};