import { Client, Intents } from "discord.js";
import "dotenv/config";
import { server } from "./Server/server";

const { PORT = 3000 } = process.env;

const client = new Client({
  intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)
});

client.on("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);

server.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
