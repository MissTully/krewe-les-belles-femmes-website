import { useEffect, useState } from "react";
import { Ticket } from "@/components/ticket-link";
import { mailtoInquiry } from "@/lib/content";
import { getShopOrder, saveShopOrder } from "@/lib/forms";
import {
  cartShipping,
  cartSubtotal,
  cartTotal,
  clearCart,
  getCart,
  lineLabel,
  money,
  productById,
} from "@/lib/shop";

export function ShopCheckout() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("FL");
  const [zip, setZip] = useState("");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(() => getShopOrder());

  useEffect(() => {
    const existing = getShopOrder();
    if (!existing) return;
    setSaved(existing);
    setName(existing.name);
    setEmail(existing.email);
    setPhone(existing.phone);
    setAddress(existing.address);
    setCity(existing.city);
    setState(existing.state);
    setZip(existing.zip);
    setNote(existing.note);
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const lines = getCart();
    if (lines.length === 0) {
      setError("Add a tote or tee to the bag first.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Please share your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please share a valid email.");
      return;
    }
    if (address.trim().length < 5 || city.trim().length < 2 || zip.trim().length < 5) {
      setError("Please share a shipping address.");
      return;
    }

    const subtotal = cartSubtotal(lines);
    const shipping = cartShipping(subtotal);
    const total = cartTotal(lines);
    const summary = [
      ...lines.map((line) => `${line.qty} × ${lineLabel(line)} — ${money(productById[line.id].price * line.qty)}`),
      `Shipping: ${shipping === 0 ? "complimentary" : money(shipping)}`,
      `Total: ${money(total)}`,
    ].join("\n");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
      city: city.trim(),
      state: state.trim(),
      zip: zip.trim(),
      note: note.trim(),
      summary,
      total: money(total),
    };
    saveShopOrder(payload);
    setSaved({ ...payload, savedAt: new Date().toISOString() });
    clearCart();
  }

  const mailto = saved
    ? mailtoInquiry(
        "LBF boutique order",
        [
          `Name: ${saved.name}`,
          `Email: ${saved.email}`,
          `Phone: ${saved.phone || "(none)"}`,
          `Ship to: ${saved.address}, ${saved.city}, ${saved.state} ${saved.zip}`,
          "",
          saved.summary,
          "",
          saved.note || "(no extra note)",
        ].join("\n"),
      )
    : "";

  return (
    <div id="checkout" className="scroll-mt-28">
      <p className="kicker">Checkout</p>
      <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">Send the order to the krewe.</h2>
      <p className="mt-4 max-w-xl text-muted">
        We’ll save the request on this device, then open an email so it actually reaches the boutique chair. Payment is
        collected with a Square invoice — nothing is charged until you confirm.
      </p>

      {saved ? (
        <div className="banner-ok mt-6" role="status">
          We have your order, {saved.name.split(" ")[0]} — {saved.total}. Send it to the krewe so it can be filled.
        </div>
      ) : null}

      <form className="mt-8 grid gap-4" onSubmit={onSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="form-field">
            <span className="kicker">Name</span>
            <input name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="form-field">
            <span className="kicker">Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <label className="form-field">
          <span className="kicker">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="form-field">
          <span className="kicker">Street</span>
          <input
            name="address"
            autoComplete="street-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-[1fr_5rem_7rem]">
          <label className="form-field">
            <span className="kicker">City</span>
            <input name="city" autoComplete="address-level2" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
          <label className="form-field">
            <span className="kicker">State</span>
            <input name="state" autoComplete="address-level1" value={state} onChange={(e) => setState(e.target.value)} />
          </label>
          <label className="form-field">
            <span className="kicker">ZIP</span>
            <input name="zip" autoComplete="postal-code" value={zip} onChange={(e) => setZip(e.target.value)} />
          </label>
        </div>
        <label className="form-field">
          <span className="kicker">Note</span>
          <textarea
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Sizing questions, pickup instead of ship, a gift message…"
          />
        </label>

        {error ? (
          <p className="text-sm text-cabaret" role="alert">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <Ticket type="submit" variant="wine">
            Save order
          </Ticket>
          {saved ? (
            <Ticket href={mailto} variant="gold">
              Email the krewe
            </Ticket>
          ) : null}
        </div>
      </form>
    </div>
  );
}
