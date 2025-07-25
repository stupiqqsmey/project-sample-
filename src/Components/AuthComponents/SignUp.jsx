import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: 'https://picsum.photos/800' // API requires an avatar URL
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await axios.post('https://api.escuelajs.co/api/v1/users/', formData);
            alert('Account created successfully! Please log in.');
            navigate('/login');
        } catch (err) {
            setError('Failed to create account. The email might already be in use.');
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue";

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" name="name" onChange={handleChange} className={inputStyle} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" name="email" onChange={handleChange} className={inputStyle} required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input type="password" name="password" onChange={handleChange} className={inputStyle} required />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-gray-800 font-bold py-3 rounded-lg hover:bg-brand-cyan transition-colors disabled:bg-gray-400">
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
                Already have an account? <Link to="/login" className="text-red-500 text-brand-blue font-semibold hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default SignUp;