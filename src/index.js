import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8080;
dbConnection()
  .then(() => {
    app.listen(port, () =>{
      console.log(`App is listening to port ${port}`)
    });
  })

