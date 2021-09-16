let http = require('http');
let fs = require('fs');
let requests = require('requests');

const homeFile = fs.readFileSync("home.html", "utf-8")

const replaceVal = (tempVal, orgVal) => {
    let temp = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temp = temp.replace("{%tempmin%}", orgVal.main.temp_min);
    temp = temp.replace("{%tempmin%}", orgVal.main.temp_max);

}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests("api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=8362d851b2c2fec17202d7f65fd5d529", { streaming }).on("data", (chunk) => {
            const objData = JSON.parse(chunk)
            const arrData = [objData]

            const realTimeData = arrData.map((val) => {
                replaceVal(homeFile, val)
            })

        }).on("end", (err) => {
            if (err) {
                console.log(err);
            }
            console.log("end");
        })
    }
});
server.listen("8000", "127.0.0.1", () => {
    console.log("listening to port 8000");
})