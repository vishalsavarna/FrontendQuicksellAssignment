
# Quicksell Kanban Board


## 📋 Project Overview

Quicksell Frontend Assignment is a **React.js** application designed to streamline project management by providing an intuitive interface. 
The application fetches and displays ticket data from the Quicksell API, enabling users to group and sort tickets dynamically for better organization.

## 🚀 Features

- **Dynamic Grouping:** Organize tickets by **Status**, **User**, or **Priority**.
- **Sorting Options:** Sort tickets by **Priority** (descending) or **Title** (ascending).
- **Responsive Design:** Optimized for all devices ensuring seamless usability.
- **Persistent State:** User preferences (grouping and sorting options) persist even after page reloads.
- **Interactive UI:** Smooth drag-and-drop functionality for easy ticket management.


## 🔗 API Integration

The application fetches ticket data from the following endpoint:

- **API Endpoint:** [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment)

## 📊 Priority Levels

Tickets are categorized by the following priority levels:

| Priority Level | Description  |
| -------------- | ------------ |
| **4**          | Urgent       |
| **3**          | High         |
| **2**          | Medium       |
| **1**          | Low          |
| **0**          | No Priority  |


## 🛠 Installation Guide

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/vishalsavarna/FrontendQuicksellAssignment.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd FrontendQuicksellAssignment
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Configure Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```env
   REACT_APP_API_URL=https://api.quicksell.co/v1/internal/frontend-assignment
   ```

5. **Start the Development Server:**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## 📚 Usage Instructions

- **Grouping Tickets:**
  - Click the "Display" button and select a grouping option: **Status**, **User**, or **Priority**.
  - The Kanban board will automatically adjust.

- **Sorting Tickets:**
  - Choose sorting by **Priority** or **Title**.

- **Managing Tickets:**
  - Drag and drop tickets to update their grouping.





**© 2024 Vishal Savarna**
