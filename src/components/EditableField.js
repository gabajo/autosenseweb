import { useEffect, useState } from "react"
export default function EditableField({ value }) {
    const [isEditing, setIsEditing] = useState()
    const [val, setVal] = useState()
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
                <div style={{ display: "flex" }}>
                    <input type="text" value={val} onChange={e => setVal(e.target.value)} />
                    <div onClick={handleSubmit}>icona conferma</div>
                    <div onClick={handleEditing}>icona cancella</div>
                </div>
                :
                value}
            <div onClick={handleEditing}>edita</div>
        </div>
    )


}