import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface Items {
    href: string
    content: React.ReactNode
}

const DropdownItem: React.FC<Items> = ( { href, content }) => {
    return(
        <li> <Dropdown.Item href={href}>{content}</Dropdown.Item></li>
    )
}

export default DropdownItem