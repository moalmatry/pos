import Dialog from "@/components/Dialog";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import React from "react";

const ManagerDashboard = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <Box>
      <Dialog
        buttonElement={
          <Button onPress={() => setShowDialog(true)}>
            <ButtonText>Hello world</ButtonText>
          </Button>
        }
        setShowAlertDialog={setShowDialog}
        showAlertDialog={showDialog}
      />
    </Box>
  );
};

export default ManagerDashboard;
