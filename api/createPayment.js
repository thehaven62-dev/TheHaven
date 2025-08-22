export default async function handler(req, res) {
  const merchantId = process.env.PAYFAST_MERCHANT_ID;
  const merchantKey = process.env.PAYFAST_MERCHANT_KEY;

  const { total, itemNames } = req.body;

  // Build the PayFast URL
  const query = new URLSearchParams({
    merchant_id: merchantId,
    merchant_key: merchantKey,
    return_url: 'https://the-haven.vercel.app/success',
    cancel_url: 'https://the-haven.vercel.app/cancel',
    notify_url: 'https://the-haven.vercel.app/api/notify',
    amount: total,
    item_name: itemNames
  });

  res.status(200).json({ paymentUrl: `https://www.payfast.co.za/eng/process?${query.toString()}` });
}
