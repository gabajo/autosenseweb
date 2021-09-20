import { useState, useEffect } from "react"
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@mui/material";




export default function EditableField({ value, val, setVal, onSubmit, children }) {
    const [isEditing, setIsEditing] = useState()

    const editIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faEdit} title="Edit" />;
    const closeIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faTimes} title="Confirm" />;
    const checkIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleSubmit} icon={faCheck} title="Undo" />;

    useEffect(() => {
        if (value)
            setVal(value)
    }, [value, setVal])

    function handleEditing() {
        setIsEditing(!isEditing)

    }




    function handleSubmit() {
        onSubmit()
        handleEditing()


    }

    return (
        <div>
            {isEditing ?
                <div style={style}>
                    <TextField variant="standard" label="Name" value={val ? val : value} onChange={e => setVal(e.target.value)} />
                    {children}
                    {checkIcon}
                    {closeIcon}
                </div>
                :
                <div style={style}>
                    <div style={{ marginRight: "1em" }}>{val ? val : value}</div>
                    {children}
                    {editIcon}
                </div>
            }
        </div>
    )


}

const style = {
    display: "flex",
    justifyContent: "space-evenly"
}