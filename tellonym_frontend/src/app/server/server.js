const { Hono } = require('hono');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the app
const app = new Hono();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use('*', cors());
app.use('*', async (c, next) => {
  c.res.headers.append('Content-Type', 'application/json');
  await next();
});

// MongoDB connection
const uri = 'mongodb+srv://Kanisha13:kanu13@cluster0.3hsogmn.mongodb.net/chatapplication?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your actual connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the schema
const messageSchema = new mongoose.Schema({
  from: String,
  to: String,
  media: {
    type: { type: String },
    content: String,
  },
  timestamp: { type: Date, default: Date.now },
});

const chatRoomSchema = new mongoose.Schema({
  room_id: String,
  members: [String],
  messages: [messageSchema],
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

// Socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join room', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('chat message', async (message) => {
    console.log('Message received:', message);

    const { room_id, from, to, media, timestamp } = message;
    let chatRoom = await ChatRoom.findOne({ room_id });

    if (!chatRoom) {
      chatRoom = new ChatRoom({ room_id, members: [from, to], messages: [] });
    }

    chatRoom.messages.push({ from, to, media, timestamp });
    await chatRoom.save();

    io.to(room_id).emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// API endpoints
app.get('/', (c) => c.text('Chat App Backend'));

app.get('/chatrooms/:room_id', async (c) => {
  const { room_id } = c.req.param();
  const chatRoom = await ChatRoom.findOne({ room_id });
  if (chatRoom) {
    return c.json(chatRoom);
  } else {
    return c.json({ error: 'Chat room not found' }, 404);
  }
});


// Start the server
server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001');
});
