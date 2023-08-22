import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The club isn't the best place to find a lover So the bar is where I go Me and my friends at the table doing shots Drinking fast and then we talk slow Come over and start up a conversation with just me And trust me I'll give it a chance now Take my hand, stop, put Van the Man on the jukebox",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Hrushikesh Tawde",
    username: "skullbjoing",
    createdAt: "2023-08-16T07:48:11.708Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Mera juta hin japani sr pe lal topi. maagr dil hain hindustani.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Adarsh Balika",
    username: "adarshbalika",
    createdAt: "2023-08-17T07:48:11.708Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Wo Aasmaan Challaang Ke Jo Chhat Pe Yun Gale Se Lage Wo Aasmaan Challaang Ke Jo Chhat Pe Yun Gale Se Lage Wo Raat Koi Aur Hi Thi Wo Chaand Koi Aur Hi Tha Ik Nigaah Pe Jal Gaye Ik Nigaah Pe Bujh Gaye",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Hrushikesh Tawde",
    username: "skullbjoing",
    createdAt: "2023-08-01T10:49:06.687Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "नाम मेरे इश्क़ का दुनिया ने रख दिया पाक है या है नहीं, फैसला भी कर लिया नाम मेरे इश्क़ का दुनिया ने रख दिया पाक है या है नहीं, फैसला भी कर लिया तोहमत खा के मैं झुका के सर हारा ज़ुल्म है क्या ये तू बतादे ऐ खुदा-रा फिरु मैं कहां कहां, लब पे रख पिया-पिया",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Adarsh Balika",
    username: "adarshbalika",
    createdAt: "2023-08-20T07:48:11.708Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Cause we were just kids when we fell in love Not knowing what it was I will not give you up this time But darling, just kiss me slow",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Hrushikesh Tawde",
    username: "skullbjoing",
    createdAt: "2023-08-19T07:48:11.708Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Baby, I'm dancing in the dark With you between my arms Barefoot on the grass Listening to our favorite song I have faith in what I see Now I know I have met an angel in person And she looks perfect",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    mainName: "Hrushikesh Tawde",
    username: "skullbjoing",
    createdAt: "2023-08-18T07:48:11.708Z",
    updatedAt: formatDate(),
  },
];
