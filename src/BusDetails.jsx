import React, { useState } from "react";
import "../App.css";
import Modal from "react-modal";

const BusDetails = ({
  fromLocation,
  toLocation,
  bus,
  arrival_time,
  rating,
  seats_available,
}) => {
  const [formData, setFormData] = useState({
    busName: bus,
    noOfSeats: 0,
    phoneNumber: "",
    email: "",
    age: "",
    gender: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const clickHandler = () => {
    openModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function showMessage(e) {
    e.preventDefault();
    e.stopPropagation();
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPhoneNumber = /^[6-9]\d{9}$/gi;

    if (
      !formData.noOfSeats ||
      !formData.age ||
      !formData.busName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.gender
    ) {
      alert("Please fill all fields in the form");
      return;
    } else if (!formData.email.match(validEmail)) {
      alert("Please enter valid email");
      return;
    } else if (!validPhoneNumber.test(formData.phoneNumber)) {
      alert("Enter valid phone number");
    } else if (!(formData.age >= 10 && formData.age <= 99)) {
      alert("Minimum age is 10 and maximum age is 99");
    } else {
      const currentUser = JSON.parse(
        JSON.stringify(localStorage.getItem("currentUser"))
      );
      const bookingDetails = JSON.parse(
        JSON.stringify(localStorage.getItem("bookingDetails"))
      );
      const details = JSON.parse(bookingDetails);
      const bookedDetails = {
        ...formData,
        fromLocation,
        toLocation,
        userId: JSON.parse(currentUser) && JSON.parse(currentUser).id,
        id: Math.random().toString(36).substring(7, 10),
      };
      details.push({ ...bookedDetails });
      localStorage.setItem("bookingDetails", JSON.stringify([...details]));
      alert("You have booked successfully!!");
      closeModal();
    }
  }

  return (
    <div className="bus-container">
      <div className="test-card">
        <h3 className="bus-name" onClick={clickHandler}>
          {bus}
        </h3>
        <h4 className="bus-arrival">{arrival_time}</h4>
        <h4 className="bus-rating">⭐{rating}</h4>
        <h4 className="seats">{seats_available}</h4>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          <h3 className="modal-text">Please enter details</h3>
        </div>
        <form>
          <label className="modal-label">No of Seats : </label>
          <input
            type="number"
            className="modal-input"
            value={formData.noOfSeats}
            min={0}
            max={4}
            onChange={(e) => {
              if (e.target.value >= 0 && e.target.value <= 4) {
                setFormData({ ...formData, noOfSeats: e.target.value });
              } else {
                alert("Maximum 4 seats only");
              }
            }}
            required
          />
          <br />
          <label className="modal-label">Email : </label>
          <input
            type="text"
            className="modal-input"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <br />
          <label className="modal-label">Phone number : </label>
          <input
            type="number"
            className="modal-input"
            required
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
            }}
          />
          <br />
          <label className="modal-label">Age : </label>
          <input
            type="number"
            className="modal-input"
            required
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
          />
          <br />
          <label className="modal-label">Gender :</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={formData.gender === "female"}
            onClick={(e) => {
              if (e.target.checked) {
                setFormData({ ...formData, gender: "female" });
              }
            }}
          />
          <label
            className="modal-gender"
            value="female"
            checked={formData.gender === "female"}
            htmlFor="female"
          >
            Female
          </label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={formData.gender === "male"}
            onClick={(e) => {
              if (e.target.checked) {
                setFormData({ ...formData, gender: "male" });
              }
            }}
          />
          <label className="modal-gender" htmlFor="male">
            Male
          </label>
          <br />
          <div className="modal-btns">
            <button onClick={(e) => showMessage(e)} className="book-btn">
              Book
            </button>
            <button onClick={closeModal} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BusDetails;
