import { useEffect, useState } from "react"
import EditableField from "./EditableField"
import PointContent from './PointContent';
import toast from "react-hot-toast";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
const API = require("../API.js")

const style = {

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function ProductContent({ stationId, product, setProducts }) {
    const [val, setVal] = useState()
    const [points, setPoints] = useState()
    const errore = (errore) => toast.error(errore);

    useEffect(() => {
        API.getPoints(setPoints, product.product_id)
    }, [product.product_id])

    async function onSubmit() {
        const res = await API.editProductPrice(stationId, product.product_id, setProducts, { val })
        console.log(res);
        if (res?.message) {
            console.log(res.message);
            errore(res.message)
            return false
        }
    }

    return (
        <Box style={style}>
            <Grid container >
                <Grid item xs={4}>
                    {product.product_name}
                </Grid>
                <Grid item xs={6}>
                    <EditableField val={val} value={product.price} setVal={setVal} onSubmit={onSubmit} />
                </Grid>
                <Grid item xs={2}>
                    {product.currency}
                </Grid>

                {points?.map((point) => {
                    return (
                        <Grid item xs={3}>
                            <PointContent key={point.point_id} point={point} product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}