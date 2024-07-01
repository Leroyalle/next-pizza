import React from 'react';

interface Props {
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
