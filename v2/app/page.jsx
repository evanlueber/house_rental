"use client";
import React from "react";
import Card from "/app/components/Card";
import api from "./utils/api";

export default async function Home() {
  const entrys = await api.getEntrys();
  if (!entrys) return <div>Loading...</div>;
    
  return (
    <div className="grid grid-cols-5 gap-5 text-white">
      {entrys.map(entry => (
        <Card image={entry.image} description={entry.price} showDelete={false} />
      ))}
    </div>
  );
}