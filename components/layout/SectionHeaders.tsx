import React from "react";

const SectionHeaders = ({subHeader, mainHeader}:{subHeader:string, mainHeader:string}) => {
  return (
    <>
      <h3 className="font-semibold uppercase text-gray-500 leading-4">
        {subHeader}
      </h3>
      <h2 className="text-4xl font-bold italic text-primary">{mainHeader}</h2>
    </>
  );
};

export default SectionHeaders;
