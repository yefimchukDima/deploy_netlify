import React from "react";
import Image from "next/image";
import photo from "@/components/SvgIcons/hospital.jpg";

export function HospitalIcon() {
  return (
    <div>
      <Image alt="Family Icon" src={photo} />
    </div>
  );
}
