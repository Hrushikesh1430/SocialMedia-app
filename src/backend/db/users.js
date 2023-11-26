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
    password: "adarshbalika123",
    avatarURL: "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
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
    avatarURL: "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    password: "12345",
    bio: "I am Hrushikesh",
    profileURL: "https://meri-dukan.netlify.app/",
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
    avatarURL: "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
