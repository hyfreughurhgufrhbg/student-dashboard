# Student Sync - Ultimate Productivity Dashboard

![Student Sync Badge](https://img.shields.io/badge/Student-Sync-8A2BE2)
![Next.js](https://img.shields.io/badge/Built%20With-Next.js-black)
![Tailwind](https://img.shields.io/badge/Styled%20With-Tailwind-06B6D4)

A modern, distraction-free productivity dashboard for students. Features a minimalist "Bento Grid" layout, integrated task management, focus timer, and custom themes.

## 🚀 Features

-   **⏱️ Focus Timer**: Built-in Pomodoro timer (25m Focus / 5m Break).
-   **📝 Task Manager**: Simple to-do list that persists your tasks (no database required).
-   **🎨 Theme Switcher**: customize your vibe with Mauve, Blue, Green, or Peach themes.
-   **🔉 Focus Audio**: (Removed by default, but code available if needed).
-   **🔗 Quick Links**: Instant access to Classroom, ChatGPT, and Lofi beats.
-   **💾 Auto-Save**: All data (tasks, notes, theme) saves automatically to your browser.

## 🛠️ Getting Started

### Prerequisites

-   Node.js installed (v18 or higher recommended).

### Installation

1.  **Clone the repository** (or unzip the project folder):
    ```bash
    git clone https://github.com/piyushkadam96k/student-dashboard.git
    cd student-dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

-   `app/page.tsx`: Main dashboard entry point.
-   `app/components/`: Individual widgets (Clock, Timer, Tasks, etc.).
-   `app/globals.css`: Tailwind configuration and theme variables.

## 🎨 Customizing Themes

You can edit the color palettes in `app/globals.css`. Look for the `:root` and `[data-theme="..."]` blocks.

```css
[data-theme="blue"] { 
    --accent-color: #89b4fa; 
    --accent-secondary: #cba6f7; 
}
```

## 🤝 Contributing

Created by **[Piyush Kadam](https://github.com/piyushkadam96k)**.
Feel free to fork and submit PRs!

---
*Stay Focused. Stay Productive.* 🎓
