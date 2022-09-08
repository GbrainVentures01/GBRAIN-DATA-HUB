import { TextField, MenuItem, Button } from '@mui/material';
import { useField, useFormikContext } from 'formik';

export const CustomTextField = ({ name, fullWidth, ...other }) => {
    const [field, meta] = useField(name);
    const defaultConfiq = {
        ...field,
        ...other,
        variant: 'outlined',
        fullWidth: true || fullWidth
    };
    if (meta && meta.touched && meta.error) {
        defaultConfiq.error = true;
        defaultConfiq.helperText = meta.error;
    }
    return <TextField {...defaultConfiq} />;
};

// custom select box

export const CustomSelect = ({ name, setvalue, makeNetCall, options, vtplan, ...other }) => {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChange = (e) => {
        const { value } = e.target;
        makeNetCall && setvalue(value);
        setFieldValue(name, value);
    };

    const defaultConfiq = {
        select: true,
        variant: 'outlined',
        fullWidth: true,
        ...other,
        ...field,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        defaultConfiq.error = true;
        defaultConfiq.helperText = meta.error;
    }
    return (
        <TextField {...defaultConfiq}>
            {options.map((option) => {
                return (
                    <MenuItem
                        key={option.id || option?.variation_code}
                        value={
                            vtplan
                                ? option
                                : option?.attributes?.service_id ||
                                  option?.attributes?.network ||
                                  option?.attributes ||
                                  option?.value ||
                                  option?.name
                        }
                    >
                        {option?.attributes?.Plan || option?.attributes?.provider || option?.name || option?.attributes?.network}
                    </MenuItem>
                );
            })}
        </TextField>
    );
};

//custom date input

export const CustomDate = ({ name, ...other }) => {
    const [field, meta] = useField(name);

    const defaultConfiq = {
        type: 'date',
        variant: 'outlined',
        ...field,
        ...other,
        fullWidth: true
    };

    if (meta && meta.touched && meta.error) {
        defaultConfiq.error = true;
        defaultConfiq.helperText = meta.error;
    }
    return <TextField {...defaultConfiq} />;
};

//Custom

// Custom button
export const CustomButton = ({ children, fullWidth, disabled, ...others }) => {
    const { submitForm } = useFormikContext();
    const handleSubmit = () => {
        submitForm();
    };

    const defaultConfiq = {
        onClick: handleSubmit,
        variant: 'contained',
        color: 'secondary',
        disabled: disabled,
        fullWidth: true || fullWidth
    };

    return <Button {...defaultConfiq}>{children}</Button>;
};
