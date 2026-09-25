import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import TaskList from "./components/TaskList";

function App() {
    return (
        <BrowserRouter>
            <h1>GrowthLift Task Manager</h1>

            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={ <ProtectedRoute>
                                <TaskList />
                            </ProtectedRoute>
                            }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;