import React from 'react';
import { AvForm, AvField, AvInput, AvGroup } from 'availity-reactstrap-validation';
import { Label, Button } from 'reactstrap';
import { useRef } from 'react';

const FormularioTarea = ( {onSubmit} ) => {
    let form = useRef(); //limpiar campos

    const _onSubmit = (values) => {
        onSubmit(values);
        form.reset();
    }

    return (
        <>
            <h3 className='mb-3'>Nueva tarea</h3>

            <AvForm ref= {c => (form = c)} onValidSubmit={(_, values) => onSubmit (values)}>
                <AvGroup className='mb-3'>
                    <AvField name="nombre" label="Nombre" required />
                </AvGroup>

                <AvGroup check className="nb-3">
                    <AvInput type="checkbox" name="completado" />
                    <Label check for ="completado">Completado</Label>
                </AvGroup>

                <div className='text-end'>
                    <Button color="primary">Guardar</Button>
                </div>
            </AvForm>
        </>
    );
}

export default FormularioTarea;