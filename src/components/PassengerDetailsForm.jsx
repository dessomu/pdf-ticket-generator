import React from 'react';

export default function PassengerDetailsForm({ index, passenger, handleChange, showETicket, showAge }) {
  return (
    <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: 8, marginBottom: 20 }}>
      <h4>Passenger {index + 1}</h4>
      <label style={{ display: 'block', marginBottom: 10 }}>
        Full Name
        <input
          name="passengerName"
          value={passenger.passengerName || ''}
          onChange={(e) => handleChange(index, 'passengerName', e.target.value)}
          style={{ width: '100%', padding: 8, marginTop: 5 }}
        />
      </label>

      {showETicket && (
        <label style={{ display: 'block', marginBottom: 10 }}>
          E-Ticket Number
          <input
            name="eTicketNumber"
            value={passenger.eTicketNumber || ''}
            onChange={(e) => handleChange(index, 'eTicketNumber', e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 5 }}
          />
        </label>
      )}

      {showAge && (
        <label style={{ display: 'block', marginBottom: 10 }}>
          Age
          <input
            name="age"
            placeholder="e.g. 25"
            value={passenger.age || ''}
            onChange={(e) => handleChange(index, 'age', e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 5 }}
          />
        </label>
      )}
    </div>
  );
}
