# Warehouse Management System

This project is a Warehouse Management System built with Next.js. It features a product listing page that fetches data from an external API and a product details page. The UI is enhanced with animations, and a like button feature is implemented.

## Features

- **Product Listing Page**: Displays a grid of products with their images, titles, prices, and categories. Each product card has a heart icon that can be toggled between liked and unliked states.
- **Product Details Page**: Shows detailed information about a specific product, including the title, price, description, category, rating, and an "Add to Cart" button.
- **Error Handling**: If the primary API fails, a fallback API is used to ensure that data is always displayed.
- **Responsive Design**: The application is responsive and works well on different screen sizes.
- **Animation**: The UI features animations using Framer Motion for a smooth and interactive experience.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building fast and user-friendly web applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Framer Motion](https://www.framer.com/motion/): A library to add animations and transitions to React components.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/rajdhanwar-suraj/Warehouse-Management-System.git
    cd warehouse-management-system
    ```

2. **Install Dependencies**:

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

3. **Run the Development Server**:

    Start the Next.js development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Integration

This project fetches product data from two APIs:

1. **Primary API**: [FakeStoreAPI](https://fakestoreapi.com/)
2. **Fallback API**: [DummyJSON](https://dummyjson.com/)

The project is configured to use the FakeStoreAPI by default. If there's an issue with fetching data from this API, the application will automatically fallback to DummyJSON.

## Folder Structure

- `components/`: Contains reusable React components.
- `pages/`: Contains the main pages of the application, including the product listing and product details pages.
- `styles/`: Global styles for the application.
- `public/`: Static assets like images, icons, etc.
- `README.md`: This file.

## Error Handling

In both the product listing and product details pages, if the primary API fails to fetch data, the application will catch the error and attempt to fetch the data from the fallback API. This ensures a seamless user experience even when the primary data source is unavailable.

## Customization

- **Styling**: Tailwind CSS classes are used throughout the project. You can customize the styles by modifying the classes in the JSX files.
- **API Endpoints**: If you want to use different APIs, simply update the fetch URLs in the `useEffect` hooks within the pages.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This project was created by Suraj Sharma.

