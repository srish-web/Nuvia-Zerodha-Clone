import SupportDropdown from "./DropDown";

/**
 * Support category data.
 * Each entry maps to one <SupportDropdown /> card.
 *
 * item shape:
 *   { icon, title, items: string[] | { label, href }[], defaultOpen? }
 */
const CATEGORIES = [
  {
    icon: "fa-chart-pie",
    title: "Console",
    defaultOpen: true,
    items: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    icon: "fa-chart-line",
    title: "Kite",
    items: [
      "Orders & trades",
      "Positions & holdings",
      "Charts & tools",
      "GTT orders",
      "Alerts & notifications",
      "Settings",
    ],
  },
  {
    icon: "fa-coins",
    title: "Coin — Mutual Funds",
    items: [
      "Getting started",
      "Investing in mutual funds",
      "Redemptions & withdrawals",
      "SIP management",
      "Tax & statements",
      "NPS",
    ],
  },
  {
    icon: "fa-wallet",
    title: "Account & Funds",
    items: [
      "Add & withdraw funds",
      "Payment modes",
      "Bank account details",
      "UPI & net banking issues",
      "Fund transfer limits",
    ],
  },
  {
    icon: "fa-user-circle",
    title: "Account Opening",
    items: [
      "Online account opening",
      "KYC & documentation",
      "NRI accounts",
      "Minor accounts",
      "Re-activation & closure",
    ],
  },
];

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 accordion-stack" role="list">
          {CATEGORIES.map((cat) => (
            <SupportDropdown
              key={cat.title}
              icon={cat.icon}
              title={cat.title}
              items={cat.items}
              defaultOpen={cat.defaultOpen ?? false}
              />
          ))}
        </div>
        <div className="col-4">
          <table class="table table-hover border my-4">
            <thead>
              <tr>
                <th scope="col" className="h-10 text-muted p-3 bg-light">Quick links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3"><a href="/">1. Track Account Opening</a></td>
              </tr>
              <tr>
                <td className="p-3"><a href="/">2. Track Segment Activation</a></td>
              </tr>
              <tr>
                <td className="p-3"><a href="/">3. Intraday Margins</a></td>
              </tr>
              <tr>
                <td className="p-3"><a href="/">4.Kite User Manual</a></td>
              </tr>
              <tr>
                <td className="p-3"><a href="/">5. Learn How to create a ticket</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hero;
