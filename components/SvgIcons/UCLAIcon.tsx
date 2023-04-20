import React from "react";
import Image from "next/image";
import photo from "@/components/SvgIcons/ucla.jpg";

export default function UclaIcon() {
  return <Image src={photo} alt="ucla" />;
}
