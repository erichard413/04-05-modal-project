import { CustomModal } from "./assets/components/CustomModal";
import { DialogModal } from "./assets/components/DialogModal";
import { useState } from "react";
import "../styles.css";

function App() {
  const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);
  const [isOpenDialogModal, setIsOpenDialogModal] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenCustomModal(true)}>
        Show Custom Modal
      </button>
      {isOpenCustomModal && (
        <CustomModal onClose={() => setIsOpenCustomModal(false)}>
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
        </CustomModal>
      )}
      <br />
      <button onClick={() => setIsOpenDialogModal(true)}>
        Show Dialog Modal
      </button>
      <DialogModal
        isOpen={isOpenDialogModal}
        onClose={() => setIsOpenDialogModal(false)}
      >
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setIsOpenDialogModal(false)}>Close</button>
      </DialogModal>
    </>
  );
}

export default App;
