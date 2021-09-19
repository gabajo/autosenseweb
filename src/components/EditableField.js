import { useEffect, useState } from "react"
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API = require("../API.js")

export default function EditableField({ station, setStations }) {
    const [isEditing, setIsEditing] = useState()
    const [val, setVal] = useState()

    const editIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faEdit} title="Edit" />;
    const closeIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faTimes} title="Confirm" />;
    const checkIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleSubmit} icon={faCheck} title="Undo" />;

    function handleEditing() {
        setIsEditing(!isEditing)

    }

    useEffect(() => {
        setVal(station?.name)
    }, [station?.name])


    function handleSubmit() {
        API.editStationName(station.id, setStations, { val })
        handleEditing()


    }

    return (
        <div>
            {isEditing ?
                <div style={style}>
                    <input type="text" value={val} onChange={e => setVal(e.target.value)} />
                    {checkIcon}
                    {closeIcon}
                </div>
                :
                <div style={style}>
                    {val ? val : station?.name}
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