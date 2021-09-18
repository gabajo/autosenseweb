import { faEdit, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react"
export default function EditableField({ value }) {
    const [isEditing, setIsEditing] = useState()
    const [val, setVal] = useState()

    const editIcon = <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={handleEditing} icon={faEdit} title="Edit" />;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} title="Carrello" />;

    function handleEditing() {
        setIsEditing(!isEditing)

    }

    useEffect(() => {
        setVal(value)
    }, [value])


    function handleSubmit() {

    }

    return (
        <div>
            {isEditing ?
                <div style={style}>
                    <input type="text" value={val} onChange={e => setVal(e.target.value)} />
                    <div onClick={handleSubmit}>icona conferma</div>
                    <div onClick={handleEditing}>icona cancella</div>
                </div>
                :
                <div style={style}>
                    {value}
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