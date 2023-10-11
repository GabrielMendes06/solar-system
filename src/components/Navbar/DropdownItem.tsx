import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface Items {
    href: string
    content: React.ReactNode
    className?: string
}

const DropdownItem: React.FC<Items> = ( { href, content, className }) => {
    return(
        <li> <Dropdown.Item href={href} className={className}>{content}</Dropdown.Item></li>
    )
}

export default DropdownItem