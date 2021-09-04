import React from "react";

export const ModalContext = React.createContext();

export const ModalProvider = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ModalContext.Provider value={[showModal, setShowModal]}>
            {props.children}
        </ModalContext.Provider>
    );
};
