import React from "react";
import Image from "next/image";
import photo from "@/components/SvgIcons/harvard.jpg";

export default function HarvardIcon() {
  return <Image src={photo} alt="harvard" />;
}
