import QRCode from "qrcode"
export const generateQRCode = async (value) => {
  try {
    const url = await QRCode.toDataURL(value, { width: 150, margin: 1 });
    return url;
  } catch (error) {
    console.error("Error generating QR code:", error);
    return null;
  }
}