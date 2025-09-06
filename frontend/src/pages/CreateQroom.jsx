import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const url = "http://localhost:3000"

const CreateQroom = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) {
            toast.error("Please enter a Qroom title");
            return;
        }
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem("qroom_user"));
            const host = user?.id;
            const res = await axios.post(`${url}/api/qroom/create`, { title, description, host });
            toast.success("Qroom created successfully!");
            // redirect to dashboard
            navigate("/dashboard");
        } catch (err) {
            toast.error("Failed to create Qroom");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl border-2 border-black p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">✨ Create New Qroom</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Qroom Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Qroom Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Marketing Strategy Session"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Description (optional)
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Brief about this session..."
                            rows="3"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard")}
                            className="px-5 py-2 rounded-lg border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition border-2 border-black"
                        >
                            {loading ? "Creating..." : "Create Qroom"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateQroom;
