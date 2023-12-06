import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface ModalMatType {
  setOpen: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalMat({ open, setOpen, children, title }: ModalMatType) {
  const handleClose = () => {
    setOpen();
  };

  return (
    <React.Fragment>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <div className="flex text-center p-2.5 justify-center">
            <h2>{title}</h2>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 4,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div>{children}</div>
      </Dialog>
    </React.Fragment>
  );
}
