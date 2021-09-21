import Grid from '@mui/material/Grid';

export default function PointContent({ point }) {



    return (

        <>
            <Grid item xs={12}>
                <div style={{ marginBottom: "1em" }}>{point.point_number} {point.status}</div>
            </Grid>
        </>
    )
}