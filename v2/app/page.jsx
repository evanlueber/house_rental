"use client";
import React from "react";
import Card from "/app/components/Card";
import db from "./libs/db";

export default async function Home() {
  const entrys = await db.getEntrys();
  if (!entrys) return <div>Loading...</div>;
    
  return (
    <div className="grid grid-cols-5 gap-5">
      {entrys.map(entry => (
        <Card image={entry.image} description={entry.price} />
      ))}
    </div>
  );
}