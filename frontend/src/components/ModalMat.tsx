"use client"
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

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
        <div className="flex text-center p-2.5 justify-center py-3">
            <Typography component={'h2'} fontWeight={700} textTransform={'capitalize'}>{title}</Typography>
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
