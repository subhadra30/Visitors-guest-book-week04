import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION,
});

app.listen("8080", () => {
  console.log("I am waiting here at port 8080");
});

//add form details into database
app.post("/messages", async (request, response) => {
  console.log(request.body);
  response.json("New entry in database");

  var guestBook =
    "INSERT INTO messages(username, message,emoji) VALUES('" +
    request.body.username +
    "','" +
    request.body.message +
    "','" +
    request.body.emoji +
    "')";
  console.log(guestBook);
  await db.query(guestBook);
});

//Get data from DB

app.get("/messages", async function (request, response) {
  const result = await db.query(`SELECT * FROM messages`);
  const messages = result.rows;
  response.json(messages);
});
