import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import React from "react";
import { ChevronDownIcon } from "@/components/ui/icon";
export interface CustomSelectProps {
  selectOptions: Array<{ label: string; value: string; disabled?: boolean }>;
  placeHolder: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({
  onChange,
  placeHolder,
  selectOptions,
}: CustomSelectProps) => {
  return (
    <Select onValueChange={(value) => onChange(value)}>
      <SelectTrigger className="h-14 rounded-lg" variant="outline" size="md">
        <SelectInput placeholder={placeHolder} />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {selectOptions.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
              disabled={option.disabled}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default CustomSelect;
