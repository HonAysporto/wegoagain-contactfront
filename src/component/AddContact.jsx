import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AddContact = () => {

    const navigate = useNavigate()
    let url = "https://wegoagain-contactback-1.onrender.com/addcontact"


    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [homeaddress, sethomeaddress] = useState('')
    const [description, setdescription] = useState("")
    const [number, setnumber] = useState("")

    const addContact = () => {
        let contact = {firstname, lastname, email, homeaddress, description, number}
        console.log(contact);
        axios.post(url, contact)
        navigate('/')
        // setfirstname('')
        // setlastname('')
        // setemail('')
        // sethomeaddress('')
        // setnumber('')
        // setdescription('')

    }

  return (
    <>
       <div className="bg-yellow-50 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-3xl text-center text-green-600 font-bold mb-6">Add New Contact</h1>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Home Address"
                    onChange={(e) => setHomeaddress(e.target.value)}
                    value={homeaddress}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
                <button
                    onClick={addContact}
                    className="w-full py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                    Add
                </button>
                <button
                    onClick={() => navigate('/')} // Navigate to the home page
                    className="w-auto py-1 px-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                >
                    Back to Home
                </button>
            </div>
        </div>
      
    </>
  );
};

export default AddContact;
