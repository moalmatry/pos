import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from "@/components/ui/alert-dialog";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Icon, TrashIcon } from "@/components/ui/icon";
import React from "react";

export interface DialogProps {
  showAlertDialog: boolean;
  setShowAlertDialog: React.Dispatch<React.SetStateAction<boolean>>;
  buttonElement: React.ReactNode;
  onDelete?: () => void;
}

const Dialog = ({
  showAlertDialog,
  setShowAlertDialog,
  buttonElement,
  onDelete,
}: DialogProps) => {
  const handleClose = () => {
    if (onDelete) {
      onDelete();
    }
    setShowAlertDialog(false);
  };
  return (
    <>
      {buttonElement}
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="w-full max-w-[415px] gap-4 items-center">
          <Box className="rounded-full h-[52px] w-[52px] bg-background-error items-center justify-center">
            <Icon as={TrashIcon} size="xl" className="stroke-error-500" />
          </Box>
          <AlertDialogHeader className="mb-2">
            <Heading size="lg">Delete account?</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="md" className="text-center">
              The invoice will be deleted from the invoices section and in the
              documents folder. This cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="mt-5">
            <Button
              size="md"
              action="negative"
              onPress={handleClose}
              className="px-[30px]"
            >
              <ButtonText>Delete</ButtonText>
            </Button>
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="md"
              className="px-[30px]"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Dialog;
