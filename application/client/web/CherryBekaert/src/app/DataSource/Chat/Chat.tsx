import { useEffect, useRef, useState } from "react";
import { chatGet, chatPost } from "./chatService";
import { IoSendSharp } from "react-icons/io5";
import "./Chat.css";
import SideBar from "../Components/sidebar";
import TopBar from "app/TopBar/TopBar";

function Chat({ theme }: any) {
  const [chat, setChat] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // const [responseIndex, setResponseIndex] = useState(0);

  // hardecoded response

  // const hardcodedResponses = [
  //   { role: "assistant", content: "Hi I'm 10Decoders AI" },
  //   { role: "assistant", content: "How can i help" },
  //   { role: "assistant", content: "Can u repeat that again" },
  //   {
  //     role: "assistant",
  //     content: "Sorry for the Inconveniance, Please try again",
  //   },
  //   { role: "assistant", content: "This is an automated message" },
  // ];

  // const chatData = async (e: any, message: any) => {
  //   console.log("message", message);
  //   if (!message) return;

  //   const userMessage = { role: "user", content: message };
  //   const aiResponseMessage = hardcodedResponses[responseIndex];
  //   const updatedChat = [...chat, userMessage, aiResponseMessage];
  //   setChat(updatedChat);
  //   setResponseIndex(responseIndex + 1);
  //   setMessage("");
  // };

  // useEffect(() => {
  //   if (isLoading && chat.length === 0 && responseIndex === 0) {
  //     const aiResponse = hardcodedResponses[responseIndex];
  //     if (aiResponse) {
  //       const updatedChat = [...chat, aiResponse];
  //       setChat(updatedChat);
  //       setResponseIndex(responseIndex + 1);
  //       setIsLoading(false);
  //     }
  //   }
  // }, [isLoading, chat, responseIndex]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };
  useEffect(scrollToBottom, [chat]);

  const chatData = (e: any, message: any) => {
    e.preventDefault();
    if (!message) return;

    const userMessage = { role: "user", content: message };
    const updatedChat = [...chat, userMessage];
    setChat(updatedChat);
    setMessage("");

    chatPost(message)
      .then((response) => {
        const aiMessage = { role: "assistant", content: response.data };
        const updatedAiChat = [...updatedChat, aiMessage];
        setChat(updatedAiChat);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    if (isLoading && chat.length === 0) {
      chatGet()
        .then((response) => {
          console.log("-=-=-=-data-=-=-=-", response);
          const assistMessage = {
            role: "assistant",
            content: response.data,
          };
          const updateChat = [...chat, assistMessage];
          setChat(updateChat);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false);
        });
    }
  }, [isLoading, chat]);

  const simulateTyping = (text: any) => {
    setIsLoading(true);
    const words = text.split(" ");
    let currentIndex = 0;
    let typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        const partialMessage = words.slice(0, currentIndex + 1).join(" ");
        setChat([...chat, { role: "assistant", content: partialMessage }]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsLoading(false);
      }
    }, 200);
  };
  useEffect(() => {
    if (isLoading) {
      simulateTyping("Hi, I'm Decoders AI. How can I assist you today?");
    }
  }, [isLoading]);

  const chatgptImg = require("../../../assets/img/chatgpt.svg");

  return (
    <div className="d-flex" style={{}}>
      <SideBar template={theme} />
      <div className="" style={{ width: "100%" }}>
        <TopBar name={theme.name} btnColor={theme.color} />
        <div style={{ textAlign: "center" }} className="header-bar">
          <h1 style={{ textAlign: "center" }} className="headTitle">
            PDA {theme.organizationName} AI
          </h1>
        </div>
        <div
          className=""
          style={{ overflowY: "auto", maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="window">
            <div className="header">
              <div className="container">
                <div className="body" ref={containerRef}>
                  {chat && chat.length
                    ? chat.map((chatmsg: any, index: any) => (
                        <div
                          className="message"
                          key={index}
                          id={chatmsg.role === "user" ? "you" : "other"}
                        >
                          <>
                            {chatmsg.role === "assistant" ? (
                              <div className="message-content-wrapper">
                                <img
                                  src="data:image/png;base64,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"
                                  alt="image"
                                />
                              </div>
                            ) : null}
                          </>
                          <div className="message-content">
                            <p>{chatmsg.content}</p>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-wrapper">
            <div className="footer">
              <input
                className="chat-input"
                placeholder="Type a Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // Prevents the newline character
                    chatData(e, message);
                  }
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter" && e.shiftKey) {
                    setMessage(message + "\n");
                  }
                }}
              />
              <div>
                <button
                  className="send-button"
                  onClick={(e) => {
                    chatData(e, message);
                  }}
                >
                  <IoSendSharp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
