import React from 'react';
import './Typography.css';

function Typography({ type = 'p', color = 'black', children, className }) {
    let Tag = 'p'; // Default tag

    // Handle different types of text components
    if (type === 'p2' || type === 'date' || type === 'hero') {
        Tag = 'span';  // Both p2 and date will render as a <span>
    } else {
        Tag = type; // h1, h2, h3, etc.
    }

    const classes = `typography ${type} ${color} ${className || ''}`.trim();

    return <Tag className={classes}>{children}</Tag>;
}

export default Typography;
