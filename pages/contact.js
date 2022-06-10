import Header from "../components/Header"
import * as emailjs from "emailjs-com";
import {heading3} from "./../utils/typography"
import {useState, useEffect, useRef} from "react"
import Head from "next/head";
const input = "block bg-white text-black w-full px-6 py-4 text-xl mb-4";
export default function Contact(){
    const [messageText, setMessage] = useState(null);
    const messageRef = useRef(null);
    useEffect(() => {
        if (messageText !== null) {
            setTimeout(() => {
                messageRef.current.remove();
            }, 2000)
        }
    }, [messageText])
    const onSubmitForm = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "default_service",
            "meetantonija",
            "#form",
            "user_LOSuz8pR7cowgxlm0LOa5"
          )
          .then(
            (response) => {
              setMessage("Thank you for your message! I will get back to you soon :D")
            },
            (err) => {
                console.log(err)
                setMessage(`Something went wrong`)
            }
          );
      };
    return (
        <>
            <Head>
                <title>Send me a message!</title>
            </Head>
            <Header title="Let's talk" subtitle="What is on your mind?" />     

             <section className="bg-gray py-20 text-center">
                <h1 className={`${heading3} font-bold mb-10`}>Send me a message</h1>
                <form id="form" method="post" onSubmit={onSubmitForm} className="w-8/12 md:w-6/12 mx-auto">
                    <input
                        type="text"
                        required
                        name="userName"
                        placeholder="Your Name"
                        className={input}
                        />

                    <input
                        type="text"
                        name="userEmail"
                        required
                        placeholder="Your Email"
                        pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+"
                        className={input}
                    />
                    <textarea
                        name="userMessage"
                        rows="5"
                        placeholder="What would you like to talk about?"
                        required
                        className={input}
                        ></textarea>
                 
                    <button className="block bg-primary w-full py-2" type="submit">
                        Send
                    </button>
                </form>   
                {messageText !== null && <div ref={messageRef} className="fixed bottom-0 left-0 right-0 bg-primary text-white py-6 text-center">{messageText}</div>}
             </section>
        </>
    )
}