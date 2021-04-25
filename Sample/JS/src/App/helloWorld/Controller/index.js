import { Database } from "../../../../../../JS"

const Controller = async(app, opts, next) => {

    /*await app.get("/", (request, response) => {
        new Database.MariaDB({
            host : "192.168.1.100",
            user : "developer",
            password : "Cyberhack2010",
            database : "zolah"
        }).Read("zolah_berita_detail", {
            search : [
                {
                    id_berita : 1
                }
            ]
        }).then(async (resolve) => {
            response.send(resolve)
        }).catch(async (error) => {
            response.send(error)
        })
    });*/

    //read
    await app.get('/', (request, response) => {
        new Database.MariaDB({
                host : "192.168.1.100",
                user : "developer",
                password : "Cyberhack2010",
                database : "zolah",
            })
            .Export()
            .then((res) => {
                response.send(res)
            })
            .catch((error) =>{
                response.send(error);
            })
    })

    // Membuat
    await app.put('/', (request, response) => {
        response.send({ result : "ini adalah ancol"})
    });

    //Update
    await app.post('/', (request, response) => {
        response.send({ result : "ini web 1"})
    })

    //Delete
    await app.delete('/', (request, response) => {
        response.send({ result : "ini web 2"})
    })


    next();
}

export default Controller;