'use client'
import { createDoctor, getDoctors, updateDoctor } from "@/lib/actions/doctors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetDoctors() {
   const result = useQuery({
    queryKey: ["getDoctors"],
    queryFn : getDoctors
   })

   return result;
}

export function useCreateDoctor(){
   const queryClient = useQueryClient();
   const result =  useMutation({
      mutationFn : createDoctor,
      onSuccess : () => {
         console.log('Doctor created successfully');
         // Revalidate the doctors query to reflect the new doctor in the UI
         queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
      },
      onError : (error: any) => {
         console.error("Error creating doctor:", error);
      }
   })
   return result;
}

export function useUpdateDoctor(){
   const queryClient = useQueryClient();
   const result =  useMutation({
      mutationFn : updateDoctor,
      onSuccess : () => {
         console.log('Doctor updated successfully');
         // Revalidate the doctors query to reflect the new doctor in the UI
         queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
      },
      onError : (error: any) => {
         console.error("Error updating doctor:", error);
      }
   })
   return result;
}

