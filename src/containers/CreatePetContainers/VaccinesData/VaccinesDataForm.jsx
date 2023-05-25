/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Typography, Button } from 'components/indexComponents';
import { VaccinesInputs } from 'containers/indexContainers';

export function VaccinesDataForm({
  defaultState,
  rows,
  setRows,
  deleteRowsImage,
  setDeleteRowsImage,
} = {}) {
  const handleOnChange = (id, name, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [name]: value,
        };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleOnAdd = () => {
    const newVacuna = { ...defaultState, id: uuidV4() };
    setRows([...rows, newVacuna]);
  };

  const handleOnRemove = (id) => {
    const removedRow = rows.find((row) => row.id === id);
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    setDeleteRowsImage([...deleteRowsImage, removedRow.image]);
  };

  return (
    <section className="md:col-span-3">
      <div className="flex flex-col gap-4 py-4 md:px-4 md:pt-0">
        <Typography
          variant="h4"
          value="Historial de Vacunación (Opcional)"
          styles="mb-2 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
        />
        {rows.map((row) => (
          <VaccinesInputs
            {...row}
            onChange={(name, value) => handleOnChange(row.id, name, value)}
            onRemove={() => handleOnRemove(row.id)}
            key={row.id}
          />
        ))}
        <Button
          type="button"
          variant="outlined"
          styles="w-fit"
          value="Añadir vacuna"
          handleOnClick={handleOnAdd}
        />
      </div>
    </section>
  );
}
