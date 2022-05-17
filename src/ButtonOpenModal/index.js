import "./ButtonOpenModal.css";
function ButtonOpenModal(params) {
    return (
        <button
            className="ContainerModalButton"
            onClick={() => params.onClick()}
        >
            <h1
                className="TextModal"
            >+</h1>
        </button>
    );
}
export { ButtonOpenModal };