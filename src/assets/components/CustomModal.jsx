import { createPortal } from "react-dom";
import { useEffect } from "react";

export function CustomModal({ onClose, children }) {
  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
  return createPortal(
    <div className="modal-overlay show">
      <div className="modal">
        {children}
        <button onClick={() => onClose()}>Close</button>
      </div>
    </div>,
    document.querySelector("#modal-container")
  );
}
