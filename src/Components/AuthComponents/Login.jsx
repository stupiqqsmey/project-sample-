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
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
            alert('Login Successful!');
            console.log(response.data.access_token); // In a real app, save this token
            navigate('/');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue";

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyle} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputStyle} required />
                </div>
                <div className="text-right mb-6">
                    <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">Forgot Password?</Link>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-gray-800 font-bold py-3 rounded-lg hover:bg-brand-cyan transition-colors disabled:bg-gray-400">
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
                Don't have an account? <Link to="/signup" className=" text-red-500 text-brand-blue font-semibold hover:underline">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;