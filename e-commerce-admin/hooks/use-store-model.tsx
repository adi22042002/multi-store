import { create } from "zustand";
interface useStoreModelProps{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;

}
import React from 'react'

export const useStoreModel =create<useStoreModelProps> ((set) =>({
  isOpen:false,
onOpen:()=>set({isOpen:true}),
onClose:()=>set({isOpen:false}),
}));

