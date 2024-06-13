"use client"
import React from 'react'
import { useStoreModel } from '@/hooks/use-store-model'
import { Modal } from "@/components/modal"
export const StoreModel = () => {
    const storeModal=useStoreModel();
  return (
<Modal title='Create a new store' description='Add a new store to manage the product and categories'
 isOpen={storeModal.isOpen}
 onClose={storeModal.onClose}
>

</Modal>
  )
}
