/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from 'components/Button';

describe('Button component tests', () => {
  let component;
  let btn;
  const mockFunction = vi.fn();

  /* Una función que se llama antes de cada prueba. */
  beforeEach(() => {
    component = render(
      <Button
        type="button"
        variant="contained"
        styles=""
        value="Button"
        handleOnClick={mockFunction}
        endIcon={<FcGoogle />}
      />
    );
    btn = component.getByText('Button');
  });

  it('Should render a button with the text "Button"', () => {
    expect(btn).toBeDefined();
  });

  it('Should show an icon', () => {
    const icon = component.container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('Checking if the mock function is called once', () => {
    fireEvent.click(btn);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
