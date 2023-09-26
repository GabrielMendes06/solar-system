import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface Items {
    href: string
    content: React.ReactNode
}

function DropdownItem( { href, content }: Items ) {
    return(
        <li> <Dropdown.Item href={href}>{content}</Dropdown.Item></li>
    )
}

export default DropdownItem