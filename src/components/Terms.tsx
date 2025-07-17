import React, { useEffect, useRef } from "react";

type TermsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const TermsDialog = ({ isOpen, onClose, children }: TermsDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (isOpen) dlg.showModal();
    else dlg.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      className="rounded-md p-6 bg-white text-black w-11/12 max-w-md"
    >
      <div className="space-y-2 text-sm leading-relaxed">{children}</div>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
        autoFocus
      >
        Close
      </button>

      <style>
        {`
          dialog::backdrop {
            background: rgba(0,0,0,0.5);
          }
        `}
      </style>
    </dialog>
  );
};

export default TermsDialog;
