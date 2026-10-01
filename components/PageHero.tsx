import Breadcrumbs, { type Breadcrumb } from "./Breadcrumbs";

type Props = { title: string; intro?: string; eyebrow?: string; breadcrumbs: Breadcrumb[] };
export default function PageHero({ title, intro, eyebrow = "DIMARDI", breadcrumbs }: Props) {
  return <div className="site-container page-hero"><Breadcrumbs items={breadcrumbs}/><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}</div>;
}
