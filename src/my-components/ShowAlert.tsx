import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";

const ShowAlert = () => {
  const alert = useSelector((state: RootState) => state.alert);

  if (!alert.message) return null; // Return null if there is no message

  return (
    <Alert variant={alert.type}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{alert.type}</AlertTitle>
      <AlertDescription>{alert.message}</AlertDescription>
    </Alert>
  );
};

export default ShowAlert;
