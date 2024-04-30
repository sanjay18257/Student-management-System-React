import React, { useState, useEffect } from 'react';
import Alert from './component/Alert';
import './App.css';
import Navbar from './component/Navbar';
import AddStudent from './component/AddStudent';
import DisplayStudent from './component/DisplayStudent';
import EditStudent from './component/EditStudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from 'universal-cookie';
import Home from './component/Home';

const cookies = new Cookies();

const App = () => {
  const [alert, setAlert] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = cookies.get('data');
      if (data) {
        setStudents(data);
      } else {
        cookies.set('data', [], { path: '/' });
      }
    };
    fetchData();
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const newStudent = (student) => {
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);
    cookies.set('data', updatedStudents, { path: '/' });
    showAlert('Student added successfully', 'success');
  };

  const deleteStudent = (id) => {
    const check = window.confirm('Are you sure you want to delete this student?');
    if (check) {
      const updatedStudents = students.filter((student, index) => index !== id);
      setStudents(updatedStudents);
      cookies.set('data', updatedStudents, { path: '/' });
      showAlert('Student deleted successfully', 'success');
    } else {
      showAlert('Student not deleted', 'warning');
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddStudent showAlert={showAlert} newStudent={newStudent} />} />
          <Route path="/display" element={<DisplayStudent showAlert={showAlert} deleteStudent={deleteStudent} students={students} />} />
          <Route path="/edit/:id" element={<EditStudent students={students} showAlert={showAlert} setStudents={setStudents} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
