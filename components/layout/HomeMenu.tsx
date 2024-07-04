import Image from "next/image";
import React from "react";
import MenuItem from "./menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <section className="" id="menu">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -top-[70px] left-0 -z-10 text-left">
          <Image src="/sallad1.png" alt="sallad" width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src="/sallad2.png" alt="sallad" width={107} height={195} />
        </div>
      </div>
      <div className="mb-4 text-center">
        <SectionHeaders subHeader="Check our" mainHeader="Menu" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
