async function getStations(setStations) {
    const options = {
        method: "GET",

        headers: {
            "Content-Type": "application/json",


        },
    };

    const resp = await fetch(process.env.REACT_APP_API_URL + "stations", options)
    const json = await resp.json();

    setStations(json)
}



async function deleteStation(stationId, setStations) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const resp = await fetch(process.env.REACT_APP_API_URL + "delete/" + stationId, options)
    const json = await resp.json();
    setStations(json)

}


async function editStationName(stationId, setStations, newName) {


    const options = {
        method: "POST",
        body: JSON.stringify(newName),
        headers: {
            "Content-Type": "application/json",
        },
    };


    const resp = await fetch(process.env.REACT_APP_API_URL + "edit/name/" + stationId, options)
    const json = await resp.json();

    setStations(json)

}



export { getStations, deleteStation, editStationName }