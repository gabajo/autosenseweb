import { useEffect, useState } from "react"
import EditableField from "./EditableField"
import PointContent from './PointContent';
const API = require("../API.js")

export default function ProductContent({ stationId, product, setProducts }) {
    const [val, setVal] = useState()
    const [points, setPoints] = useState()

    function onSubmit() {
        API.editProductPrice(stationId, product.product_id, setProducts, { val })
    }


    useEffect(() => {
        API.getPoints(setPoints, product.product_id)
    }, [])

    return (
        <div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1em" }}>{product.product_name}</div>
                <div style={{ marginRight: "1em" }}><EditableField val={val} value={product.price} setVal={setVal} onSubmit={onSubmit} > <div> {product.currency}</div> </EditableField></div>


            </div>
            {points?.map((point) => {

                return (
                    <PointContent key={point.id} point={point} product={product} />

                )

            })}
        </div>
    )
}