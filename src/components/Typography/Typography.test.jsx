/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('render', () => {
  let component;
  let text;
  beforeEach(() => {
    component = render(<Typography variant="h1" styles="" value="Text" />);
    text = component.getByText('Text');
  });

  test('Should render a text with the text "Text"', () => {
    expect(text).toBeDefined();
  });
  test('Should render a text with the text "Text"', () => {
    const el = component.container.querySelector('h1');
    expect(el).not.toBeNull();
  });
});
