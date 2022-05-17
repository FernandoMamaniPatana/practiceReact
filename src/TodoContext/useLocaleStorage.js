import { useEffect, useState } from "react";

function useLocalStorage(initialValue = null, nameLocalStorage) {
    const [value, setValue] = useState(initialValue);
    const [dataStatus, setDataStatus] = useState({ loading: true, error: false });
    function initialRequest() {
        setDataStatus({ loading: true, error: false });
        try {
            setTimeout(() => {
                const data = localStorage.getItem(nameLocalStorage);
                if (data) {
                    setValue(JSON.parse(data));
                }
                if (!data) {
                    setValue([]);
                }
                setDataStatus({ loading: false, error: false });
            }, 3000);
        } catch (error) {
            setDataStatus({ loading: false, error: true });
        }
    }
    useEffect(() => {
        initialRequest()
    }, []);
    function saveValue(newTasks) {
        setValue(newTasks)
        localStorage.setItem(nameLocalStorage, JSON.stringify(newTasks));
    }
    return [value, saveValue, dataStatus];
}

export { useLocalStorage };