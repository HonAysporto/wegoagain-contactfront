import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { userid } = useParams();
    const navigate = useNavigate();
    
    const url = "http://localhost:5000/contact/contact"

    useEffect(() => {
        // Fetch data from the API using axios.post
        axios.post(url, { id: userid })
            .then(response => {
                // Log the response to verify its structure
                console.log('API Response:', response.data)
                // Set the student data
                setStudent(response.data.message)
            })
            .catch(error => {
                // Handle errors
                setError('An error occurred while fetching the data.')
                console.error(error)
            })
            .finally(() => {
                // Set loading to false regardless of success or failure
                setLoading(false)
            })
    }, [userid])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    // Ensure student is not null before rendering
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-50 p-4">
        {student ? (
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full border border-green-200">
                <h1 className="text-2xl font-semibold text-green-700 mb-4">Contact Information</h1>
                <div className="space-y-4">
                    <p className="text-lg text-gray-700"><span className="font-bold">First Name:</span> {student.firstname}</p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Last Name:</span> {student.lastname}</p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Email:</span> {student.email}</p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Home Address:</span> {student.homeaddress}</p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Description:</span> {student.description}</p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Number:</span> {student.number}</p>
                </div>
                <button
                    onClick={() => navigate('/')} // Navigate to the home page
                    className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Back to Home
                </button>
            </div>
        ) : (
            <div className="text-center text-lg text-gray-600">No student data available.</div>
        )}
    </div>
    )
}

export default Contact
