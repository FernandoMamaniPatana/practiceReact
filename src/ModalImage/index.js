
function ModalImage(params) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "0 auto",
        }}>
            <img src={params.src} alt={params.alt} style={{
                width: "230px",
                height: "400px",
                // flex: "content",
                objectFit: "cover",
            }}/>
        </div>
    )
}
export { ModalImage };