# GTK Digital Growth Engine (AI-Powered Lead Automation)

**Project Overview**  
GTK Digital Growth Engine automates lead generation for GTK Services using AI-enhanced workflows. The system integrates:

- Google Ads & Video Outreach Automation
- Client Lead Capture
- Daily Reporting
- AI-enhanced data processing

---

## 📂 Project Structure

GTK-Growth-Engine-AI/
│
├── automation/ # Python scripts for AI processing, scene detection, and report generation
├── client/ # React frontend (Vite, TailwindCSS)
│ ├── src/components/
│ └── src/pages/
├── server/ # Node.js + Express backend (API, routes, services)
├── reports/ # Generated daily reports (empty by default)
├── .gitignore
└── README.md


---

## ⚡ Features

1. **Automated Lead Generation**  
   Generates leads daily via Google Ads and video outreach.

2. **AI Processing**  
   - Scene detection
   - Highlighting important moments
   - Video summarization and short clips

3. **Frontend & Backend Integration**  
   - React frontend with dashboard
   - Node.js backend with MongoDB database
   - REST APIs for tasks & leads

---

## 🛠️ Installation

### Prerequisites
- Node.js v18+
- npm or yarn
- Python 3.10+
- MongoDB (local or Atlas)
- Git

### Backend Setup

```bash
cd server
npm install
# Create .env file (see .env.example below)
node server.js
Frontend Setup
cd client
npm install
npm run dev
Automation (Python Scripts)
cd automation
pip install -r requirements.txt
Make sure your backend server is running before using the automation scripts.

🌿 Environment Variables
Create a .env file in server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_API_KEY=your_google_api_key
Never commit your .env file.

📄 Usage
Start backend server:

cd server
node server.js
Start frontend:

cd client
npm run dev
Run automation scripts to generate leads and reports:

cd automation
python main.py
Access reports in reports/ folder.

📦 Notes
node_modules/ are ignored in .gitignore

.env file is ignored

Empty folders can be tracked with .gitkeep if needed
