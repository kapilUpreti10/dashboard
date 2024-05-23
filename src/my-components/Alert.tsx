/* eslint-disable react-hooks/rules-of-hooks */
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useSelector } from "react-redux";

const showAlert = () => {
  const alert = useSelector((state: RootState) => state.alert); // Specify the type of 'state' as RootState
  return (
    <Alert variant={alert.type}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{alert.type}</AlertTitle>
      <AlertDescription>{alert.message}</AlertDescription>
    </Alert>
  );
};
export default showAlert;
