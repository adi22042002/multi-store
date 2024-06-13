"use client"
import React, { useEffect } from 'react'
 import { UserButton } from '@clerk/nextjs'
 import { Modal } from '@/components/modal'
import { useStoreModel } from '@/hooks/use-store-model'
const SetupPage = () => {
  const onOpen=useStoreModel((state)=> state.onOpen)
  const isOpen=useStoreModel((state)=> state.isOpen)
  useEffect(()=>{
if(!isOpen){
  onOpen();
}
  },[isOpen,onOpen])



  return (
<div>
  
    This is store modal
</div>
  )
}

export default SetupPage