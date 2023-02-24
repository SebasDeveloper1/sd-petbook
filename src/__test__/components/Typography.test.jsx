/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Typography } from 'components/Typography';

describe('Typography component tests', () => {
  let component;
  let text;
  beforeEach(() => {
    component = render(<Typography variant="h1" styles="" value="Text" />);
    text = component.getByText('Text');
  });

  it('Should render a text with the text "Text"', () => {
    expect(text).toBeDefined();
  });
  it('Should render a text with the text "Text"', () => {
    const el = component.container.querySelector('h1');
    expect(el).not.toBeNull();
  });
});
