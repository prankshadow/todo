# Todo App

A Todo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and Tailwind CSS. The app allows users to manage their todo tasks and provides Google authentication to save user-specific todo data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Google OAuth
- Create, read, update, and delete todo tasks
- Mark tasks as completed or pending
- Responsive design with Tailwind CSS

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version v18.12.1)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prankshadow/todo-app.git

2. Navigate to the project directory: 

   ```bash
   cd todo-app

3. Install the dependencies:

   ```bash
   npm install

4. Create a .env file in the root directory and add the following environment variables:

   ```bash
   MONGODB_URI=your_mongodb_uri
   GOOGLE_ID=your_google_client_id
   GOOGLE_CLIENT_ID=your_google_client_secret

5. Start the development server:

   ```bash
   npm run dev


## Usage

- Sign in using your Google account.
- Create a new todo task by entering the task details and clicking the "Add" button.
- Delete an existing task using the respective icons.
- Mark a task as completed or pending by clicking the check button.

## Contributing

- Fork the repository.
- Create a new branch: git checkout -b main.
- Make your changes and commit them: git commit -m 'Add some feature'.
- Push the changes to your fork: git push origin my-branch-name.
- Open a pull request in the original repository.
