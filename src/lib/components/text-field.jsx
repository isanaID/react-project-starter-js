/* eslint-disable react/require-default-props */

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function TextField({
  label,
  name,
  value,
  errorMessage,
  helperText,
  placeholder,
  id,
  type = "text",
  onChange,
  inputProps,
  disabled,
  ...customProps
}) {
  const isInvalid = !!errorMessage;

  return (
    <FormControl {...customProps} isInvalid={isInvalid}>
      {label && <FormLabel htmlFor={id || label}>{label}</FormLabel>}
      <Input
        id={id || label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...inputProps}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export { TextField };
