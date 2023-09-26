import { ReactNode } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';

interface Title {
  title: string
  children?: ReactNode
}

function CustomDropdown( { title, children }: Title) {
  return (
    <DropdownButton id="dropdown-basic-button" className='custom-dropdown' title={title}>
      {children}
    </DropdownButton>
  );
}

export default CustomDropdown;
