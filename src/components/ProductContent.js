import { useState } from "react"
import EditableField from "./EditableField"
import PointContent from './PointContent';
const API = require("../API.js")

export default function ProductContent({ stationId, product, prices, setStations }) {
    const [val, setVal] = useState()


    function onSubmit() {
        API.editProductPrice(stationId, product?.product_id, setStations, { val })
    }




    return (
        <div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1em" }}>{product.product_id}</div>

                {prices.map((idx, pricesKey) => {
                    if (prices[pricesKey].product_id === product.product_id) {

                        return (<div style={{ display: "flex" }} key={idx}><EditableField val={val} value={prices[pricesKey].price} setVal={setVal} onSubmit={onSubmit} >
                            <div style={{ marginRight: "1em" }}>{prices[pricesKey].currency}</div></EditableField></div>)
                    } return false
                })}
            </div>
            {product.points.map((point) => {

                return (
                    <PointContent key={point.id} point={point} product={product} prices={prices} setStations={setStations} />

                )

            })}
        </div>
    )
}