import { useState } from "react"
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function EditableField({ value, val, setVal, onSubmit }) {
    const [isEditing, setIsEditing] = useState()


    const editIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faEdit} title="Edit" />;
    const closeIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faTimes} title="Confirm" />;
    const checkIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleSubmit} icon={faCheck} title="Undo" />;

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
                    <input type="text" value={val ? val : value} onChange={e => setVal(e.target.value)} />
                    {checkIcon}
                    {closeIcon}
                </div>
                :
                <div style={style}>
                    {val ? val : value}
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