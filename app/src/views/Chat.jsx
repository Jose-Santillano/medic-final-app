import { useState } from 'react'
import '../App.css'

//ChatUI
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';  

//.ENV
const API_KEY="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";

function Chat() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
        message: "Hello, I am ChatGPT!",
        sender: "ChatGPT",
    }
  ]); // []


  //Funcion para gestionar el input.
  const handleSend = async (message) => {
    const newMessage = {
        message: message,
        sender: "User",
        direction: "outgoing"
    }

    //Actualizamos el estado de los mensajes

    // > Añadimos los mensajes anteriores y el actual.
    const newMessages = [...messages, newMessage];

    // > Actualizamos el estado del chat.
    setMessages(newMessages);

    // Seteamos el indicador si ChatGPT esta escribiendo.
    setTyping(true);

    //Mandamos el mensaje a ChatGPT y obtenemos respuesta.
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages){
    // chatMessages { sender: "user" or "ChatGPT", message:"Message content" }
    // apiMessages { role: "user" or "assistant", content: "Message content" }

    let apiMessages = chatMessages.map((messageObject) => {
        let role = "";

        //Verificamos el objeto y asignamos sus roles.
        if(messageObject.sender === "ChatGPT"){
            role="assistant";
        }else{
            role="user";
        }

        return { role: role, content: messageObject.message }
    });

    //role: "user" > Mensaje para el usuario, role: "assistant" para ChatGPT.

    const systemMessage = {
        role: "system",
        content: "Explain all concept like a doctor."
    }

    const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages":  [
            systemMessage,
            ...apiMessages // [message1, message2, ...]
        ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    }).then((data) => {
        return data.json();
    }).then((data) => {

        //Mostramos la informacion extraida.
        console.log(data);
        console.log(data.choices[0].message.content);

        //Seteamos el chat.
        setMessages([
            ...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
            }
        ])
    });

    //Seteamos que ChatGPT ha dejado de escribir y ha enviado la respuesta.
    setTyping(false);
}


  return (
    <div className='App'>
        <div style={{position: "relative", height: "800px", width: "700px"}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList
                        scrollBehavior='smooth'
                        typingIndicator={typing ? <TypingIndicator content={"ChatGPT is typing..."}/> : null}
                    >
                        {
                            messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })
                        }
                    </MessageList>
                    <MessageInput placeholder='Type message here' onSend={handleSend} />
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
  )
}

export default Chat
