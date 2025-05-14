import React from 'react';
import { render } from '@testing-library/react-native';
import EmergencyContactCard from '@/components/emergency/EmergencyContactCard';

describe('EmergencyContactCard', () => {
  const securityContact = {
    name: 'Building Security',
    phone: '555-123-4567',
    type: 'security' as const
  };

  const personalContact = {
    name: 'John Smith',
    phone: '555-987-6543',
    relationship: 'Family',
    type: 'contact' as const
  };

  it('renders security contact correctly', () => {
    const { getByText } = render(<EmergencyContactCard {...securityContact} />);

    expect(getByText(securityContact.name)).toBeTruthy();
    expect(getByText(securityContact.phone)).toBeTruthy();
  });

  it('renders personal contact with relationship', () => {
    const { getByText } = render(<EmergencyContactCard {...personalContact} />);

    expect(getByText(personalContact.name)).toBeTruthy();
    expect(getByText(personalContact.phone)).toBeTruthy();
    expect(getByText(personalContact.relationship)).toBeTruthy();
  });
});