import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HomeHeader from '@/components/home/HomeHeader';

describe('HomeHeader', () => {
  it('renders correctly', () => {
    render(<HomeHeader />);
    
    expect(screen.getByText('Hello,')).toBeTruthy();
    expect(screen.getByText('Jane Doe')).toBeTruthy();
  });

  it('displays notification badge when there are unread notifications', () => {
    render(<HomeHeader />);
    
    const badge = screen.getByText('3');
    expect(badge).toBeTruthy();
  });
});