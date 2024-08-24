'use client';
import React from 'react';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressForm: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="18ff13aac7b798b9dc33a93d53dc511e9c0a4edf"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
