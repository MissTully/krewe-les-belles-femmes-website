import { art } from "@/lib/content";

export const CART_KEY = "lbf-shop-cart";
export const CART_EVENT = "lbf-cart";
export const CART_OPEN_EVENT = "lbf-cart-open";

export type ProductId = "tote" | "tee";

export type Product = {
  id: ProductId;
  name: string;
  kicker: string;
  price: number;
  blurb: string;
  note: string;
  image: string;
  alt: string;
  sizes: readonly string[] | null;
};

export type CartLine = {
  id: ProductId;
  size: string;
  qty: number;
};

export const TEE_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;
export const SHIPPING_CENTS = 800;
export const FREE_SHIP_AT = 7000;

export const products: Product[] = [
  {
    id: "tote",
    name: "Silver Anniversary Tote",
    kicker: "One size",
    price: 3200,
    blurb:
      "Natural canvas with wine handles and the 25th-anniversary mark. Carry book club, the boulevard, and every Tuesday dinner.",
    note: "Roomy unlined canvas. Spot clean. Made to be used, not stored.",
    image: art.tote,
    alt: "Natural canvas tote with the Les Belles Femmes 25th-anniversary crest, standing on wine velvet.",
    sizes: null,
  },
  {
    id: "tee",
    name: "Krewe Crest Tee",
    kicker: "Wine cotton",
    price: 3800,
    blurb:
      "Soft wine cotton with the krewe crest at the heart. Wear the damn outfit — even on ordinary Tuesdays.",
    note: "Women’s relaxed fit. Machine wash cold, hang dry. Pre-shrunk cotton.",
    image: art.tee,
    alt: "Wine t-shirt hanging on a gold hanger, printed with the Les Belles Femmes 25th-anniversary crest.",
    sizes: TEE_SIZES,
  },
];

export const productById = Object.fromEntries(products.map((p) => [p.id, p])) as Record<ProductId, Product>;

export function money(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

function readCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return Array.isArray(parsed) ? parsed.filter((line) => line.id && line.qty > 0) : [];
  } catch {
    return [];
  }
}

function writeCart(lines: CartLine[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(lines));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function getCart() {
  return readCart();
}

export function addToCart(id: ProductId, size: string, qty = 1) {
  const lines = readCart();
  const i = lines.findIndex((line) => line.id === id && line.size === size);
  if (i >= 0) lines[i] = { ...lines[i], qty: Math.min(12, lines[i].qty + qty) };
  else lines.push({ id, size, qty: Math.min(12, qty) });
  writeCart(lines);
  window.dispatchEvent(new Event(CART_OPEN_EVENT));
}

export function setCartQty(id: ProductId, size: string, qty: number) {
  const next = readCart()
    .map((line) => (line.id === id && line.size === size ? { ...line, qty } : line))
    .filter((line) => line.qty > 0);
  writeCart(next);
}

export function removeFromCart(id: ProductId, size: string) {
  writeCart(readCart().filter((line) => !(line.id === id && line.size === size)));
}

export function clearCart() {
  writeCart([]);
}

export function cartCount(lines = readCart()) {
  return lines.reduce((n, line) => n + line.qty, 0);
}

export function cartSubtotal(lines = readCart()) {
  return lines.reduce((n, line) => n + productById[line.id].price * line.qty, 0);
}

export function cartShipping(subtotal: number) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_SHIP_AT ? 0 : SHIPPING_CENTS;
}

export function cartTotal(lines = readCart()) {
  const sub = cartSubtotal(lines);
  return sub + cartShipping(sub);
}

export function lineLabel(line: CartLine) {
  const product = productById[line.id];
  return line.size === "One size" ? product.name : `${product.name} · ${line.size}`;
}
