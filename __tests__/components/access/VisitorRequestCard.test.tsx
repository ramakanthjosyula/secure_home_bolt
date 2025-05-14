import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import VisitorRequestCard from '@/components/access/VisitorRequestCard';

describe('VisitorRequestCard', () => {
  const defaultProps = {
    name: 'John Doe',
    purpose: 'Delivery',
    time: 'Today, 2:30 PM',
    imageUrl: 'https://example.com/image.jpg'
  };

  it('renders visitor information correctly', () => {
    const { getByText } = render(<VisitorRequestCard {...defaultProps} />);

    expect(getByText(defaultProps.name)).toBeTruthy();
    expect(getByText(defaultProps.purpose)).toBeTruthy();
    expect(getByText(defaultProps.time)).toBeTruthy();
  });

  it('renders approve and reject buttons', () => {
    const { getByText } = render(<VisitorRequestCard {...defaultProps} />);

    expect(getByText('Approve')).toBeTruthy();
    expect(getByText('Reject')).toBeTruthy();
  });
});