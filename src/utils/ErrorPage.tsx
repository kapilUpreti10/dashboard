import React from "react";
import styles from "./error.module.css";

const ErrorPage = ({
  errorTittle,
  errorMessage,
}: {
  errorTittle: string;
  errorMessage: string;
}) => {
  return (
    <div className={styles["error-page"]}>
      <h1 className={styles["error-tittle"]}>{errorTittle}</h1>
      <p className={styles["error-message"]}>{errorMessage}</p>
      <p>
        Sorry, an error occurred. Please try again later or contact support.
      </p>
    </div>
  );
};

export default ErrorPage;
