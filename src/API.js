async function getStations(setStations) {
    console.log("getStations");

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.REACT_APP_KEY
        },
    };

    const resp = await fetch(process.env.REACT_APP_API_URL + "stations", options)
    const json = await resp.json();

    setStations(json)
}

async function getProducts(setProducts, stationId) {
    console.log("getProducts");
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const resp = await fetch(process.env.REACT_APP_API_URL + "products/" + stationId, options)
    const json = await resp.json();

    setProducts(json)
}


async function getPoints(setPoints, productId) {
    console.log("getProducts");
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const resp = await fetch(process.env.REACT_APP_API_URL + "points/" + productId, options)
    const json = await resp.json();


    setPoints(json)
}



async function deleteStation(stationId, setStations, stations) {

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

async function editProductPrice(stationId, productId, setProducts, newPrice) {


    const options = {
        method: "POST",
        body: JSON.stringify(newPrice),
        headers: {
            "Content-Type": "application/json",
        },
    };


    const resp = await fetch(process.env.REACT_APP_API_URL + "edit/price/" + stationId + "/" + productId, options)
    const json = await resp.json();

    console.log(json);

    setProducts(json)

}


async function saveStation(station, setStations) {


    const options = {
        method: "POST",
        body: JSON.stringify(station),
        headers: {
            "Content-Type": "application/json",
        },
    };


    const resp = await fetch(process.env.REACT_APP_API_URL + "newstation", options)
    const json = await resp.json();

    setStations(json)

}



export { getStations, getProducts, getPoints, deleteStation, editStationName, editProductPrice, saveStation }