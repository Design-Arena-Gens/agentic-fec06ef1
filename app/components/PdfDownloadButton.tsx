"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

type PdfDownloadButtonProps = {
  targetId: string;
};

const PdfDownloadButton = ({ targetId }: PdfDownloadButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById(targetId);
    if (!element || isGenerating) {
      return;
    }
    try {
      setIsGenerating(true);
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fdfaf3"
      });
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const imgWidth = canvas.width * ratio;
      const imgHeight = canvas.height * ratio;
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      pdf.addImage(imageData, "PNG", x, y, imgWidth, imgHeight, undefined, "FAST");
      pdf.save("the-secret-hindi-summary.pdf");
    } catch (error) {
      console.error("PDF generation failed", error);
      alert("PDF तैयार करने में समस्या आई। कृपया दुबारा प्रयास करें।");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="download-button"
      disabled={isGenerating}
    >
      {isGenerating ? "PDF तैयार हो रहा है..." : "PDF डाउनलोड करें"}
    </button>
  );
};

export default PdfDownloadButton;
