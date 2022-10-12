import React, {useState} from 'react'
import '../App.css'
import Modal from 'react-modal';

const BusDetails = ({bus, arrival_time, rating, seats_available}) => {

  function openModal() {
    setIsOpen(true);
  }

    const clickHandler = () => {
      openModal()
    }
    

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      let subtitle;
      const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function showMessage(){
    alert("Your ticket has booked successfully!!")
  }

  return (
    <div className='bus-container'>
        
        <div className='test-card'>
               <h4 className='bus-name' onClick={clickHandler}>{bus}</h4>
               <p className='bus-arrival'>{arrival_time}</p>
               <p className='bus-rating'>{rating}</p>
               <p className='seats'>{seats_available}</p>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
            <h3 className='modal-text'>Please enter details</h3>
        </div>
        <form>
            <label className='modal-label'>No of Seats : </label>
            <input type="text" className='modal-input' required/><br/>
            <label className='modal-label'>Email : </label>
            <input type="text" className='modal-input' required/><br/>
            <label className='modal-label'>Phone number : </label>
            <input type="number" className='modal-input' required/><br/>
            <label className='modal-label'>Age : </label>
            <input type="number" className='modal-input' required/><br/>
            <label className='modal-label'>Gender :</label> 
            <input type="radio" id="female" />
            <label className='modal-gender' htmlFor='female'>Female</label> 
            <input type="radio" id="male" />
            <label className='modal-gender' htmlFor='male'>Male</label> <br/>

          <div className='modal-btns'>
             <button onClick={showMessage} className="book-btn">Book</button>
             <button onClick={closeModal} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default BusDetails