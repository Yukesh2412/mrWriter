const WebSocket = require("ws");
const cron = require("node-cron");

function app() {
  console.log("Cron job started");
  const client = new WebSocket("wss://fambuddy.onrender.com");
  client.on("pong", (data) => {
    console.log("NODE CRON - fambuddy");
  });

  cron.schedule("*/1 * * * *", () => {
    client.ping();
  });
}
app();
