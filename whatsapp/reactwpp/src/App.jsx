import React, { useState } from 'react';
import UseWhatsapp from 'whatsapp-react-component';

const App = () => {
  const [formData, setFormData] = useState({
    message: '',
    mobileNumber: '',
  });

  const { message, mobileNumber } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function
  const onSubmit = () => {
    // Pass the values to the component
    UseWhatsapp(mobileNumber, message);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={onChange}
            name="mobileNumber"
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={onChange}
            name="message"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default App;
