import { useState } from "react";
import "./App.css";

import { TEMPLATE_REGISTRY } from "./templates";
import { buildBarcodeText } from "./utils/barcodeBuilder";
import { generatePDF417 } from "./utils/barcode";
import { generatePdf } from "./utils/pdf";
import { splitName } from "./utils/name";
// import { generateCheckeredPdf } from "./templates/checkerBoxCreator";

function App() {
  // Only one template for now (Thailand Indigo – Single)
  const template = TEMPLATE_REGISTRY["indigo_th_single"];

  const [form, setForm] = useState({
    passengerName: "",
    pnr: "",
    pdfName: "",

    bookingDate: "",
    bookingTime: "",

    // Departure flight
    departureBoardingDate: "",
    departureLandingDate: "",

    // Return flight
    returnBoardingDate: "",
    returnLandingDate: "",

    departureFlightNo: "",
    returnFlightNo: "",
    barcodeExtra: "",
  });

  function formatDate(dateInput) {
    const date = new Date(dateInput);

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  function formatFlightDate(dateInput) {
    const date = new Date(dateInput);

    const day = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
    }).format(date);

    const month = new Intl.DateTimeFormat("en-GB", {
      month: "short",
    }).format(date);

    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  }

  function formatJourneyDate(dateInput) {
    const date = new Date(dateInput);

    const day = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
    }).format(date);

    const month = new Intl.DateTimeFormat("en-GB", {
      month: "short",
    }).format(date);

    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const { surname, firstName } = splitName(form.passengerName);

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleGenerate() {
    try {
      setLoading(true);

      const departureBarcodeText = buildBarcodeText({
        surname,
        name: firstName,
        pnr: form.pnr,
        source: template.config.barcode.legs.return.destination,
        destination: template.config.barcode.legs.departure.destination,
        flightNo: form.departureFlightNo,
        suffix: form.barcodeExtra,
      });

      // Return barcode
      const returnBarcodeText = buildBarcodeText({
        surname,
        name: firstName,
        pnr: form.pnr,
        source: template.config.barcode.legs.departure.destination,
        destination: template.config.barcode.legs.return.destination,
        flightNo: form.returnFlightNo,
        suffix: form.barcodeExtra,
      });

      // Generate barcode image
      const departureBarcodeImage = generatePDF417(departureBarcodeText);
      const returnBarcodeImage = generatePDF417(returnBarcodeText);

      // Prepare fields for PDF
      const pdfFields = {
        bookingTimeString: `* Date of Booking ${formatDate(
          form.bookingDate
        )}, ${form.bookingTime} `,

        // Departure flight
        departureBoardingDate: `23:30 hrs, ${formatJourneyDate(
          form.departureBoardingDate
        )}`,
        departureLandingDate: `03:45 hrs, ${formatJourneyDate(
          form.departureLandingDate
        )}`,

        // Return flight
        returnBoardingDate: `06:45 hrs, ${formatJourneyDate(
          form.returnBoardingDate
        )}`,
        returnLandingDate: `08:00 hrs, ${formatJourneyDate(
          form.returnLandingDate
        )}`,

        // Flight No
        departureFlightNo: `${form.departureFlightNo} ( A320 )`,
        departureDate: formatFlightDate(form.departureBoardingDate),

        returnFlightNo: `${form.returnFlightNo} ( A320 )`,
        returnDate: formatFlightDate(form.returnBoardingDate),

        pnr: form.pnr,
        passengerName: form.passengerName,
      };

      // Generate PDF bytes
      const pdfBytes = await generatePdf({
        templatePdf: template.pdf,
        mapping: template.mapping,
        fields: pdfFields,
        departureBarcodeImage,
        returnBarcodeImage,
      });

      // 2️⃣ Generate checkered debug PDF
      // const checkeredPdfBytes = await generateCheckeredPdf(template.pdf);
      // const blob = new Blob([checkeredPdfBytes], { type: "application/pdf" });

      // Download
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${form.pdfName}.pdf`;
      a.click();

      URL.revokeObjectURL(url);

      // Reset form
      setForm({
        passengerName: "",
        pnr: "",
        pdfName: "",

        bookingDate: "",
        bookingTime: "",

        // Departure flight
        departureBoardingDate: "",
        departureLandingDate: "",

        // Return flight
        returnBoardingDate: "",
        returnLandingDate: "",

        departureFlightNo: "",
        returnFlightNo: "",
        barcodeExtra: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Thailand Indigo – Single Passenger</h2>
      <h4>Booking Information</h4>

      <label>
        Booking Date
        <input
          type="date"
          name="bookingDate"
          value={form.bookingDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Booking Time
        <input
          type="time"
          name="bookingTime"
          value={form.bookingTime}
          onChange={handleChange}
        />
      </label>

      <label>
        PNR
        <input name="pnr" value={form.pnr} onChange={handleChange} />
      </label>

      <label>
        Passenger Full Name
        <input
          name="passengerName"
          value={form.passengerName}
          onChange={handleChange}
        />
      </label>
      <label>
        PDF Name
        <input name="pdfName" value={form.pdfName} onChange={handleChange} />
      </label>

      <hr />

      <h4>Departure Flight</h4>

      <label>
        Boarding Date
        <input
          type="date"
          name="departureBoardingDate"
          value={form.departureBoardingDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Landing Date
        <input
          type="date"
          name="departureLandingDate"
          value={form.departureLandingDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Departure Flight No.
        <input
          name="departureFlightNo"
          placeholder="e.g. 6E1054 (A320) "
          value={form.departureFlightNo}
          onChange={handleChange}
        />
      </label>

      <hr />

      <h4>Return Flight</h4>

      <label>
        Boarding Date
        <input
          type="date"
          name="returnBoardingDate"
          value={form.returnBoardingDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Landing Date
        <input
          type="date"
          name="returnLandingDate"
          value={form.returnLandingDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Return Flight No.
        <input
          name="returnFlightNo"
          placeholder="e.g. 6E1057 (A320) "
          value={form.returnFlightNo}
          onChange={handleChange}
        />
      </label>

      {/* Option B – template controlled */}
      {template.config.barcode.enabled && (
        <>
          <label>
            Barcode Extra String
            <input
              name="barcodeExtra"
              placeholder="e.g. 0000311Y000Y00000 009BXTOBCP5DBTQ"
              value={form.barcodeExtra}
              onChange={handleChange}
            />
          </label>
        </>
      )}

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate & Download PDF"}
      </button>
    </div>
  );
}

export default App;
