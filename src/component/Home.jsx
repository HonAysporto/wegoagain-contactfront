import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000/contact/display";
  const [allContacts, setallContacts] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {

    axios.get(url).then((response) => {
      console.log(response.data.message);
      setallContacts(response.data.message);
    });
  }

  const details = (contact) =>{
    // alert(contact._id)
    navigate(`./contact/${contact._id}`)
  }

  return (
    < >
   <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
  <div className="w-full max-w-4xl p-8">
    <div className="mb-8 yyyyyyyy">
      <h1 className="text-center text-green-700 text-4xl font-bold">Contact App</h1>
      <div className="flex justify-end mt-6">
        <button
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={() => navigate("/addcontact")}
        >
          Add New Contact
        </button>
      </div>
    </div>

    <div className="w-full max-w-4xl mb-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-green-700 text-3xl font-bold">Contacts</h1>
        <button
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={refresh}
        >
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {allContacts.map((contact) => (
          <div
            key={contact._id}
            onClick={()=>details(contact)}
            className="bg-green-100 hover:bg-green-200 border border-green-300 rounded-lg cursor-pointer p-4 transition duration-200 ease-in-out"
          >
            <p className="text-xl font-semibold text-green-700">
              {contact.firstname} {contact.lastname}
            </p>
            <p className="text-green-600 italic">{contact.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    
    </>
  );
};

export default Home;
