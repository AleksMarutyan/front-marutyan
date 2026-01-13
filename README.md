# Blog Platform - Modern React Application

A responsive blog platform built with React 19, TypeScript, and Vite, featuring a modern UI with article listings, search functionality, and modal views.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Search Functionality**: Real-time search across posts by title, content, and tags
- **Image Optimization**: Retina-ready images with srcset support
- **Performance**: Lazy loading, skeleton loaders, and optimized bundle size
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Type Safety**: Full TypeScript support with strict type checking

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool and dev server
- **TanStack Query (React Query)** - Data fetching and caching
- **CSS Modules** - Scoped styling
- **Classnames** - Conditional class handling
- **ESLint** - Code quality and consistency

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd front-marutyan

# Install dependencies
npm install
```

## 🚀 Available Scripts

```bash
# Start development server (runs on http://localhost:3000)
npm start
# or
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation and search
│   ├── PostCard/       # Individual post card
│   ├── PostList/       # Post grid layout
│   ├── PostModal/      # Post detail modal
│   └── CardSkeleton/   # Loading skeleton
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── constants/          # App constants and menu items
├── data/              # Static data
└── assets/            # Images, icons, and static files
```

## 🎨 Features Breakdown

### Responsive Layout

- **Desktop**: 3-column grid layout (360px cards)
- **Tablet**: 2-column grid layout
- **Mobile**: Single column layout (336px cards)

### Search

- Real-time filtering
- Searches across title, content, and tags
- Keyboard shortcut (Escape to close)

### Performance Optimizations

- Skeleton loading states
- Image lazy loading
- Optimized bundle with code splitting
- React Query for data caching

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

- Port configured to 3000 (can be changed in `vite.config.ts`)
- CSS uses CSS Modules for component-scoped styling
- All images support Retina displays (1x and 2x versions)

## 👨‍💻 Author

Alex Marutyan

## 📄 License

MIT
