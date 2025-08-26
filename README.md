# 🌍 World Clock Dashboard

A modern, responsive React application that displays real-time clocks across different time zones. Built with Vite and React, featuring a clean dark theme and interactive time format controls.

## ✨ Features

- **Real-time Clocks**: Live time updates every second across multiple time zones
- **Multiple Time Zones**: 
  - Local time (auto-detected)
  - New York (EST/EDT)
  - London (GMT/BST)
  - Dubai (GST)
  - India (IST)
  - Singapore (SGT)
  - Sydney (AEST/AEDT)
- **Interactive Controls**: Toggle between 12-hour and 24-hour time formats
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean dark theme with hover effects and smooth animations
- **Accessibility**: ARIA live regions for screen readers

## 🚀 Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript Intl API** - Native timezone and date formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/world-clock.git
   cd world-clock
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Usage

- **View Times**: Each clock card displays the current time for its respective timezone
- **Toggle Format**: Click the "24-hour format" checkbox to switch between 12/24 hour display
- **Responsive**: Resize your browser to see the responsive grid layout

## 🎨 Design Features

- **Dark Theme**: Modern dark interface with subtle gradients
- **Hover Effects**: Cards lift and show animations on hover
- **Typography**: Clean Inter font with proper hierarchy
- **Grid Layout**: Responsive grid that adapts to screen size
- **Color Scheme**: Purple accent colors with high contrast

## 📁 Project Structure

```
world-clock/
├── src/
│   ├── components/
│   │   └── ClockCard.jsx      # Individual clock component
│   ├── App.jsx                # Main application component
│   ├── App.css                # Main styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── public/
├── index.html
├── package.json
└── README.md
```

## 🔧 Customization

### Adding New Time Zones

To add a new timezone, edit `src/App.jsx`:

```jsx
<ClockCard title="Tokyo" timeZone="Asia/Tokyo" />
```

### Modifying Styles

The app uses CSS custom properties for easy theming. Edit `src/App.css`:

```css
:root {
  --primary: #6366f1;    /* Primary color */
  --bg: #0a0a0f;         /* Background color */
  --card: #1a1a24;       /* Card background */
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue on GitHub.

---

**Built with ❤️ using React and Vite**
