import React, { useState } from 'react';
import Logo from '../../assets/logo.jpg'; // Adjust the path as needed
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
// import "../styles/Form.css"
import LoadingIndicator from "../loadingindicator/LoadingIndicator";

const Modal = ({ isOpen, onClose, route, method }) => {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   
    if (!isOpen) return null;
   
    const handleFormSwitch = () => {
        setIsSignup(!isSignup);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const requestData = { username, password };
        if (isSignup) {
            requestData.email = email;
            requestData.profile = { phonenumber: phoneNumber };
        }

        try {
            const res = await api.request({
                url: route,
                method: method,
                data: requestData
            });

            if (isSignup) {
                alert('Registration successful! You can now log in.');
                setIsSignup(false); // Switch to login form
            } else {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/bookticket');
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-neutral-800 p-8 rounded-lg w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-neutral-600 dark:text-neutral-300 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="text-center mb-6">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-24 h-auto mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-4">
                        {isSignup ? 'Sign Up' : 'Log In'}
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignup && (
                        <>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                            required
                        />
                    </div>
                    {loading && <LoadingIndicator />}
                    <button
                        type="submit"
                        className="w-full bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-lg transition-colors duration-300"
                        disabled={loading}
                    >
                        {isSignup ? 'Sign Up' : 'Log In'}
                    </button>
                    <div className="flex justify-between items-center text-sm mt-4">
                        <button
                            type="button"
                            className="text-violet-600 hover:underline"
                            onClick={handleFormSwitch}
                        >
                            {isSignup
                                ? 'Already have an account? Log In'
                                : 'Need an account? Sign Up'}
                        </button>
                        <span className="text-gray-500">
                            © {new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="text-center text-sm mt-2">
                        <a href="#" className="text-violet-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;