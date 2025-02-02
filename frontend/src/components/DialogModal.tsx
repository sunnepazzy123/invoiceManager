import { FC, ReactNode } from 'react';

type DialogModalType = {
  // eslint-disable-next-line
  modalRef: any;
  children?: ReactNode;
};

const DialogModal: FC<DialogModalType> = ({ modalRef, children }) => {
  return (
    <>
      <dialog ref={modalRef} className="modal">
        <div className="card w-96 bg-white">
          <div className="card-body items-center text-center">{children}</div>
        </div>
      </dialog>
    </>
  );
};

export default DialogModal;
