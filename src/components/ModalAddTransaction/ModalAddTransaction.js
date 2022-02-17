import { useState } from 'react';
import ModalContainer from '../ModalContainer';

import Modal from '../Modal';
import ButtonAddTransaction from '../ButtonAddTransaction';
import Toggle from '../Toggle';
import ModalForm from '../ModalForm';

export default function ModalAddTransaction(active, setActive) {
  // const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      {/* <ButtonAddTransaction onClick={() => setModalActive(true)} /> */}
      <Modal active={active} setActive={setActive}>
        <ModalContainer active={active} title={'Добавить транзакцию'}>
          <Toggle />
          <ModalForm onClick={setActive} />
        </ModalContainer>
      </Modal>
    </div>
  );
}
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// // import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// import ButtonAddTransaction from "../ButtonAddTransaction";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   //   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function ModalAddTransaction() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <ButtonAddTransaction onClick={handleOpen}>Open</ButtonAddTransaction>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}
//         </Box>
//       </Modal>
//     </div>
//   );
// }