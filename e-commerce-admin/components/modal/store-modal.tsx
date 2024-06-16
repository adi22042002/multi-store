"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import { Modal } from "@/components/modal";
import axios from "axios"
import { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {Button} from "@/components/ui/button"
// making a zod schema for the validation;
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Store name should be minimum three character" }),
});

export const StoreModel = () => {
  const storeModal = useStoreModel();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try{setIsLoading(true)
        const response=await axios.post("/api/stores",values);
        console.log(response);
        throw new Error("XYZ");
      }catch(error){
        toast.error("Something went wrong");
console.log(error);
      }
      finally{ setIsLoading(false)}
    
  };
  return (
    <Modal
      title="Create a new store"
      description="Add a new store to manage the product and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="your store Name"
                        {...field}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              >

              </FormField>
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={isLoading} type="button" variant="outline" size="sm" >Cancel</Button>
                <Button disabled={isLoading} type="submit"  size="sm" >Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
