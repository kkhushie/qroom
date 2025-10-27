
# 🧠 Qroom

**Qroom** is an **open-source real-time audience interaction platform**, similar to **Mentimeter** — built for engaging presentations, live polls, and Q&A sessions.  
Empower your audience with instant feedback, voting, and participation.

---

## 🚀 Quick Start

### 1️⃣ Clone & Setup
```bash
git clone https://github.com/your-username/qroom.git
cd qroom
````

### 2️⃣ Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Run the Application

```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

> 🖥️ App runs at **[http://localhost:5173](http://localhost:5173)**

---

## 🛠️ Tech Stack

| Layer              | Technology                           |
| ------------------ | ------------------------------------ |
| **Frontend**       | React, CSS, Socket.io Client         |
| **Backend**        | Node.js, Express, MongoDB, Socket.io |
| **Authentication** | JSON Web Tokens (JWT)                |
| **Real-Time**      | WebSockets                           |

---

## 🎯 Features

### 👩‍🏫 Host Dashboard

* Create and manage interactive **Qrooms**
* Launch polls and questions live

### 🔢 Join with Code

* Participants join with a **6-digit code**
* No sign-up required

### ⚡ Real-Time Responses

* Instant feedback through Socket.io
* Smooth and scalable WebSocket updates

### 🧩 Question Types

* Multiple Choice (MCQ)
* Text responses
* Word Clouds

### 📊 Live Results

* Dynamic charts with live updates
* Audience analytics and participation metrics

---

<details>
<summary>📁 Project Structure</summary>

```text
qroom/
├── backend/          # Node.js API + Socket.io
│   ├── routes/       # Express routes
│   ├── models/       # MongoDB schemas
│   ├── controllers/  # Logic & handlers
│   └── socket/       # WebSocket events
│
├── frontend/         # React app
│   ├── src/components/  # UI Components
│   ├── src/pages/       # Main pages
│   ├── src/context/     # Global state
│   └── src/utils/       # Helpers & services
│
└── README.md
```

</details>

---

## 🔐 Environment Variables

### Backend `.env`

```bash
PORT=5000
MONGO_URI=mongodb+srv://<your-db-uri>
JWT_SECRET=your-secret-key
```

### Frontend `.env`

```bash
VITE_API_URL=http://localhost:5000
```

---

## 🧑‍💻 Development Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build production version |
| `npm run lint`  | Lint and format code     |
| `npm test`      | Run unit tests (if any)  |

---

## 🤝 Contributing

We ❤️ contributions from the community!
Qroom is **Hacktoberfest-friendly** and beginner-welcoming.

### 💡 Good First Issues

* 🧭 Add a **404 Page** for invalid routes
* 🎨 Create **loading animations**
* 💅 Improve **UI components**
* 🔐 Enhance **auth & validation**

👉 Check our issues labeled **[`good-first-issue`](https://github.com/your-username/qroom/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue)**.

### 🪄 How to Contribute

1. **Fork** this repository
2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**

   ```bash
   git commit -m "Add: your feature"
   ```
4. **Push your branch**

   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

---

## 🧩 Roadmap

* [ ] Add live quizzes & timers
* [ ] Mobile UI optimization
* [ ] Host authentication system
* [ ] Export poll results to CSV
* [ ] Dark/light theme toggle

---

## 🧰 Tools & Libraries Used

| Category      | Tools                                               |
| ------------- | --------------------------------------------------- |
| **Frontend**  | React + Vite, Socket.io Client, Chart.js / Recharts |
| **Backend**   | Node.js, Express, Socket.io                         |
| **Database**  | MongoDB + Mongoose                                  |
| **Auth**      | JWT                                                 |
| **Dev Tools** | ESLint, Prettier, Nodemon                           |

---

## 🧑‍🏫 Use Cases

* Classroom Q&A sessions 🏫
* Conference audience engagement 🎤
* Corporate meetings & trainings 💼
* Live streaming & webinars 🎥
* Real-time feedback collection 📋

---

<details>
<summary>📸 Screenshots (Coming Soon)</summary>

*Add screenshots of:*

* Host Dashboard
* Join Screen
* Live Results View

</details>

---

## 🪪 License

Licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.

---

## 🌍 Community & Support

* 💬 [Discussions](https://github.com/your-username/qroom/discussions)
* 🐞 [Issue Tracker](https://github.com/your-username/qroom/issues)
* 📘 [Wiki / Docs](https://github.com/your-username/qroom/wiki)

---

**Made with ❤️ by the Open Source Community**
*“Engage your audience — one question at a time.”*




