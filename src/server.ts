import dotenv from "dotenv"
import Express  from "express";
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from "./routes/index"

dotenv.config()

const server = Express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(Express.static(path.join(__dirname,'../public')))

//roteas
server.use(mainRouter)

server.use((req, res)=>{
    res.send("pagina nao encontradoa!")
} )


server.listen(process.env.PORT)