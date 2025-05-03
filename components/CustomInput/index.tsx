import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import React from "react";
import { CustomInputProps } from "./types";

const CustomInput = ({
  isInvalid,
  icon,
  value,
  onChangeText,
  errorIcon,
  isDisabled,
  isReadOnly,
  isRequired,
  placeholder,
  errorMessage,
}: CustomInputProps) => {
  return (
    <FormControl
      isInvalid={isInvalid}
      size="lg"
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      <Input className="px-4 h-14 rounded-lg">
        <InputSlot>
          <InputIcon className="text-primary-500" as={icon} />
        </InputSlot>
        <InputField
          type="text"
          value={value}
          placeholderClassName="bg-gray-500"
          onChangeText={(text) => onChangeText(text)}
          placeholder={placeholder}
        />
      </Input>

      <FormControlError>
        <FormControlErrorIcon as={errorIcon} />
        <FormControlErrorText>{errorMessage}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default CustomInput;
