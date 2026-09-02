import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ShopCheckout } from "@/components/shop-checkout";
import { Ticket } from "@/components/ticket-link";
import { links } from "@/lib/content";
import { addToCart, money, products, type Product, type ProductId } from "@/lib/shop";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="The boutique"
        title="Carry a little sparkle."
        lede="Silver-anniversary merch for the sisterhood — a canvas tote and a wine crest tee. Proceeds support gatherings and giving in Tampa Bay."
      />

      <section className="wrap mt-12 grid gap-10 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <p className="wrap mt-8 max-w-2xl text-sm text-muted">
        Shipping is $8, or complimentary at $70. The krewe confirms each order by email and sends a Square invoice —
        nothing is charged until you say yes. Prefer the original storefront?{" "}
        <a href={links.shop} target="_blank" rel="noreferrer" className="font-semibold text-cabaret">
          Visit the Square shop
        </a>
        .
      </p>

      <section className="wrap mt-20 border-t border-gold/35 pt-16">
        <ShopCheckout />
      </section>
    </article>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes ? "" : "One size");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState("");

  function add() {
    if (product.sizes && !size) {
      setAdded("Choose a size first.");
      return;
    }
    addToCart(product.id as ProductId, size || "One size", qty);
    setAdded(`${product.name} is in the bag.`);
  }

  return (
    <article className="panel overflow-hidden">
      <img src={product.image} alt={product.alt} className="aspect-[3/4] w-full object-cover" />
      <div className="p-6 md:p-8">
        <p className="kicker">{product.kicker}</p>
        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-display text-[1.9rem] leading-tight">{product.name}</h2>
          <p className="font-display text-2xl text-cabaret">{money(product.price)}</p>
        </div>
        <p className="mt-3 text-[1.02rem] leading-relaxed">{product.blurb}</p>
        <p className="mt-3 text-sm text-muted">{product.note}</p>

        {product.sizes ? (
          <fieldset className="mt-5">
            <legend className="kicker">Size</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={option === size ? "filter-chip filter-chip-on" : "filter-chip"}
                  onClick={() => setSize(option)}
                  aria-pressed={option === size}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="mt-5 flex flex-wrap items-end gap-4">
          <label className="form-field w-24">
            <span className="kicker">Qty</span>
            <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <Ticket type="button" variant="wine" className="mt-0" onClick={add}>
            Add to bag
          </Ticket>
        </div>
        {added ? (
          <p className="mt-3 text-sm text-cabaret" role="status">
            {added}
          </p>
        ) : null}
      </div>
    </article>
  );
}
