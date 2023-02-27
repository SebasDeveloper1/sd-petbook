import React from 'react';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { TextField } from 'components/TextField';

describe('TextField tests', () => {
  let component;
  let element;

  const handlerInput = vi.fn();
  beforeEach(() => {
    component = render(
      <TextField labelValue="Text" placeholder="text" onChange={handlerInput} />
    );

    element = component.getByLabelText('Text');
  });
  it('Should render a input with the label text "Text"', () => {
    expect(element).toBeDefined();
  });
});
