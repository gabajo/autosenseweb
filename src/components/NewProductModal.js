import { useState } from 'react';
import Box from '@mui/material/Box';
import { faPlus, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import BaseModal from './BaseModal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';







const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function NewProductModal({ modalIsOpen, closeModal, setProducts }) {

    const closeIcon = <FontAwesomeIcon icon={faTimes} />;
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const checkIcon = <FontAwesomeIcon icon={faCheck} />;

    const [points, setPoints] = useState([])
    const [addingPoint, setAddingPoint] = useState(false)

    const [productName, setProductName] = useState()
    const [price, setPrice] = useState()
    const [currency, setCurrency] = useState()


    let point = {};
    let product = {};
    function addPoint() {
        if (point.availability) {
            point.id = points.length + 1
            setPoints(points => [...points, point])
            setAddingPoint(false)
        }
    }


    function saveProduct() {
        product.name = productName
        product.price = price
        product.currency = currency
        product.points = points
        setProducts(products => [...products, product])
        setPoints([])
        closeModal()
    }


    function removePoint(point) {
        setPoints(points.filter(item => item !== point));
    }

    const NewPoint = () => {
        return (
            <>
                <Grid item xs={4}>
                    <TextField label="Point id" readOnly value={points.length + 1} variant="standard" onChange={(e) => point.id = e.target.value} />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Availability" required variant="standard" onChange={(e) => point.availability = e.target.value} />
                </Grid>
                <Grid item xs={2}>
                    <Item onClick={addPoint} style={{ cursor: "pointer" }} title="Save point">{checkIcon}</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item onClick={() => setAddingPoint(false)} style={{ cursor: "pointer" }} title="Undo">{closeIcon}</Item>
                </Grid>
            </>)
    }







    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    return (
        <div>

            <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">New Product</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField style={{ width: "100%" }} label="Product Name" variant="standard" onChange={(e) => setProductName(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Price" variant="standard" onChange={(e) => setPrice(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Currency" variant="standard" onChange={(e) => setCurrency(e.target.value)} />
                        </Grid>

                        <Grid item xs={10}>
                            <h3>Points</h3>

                        </Grid>
                        <Grid item xs={2}>
                            <Item title="Add a point" style={{ cursor: "pointer" }} onClick={() => setAddingPoint(true)}>{plusIcon}</Item>
                        </Grid>


                        {addingPoint ? <NewPoint /> : <></>}

                        {points?.map((point) => {
                            return (
                                < >
                                    <Grid item xs={5}   >
                                        {point.id}
                                    </Grid>
                                    <Grid item xs={5} >
                                        {point.availability}
                                    </Grid>
                                    <Grid item xs={2}  >
                                        <Item onClick={() => removePoint(point)} style={{ cursor: "pointer" }} title="Remove Point">{closeIcon}</Item>
                                    </Grid>
                                </>
                            );
                        })}



                        <Grid item xs={12}>
                            <Item title="Save product" style={{ cursor: "pointer" }} onClick={saveProduct}>{checkIcon}</Item>
                        </Grid>
                    </Grid>
                </Box>
            </BaseModal>
        </div >
    );
}