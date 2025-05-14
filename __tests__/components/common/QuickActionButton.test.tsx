import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Video } from 'lucide-react-native';
import QuickActionButton from '@/components/common/QuickActionButton';

describe('QuickActionButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with props', () => {
    const { getByText } = render(
      <QuickActionButton
        icon={Video}
        label="Test Button"
        onPress={mockOnPress}
      />
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <QuickActionButton
        icon={Video}
        label="Test Button"
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});