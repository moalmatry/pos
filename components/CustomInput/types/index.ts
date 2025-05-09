import { IIconComponentType } from "@gluestack-ui/icon/lib/createIcon";
import { ColorValue } from "react-native";
import { SvgProps } from "react-native-svg";

export interface CustomInputProps {
  type: "text" | "password";
  isInvalid: boolean;
  icon?: IIconComponentType<
    | SvgProps
    | {
        fill?: ColorValue;
        stroke?: ColorValue;
      }
  >;
  errorIcon: IIconComponentType<
    | SvgProps
    | {
        fill?: ColorValue;
        stroke?: ColorValue;
      }
  >;
  value: string;
  onChangeText: (text: string) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired: boolean;
  placeholder?: string;
  errorMessage: string;
}
