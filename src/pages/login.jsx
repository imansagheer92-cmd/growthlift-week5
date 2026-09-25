import { useState } from "react";
import { login } from "../api/authApi";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await login({
                email: email,
                password: password
            });

            // Store JWT in localStorage
            localStorage.setItem("token", res.data.token);

            console.log("Login successful");
            console.log("JWT:", res.data.token);

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
        </div>
    );
}

export default Login;