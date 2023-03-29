import React from "react";

interface FormProps {
  heading: string;
}
export const Form1 = ({ heading }: FormProps) => {
  return <form>{heading}</form>;
};
