import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto p-5 flex justify-between">
        <div className="text-sm">@2023 Lamda, Inc. All rights reserved.</div>
        <div className="hidden sm:flex gap-x-7">
          <Twitter className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
