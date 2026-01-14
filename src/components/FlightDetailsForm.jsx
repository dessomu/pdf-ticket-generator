import React from 'react';
import { TEMPLATE_REGISTRY } from "../templates"; // Ensure this is imported if needed, though not used directly in snippet logic

export default function FlightDetailsForm({ form, handleChange, templateConfig }) {
  // Check if this is an MMT or Move template
  const isMMT = templateConfig?.id?.includes('mmt');
  const isTripIata = templateConfig?.id?.includes('trip_iata');
  const isGoibibo = templateConfig?.id?.includes('goibibo');
  const isMove = templateConfig?.id?.includes('move_thailand') || templateConfig?.id?.includes('move_malaysia');
  const isCleartrip = templateConfig?.id?.includes('cleartrip');
  const isIndigoIndonesia = templateConfig?.id?.includes('indigo_indo');
  const hideBookingTime = isMMT || isMove || isCleartrip || isIndigoIndonesia || isTripIata||isGoibibo;
  const hideBookingDate = isIndigoIndonesia || isCleartrip || isTripIata;
  return (
    <div className="card">
      <h4>Booking Information</h4>
      <div className="grid-2">
        {!hideBookingDate && (
         <div className="input-group">
           <label className="input-label">Booking Date</label>
            <input
            type="date"
            name="bookingDate"
            value={form.bookingDate}
            onChange={handleChange}
            />
         </div>
        ) }
       

        {!hideBookingTime && (
          <div className="input-group">
            <label className="input-label">Booking Time</label>
            <input
              type="time"
              name="bookingTime"
              value={form.bookingTime}
              onChange={handleChange}
            />
          </div>
        )}
        
        {(isMMT || isTripIata || isGoibibo) && (
            <div className="input-group">
              <label className="input-label">Booking ID</label>
              <input
                name="bookingId"
                value={form.bookingId || ''}
                onChange={handleChange}
              />
            </div>
        )}

        {isCleartrip && (
            <div className="input-group">
              <label className="input-label">Trip ID</label>
              <input
                name="tripId"
                value={form.tripId || ''}
                onChange={handleChange}
              />
            </div>
        )}
      </div>

      <div className="grid-2 mt-4">
        <div className="input-group">
            <label className="input-label">PNR</label>
            <input name="pnr" value={form.pnr} onChange={handleChange} />
        </div>
        
      </div>
      
       <div className="input-group mt-4">
         <label className="input-label">PDF Filename</label>
         <input name="pdfName" value={form.pdfName} onChange={handleChange} />
       </div>

      <hr style={{ margin: '20px 0', borderColor: '#444' }} />

      <h4>Departure Flight</h4>
       <div className="grid-2">
          <div className="input-group">
            <label className="input-label">Boarding Date</label>
            <input
              type="date"
              name="departureBoardingDate"
              value={form.departureBoardingDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Landing Date</label>
            <input
              type="date"
              name="departureLandingDate"
              value={form.departureLandingDate}
              onChange={handleChange}
            />
          </div>
      </div>
      <div className="input-group mt-4">
        <label className="input-label">Departure Flight No.</label>
        <input
        name="departureFlightNo"
        placeholder="e.g. 6E1054 (A320) "
        value={form.departureFlightNo}
        onChange={handleChange}
        />
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#444' }} />

      <h4>Return Flight</h4>
      <div className="grid-2">
          <div className="input-group">
            <label className="input-label">Boarding Date</label>
            <input
              type="date"
              name="returnBoardingDate"
              value={form.returnBoardingDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Landing Date</label>
            <input
              type="date"
              name="returnLandingDate"
              value={form.returnLandingDate}
              onChange={handleChange}
            />
          </div>
      </div>
       <div className="input-group mt-4">
        <label className="input-label">Return Flight No.</label>
        <input
        name="returnFlightNo"
        placeholder="e.g. 6E1057 (A320) "
        value={form.returnFlightNo}
        onChange={handleChange}
        />
      </div>

      { templateConfig?.barcode?.enabled && (
        <>
            <hr style={{ margin: '20px 0', borderColor: '#444' }} />
            <div className="input-group">
                <label className="input-label">Barcode Extra String</label>
                <input
                name="barcodeExtra"
                placeholder="e.g. 0000311Y000Y00000 009BXTOBCP5DBTQ"
                value={form.barcodeExtra}
                onChange={handleChange}
                />
            </div>
        </>
      )}
    </div>
  );
}
