import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://dev.frevend.com/json/users.json";
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(proxyurl + url);
      setUsers(res.data.users);
      setLoading(false);
      console.log(res.data.users);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">MereHead Test</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
