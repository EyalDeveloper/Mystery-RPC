// Requiring dependencies.
const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc" }); // Other Options: Websocket
const { id, secret } = require("./config.json");

// Customize your Presence

const activity = {
    details: "Join Now🧙‍♂️",
    assets: {
        large_image: "discord-icon",
        large_text: "Mystery"
    },
    buttons: [
        {
            "label": "Discord",
            "url": "https://discord.gg/7eXk3UqJBR"
        },
    ],
    timestamps: {start: Date.now()},
    instance: true
};

client.on("ready", () => {
    console.log("[+] Thank You For using Mystery-RPC")

    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});

    console.log("[+] Developed By: Eyal🌟#0362 [1093620458898866326]")
});

client.login({clientId: id, clientSecret: secret});