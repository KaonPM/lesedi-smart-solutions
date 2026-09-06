import Link from "next/link";
import Footer from "../components/Footer";
import { policies } from "../components/legal";

export const metadata = { title: "Legal & Policies | Lesedi Smart Solutions" };
export default function LegalIndex() {
  return <main className="legalSite"><header className="legalHeader"><Link href="/">← Lesedi Smart Solutions</Link></header><section className="legalHero"><p className="dotLabel">Lesedi Smart Solutions (Pty) Ltd</p><h1>Legal &amp; Policies</h1><p>Clear information about our digital products, payments and data practices.</p><div className="policyGrid">{policies.map((policy, index) => <Link key={policy.slug} href={`/legal/${policy.slug}`} className="policyCard"><span>0{index + 1}</span><h2>{policy.title}</h2><p>Read our {policy.title.toLowerCase()}.</p></Link>)}</div></section><Footer /></main>;
}
