
# Task Manager

A simple Task Manager web application built with Node.js and Express. The application allows users to create and manage tasks through a web interface. Tasks are stored as text files on the server, making the project lightweight and easy to understand for beginners.

## Features

* Create new tasks
* View existing tasks
* Store tasks as `.txt` files
* Simple and clean user interface
* Built using Node.js, Express, EJS, HTML, and CSS

---

## Project Structure

```text
Task-Manager/
│
├── public/                 # Static files (CSS, images, client-side assets)
├── views/                  # EJS templates
├── files/                  # Generated task text files
├── node_modules/           # Installed dependencies
│
├── index.js                # Main server file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
└── README.md
```

---

## Prerequisites

Before running the project, make sure you have:

* Node.js installed
* npm (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Somiltiwari003/Task-Manager.git
```

### 2. Navigate into the project directory

```bash
cd Task-Manager
```

### 3. Install dependencies

```bash
npm install
```

This command reads the `package.json` file and installs all required packages into the `node_modules` folder.

---

## Running the Application

Start the server using:

```bash
npm start
```

If the server starts successfully, you will see a message in the terminal.

Open your browser and visit:

```text
http://localhost:3000
```

(Use the port configured in `index.js` if it is different.)

---

## Development Workflow

Whenever you clone the project on a new machine:

```bash
git clone https://github.com/Somiltiwari003/Task-Manager.git
cd Task-Manager
mkdir files
npm install
npm start
```

---

## Technologies Used

* Node.js
* Express.js
* EJS
* HTML
* CSS
* JavaScript

---

## Learning Objectives

This project demonstrates:

* Basic Express server setup
* Routing in Node.js
* Dynamic rendering using EJS
* File system operations
* Handling user input through forms
* Organizing a full-stack web project

---

## Author

**Somil Tiwari**

GitHub: https://github.com/Somiltiwari003
