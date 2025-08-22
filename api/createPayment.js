export default async function handler(req, res) {
  const merchantId = process.env.PAYFAST_MERCHANT_ID;
  const merchantKey = process.env.PAYFAST_MERCHANT_KEY;

  // Your payment logic here using merchantId & merchantKey

  res.status(200).json({ paymentUrl: "https://payfast-link" });
}
