const items = [
  { title: "AUTHENTICITY", text: "Carefully selected pieces", path: "m12 3 7 3v6c0 4-7 9-7 9s-7-5-7-9V6l7-3Z", extra: "m8 12 3 3 5-6" },
  { title: "SECURE DELIVERY", text: "Insured shipping options", path: "m3 7 9-4 9 4v11l-9 4-9-4V7Z", extra: "m3 7 9 4 9-4M12 11v11M7 5l9 4" },
  { title: "PERSONAL SERVICE", text: "Direct assistance before and after purchase", path: "M5 13v-2a7 7 0 0 1 14 0v2M5 12H3v6h4v-6H5Zm14 0h2v6h-4v-6h2Z", extra: "M19 18c0 3-3 3-7 3" },
];
export default function TrustSection() {
  return <section className="site-container trust-section" aria-label="Our service">{items.map(item => <div className="trust-item" key={item.title}><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true"><path d={item.path}/><path d={item.extra}/></svg><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</section>;
}
