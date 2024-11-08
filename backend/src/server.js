import express from "express";
import http from "http";
import cors from "cors";
const app = express();
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  },
  transports: ["websocket", "polling"],
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (username) => {
    socket.username = username;
    io.emit("message", {
      type: "system",
      content: `${username} joined the chat`,
      timestamp: new Date(),
    });
  });

  socket.on("message", (message) => {
    io.emit("message", {
      type: "user",
      content: message,
      username: socket.username,
      timestamp: new Date(),
    });
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      io.emit("message", {
        type: "system",
        content: `${socket.username} left the chat`,
        timestamp: new Date(),
      });
    }
  });
});
