import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div>
        {props.pdfFile ? (
        <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <page
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              );
            })}

          <Page pageNumber={pageNumber} />
        </Document>
        ) : (
            <p>Pdf File Not Available</p>
        )}
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}

export default PdfComp;
