import { useState, useRef, useEffect } from "react";

/**
 * SupportDropdown — Zerodha-style accordion card
 *
 * Props:
 *   icon        {string}   Font Awesome class e.g. "fa-chart-pie"
 *   title       {string}   Section heading
 *   items       {Array}    String[] or { label, href }[] of links
 *   defaultOpen {boolean}  Whether the panel starts expanded (default: false)
 */
function SupportDropdown({ icon, title, items = [], defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef(null);
  const panelId = `acc-panel-${title.replace(/\s+/g, "-").toLowerCase()}`;

  /* Animate max-height whenever open state changes */
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.style.maxHeight = open ? el.scrollHeight + "px" : "0px";
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);

  /* Normalise items so each is { label, href } */
  const links = items.map((item) =>
    typeof item === "string" ? { label: item, href: "#" } : item
  );

  return (
    <div className="accordion-item p-3" role="presentation">
      {/* ── Toggle button ── */}
      <button
        className="accordion-header"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {/* Left icon zone */}
        <span className="accordion-icon-wrap" aria-hidden="true">
          <i className={`fas ${icon}`} />
        </span>

        {/* Category title */}
        <span className="accordion-title">{title}</span>

        {/* Animated chevron */}
        <span className="accordion-chevron" aria-hidden="true">
          <i className="fas fa-chevron-down" />
        </span>
      </button>

      {/* ── Collapsible panel ── */}
      <div
        ref={bodyRef}
        id={panelId}
        className={`accordion-body${open ? " open" : ""}`}
        role="region"
        aria-labelledby={panelId}
        style={{ maxHeight: defaultOpen ? "600px" : "0px" }}
      >
        <div className="accordion-body-inner">
          <ul className="accordion-links">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SupportDropdown;
