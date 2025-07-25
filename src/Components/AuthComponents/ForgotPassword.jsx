import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    // The API does not support password reset, so this is a UI-only component.
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('If an account with this email exists, a password reset link has been sent.');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Forgot Password</h2>
            <p className="text-center text-gray-600 mb-6">Enter your email to receive a reset link.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-brand-cyan transition-colors">
                    Send Reset Link
                </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
                <Link to="/login" className="text-brand-blue font-semibold hover:underline">Back to Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;