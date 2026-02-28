'use server'

import { currentUser } from "@clerk/nextjs/server";
import prisma from "../prisma";

export async function getAppointments(){
    const user = await currentUser();
    try {
        const appointments =  prisma.appointment.findMany({
            include :{
                user : {
                    select:{
                        firstname : true,
                        lastname : true,
                        email : true
                    }
                },
                doctor : {
                    select:{
                        name : true,
                        imageUrl : true

                    }
                }
            },
            orderBy :{
                createdAt : 'desc'
            }
        });

        return appointments;
    } catch (error) {
        console.error("Error fetching appointments", error);
        throw new Error("Failed to fetch appointments");
    }
}