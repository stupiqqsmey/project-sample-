const ContactPage = () => {
    // A reusable style string for all input fields to ensure consistency.
    const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition";

    // The form submission handler.
    // e.preventDefault() stops the browser from reloading the page.
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        // In a real app, you would send the form data to a server here.
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-brand-blue mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-6">
                Have a question or feedback? Fill out the form below to get in touch.
            </p>

            {/* The <form> element wraps all the inputs. */}
            <form onSubmit={handleSubmit}>
                {/* A grid layout for name and email fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        {/* The <label> is important for accessibility. */}
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={inputStyle}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={inputStyle}
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>
                </div>

                {/* The message field */}
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        className={inputStyle}
                        placeholder="Your message here..."
                        required
                    ></textarea>
                </div>

                {/* The submit button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-brand-blue bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-cyan transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;