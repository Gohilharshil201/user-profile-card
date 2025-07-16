# 🧩 React Reusable User Profile Card (with Ant Design)

> **React Reusable UI Component (with Ant Design)**  
> Created a reusable user profile card component using Ant Design. Accepts dynamic JSON data as props and renders avatars, bios, and social links with clean UI structure.

---

## ✨ Features

- Fully reusable component
- Powered by [Ant Design](https://ant.design/) UI framework
- Consumes dynamic user data (JSON or API-ready)
- Clean, responsive layout using Ant Design Grid
- Hoverable Card with Avatar, Bio, and Social Links

---

## 📷 Preview

### Example Output:

![User Profile Card Preview](https://drive.google.com/file/d/1wbXfBDQrHMjeykVOiINEH1KI7M7OSyx7/view?usp=sharing)

*(Preview image is illustrative)*

---

## 🛠 Tech Stack

- React (Functional Components)
- Ant Design (`Card`, `Avatar`, `Typography`, `Button`, `Space`, `Grid`)
- JavaScript (ES6+)
- JSON data as input

---

## 🚀 Installation

```bash
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
│   └── UserProfileCard.jsx       # Main reusable card component
├── userData.js                   # JSON mock user data
└── App.js                        # Entry point - maps users to cards

🧠 How It Works

    UserProfileCard.jsx accepts a user object as a prop.

    Uses Ant Design components to build a clean UI card.

    App.js maps over an array of users and renders multiple profile cards.

    Easy to extend: API fetch support, skills list, or contact button.

🔄 Reusability
<UserProfileCard user={userObject} />

🤝 Contribution
Feel free to fork, improve, or suggest features!

📄 License
MIT


