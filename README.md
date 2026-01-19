# React Routing Bootcamp Project

This is a React application built as part of a bootcamp to demonstrate client-side routing using React Router DOM. The app includes multiple pages with navigation, dynamic routing for product details, and error handling.

## Features

- **Home Page**: Welcome page for the application.
- **Products Page**: Displays a list of products.
- **Product Detail Page**: Shows details for a specific product using dynamic routing (e.g., `/products/:productId`).
- **Error Page**: Handles and displays errors for invalid routes.
- **Navigation**: Main navigation component for easy page switching.
- **Responsive Layout**: Root layout wrapping all pages.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd react-routing
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server:

```
npm start
```

The app will run on `http://localhost:3000`.

To build for production:

```
npm run build
```

To run tests:

```
npm test
```

## Technologies Used

- **React**: ^19.0.0
- **React Router DOM**: ^7.12.0
- **React Scripts**: 5.0.1
- **Testing Libraries**: Jest DOM, React Testing Library, User Event
- **Web Vitals**: For performance monitoring

## Project Structure

- `src/App.js`: Main app component with router configuration.
- `src/pages/`: Contains page components (Home, Products, ProductDetail, Root, Error).
- `src/components/`: Contains reusable components (MainNavigation).
- `public/`: Static assets.

## Contributing

Feel free to fork and contribute to this project.

## License

This project is private and for educational purposes.
