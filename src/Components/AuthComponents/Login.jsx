import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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

            const { accessToken } = response.data;

            // Save token to localStorage (or use Redux if needed)
            localStorage.setItem('accessToken', accessToken);

            alert('Login successful!');
            navigate('/'); // go to home or dashboard
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full border px-4 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="w-full border px-4 py-2 rounded"
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
                Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
