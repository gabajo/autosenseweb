import { useState, useEffect } from "react"
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';



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

    async function handleSubmit() {
        let valid = await onSubmit()
        if (!valid) {
            setVal(value)
        }
        handleEditing()
    }

    return (
        <div style={{ whiteSpace: "nowrap" }}>
            {isEditing ?
                <Grid container>
                    <Grid item xs={3}>
                        <TextField variant="standard" defaultValue={value} onChange={e => setVal(e.target.value)} />
                    </Grid >
                    <Grid item xs={3}>
                        {children}
                    </Grid>
                    <Grid item xs={3}>
                        {checkIcon}
                    </Grid>
                    <Grid item xs={3}>
                        {closeIcon}
                    </Grid>
                </Grid >
                :
                <Grid container>
                    <Grid item xs={4}>
                        {val ? val : value}
                    </Grid >
                    <Grid item xs={4}>
                        {children}
                    </Grid >
                    <Grid item xs={4}>
                        {editIcon}
                    </Grid >
                </Grid >
            }
        </div>
    )


}

