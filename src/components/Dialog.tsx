import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

interface Props {
  open: boolean;
  setOpen?: (value: boolean) => void;
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}
export default function CustomDialog({
  open,
  setOpen = (value: boolean) => {},
  title,
  actions,
  children,
}: Props) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions}
    </Dialog>
  );
}
