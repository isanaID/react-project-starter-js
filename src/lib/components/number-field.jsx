import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function NumberField({
  label,
  name,
  value,
  errorMessage,
  helperText,
  placeholder,
  id,
  onChange,
  inputProps,
  disabled,
  usingStepper = false,
  ...customProps
}) {
  const isInvalid = !!errorMessage;

  return (
    <FormControl {...customProps} isInvalid={isInvalid}>
      {label && <FormLabel htmlFor={id || label}>{label}</FormLabel>}
      <NumberInput
        id={id || label}
        value={value}
        name={name}
        onChange={onChange}
        isDisabled={disabled}
        {...inputProps}
      >
        <NumberInputField
          placeholder={placeholder}
          onChange={inputProps?.onChange}
        />
        {usingStepper && (
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        )}
      </NumberInput>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export { NumberField };
