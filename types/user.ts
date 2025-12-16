import { Role } from "@prisma/client"

export type UserType = {
  username:string,
  email:string
  phone?:string,
  password:string,
  address:string,
  postcode:string,
  role:Role
}

export type UserUpdateField = {
    username:string,
  email:string
  phone?:string,
  password:string,
  address:string,
  postcode:string,
}