import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import {
  CART_EVENT,
  CART_OPEN_EVENT,
  cartCount,
  cartShipping,
  cartSubtotal,
  cartTotal,
  getCart,
  lineLabel,
  money,
  productById,
  removeFromCart,
  setCartQty,
  type CartLine,
} from "@/lib/shop";

export function ShopBagButton() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const sync = () => setCount(cartCount(getCart()));
    sync();
    window.addEventListener(CART_EVENT, sync);
    window.addEventListener("storage", sync);
    const openBag = () => setOpen(true);
    window.addEventListener(CART_OPEN_EVENT, openBag);
    return () => {
      window.removeEventListener(CART_EVENT, sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener(CART_OPEN_EVENT, openBag);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="relative inline-flex min-h-11 min-w-11 items-center justify-center text-gold-soft"
        aria-label={count ? `Open bag, ${count} items` : "Open bag"}
        onClick={() => setOpen(true)}
      >
        <ShoppingBag size={20} strokeWidth={1.75} />
        {count > 0 ? (
          <span className="cart-badge" aria-hidden="true">
            {count}
          </span>
        ) : null}
      </button>

      {open ? <CartDrawer onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function CartDrawer({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<CartLine[]>(() => getCart());

  useEffect(() => {
    const sync = () => setLines(getCart());
    window.addEventListener(CART_EVENT, sync);
    return () => window.removeEventListener(CART_EVENT, sync);
  }, []);

  const subtotal = cartSubtotal(lines);
  const shipping = cartShipping(subtotal);
  const total = cartTotal(lines);

  return (
    <div className="cart-overlay" role="presentation" onClick={onClose}>
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-gold/40 px-5 py-4">
          <h2 id="bag-title" className="font-display text-2xl">
            Your bag
          </h2>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            aria-label="Close bag"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="py-8 text-sm text-muted">
              The bag is empty; the tote and crest tee are waiting.
            </p>
          ) : (
            <ul className="grid gap-5">
              {lines.map((line) => {
                const product = productById[line.id];
                return (
                  <li
                    key={`${line.id}-${line.size}`}
                    className="grid grid-cols-[4.5rem_1fr] gap-3"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="h-[4.5rem] w-[4.5rem] object-cover"
                    />
                    <div>
                      <p className="font-display text-lg leading-tight">
                        {lineLabel(line)}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {money(product.price)}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            className="inline-flex min-h-10 min-w-10 items-center justify-center border border-gold/50"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              setCartQty(line.id, line.size, line.qty - 1)
                            }
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center text-sm">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            className="inline-flex min-h-10 min-w-10 items-center justify-center border border-gold/50"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setCartQty(
                                line.id,
                                line.size,
                                Math.min(12, line.qty + 1),
                              )
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-xs tracking-wide text-cabaret uppercase"
                          onClick={() => removeFromCart(line.id, line.size)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-gold/40 px-5 py-5">
          <dl className="grid gap-1 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>{money(subtotal)}</dd>
            </div>
            <div className="flex justify-between text-muted">
              <dt>Shipping</dt>
              <dd>
                {shipping === 0 && subtotal > 0
                  ? "Complimentary"
                  : money(shipping)}
              </dd>
            </div>
            <div className="mt-2 flex justify-between font-display text-xl">
              <dt>Total</dt>
              <dd>{money(total)}</dd>
            </div>
          </dl>
          {lines.length > 0 ? (
            <Link
              to="/shop"
              hash="checkout"
              className="ticket ticket-gold mt-5 w-full"
              onClick={onClose}
            >
              Checkout
            </Link>
          ) : (
            <Link
              to="/shop"
              className="ticket ticket-ink mt-5 w-full"
              onClick={onClose}
            >
              Visit the boutique
            </Link>
          )}
        </div>
      </aside>
    </div>
  );
}
