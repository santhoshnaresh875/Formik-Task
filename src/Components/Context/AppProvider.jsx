// AppProvider.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [book, setBook] = useState([ {
    id: "1",
    name: "The Shining",
    image: "https://th.bing.com/th/id/OIP.JjrFGuPAU7Wq1S-sYsT8zwHaLH?rs=1&pid=ImgDetMain",
    author: "Stephen King",
    description: "A psychological horror novel that follows the descent into madness of Jack Torrance, who becomes the winter caretaker of the haunted Overlook Hotel."
  },
    
  {
    id: "2",
    name: "The Great Gatsby",
    image: "https://webdelico.com/wp-content/uploads/2021/01/81TAyDpFKVL.jpg",
    author: "F. Scott Fitzgerald",
    description: "A classic novel that tells the story of a mysterious millionaire, Jay Gatsby, and his unrequited love for Daisy Buchanan during the Roaring Twenties."
  },
  {
    id: "3",
    name: "To Kill a Mockingbird",
    image: "https://cdn.lifehack.org/wp-content/uploads/2022/11/41j-s9fHJcL._SL500_.webp",
    author: "Harper Lee",
    description: "A powerful novel that explores racial injustice and moral growth through the eyes of a young girl, Scout Finch, in the American South."
  },
  {
    id: "4",
    name: "The Catcher in the Rye",
    image: "https://th.bing.com/th/id/OIP.PQKfkZFKgDWeNleDPTi9dwHaK4?rs=1&pid=ImgDetMain",
    author: "J.D. Salinger",
    description: "A classic coming-of-age novel narrated by the teenage protagonist, Holden Caulfield, as he navigates the challenges of adolescence in New York City."
  },
  {
    id: "5",
    name: "1984",
    image: "https://th.bing.com/th/id/R.f1b4e91832c4615a43955f2d0f5d1795?rik=MW2%2bzNXYZBR9hw&riu=http%3a%2f%2fwww.bookerworm.com%2fimages%2f1984.jpg&ehk=l8MIFhiWt69hsoMix5qeAYOzlObLECDEUWhhsiywKk4%3d&risl=&pid=ImgRaw&r=0",
    author: "George Orwell",
    description: "A dystopian novel that explores themes of totalitarianism, surveillance, and the manipulation of truth in a society ruled by the Party."
  },
  {
    id: "6",
    name: "The Alchemist",
    image: "https://th.bing.com/th/id/OIP.6fJYwL1VqsAIZCKtaVSp2QHaLS?rs=1&pid=ImgDetMain",
    author: "Paulo Coelho",
    description: "A philosophical novel that follows the journey of Santiago, a shepherd, as he seeks his personal legend and discovers the meaning of life."
  },
  {
    id: "7",
    name: "The Lord of the Rings",
    image: "https://th.bing.com/th/id/OIP.kIfx-8GhAWZxwSpLwjPb_AHaLH?rs=1&pid=ImgDetMain",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy trilogy that chronicles the quest to destroy the One Ring and defeat the Dark Lord Sauron in the magical world of Middle-earth."
  },
   



]);

  return (
    <AppContext.Provider value={{ book, setBook }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppState };