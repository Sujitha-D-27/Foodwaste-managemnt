import React from 'react'
import ChatBot from "react-simple-chatbot";
import Ecofriendlylink from './Ecofriendlylink';
const Bot = () => {
  return (
    <ChatBot
      steps={[
        {
          id: "0",
          message: "Welcome to food Aid !",
          trigger: "1",
        },
        
        {
          id: "1",
          message: "Please enter your username",
          trigger: "2",
          
        },
        {
          id: "2",
          user: true,
          trigger: "3",
          
        },
        {
          id: "3",
          message: " hi {previousValue}",
          
          trigger:"4",
        },
        {
          id: "4",
          component:<Ecofriendlylink/>,
          
          trigger:"5",
        },
        {
          id: "5",
          options: [

            { value: 1, label: "Fill the donation form" } ,
            { value: 2, label: "View Your donate list in your profile" },
            { value: 3, label: "Thankyou visit again " },
          ],
          end: true,
        },
      ]}
      floating={true}
    />
  );
}

export default Bot;