import PDFDocument from "pdfkit";
import fs from "fs";
import PDFTable from "pdfkit-table";

const doc = new PDFDocument({ size: "A5" });
doc.pipe(fs.createWriteStream("output.pdf"));

doc.fillColor("#6E7A74")
   .fontSize(16)
   .text("ReceiptHub", 50, 150)
   .text("S/No. A04", 250, 150);

doc.image("./Assets/receiptLogo.jpg", 160, 30, { width: 100 });
doc.x=50
doc.moveDown(2)
doc.table({
  columnStyles:[80,80,80,80],
  rowStyles: (i) => {
    return i < 1 ? { border: [0, 0, 1, 0] } : { border: false };
  },
    data: [
        ['S/N', 'Price', 'Quantity',"Total"],
        ['b9493', '50', '10',"500.00"],
        ['b9493', '50', '10',"500.00"],
        ['b9493', '50', '10',"500.00"],
        ['b9493', '50', '10',"500.00"]
    ],
}).fontSize(10)
doc.end();
