"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import {getServerSession, Session} from 'next-auth'
import prisma from "./prisma";
import { UserType } from "@/types/user";
import bcrypt from "bcryptjs";
import { ItemType } from "@/types/item";
import { DonationStatus } from "@prisma/client";

export async function CreateUser(user:UserType){
  try {
    const salt = 10;
    const password = await bcrypt.hash(user.password, salt)
    await prisma.user.create({
                data: {
                    Username: user.username,
                    Email: user.email,
                    Phone: user.phone?.length === 0 ? null : user.phone,
                    Address: user.address,
                    Postcode: user.postcode,
                    Role: user.role,    
                    Password: password,
                }
            })
    return {success:true};
  }
  catch (e:any)
        {
            const fieldMap: Record<string,string> ={
                Username: "username",
                Phone: "mobile",
                Email: "email",
            }
            if (e.code === "P2002"){
                const field = e.meta?.target?.[0];
                const fieldError = fieldMap[field ?? ""] ?? field?.toLowerCase() ?? "unknown"; 
                
                return {
                    success: false, 
                    errors:{ 
                        [fieldError]: { errors: [`That ${fieldError} is already in use.`]}
                    }
                };
            }
            return { success: false, errors: { general: { errors: [`An unknown error occurred. Please try again. ${e}`] } } };
        }
}

export async function GetUserDonations(session:Session){
  if (!session?.user){
    return null
  }
  try{
  const items = await prisma.items.findMany({
    where: {Donor_ID: session.user.id},
  })
  return items
}catch(e){
  return null
}
}

export async function GetStaffDonations(session:Session){
  if (!session?.user){
    return null
  }
  try{
  const items = await prisma.items.findMany({
    where:{
      Charity_ID:session.user.charityId,
      NOT: {
        Donor_ID:session.user.id
      }
    }
  })
  return items
}catch(e){
  return null
}
}

export async function GetCharities(){
  const charities = await prisma.charity.findMany()
  return charities.map(charity => ({
    id: charity.Charity_ID,
    name: charity.Charity_Name
  }))
}

export async function GetCharityID(name:string){
  const charity = await prisma.charity.findMany(
    {where:{Charity_Name: name}})
  return charity[0].Charity_ID
}

export async function CreateDonation(item:ItemType){
  try {
    await prisma.items.create({
                data: {
                    Item_Name: item.item_name,
                    Brand: item.brand,
                    Colour: item.colour,
                    Condition: item.condition,
                    Size: item.size,
                    Image: item.image,
                    Time: item.time,
                    Pickup_Date: item.pickup_date,   
                    Donor_ID:item.Donor_ID,
                    Charity_ID:item.Charity_ID 
                    
                }
            })
    return {success:true};
  }
  catch (e:any)
  {
    return { success: false, errors: { general: { errors: [`An unknown error occurred. Please try again. ${e}`] } } };
  }
}

export async function GetCharityName(id:number){
  const charity = await prisma.charity.findUnique(
    {where:{Charity_ID: id}})
  return charity?.Charity_Name
}

export async function GetTodaysDonationsWithGrowth() {
  try {
    // Today's date range
    const startToday = new Date();
    startToday.setHours(0, 0, 0, 0);

    const endToday = new Date();
    endToday.setHours(23, 59, 59, 999);

    // Yesterday's date range
    const startYesterday = new Date(startToday);
    startYesterday.setDate(startYesterday.getDate() - 1);

    const endYesterday = new Date(endToday);
    endYesterday.setDate(endYesterday.getDate() - 1);

    // Fetch counts in parallel
    const [todayCount, yesterdayCount] = await prisma.$transaction([
      prisma.items.count({
        where: { Date_Added: { gte: startToday, lte: endToday } }
      }),
      prisma.items.count({
        where: { Date_Added: { gte: startYesterday, lte: endYesterday } }
      })
    ]);

    // Calculate growth
    let growth = 0;
    if (yesterdayCount === 0) {
      growth = todayCount === 0 ? 0 : 100;
    } else {
      growth = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
    }

    return {
      today: todayCount,
      yesterday: yesterdayCount,
      growth: Number(growth.toFixed(1))
    };
  } catch (e) {
    console.error("Error fetching today's donations with growth:", e);
    return null;
  }
}


