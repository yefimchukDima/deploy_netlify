import React from "react";
import Image from "next/image";
import photo from "../../common/constant/Header-mage.png";

export function FamilyIcon() {
  return (
    <div>
      <Image alt="Family Icon" src={photo} />
    </div>
  );
}
