import React from 'react';

export default function FlightDetailsForm({ form, handleChange, templateConfig }) {
  // Check if this is an MMT or Move template
  const isMMT = templateConfig?.id?.includes('mmt');
  const isMove = templateConfig?.id?.includes('move_thailand') || templateConfig?.id?.includes('move_malaysia');
  const isCleartrip = templateConfig?.id?.includes('cleartrip');
  const isIndigoIndonesia = templateConfig?.id?.includes('indigo_indo');
  const hideBookingTime = isMMT || isMove || isCleartrip || isIndigoIndonesia;
  const hideBookingDate = isIndigoIndonesia || isCleartrip;
  return (
    <div style={{ padding: 20, border: '1px solid #eee', borderRadius: 8, marginBottom: 20 }}>
      <h4>Booking Information</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {!hideBookingDate && (
         <label>
           Booking Date
            <input
            type="date"
            name="bookingDate"
            value={form.bookingDate}
            onChange={handleChange}
            style={{ width: '100%' }}
            />
         </label>
        ) }
       

        {!hideBookingTime && (
          <label>
            Booking Time
            <input
              type="time"
              name="bookingTime"
              value={form.bookingTime}
              onChange={handleChange}
               style={{ width: '100%' }}
            />
          </label>
        )}
        
        {isMMT && (
            <label>
              Booking ID
              <input
                name="bookingId"
                value={form.bookingId || ''}
                onChange={handleChange}
                style={{ width: '100%' }}
              />
            </label>
        )}

        {isCleartrip && (
            <label>
              Trip ID
              <input
                name="tripId"
                value={form.tripId || ''}
                onChange={handleChange}
                style={{ width: '100%' }}
              />
            </label>
        )}
      </div>

      <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10  }}>
        <label>
            PNR
            <input name="pnr" value={form.pnr} onChange={handleChange} style={{ width: '100%' }} />
        </label>
        
      </div>
      
       <div style={{ marginTop: 10 }}>
         <label>
            PDF Filename
            <input name="pdfName" value={form.pdfName} onChange={handleChange} style={{ width: '100%' }} />
         </label>
       </div>

      <hr style={{ margin: '20px 0' }} />

      <h4>Departure Flight</h4>
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <label>
            Boarding Date
            <input
              type="date"
              name="departureBoardingDate"
              value={form.departureBoardingDate}
              onChange={handleChange}
               style={{ width: '100%' }}
            />
          </label>

          <label>
            Landing Date
            <input
              type="date"
              name="departureLandingDate"
              value={form.departureLandingDate}
              onChange={handleChange}
               style={{ width: '100%' }}
            />
          </label>
      </div>
      <div style={{ marginTop: 10 }}>
        <label>
            Departure Flight No.
            <input
            name="departureFlightNo"
            placeholder="e.g. 6E1054 (A320) "
            value={form.departureFlightNo}
            onChange={handleChange}
             style={{ width: '100%' }}
            />
        </label>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <h4>Return Flight</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <label>
            Boarding Date
            <input
              type="date"
              name="returnBoardingDate"
              value={form.returnBoardingDate}
              onChange={handleChange}
               style={{ width: '100%' }}
            />
          </label>

          <label>
            Landing Date
            <input
              type="date"
              name="returnLandingDate"
              value={form.returnLandingDate}
              onChange={handleChange}
               style={{ width: '100%' }}
            />
          </label>
      </div>
       <div style={{ marginTop: 10 }}>
        <label>
            Return Flight No.
            <input
            name="returnFlightNo"
            placeholder="e.g. 6E1057 (A320) "
            value={form.returnFlightNo}
            onChange={handleChange}
             style={{ width: '100%' }}
            />
        </label>
      </div>

      { templateConfig?.barcode?.enabled && (
        <>
            <hr style={{ margin: '20px 0' }} />
            <label>
                Barcode Extra String
                <input
                name="barcodeExtra"
                placeholder="e.g. 0000311Y000Y00000 009BXTOBCP5DBTQ"
                value={form.barcodeExtra}
                onChange={handleChange}
                 style={{ width: '100%' }}
                />
            </label>
        </>
      )}
    </div>
  );
}