export async function GetNewUsersWithGrowth() {
  try {

    // Today's date range
    const startToday = new Date();
    startToday.setHours(0, 0, 0, 0);

    const endToday = new Date();
    endToday.setHours(23, 59, 59, 999);

    // Yesterday's date range
    const startYesterday = new Date(startToday);
    startYesterday.setDate(startYesterday.getDate() - 1);

    const endYesterday = new Date(endToday);
    endYesterday.setDate(endYesterday.getDate() - 1);

    // Fetch counts in parallel

    const [todayCount, yesterdayCount] = await prisma.$transaction([
      prisma.user.count({
        where: { Date_Joined: { gte: startToday, lte: endToday } }
      }),
      prisma.user.count({
        where: { Date_Joined: { gte: startYesterday, lte: endYesterday } }
      })
    ]);

    // Calculate growth

    let growth = 0;
    if (yesterdayCount === 0) {
      growth = todayCount === 0 ? 0 : 100; // Avoid division by zero
    } else {
      growth = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
    }

    return {
      today: todayCount,
      yesterday: yesterdayCount,
      growth: Number(growth.toFixed(1)) // One decimal place
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function GetPendingDonationsWithGrowth() {
  try {
    // Today's date range
    const startToday = new Date();
    startToday.setHours(0, 0, 0, 0);

    const endToday = new Date();
    endToday.setHours(23, 59, 59, 999);

    // Yesterday's date range
    const startYesterday = new Date(startToday);
    startYesterday.setDate(startYesterday.getDate() - 1);

    const endYesterday = new Date(endToday);
    endYesterday.setDate(endYesterday.getDate() - 1);

    // Fetch counts in parallel
    const [todayCount, yesterdayCount] = await prisma.$transaction([
      prisma.items.count({
        where: {
          Status: DonationStatus.Pending,
          Date_Added: { gte: startToday, lte: endToday }
        }
      }),
      prisma.items.count({
        where: {
          Status: DonationStatus.Pending,
          Date_Added: { gte: startYesterday, lte: endYesterday }
        }
      })
    ]);

    // Calculate growth
    let growth = 0;
    if (yesterdayCount === 0) {
      growth = todayCount === 0 ? 0 : 100;
    } else {
      growth = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
    }

    return {
      today: todayCount,
      yesterday: yesterdayCount,
      growth: Number(growth.toFixed(1)) // one decimal place
    };
  } catch (e) {
    console.error("Error fetching pending donations with growth:", e);
    return null;
  }
}


export async function GetMonthlyUserCounts() {
  try {

    const users = await prisma.user.findMany({
      select: {
        Date_Joined: true,
      },
    });

    const monthLabels = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const counts = monthLabels.map(() => 0);

    users.forEach(user => {
      const month = user.Date_Joined.getMonth(); // 0 = jan 11 = dec
      counts[month]++;
    });

    const data = monthLabels.map((label, index) => ({ // Here we are mapping the user count to their month
      name: label,
      Users: counts[index]
    }));

    return data;

  } catch (error) {
    console.error("Error fetching monthly user counts:", error);
    return [];
  }
}

export async function GetDonationCountsByMonth() {
  const items = await prisma.items.findMany({
    select: {
      Charity: { select: { Charity_Name: true } },
      Date_Added: true,
    },
  });

  const charityList = [
    "Cancer Research UK",
    "Oxfam",
    "Mind",
    "Salvation Army",
    "British Heart Foundation",
  ];

  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Create a map: month -> charity -> count
  const monthlyMap: Record<string, Record<string, number>> = {};

  items.forEach(item => {
    const monthKey = `${monthNames[item.Date_Added.getMonth()]} ${item.Date_Added.getFullYear()}`;

    if (!monthlyMap[monthKey]) {
      monthlyMap[monthKey] = {};
      charityList.forEach(charity => {
        monthlyMap[monthKey][charity] = 0;
      });
    }

    monthlyMap[monthKey][item.Charity.Charity_Name] += 1;
  });

  // Convert the map into an array for the chart
  const result: {
    date: string;
    "Cancer Research UK": number;
    Oxfam: number;
    Mind: number;
    "Salvation Army": number;
    "British Heart Foundation": number;
  }[] = [];

  Object.entries(monthlyMap).forEach(([month, counts]) => {
    result.push({
      date: month,
      "Cancer Research UK": counts["Cancer Research UK"] ?? 0,
      Oxfam: counts["Oxfam"] ?? 0,
      Mind: counts["Mind"] ?? 0,
      "Salvation Army": counts["Salvation Army"] ?? 0,
      "British Heart Foundation": counts["British Heart Foundation"] ?? 0,
    });
  });

  // Optional: sort months ascending
  result.sort((a, b) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aIndex = monthNames.indexOf(aMonth);
    const bIndex = monthNames.indexOf(bMonth);
    return Number(aYear) - Number(bYear) || aIndex - bIndex;
  });

  return result;
}





