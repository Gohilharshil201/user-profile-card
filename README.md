# 🧩 React Reusable UI Components with Ant Design

> **React Reusable UI Component Library (with Ant Design)**  
> This project includes multiple reusable UI components built with Ant Design.  
> Each component consumes JSON data and renders clean, responsive layouts.  
> Ideal for dashboards, portfolios, or admin panels.

---

## ✨ Features

- Fully reusable and customizable components
- Powered by [Ant Design](https://ant.design/) UI framework
- Accepts dynamic JSON data (props or API-ready)
- Mobile-friendly, responsive layouts
- Clean, modern UI for real-world use cases

---

## 📷 Preview

### 👤 User Profile Card  
Renders user avatars, bios, and social links from JSON data.

🔗 [Preview Image](https://drive.google.com/file/d/1zesFmgua0eOvGDm7dvxCK4OYCsMBpOGL/view?usp=sharing)
🔗 [Preview Image](https://drive.google.com/file/d/1NunDPGcaRZObLEZnVkxkgCIeNKthqbGv/view?usp=sharing)

---

## 🧱 Components

### 👤 UserProfileCard

- Displays avatar, name, bio, and social links
- Hoverable card layout using Ant Design’s `Card` and `Avatar`
- Props: `user` object (JSON)

```jsx
<UserProfileCard user={userObject} />

📊 StatsCard

    Dashboard-style metrics card

    Displays icon, title, and value

    Props: stat object (JSON)

<StatsCard stat={statObject} />

📅 ProjectTimeline

    Vertical timeline for project steps or milestones

    Status-tagged entries (completed, in-progress, pending)

    Props: array of timeline items (JSON)

<ProjectTimeline items={timelineArray} />

🛠 Tech Stack

    React (Functional Components)

    Ant Design (Card, Avatar, Timeline, Tag, Typography, Row, Col)

    JavaScript (ES6+)

    JSON-based props

🚀 Installation

# Clone the repo
git clone https://github.com/Gohilharshil201/user-profile-card.git
cd user-profile-card

# Install dependencies
npm install

# Run the app
npm start

🗂️ File Structure
src/
│
├── components/
│   ├── UserProfileCard.jsx       # Profile card component
│   ├── StatsCard.jsx             # Dashboard stat box
│   └── ProjectTimeline.jsx       # Timeline of events
│
├── userData.js                   # JSON mock user data
├── statsData.js                  # JSON stat data
├── timelineData.js               # JSON timeline items
└── App.js                        # Entry point – renders all components

🔄 Reusability

All components accept clean JSON props:

<UserProfileCard user={userObject} />
<StatsCard stat={statObject} />
<ProjectTimeline items={timelineArray} />

🤝 Contribution

Feel free to fork, improve, or suggest features!
Pull requests are welcome. 🌟

📄 License
MIT