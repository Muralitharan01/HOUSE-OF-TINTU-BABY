'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Gift, CreditCard, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/useAppStore';

export default function CheckoutPage() {
  const { items, getRawSubtotal, clearCart } = useCartStore();
  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [giftWrap, setGiftWrap] = useState(true);
  const [giftMessage, setGiftMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'razorpay' | 'cod'>('upi');

  const subtotal = getRawSubtotal();
  const shippingFee = subtotal >= 1999 ? 0 : 99;
  const giftWrapFee = giftWrap ? 99 : 0;
  const total = subtotal + shippingFee + giftWrapFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  if (step === 'success') {
    return (
      <div className="section-padding bg-[var(--color-bg-primary)] min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="container-hot max-w-md flex flex-col items-center gap-6 bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-8 sm:p-12 rounded-3xl shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">
            Order Confirmed #HOT-94820
          </span>
          <h1 className="text-display-lg text-[var(--color-brand-primary)]">
            Thank You, {fullName || 'Dear Parent'}! ♡
          </h1>
          <p className="text-body-sm text-[var(--color-text-secondary)]">
            Your luxury order is being hand-wrapped at House of Tintu. We&apos;ve sent tracking details to your mobile & email.
          </p>
          <Link href="/" className="btn-primary btn-lg w-full mt-2">
            Return to Storybook Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot max-w-5xl">
        <div className="flex items-center gap-2 mb-8 text-xs text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-brand-primary)]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[var(--color-brand-primary)]">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Checkout Form Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {step === 'address' ? (
              <form onSubmit={() => setStep('payment')} className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-6 sm:p-8 rounded-3xl shadow-md flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-4">
                  <Truck className="w-5 h-5 text-[var(--color-brand-primary)]" />
                  <h2 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                    Shipping & Delivery Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[var(--color-text-primary)] mb-1 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="input-base text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--color-text-primary)] mb-1 block">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input-base text-xs"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[var(--color-text-primary)] mb-1 block">Street Address</label>
                  <input
                    type="text"
                    placeholder="House / Apartment no., Street, Area"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-base text-xs"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[var(--color-text-primary)] mb-1 block">City</label>
                    <input
                      type="text"
                      placeholder="Chennai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="input-base text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--color-text-primary)] mb-1 block">Pincode</label>
                    <input
                      type="text"
                      placeholder="600001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="input-base text-xs"
                      required
                    />
                  </div>
                </div>

                {/* Gift Wrap & Message Box */}
                <div className="bg-[var(--color-bg-secondary)] p-4 rounded-2xl border border-[var(--color-border)] flex flex-col gap-3">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[var(--color-brand-primary)]">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="accent-[var(--color-brand-primary)] w-4 h-4"
                    />
                    <Gift className="w-4 h-4 text-[var(--color-brand-accent)]" /> Add Signature Gift Wrap & Satin Ribbon (₹99)
                  </label>
                  {giftWrap && (
                    <textarea
                      placeholder="Write a custom gift card message for the recipient..."
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      className="input-base text-xs h-20 bg-white resize-none"
                    />
                  )}
                </div>

                <button type="submit" className="btn-primary btn-lg w-full flex items-center justify-center gap-2">
                  Continue to Payment <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* Payment Step */
              <form onSubmit={handlePlaceOrder} className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-6 sm:p-8 rounded-3xl shadow-md flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[var(--color-brand-primary)]" />
                    <h2 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                      Payment Method
                    </h2>
                  </div>
                  <button type="button" onClick={() => setStep('address')} className="text-xs text-[var(--color-brand-accent)] font-bold flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5" /> Edit Address
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 'upi', label: 'Instant UPI (Google Pay / PhonePe / Paytm)', icon: '⚡' },
                    { id: 'razorpay', label: 'Credit / Debit Card / Netbanking (Razorpay / Stripe)', icon: '💳' },
                    { id: 'cod', label: 'Cash on Delivery (COD)', icon: '💵' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-[var(--color-brand-primary)] bg-[var(--color-bg-secondary)] shadow-xs'
                          : 'border-[var(--color-border)] bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === method.id}
                        onChange={() => {}}
                        className="accent-[var(--color-brand-primary)]"
                      />
                      <span className="text-lg">{method.icon}</span>
                      <span className="text-xs font-bold text-[var(--color-text-primary)]">{method.label}</span>
                    </label>
                  ))}
                </div>

                <button type="submit" className="btn-accent btn-lg w-full flex items-center justify-center gap-2 shadow-lg">
                  Place Order • ₹{total} <ShieldCheck className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Order Summary Column */}
          <div className="lg:col-span-5 bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-6 rounded-3xl shadow-md flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg text-[var(--color-brand-primary)] border-b border-[var(--color-border)] pb-3">
              Order Summary ({items.length} items)
            </h3>

            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <span className="text-[var(--color-text-primary)] font-medium line-clamp-1 flex-1">
                    {item.product.name} (×{item.quantity})
                  </span>
                  <span className="font-bold text-[var(--color-brand-primary)] ml-2">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-border)] pt-4 flex flex-col gap-2 text-xs">
              <div className="flex justify-between text-[var(--color-text-secondary)]">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[var(--color-text-secondary)]">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>
              {giftWrap && (
                <div className="flex justify-between text-[var(--color-text-secondary)]">
                  <span>Gift Wrap & Card</span>
                  <span>₹{giftWrapFee}</span>
                </div>
              )}
              <div className="border-t border-[var(--color-border)] pt-3 flex justify-between font-bold text-base text-[var(--color-brand-primary)]">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
