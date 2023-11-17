// src/App.js
import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import logo from "./images/icons/img-01.png"



const usersData = [
  { id: 1, username: 'Divyasnh Walia', email: 'divyanshwalia2002@gmail.com', phone: '9558530350', creationDate: '2002-08-13' },
  { id: 2, username: 'bhawna', email: 'bhawna@gmail.com', phone: '7484695646', creationDate: '2002-7-19' },
  { id: 3, username: 'Shivam', email: 'shivam@gmail.com', phone: '7484695646', creationDate: '2002-3-13' },
  { id: 4, username: 'Ehsaas', email: 'ehsaas@gmail.com', phone: '846559452', creationDate: '2012-8-21' },
  { id: 5, username: 'Aaina', email: 'aaina@gmail.com', phone: '3225465225', creationDate: '2002-10-25' },
  { id: 6, username: 'Shivani', email: 'shivani@gmail.com', phone: '845872153', creationDate: '2002-11-18' },
  { id: 7, username: 'rohit', email: 'rohit@gmail.com', phone: '9875512521', creationDate: '2021-7-3' },
  { id: 8, username: 'divjot', email: 'divjot@gmail.com', phone: '65412456358', creationDate: '2016-4-6' },
  // Add more dummy data as needed
];


const App = () => {
  
  const [users, setUsers] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:27017/Test.users')
    
    .then(user => setUsers(users.data))
    .catch(err => console.log(err))
    console.log(users)
  })


  const [activeTab, setActiveTab] = useState('UserDetails');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = usersData.filter(usersData =>
    usersData.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openReportModal = user => {
    setSelectedUser(user);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // Implement logic to handle account creation form submission
  };

const handleSearch=async()=>{
      
}
console.log(setSearchTerm)
const UserDetails = ({ openReportModal, filteredUsers, setSearchTerm }) => (
  <div>
    <div class="search">

    <input class="search-box"
      type="text"
      placeholder="Search for usernames"
      className="p-2 mb-4"
      onChange={e => setSearchTerm(e.target.value)}
      />
      </div>

    <table class="center">
      <thead>
        <tr>
          <th className="p-2 border border-gray-300">Username</th>
          <th className="p-2 border border-gray-300">Email</th>
          <th className="p-2 border border-gray-300">Phone</th>
          <th className="p-2 border border-gray-300">ID</th>
          <th className="p-2 border border-gray-300">Creation Date</th>
          <th className="p-2 border border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(usersData => {
          return <tr key={usersData.id}>
            <td className="p-2 border border-gray-300">{usersData.username}</td>
            <td className="p-2 border border-gray-300">{usersData.email}</td>
            <td className="p-2 border border-gray-300">{usersData.phone}</td>
            <td className="p-2 border border-gray-300">{usersData.id}</td>
            <td className="p-2 border border-gray-300">{usersData.creationDate}</td>
            <td className="p-2 border border-gray-300">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => openReportModal(usersData)}
              >
                Generate Report
              </button>
            </td>
          </tr>
         })}
      </tbody>
    </table>
  </div>
);

const AccountCreation = ({ handleFormSubmit }) => (
  <div className='limiter'>
    <div class="container-login100">
			<div class="wrap-login100">
        <div class="login100-pic" data-tilt>
        <img src={logo} alt="logo" />
				</div>
        
        
         <form class="login100-form validate-form" onSubmit={handleFormSubmit}>
         <span class="login100-form-title">
           Account Creation
					</span>
         
          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Username"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

           <Link to="/">
           <div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Create Account
						</button>
					 </div>
           </Link>
         </form>
      </div>
		</div>
  </div>
);



const TailwindSection = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
      </div>
    </div>
  </section>
);



  return (
    
    <Router>
      
  <header role="banner">
    <nav class="navbar ">
             <div class="container">     
                       {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                        </button> */}

                       <ul class="menu">
                        <a class="navbar-brand" href="index.html">User Management Dashboard</a>
                       <li>
                        <Link to="/account-creation" class="navbar-account-creation">
                          <a class="menu-btn" href="index.html">Account Creation</a>
                          
                        </Link>
                        </li>
                       </ul>
                       <div class="collapse navbar-collapse" id="navbarsExample05">

                    <Routes>
                    {/* <Route path="/" index element={<AccountCreation handleFormSubmit={handleFormSubmit} />} /> */}
                      <Route path="/" element={<UserDetails openReportModal={openReportModal} filteredUsers={filteredUsers} setSearchTerm={setSearchTerm} />} />
                      <Route path="/account-creation"index element={<AccountCreation handleFormSubmit={handleFormSubmit} />} />
                      <Route path="/tailwind-section" element={<TailwindSection />} />
                    </Routes>


                    </div>
        </div>
      </nav>
    </header>
        
             {selectedUser && (
               <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ background: '#fff', padding: '1rem' }}>
                   <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>User Report</h2>
                   <p>Username: {selectedUser.username}</p>
                   <p>Email: {selectedUser.email}</p>
                   <p>Phone: {selectedUser.phone}</p>
                   <p>ID: {selectedUser.id}</p>
                   <p>Creation Date: {selectedUser.creationDate}</p>
                <button
                  style={{ background: '#3490dc', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', marginTop: '1rem' }}
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
           
          
    </Router>

    
  );
};

export default App;
