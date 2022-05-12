function TodoAdd(params) {
    return (
        <button
            onClick={params.onClick}
            style={{
                width: "150px",
                backgroundColor: "#73357D",
                borderRadius: "12px",
                paddingTop: "10px",
                paddingBottom: "10px",
            }}
        >
            <p style={{
                color: "#fff",
                fontFamily: "Red Hat Display",
                fontWeight: "inherit",
                fontSize: "14px",
                margin: "0px",
            }}>Create task</p>
        </button>
    );
}

export { TodoAdd };