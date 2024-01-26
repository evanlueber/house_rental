"use client";
import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import api from '../utils/api';

 export default function page() {
    const router = useRouter()
    const {user} = useUserContext();
    const [myEntrys, setMyEntrys] = useState([])
    useEffect(() => {
      if (!user || user._id === ""){
        router.push("/")
      }
      getEntrys()
    }, [])

    const getEntrys = async () => {
      const res = await api.getEntrysByUserId(user._id)
      setMyEntrys(res.data.entrys || [])
    }

  return (
    <div className="grid grid-cols-5 gap-5 text-white">
        {myEntrys.map(entry => (
            <Card image={entry.image} description={entry.price} showDelete={true} />
        ))}
    </div>
  )
}