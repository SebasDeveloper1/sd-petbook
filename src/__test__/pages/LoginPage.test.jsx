/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { LoginPage } from 'pages/LoginPage';

describe('LoginPage', () => {
  it('render', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );

    const el = screen.getByText('Bienvenido a');
    expect(el).toBeInTheDocument();
  });
});
