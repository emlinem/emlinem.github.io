import React from 'react';

export default function Spacer({ size = '1em', vertical = true }) {
  return (
    <div
      style={
        vertical
          ? { height: size, width: '100%' }
          : { width: size, height: '100%', display: 'inline-block' }
      }
      aria-hidden="true"
    />
  );
}