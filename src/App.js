import React, { useState } from 'react';
import './App.css';

function App() {
  const initialData = {
    name: "Student Name",
    rollNo: "24WH1A05T6",
    email: "student@example.com",
    course: "B.Tech CSE",
    bio: "Developing via CMD."
  };

  const [student, setStudent] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setStudent(formData);
    setIsEditing(false);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <h2>Student Profile</h2>
        {!isEditing ? (
          <div>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Roll:</strong> {student.rollNo}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <input name="name" value={formData.name} onChange={handleInputChange} />
            <input name="rollNo" value={formData.rollNo} onChange={handleInputChange} />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
