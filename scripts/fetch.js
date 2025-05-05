const res = await fetch('http://localhost:8121/', {
  method: 'POST',
  body: JSON.stringify({
    messages: [
      {
        content: 'You are a helpful assistant',
        role: 'system'
      },
      {
        content: 'Hi',
        role: 'user'
      }
    ],
    model: 'deepseek-chat',
    frequency_penalty: 0,
    max_tokens: 2048,
    presence_penalty: 0,
    response_format: {
      type: 'text'
    },
    stop: null,
    stream: true,
    stream_options: null,
    temperature: 1,
    top_p: 1,
    tools: null,
    tool_choice: 'none',
    logprobs: false,
    top_logprobs: null
  })
});

console.log(await res.json());
