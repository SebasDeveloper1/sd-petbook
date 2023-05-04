/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Typography, Button } from 'components/indexComponents';
import { VaccinesInputs } from 'containers/indexContainers';

export function VaccinesDataForm({ defaultState, rows, setRows }) {
  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value,
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat({ ...defaultState, id: uuidV4() }));
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

  return (
    <section className=" md:col-span-3">
      <div className="flex flex-col gap-4 py-4 md:px-4 md:pt-0">
        <Typography
          variant="h4"
          value="Historial de Vacunación (Opcional)"
          styles="mb-2 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
        />
        {rows.map((row, index) => (
          <VaccinesInputs
            {...row}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            key={index}
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
