# Waffle Films Co. — Kerala Wedding Photography & Videography

**Waffle Films Co.** is a wedding photography and videography company based in Kerala, India. The project is a modern, interactive website built with React and Framer Motion, designed to showcase wedding portfolios and capture client leads through a dynamic user experience.

---

## 🚀 Features

- **Modern UI/UX** — Built with **React** and styled with **Tailwind CSS**, featuring smooth animations, scrolling effects, and a responsive layout.
- **Interactive Animations** — Enhanced with **Framer Motion**, the site includes parallax scrolling, hover effects, and custom transitions that make the portfolio come alive.
- **Video Integration** — Seamless embedding of wedding trailers and highlight reels from **YouTube**, allowing clients to view full videos directly on the site.
- **Portfolio Gallery** — A comprehensive gallery displaying high-quality wedding photos across multiple categories: Engagements, Weddings, Highlights, and Pre-shoots.
- **Lead Capture System** — An integrated contact form that collects client details including name, email, phone, event type, budget, and message.
- **Client Communication** — Features a WhatsApp chat button for instant messaging and a clickable email address for direct contact.

## 📋 Tech Stack

- **Core Framework**: React 18
- **Styling & Layout**: Tailwind CSS, clsx, tailwind-merge
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Form Validation**: React Hook Form, Zod
- **Testing**: Vitest, Playwright, Testing Library
- **Development**: Vite

## 📦 Installation & Setup

Follow these steps to get a local development environment running:

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd waffle-films-co
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Run tests**
    ```bash
    npm test         # Unit tests
    npm run test:e2e # E2E tests
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```

## 🗂 Project Structure

The project follows a standard React application structure:

```
waffle-films-co/
├── src/
│   ├── components/          # Reusable components (Header, Footer, VideoEmbed, etc.)
│   ├── pages/               # Page components (HomePage, ContactPage, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── api/                 # API integration modules (mock data)
│   ├── utils/               # Utility functions (helpers, validators)
│   ├── assets/              # Static assets (images, fonts)
│   └── App.jsx              # Main application component
├── public/                  # Public assets
└── vite.config.js           # Vite configuration
```

## 🛠 Development

### Adding Video Content

To add a new wedding video, update the `VideoGrid` component or the `mockApi.js` file by adding a new video object with the required fields:

- `id`: Unique identifier
- `title`: Video title
- `url`: YouTube video URL
- `thumbnail`: Preview image URL
- `duration`: Video length (e.g., "5:30")

### Handling Portfolio Images

The portfolio images are currently hardcoded. To update the gallery:
1.  Place your image files in `src/assets/portfolio/`.
2.  Update the `galleryData` array in `src/pages/GalleryPage.jsx` with the new image paths and captions.

### Environment Variables

While the current build uses mock data, you can configure environment variables in a `.env` file at the root of the project (if needed for future API integrations):

```env
VITE_API_URL=https://api.wafflefilms.co
VITE_YOUTUBE_API_KEY=your-key-here
```

## 🧪 Testing

The project includes comprehensive tests to ensure stability:

- **Unit Tests**: Run with `npm test` (using Vitest and Testing Library).
- **E2E Tests**: Run with `npm run test:e2e` (using Playwright).

## 🤝 Contributing

Contributions are welcome! Feel free to open a Pull Request or Issue if you find any bugs or have suggestions for new features.

## 📄 License

This project is licensed under the MIT License.
