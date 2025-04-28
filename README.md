# 📦 Inventory Management System (ASP.NET + React)

This project is a full-stack inventory management system built with **ASP.NET Core Web API** and **React (TypeScript)** using the official .NET React template.
It reads data from an XML-based product catalog and supports pagination, sorting, and error handling. 

The architecture follows best practices such as **Controller → Service → Repository** layers, promoting clean code and separation of concerns.
The React client is bundled and served by the .NET backend in production.

---

## 🚀 Features

- 📁 XML-driven inventory loading
- 🔍 Filtering, sorting (name, price, quantity), and pagination
- 🧱 Clean architecture using services and repositories
- ✅ Unit-tested business logic and controllers
- 📦 Single Docker container for API + frontend
- 🛠 TailwindCSS + Vite + React
- 🧪 xUnit + Moq test coverage

---

## 🧱 Tech Stack

- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: ASP.NET Core Web API (.NET 8)
- **Data Source**: XML
- **Testing**: xUnit, Moq
- **Build/Run**: Docker & Docker Compose

---

## 📂 API Endpoint

| **Method** | **Route**        | **Description**              | **Auth** |
|------------|------------------|------------------------------|----------|
| `GET`      | `/inventory`     | Get all products (paginated) | ❌       |

### 🔎 Query Parameters

| Param      | Type    | Description                     |
|------------|---------|---------------------------------|
| `sortBy`   | string  | Sort by `name`, `price`, or `qty` |
| `order`    | string  | `asc` or `desc`                 |
| `page`     | number  | Page number (default: 1)        |
| `pageSize` | number  | Items per page (default: 5)     |

---
