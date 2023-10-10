import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export function DialogModal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;

    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
    };
  }, [onClose]);

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.querySelector("#modal-container")
  );
}
