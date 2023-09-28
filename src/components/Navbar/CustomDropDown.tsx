import { ReactNode } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';

interface Title {
  title: string
  children?: ReactNode
}

const CustomDropdown: React.FC<Title> = ( { title, children } ) => {

  return (
    <DropdownButton className='custom-dropdown dropdown-button' title={title}>
      {children}
    </DropdownButton>
  );
  
}

export default CustomDropdown;
