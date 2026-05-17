// Useful when you want to test against your own internal API or a mock:

import type { ApiProvider, ProviderResponse } from 'promptfoo';

export default class MyCustomProvider implements ApiProvider {
  id(): string {
    return 'my-custom-chatbot';
  }

  async callApi(prompt: string): Promise<ProviderResponse> {
    try {
      const response = await fetch('http://localhost:3000/chat', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });

      if (!response.ok) {
        return {
          output: `API Error: ${response.status} ${response.statusText}`,
        };
      }

      const data = await response.json();

      return {
        output: data.reply ?? data.output ?? JSON.stringify(data),
      };
    } catch (error: any) {
      return {
        output: `Request failed: ${error.message}`,
      };
    }
  }
}