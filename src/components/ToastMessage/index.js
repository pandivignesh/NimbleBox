import React from "react";
import cogoToast from "cogo-toast";
import SuccessIcon from "../../assets/img/dls-icon-success-filled.svg";
import ErroIcon from "../../assets/img/dls-icon-cancel-circle-filled.svg";
import WarningIcon from "../../assets/img/dls-icon-cancel-circle-filled.svg";
import InfoIcon from "../../assets/img/dls-icon-cancel-circle-filled.svg";

export const toastSuccessMessage = (
  message = "Successful",
  postion = "top-right",
  hideAfter = 5,
  heading = "Success"
) => {
  cogoToast.success(message, {
    hideAfter: hideAfter,
    position: postion,
    heading: heading,
    role: "aria-role",
    renderIcon: () => <img src={SuccessIcon} alt="icon" />,
    bar: {
      size: "2px",
      style: "solid",
      color: "#4EB748",
    },
  });
};

export const toastErrorMessage = (
  message = "Error Occurred",
  postion = "top-right",
  hideAfter = 5,
  heading = "Error"
) => {
  cogoToast.error(message, {
    hideAfter: hideAfter,
    position: postion,
    heading: heading,
    role: "aria-role",
    renderIcon: () => <img src={ErroIcon} alt="icon" />,
    bar: {
      size: "2px",
      style: "solid",
      color: "#CA3928",
    },
  });
};

export const toastInfoMessage = (
  message = "Information",
  postion = "top-right",
  hideAfter = 5,
  heading = "Information"
) => {
  cogoToast.info(message, {
    hideAfter: hideAfter,
    position: postion,
    heading: heading,
    role: "aria-role",
    renderIcon: () => <img src={InfoIcon} alt="icon" />,
    bar: {
      size: "2px",
      style: "solid",
      color: "#006fcf",
    },
  });
};

export const toastWarningMessage = (
  message = "Warning",
  postion = "top-right",
  hideAfter = 5,
  heading = "Warning"
) => {
  cogoToast.warn(message, {
    hideAfter: hideAfter,
    position: postion,
    heading: heading,
    role: "aria-role",
    renderIcon: () => <img src={WarningIcon} alt="icon" />,
    bar: {
      size: "2px",
      style: "solid",
      color: "#F89922",
    },
  });
};
