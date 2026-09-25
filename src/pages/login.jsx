import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login as loginApi } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Call backend login API
            const res = await loginApi({
                email: email,
                password: password
            });

            // Save user + token in AuthContext
            login(res.data.user, res.data.token);

            console.log("Login successful");
            console.log("JWT:", res.data.token);

            // Go to protected page
            navigate("/");
        } catch (error) {
            console.log("Login failed:", error);
            console.log("Server response:", error.response?.data);
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Login
                </button>
            </form>

            <p>
                Don't have an account?{" "}
                <Link to="/register">
                    Register
                </Link>
            </p>
        </div>
    );
}

export default Login;

