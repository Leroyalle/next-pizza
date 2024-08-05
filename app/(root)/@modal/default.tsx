import React from 'react';

interface Props {
  className?: string;
}
const Default: React.FC<Props> = ({ className }) => {
  console.log('default');

  return null;
};
export default Default;
