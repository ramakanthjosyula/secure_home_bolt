import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NotificationItem from '@/components/notifications/NotificationItem';

describe('NotificationItem', () => {
  const mockOnPress = jest.fn();
  const mockNotification = {
    id: '1',
    title: 'Test Notification',
    message: 'This is a test notification',
    time: '5 min ago',
    read: false,
    type: 'visitor' as const
  };

  it('renders notification content correctly', () => {
    const { getByText } = render(
      <NotificationItem
        notification={mockNotification}
        onPress={mockOnPress}
      />
    );

    expect(getByText(mockNotification.title)).toBeTruthy();
    expect(getByText(mockNotification.message)).toBeTruthy();
    expect(getByText(mockNotification.time)).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <NotificationItem
        notification={mockNotification}
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText(mockNotification.title));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('shows unread indicator for unread notifications', () => {
    const { getByTestId } = render(
      <NotificationItem
        notification={mockNotification}
        onPress={mockOnPress}
      />
    );

    expect(getByTestId('unread-indicator')).toBeTruthy();
  });
});