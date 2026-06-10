import React from "react";

export default function PageHero() {
  return (
    <section
      className="bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/heroforpagesmobile.png')] md:bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/heroforpagestablet.png')] lg:bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/heroforpages.png')] bg-center bg-cover bg-no-repeat"
      style={{
        minHeight: "45vh",
        paddingTop: "72px",
      }}
    />
  );
}
