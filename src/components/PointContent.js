

export default function PointContent({ point }) {



    return (


        <span style={{ display: "flex", justifyContent: "space-evenly" }} >

            <div>{point.point_number}</div>
            <div>{point.status}</div>

        </span>
    )
}