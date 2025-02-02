"use client";
import React, { useState } from "react";
import ModalMat from "./ModalMat";

const ContractForm = () => {
  const [formMode, setFormMode] = useState("default");
  const [open, setOpen] = React.useState(false);

  const signContract = (e: Event) => {
    e.preventDefault();
    setFormMode("contract");
    handleClickOpen();
  };

  const registerCompany = (e: Event) => {
    e.preventDefault();
    setFormMode("register");
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen((val) => (val = !val));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e: any) => signContract(e)}
                >
                  Sign A Contract
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e: any) => registerCompany(e)}
                >
                  Register A Company
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {formMode == "contract" ? (
          <>
            <ModalMat setOpen={handleClickOpen} open={open} title={formMode}>
              <h2>hello</h2>
            </ModalMat>
          </>
        ) : (
          <>
            <ModalMat setOpen={handleClickOpen} open={open} title={formMode}>
              {/* <ContractRegisterForm /> */}
              <h2>hello</h2>

            </ModalMat>
          </>
        )}
      </>
    </>
  );
};

export default ContractForm;
