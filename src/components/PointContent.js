

export default function PointContent({ point }) {



    return (


        <span style={{ display: "flex", justifyContent: "space-evenly" }} >

            <div>{point.id}</div>
            <div>{point.status}</div>

        </span>
    )
}