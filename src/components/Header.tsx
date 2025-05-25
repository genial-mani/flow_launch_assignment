'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="w-full max-w-full h-fit flex items-center justify-center fixed bottom-0 left-0 pb-1 sm:py-3 z-10">
      <div className="w-fit max-w-fit h-fit px-5 py-3 flex items-center justify-between gap-3 sm:gap-5 backdrop-blur-xl rounded-full">
        <Link href={`#profile`} className="flex items-center gap-1"><Icon icon="line-md:account" width="28" height="28"  style={{color: '#9410ea'}}/><p className="hidden md:flex">Profile</p></Link>
        <Link href={`#education`} className="flex items-center gap-1"><Icon icon="qlementine-icons:education-16" width="28" height="28" style={{color: '#9410ea'}} /><p className="hidden md:flex">Education</p> </Link>
        <Link href={`#skills`} className="flex items-center gap-1"><Icon icon="octicon:stack-24" width="28" height="28"  style={{color: '#9410ea'}} /><p className="hidden md:flex">Skills</p></Link>
        <Link href={`#projects`} className="flex items-center gap-1"><Icon icon="si:projects-line" width="24px" height="24px" style={{color: '#9410ea'}} /><p className="hidden md:flex">Projects</p></Link>
        <Link href={`#work`} className="flex items-center gap-1"><Icon icon="hugeicons:work" width="28" height="28"  style={{color:'#9410ea'}} /><p className="hidden md:flex">Work</p></Link>
        <Link href={`#certi`} className="flex items-center gap-1"><Icon icon="iconamoon:certificate-badge-light" width="28" height="28"  style={{color: '#9410ea'}} /><p className="hidden md:flex">Certifications</p></Link>
      </div>
    </div>
  );
}
