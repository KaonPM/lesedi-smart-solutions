import Image from "next/image";
import Link from "next/link";
import { legalBusinessName, policies, registeredAddress, supportEmail } from "./legal";

export default function Footer() {
  return <footer className="siteFooter"><div className="siteFooterInner"><div className="footerBrand"><Image src="/lesedi-logo.png" alt="Lesedi Smart Solutions" width={170} height={70} /><p>{legalBusinessName} develops and operates digital products and apps.</p></div><div><p className="footerLabel">Legal &amp; Policies</p><nav className="footerLinks" aria-label="Legal policies">{policies.map((policy) => <Link key={policy.slug} href={`/legal/${policy.slug}`}>{policy.title}</Link>)}</nav></div><address className="footerContact"><p className="footerLabel">Support</p><a href={`mailto:${supportEmail}`}>{supportEmail}</a><span>{registeredAddress}</span></address></div><div className="legalBar"><p>Business Registration Number: 2026/315790/07</p><p>Information Regulator Registration Number: 2026-010141</p><p>© 2026 {legalBusinessName}. All rights reserved.</p></div></footer>;
}
