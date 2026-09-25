import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/Register";
import TaskList from "./components/TaskList";

function App() {
    return (
        <>
            <h1>GrowthLift Task Manager</h1>

            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <TaskList />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;