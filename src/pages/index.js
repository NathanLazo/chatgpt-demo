import Head from "next/head";
import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");

  const handleData = async e => {
    e.preventDefault();
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const json = await res.json();
    setResponse(json.message.content);
  };

  return (
    <div>
      <Head>
        <title>{`OpenAI testing for UTCH <3`}</title>
        <link rel='icon' href='/mandra.jpg' />
      </Head>

      <main>
        <div className='relative isolate overflow-hidden bg-gray-900 h-screen'>
          <div className='py-24 px-6 sm:px-6 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-7xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Custom chat-gpt-3.5-turbo
                <br />
                Begin your conversation with your AI assistant
              </h2>
              <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
                This is a demo of the OpenAI API. You can use it to generate text, images, and more.
                This demo uses the gpt-3.5-turbo model.
              </p>
              <div className='mt-10 flex flex-col items-center justify-center gap-x-6'>
                <form className='w-96' onSubmit={handleData}>
                  <div>
                    <label
                      htmlFor='prompt'
                      className='block text-sm text-left font-medium leading-6 text-white'
                    >
                      Add your prompt
                    </label>
                    <div className='mt-2'>
                      <textarea
                        rows={4}
                        name='prompt'
                        id='prompt'
                        onChange={e => setPrompt(e.target.value)}
                        className='block bg-transparent px-1  w-full rounded-md border-0 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6 focus:border-0'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className='mt-4 flex justify-start'>
                    <button
                      type='submit'
                      className='rounded-md bg-indigo-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                    >
                      Submit prompt
                    </button>
                  </div>
                </form>
                <div className='w-96'>
                  <div>
                    <label
                      htmlFor='response'
                      className='block text-sm text-left font-medium leading-6 text-white'
                    >
                      Response: {response}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='8d958450-c69f-4251-94bc-4e091a323369'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </main>
    </div>
  );
}
