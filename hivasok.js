
function adatbeolvas(vegpont, lista, callbackFv){
    fetch(vegpont, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {
            lista = data;
            callbackFv(lista);
        })
        .catch((error) => console.log(error));
}

export default adatbeolvas;