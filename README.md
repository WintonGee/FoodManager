# FoodManager

Project Report: https://drive.google.com/file/d/1ez2tc4DKTKrDWslWheUKjhegmqm7X7P7/view?usp=sharing

PantryCraft is a web application designed to help users manage their ingredients efficiently and generate recipe suggestions based on available items. By leveraging modern technologies like MongoDB, React.js, and the OpenAI API, PantryCraft aims to reduce food waste and simplify meal planning.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

PantryCraft was conceived to solve common problems related to meal planning and ingredient management. Many people face challenges in keeping track of their pantry items, leading to food spoilage and waste. PantryCraft helps users manage their ingredients and provides AI-driven recipe suggestions, making meal planning more efficient and reducing food waste.

## Features

- **Ingredient Management**: Track ingredients available in your pantry, fridge, or other storage areas.
- **Recipe Suggestions**: Get recipe ideas based on the ingredients you have on hand, powered by OpenAI.
- **User-Friendly Interface**: A clean and intuitive interface built with React.js and Material-UI.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Technologies Used

### Backend
- **MongoDB**: NoSQL database for storing ingredients and recipes.
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for creating RESTful APIs.

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Material-UI**: React component library for implementing Material Design.
- **React Router**: Library for routing in React applications.

### APIs and External Services
- **OpenAI API**: Provides AI-driven recipe suggestions.
- **Axios**: HTTP client for making API requests.

### Development and Deployment
- **Git**: Version control system.
- **GitHub**: Hosting service for version control.

### Experimentation with Computer Vision
- **TensorFlow**: Platform for machine learning tasks.
- **OpenCV**: Computer vision library (deferred feature).

### Tools and Utilities
- **VS Code**: Code editor.
- **npm**: Package manager for JavaScript.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PantryCraft.git
   cd PantryCraft
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your MongoDB and OpenAI API keys:
   ```env
   MONGODB_URI=your_mongodb_uri
   OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the interface to add ingredients to your pantry.
3. Explore recipe suggestions based on your available ingredients.

## Future Enhancements

- **Computer Vision Integration**: Implement receipt and object detection to automate ingredient input.
- **Improved UI/UX**: Further refine the user interface based on user feedback.
- **Advanced Features**: Add functionality like shopping lists and meal planning.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [OpenAI](https://openai.com/)
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [MongoDB](https://www.mongodb.com/)
- [TensorFlow](https://www.tensorflow.org/)

---

