        import { useState } from 'react';
        import axios from 'axios';
        import { Link, useNavigate } from 'react-router-dom';
        import {
            storeAccessToken,
            storeRefreshToken,
            getDecryptedAccessToken
        } from "../../../uitils/tokenUtils.js";
        const Login = () => {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [error, setError] = useState('');
            const [loading, setLoading] = useState(false);
            const navigate = useNavigate();

            const handleSubmit = async (e) => {
                e.preventDefault();
                setLoading(true);
                setError('');

                try {
                    const response = await axios.post('https://car-nextjs-api.cheatdev.online/login', {
                        email,
                        password,
                    });

                    const { accessToken, refreshToken, user } = response.data;

                    // Save tokens and user info
                    localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwb2RvMjE0NEBnbWFpbC5jb20iLCJleHAiOjE3NTQzNTYyOTQsInR5cGUiOiJhY2Nlc3MifQ.zqlgFJdYF1x3Th2yhN1Nhh-UEMIMEUxpLQA098Q5A98', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('userId', user?.id); // if user object contains `id`

                    alert('Login successful!');
                    navigate('/');
                } catch (err) {
                    const message = err.response?.data?.message || 'Login failed. Please try again.';
                    setError(message);
                } finally {
                    setLoading(false);
                }
            };

            return (
                <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded bg-white">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            );
        };

        export default Login;
