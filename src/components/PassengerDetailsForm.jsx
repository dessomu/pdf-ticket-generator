import React from 'react';

export default function PassengerDetailsForm({ index, passenger, handleChange, showETicket, showAge }) {
  return (
    <div className="card">
      <h4>Passenger {index + 1}</h4>
      <div className="input-group">
        <label className="input-label">Full Name</label>
        <input
          name="passengerName"
          value={passenger.passengerName || ''}
          onChange={(e) => handleChange(index, 'passengerName', e.target.value)}
        />
      </div>

      {showETicket && (
        <div className="input-group">
          <label className="input-label">E-Ticket Number</label>
          <input
            name="eTicketNumber"
            value={passenger.eTicketNumber || ''}
            onChange={(e) => handleChange(index, 'eTicketNumber', e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
