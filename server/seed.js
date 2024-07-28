import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_CONNECTION });

db.query(
  `CREATE TABLE IF NOT EXISTS messages( id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    message TEXT,
    emoji VARCHAR(125));
INSERT INTO messages(username, message, emoji) VALUES
('Lilly', 'Delicious food','./images/happy_emoji.jpg'),
('Peter', 'Less place to roam around', './images/sad_emoji.jpg'),
('Benjamin', 'Service is not as per my expectation', './images/grumpy_emoji.jpg'),
('Tommy', 'Nothing out of ordinary here','./images/embar_emoji.jpg' )`
);
