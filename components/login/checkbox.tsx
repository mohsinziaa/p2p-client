import { Checkbox } from '@nextui-org/react';

export const RememberMeCheckbox = () => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <Checkbox 
        defaultSelected
        css={{
          '& .nextui-checkbox-text': {
            fontSize: '0.875rem',
            color: '#666'
          }
        }}
      >
        Remember me
      </Checkbox>
    </div>
  );
};