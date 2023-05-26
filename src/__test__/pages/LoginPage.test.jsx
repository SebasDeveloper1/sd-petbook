/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LoginPage from 'pages/LoginPage';

describe('LoginPage', () => {
  it('should render', () => {
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
