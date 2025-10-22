import 'dotenv/config'
import app from "./src/app";

const PORT: string | undefined = process.env.PORT

app.listen(3000, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
})