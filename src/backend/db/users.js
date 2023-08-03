import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Hrushikesh",
    lastName: "Tawde",
    username: "hdtawde@gmail.com",
    password: "12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Subha",
    lastName: "Sasmal",
    username: "subhasasmal08@gmail.com",
    password: "always@15",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Patel",
    username: "parthson04299@gmail.com",
    password: "12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
