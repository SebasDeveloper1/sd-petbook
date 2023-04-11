import React from 'react';
import {
  Typography,
  TextField,
  TextSelection,
} from 'components/indexComponents';

export function PetDataForm({
  errors = {},
  initialValues = {},
  handleChange = null,
  handleBlur = null,
  touched = null,
}) {
  const {
    petName,
    petRace,
    petColor,
    petSpecie,
    petWeight,
    petHeight,
    petBirthdate,
    petSex,
    petRepStatus,
    petDesc,
    petObserv,
  } = initialValues;
  return (
    <section className=" md:col-span-2">
      <div>
        <div className="py-4 md:px-4 md:pt-0">
          <Typography
            variant="h4"
            value="Datos del animal"
            styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Nombre"
                type="text"
                name="petName"
                placeholder="Merlin"
                status={
                  touched?.petName && errors?.petName ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petName && errors?.petName ? errors?.petName : null
                }
                defaultValue={petName}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Raza"
                type="text"
                name="petRace"
                placeholder="Criollo"
                status={
                  touched?.petRace && errors?.petRace ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petRace && errors?.petRace ? errors?.petRace : null
                }
                defaultValue={petRace}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Color"
                type="text"
                name="petColor"
                placeholder="Dorado/Blanco"
                status={
                  touched?.petColor && errors?.petColor ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petColor && errors?.petColor
                    ? errors?.petColor
                    : null
                }
                defaultValue={petColor}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Especie"
                type="text"
                name="petSpecie"
                placeholder="Canino"
                status={
                  touched?.petSpecie && errors?.petSpecie ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petSpecie && errors?.petSpecie
                    ? errors?.petSpecie
                    : null
                }
                defaultValue={petSpecie}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Peso (Kg)"
                type="number"
                name="petWeight"
                placeholder="1.5"
                status={
                  touched?.petWeight && errors?.petWeight ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petWeight && errors?.petWeight
                    ? errors?.petWeight
                    : null
                }
                defaultValue={petWeight}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Altura (cm)"
                type="number"
                name="petHeight"
                placeholder="50.5"
                status={
                  touched?.petHeight && errors?.petHeight ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petHeight && errors?.petHeight
                    ? errors?.petHeight
                    : null
                }
                defaultValue={petHeight}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Fecha de Nacimiento"
                type="date"
                name="petBirthdate"
                placeholder=""
                status={
                  touched?.petBirthdate && errors?.petBirthdate
                    ? 'error'
                    : 'normal'
                }
                exceptionMessage={
                  touched?.petBirthdate && errors?.petBirthdate
                    ? errors?.petBirthdate
                    : null
                }
                defaultValue={petBirthdate}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextSelection
                labelValue="Sexo"
                name="petSex"
                options={['Macho', 'Hembra']}
                status={touched?.petSex && errors?.petSex ? 'error' : 'normal'}
                exceptionMessage={
                  touched?.petSex && errors?.petSex ? errors?.petSex : null
                }
                defaultValue={petSex}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextSelection
                labelValue="Estado Reproductivo"
                name="petRepStatus"
                options={['Esterilizad', 'Sin Esterilizar']}
                status={
                  touched?.petRepStatus && errors?.petRepStatus
                    ? 'error'
                    : 'normal'
                }
                exceptionMessage={
                  touched?.petRepStatus && errors?.petRepStatus
                    ? errors?.petRepStatus
                    : null
                }
                defaultValue={petRepStatus}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <TextField
                labelValue="Descripción (Opcional)"
                type="textarea"
                name="petDesc"
                rows={4}
                placeholder="Comportamiento, gustos, rasgos particulares, personalidad, etc."
                status={
                  touched?.petDesc && errors?.petDesc ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petDesc && errors?.petDesc ? errors?.petDesc : null
                }
                defaultValue={petDesc}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <TextField
                labelValue="Observaciones adicionales (Opcional)"
                type="textarea"
                name="petObserv"
                rows={4}
                placeholder="Alergias, Cuidados, discapacidades, etc."
                status={
                  touched?.petObserv && errors?.petObserv ? 'error' : 'normal'
                }
                exceptionMessage={
                  touched?.petObserv && errors?.petObserv
                    ? errors?.petObserv
                    : null
                }
                defaultValue={petObserv}
                handleOnChange={handleChange}
                handleOnBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
