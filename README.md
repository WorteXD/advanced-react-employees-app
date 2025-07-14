# Advanced React Employees App

An interactive employee directory built with React, Vite, Bootstrap, Leaflet, and Context/hooks.  
Search for “employees” via the RandomUser API, mark favorites (stored in `localStorage`), and view detailed info with a map.

---

## 🔗 Live Demo

https://advanced-react-employees-app-nikita.netlify.app/

---

## 📂 Repository

https://github.com/WorteXD/advanced-react-employees-app

---

## 🚀 Features

- **Search Page**  
  - Dynamic search form (query on submit)  
  - Grid of employee cards (responsive layout)  
  - “Save favorite” star on each card  
- **Favorites Page**  
  - Separate view of all starred employees  
  - Persisted in browser `localStorage`  
- **Details Page**  
  - Full profile details (name, age, gender, nationality, registered date, email, phone, address)  
  - Leaflet map centered on the employee’s API-provided coordinates  
- **Global State**  
  - `ApiConfigContext` for API settings  
  - `FavoritesContext` for managing favorites  
- **Styling & Accessibility**  
  - Bootstrap 5 for layout and components  
  - Custom theming with primary (green), accent (orange/yellow), and high-contrast borders  
  - Responsive design tested on desktop and mobile  

---

## 🛠️ Tech Stack

- **Framework:** React (v18) with Vite  
- **Routing:** React Router v6  
- **State:** React Context + custom hooks  
- **Styling:** Bootstrap 5 (CDN), custom CSS  
- **Map:** Leaflet + react-leaflet  
- **Data:** [RandomUser API](https://randomuser.me/)  
- **Deployment:** Netlify

---

## ⚙️ Installation & Local Development

1. Clone the repo  
   ```bash
   git clone https://github.com/WorteXD/advanced-react-employees-app.git
   cd advanced-react-employees-app
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Run dev server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Deploy

* **Create a production build:**

  ```bash
  npm run build
  ```

* **Preview the build locally:**

  ```bash
  npm run serve
  ```

* **Deploy to Netlify:**

  1. Push your `main` branch to GitHub.
  2. Netlify is already configured to watch your repo—your site will auto-deploy on each push.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests. Please maintain the existing coding style and run `npm run lint` before pushing.

---

## 📝 License

This project is released under the **MIT License**.
See [LICENSE](LICENSE) for details.
