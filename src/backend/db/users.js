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
    avatarURL: "default_user.png",
    bio: "",
    profileURL: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Hrushikesh",
    lastName: "Tawde",
    username: "skullbjoing",
    avatarURL: "default_user.png",
    password: "12345",
    bio: "I am Hrushikesh",
    profileURL: "https://meri-dukan.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Subha",
    lastName: "Sasmal",
    username: "sassy",
    password: "always@15",
    avatarURL: "default_user.png",
    bio: "I am Subha",
    profileURL: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Patel",
    username: "parthesh",
    password: "12345",
    bio: "I am Parth",
    profileURL: "",
    avatarURL: "default_user.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
