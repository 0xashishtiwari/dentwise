import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';

const page = async () => {
   const user = await currentUser();

  if(!user){
    redirect('/');
  }

  const adminEmail =  process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0].emailAddress;
  

  // user is not admin, redirect to home page
  if(!adminEmail  || userEmail !== adminEmail){
    redirect('/');
  }

  return (
    <AdminDashboardClient />
  )

}

export default page
