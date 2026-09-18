export type PaymentRequest = { orderId: string; amount: number; currency?: string }
export async function createPaymentOrder(input: PaymentRequest) {
  // Deliberately dummy until Razorpay credentials/plugin are supplied.
  return { provider: 'DUMMY', id: `dummy_${input.orderId}`, amount: input.amount, currency: input.currency ?? 'INR', status: 'created' as const }
}
