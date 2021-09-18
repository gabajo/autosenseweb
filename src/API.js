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

export {getStations}