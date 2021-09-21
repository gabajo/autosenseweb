import { useEffect, useState } from "react"
import EditableField from "./EditableField"
import PointContent from './PointContent';
import toast from "react-hot-toast";
const API = require("../API.js")

export default function ProductContent({ stationId, product, setProducts }) {
    const [val, setVal] = useState()
    const [points, setPoints] = useState()

    const errore = (errore) => toast.error(errore);



    async function onSubmit() {
        const res = await API.editProductPrice(stationId, product.product_id, setProducts, { val })
        console.log(res);
        if (res?.message) {
            console.log(res.message);
            errore(res.message)
        }
    }


    useEffect(() => {
        API.getPoints(setPoints, product.product_id)
    }, [product.product_id])

    return (
        <div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1em" }}>{product.product_name}</div>
                <div style={{ marginRight: "1em" }}><EditableField val={val} value={product.price} setVal={setVal} onSubmit={onSubmit} > <div> {product.currency}</div> </EditableField></div>


            </div>
            {points?.map((point) => {

                return (
                    <PointContent key={point.point_id} point={point} product={product} />

                )

            })}
        </div>
    )
}