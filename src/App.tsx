import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start"></div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to="/dashboard" className="text-white">
              Login to your account
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <img
            src="data:image/jpeg;base64,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"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            The sun
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/employee"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                EMPLOYEE
              </Link>
            </li>
            <li>
              <Link
                to="/department"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                DEPARTMENT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="cardoon2 ">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="data:image/jpeg;base64,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"
            alt="Profile"
          />
          <h2 className="text-xl font-medium text-gray-900 dark:text-white">
            UX/UI designer
          </h2>
          <p className="text-sm text-gray-400 dark:text-gray-300">
            Kan kaewkamol
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <ul className="py-4">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 3.293a1 1 0 010 1.414L7.414 7H11a6 6 0 015.775 7.878A5 5 0 0112.116 19H7.5a3.5 3.5 0 110-7h4.667a1 1 0 010 2H7.5a1.5 1.5 0 100 3h4.616A3.002 3.002 0 0015 13h1a4 4 0 10-2.065-7.436A3.999 3.999 0 009 5H7.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link to="/login" className="ml-2 text-sm font-medium">
                  Enter
                </Link>
              </div>
            </li>

            <li className="px-4 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 4a1 1 0 011-1h4a1 1 0 011 1v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V4zm4 2h2v2h-2V6zm-2 4H9v6h2v-6zm-4 0H5v6h2v-6zm7-3V4h-1v1H8V4H7v1H6a1 1 0 00-1 1v1h10V6a1 1 0 00-1-1h-1zm-5 0H6v2h2V7zm-2 4v6h2v-6H6zm4 0v6h2v-6h-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link to="/" className="ml-2 text-sm font-medium">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
interface Item {
  empNo: number;
  ename: string;
  job: string;
  mgr: number;
  hiredate: string;
  deptno: number;
}

function EmployeePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  // Printing data on the page using console.log()
  console.log(items);

  // Printing data on the page using a table
  const renderedItems = items.map((item) => (
    <tr key={item.empNo}>
      <td>{item.empNo}</td>
      <td>{item.ename}</td>
      <td>{item.job}</td>
      <td>{item.mgr}</td>
      <td>{item.hiredate}</td>
      <td>{item.deptno}</td>
    </tr>
  ));

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <h1>Employee Page</h1>
        <button onClick={handleBack}>Back</button>
        <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Job</th>
              <th>Manager</th>
              <th>Hire Date</th>
              <th>Department Number</th>
            </tr>
          </thead>
          <tbody>
            {renderedItems}
          </tbody>
        </table>
      </div>
    </div>


  );
}


interface Item {
  deptno: number;
  dname: string;
  loc: string;
}
function DepartmentPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/getDepartment")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  // Printing data on the page using console.log()
  console.log(items);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <h1>Department Page</h1>
        <button onClick={handleBack}>Back</button>
        <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Department Number</th>
              <th>Department Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.deptno}>
                <td>{item.deptno}</td>
                <td>{item.dname}</td>
                <td>{item.loc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


}

function ProfilePage() {
  return <h1>Profile Page</h1>;
}

function LogoutPage() {
  return <h1>Logout Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
