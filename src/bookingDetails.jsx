import React, { useEffect } from "react";
import "../App.css";
import yesno from "yesno-dialog";

export const BookingDetails = () => {
  const [bookingDetails, setBookingDetails] = React.useState([]);

  useEffect(() => {
    getBookDetails();
  }, []);

  const getBookDetails = () => {
    const bookingDetails = JSON.parse(
      JSON.stringify(localStorage.getItem("bookingDetails"))
    );
    const currentUser = JSON.parse(
      JSON.stringify(localStorage.getItem("currentUser"))
    );
    if (JSON.parse(bookingDetails).length) {
      const details = JSON.parse(bookingDetails).filter(
        (detail) => detail.userId === JSON.parse(currentUser).id
      );
      setBookingDetails([...details]);
    } else {
      setBookingDetails([]);
    }
  };

  const cancelBooking = async (bookingId) => {
    const isCancel = await yesno();
    if (isCancel) {
      const bookingDetails = JSON.parse(
        JSON.stringify(localStorage.getItem("bookingDetails"))
      );
      const details = JSON.parse(bookingDetails);
      const index = details.findIndex((each) => each.id === bookingId);
      if (index > -1) {
        details.splice(index, 1);
        localStorage.setItem("bookingDetails", JSON.stringify([...details]));
        getBookDetails();
      }
    } else {
      console.log("no testing");
    }
  };

  return (
    <>
      {bookingDetails.length ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>From Location</th>
              <th>To Location</th>
              <th>Bus Name</th>
              <th>No. of Seats</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingDetails.map((detail, index) => {
              return (
                <tr key={detail.id}>
                  <td>{index + 1}</td>
                  <td>{detail.fromLocation || ""}</td>
                  <td>{detail.toLocation || ""}</td>
                  <td>{detail.busName || ""}</td>
                  <td>{detail.noOfSeats || ""}</td>
                  <td
                    className="cancel-booking"
                    onClick={() => cancelBooking(detail.id)}
                  >
                    Cancel Booking
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No Booking Details</h1>
      )}
    </>
  );
};
