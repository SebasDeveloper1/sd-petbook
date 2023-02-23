/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from './Button';

describe('Button component tests', () => {
  let component;
  let btn;
  const mockFuction = jest.fn();

  /* A function that is called before each test. */
  beforeEach(() => {
    component = render(
      <Button
        type="button"
        variant="contained"
        styles=""
        value="Button"
        onClick={mockFuction}
        endIcon={<FcGoogle />}
      />
    );
    btn = component.getByText('Button');
  });

  test('Should render a button with the text "Button"', () => {
    expect(btn).toBeDefined();
  });
  test('Should show an icon', () => {
    const icon = component.container.querySelector('svg');
    expect(icon).not.toBeNull();
  });
  test('Checking if the mock function is called once', () => {
    fireEvent.click(btn);
    expect(mockFuction.mock.calls).toHaveLength(1);
  });
});
