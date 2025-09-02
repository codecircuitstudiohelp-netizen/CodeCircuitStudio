
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lock, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const apiKeyCode = `
import requests
import os

# Best practice: store API keys as environment variables
# For this example, we assume it's set.
API_KEY = os.environ.get('OPENWEATHER_API_KEY')
CITY = "London"
URL = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"

try:
    response = requests.get(URL)
    response.raise_for_status()
    data = response.json()
    temp = data['main']['temp']
    print(f"Current temperature in {CITY}: {temp}°C")
except Exception as e:
    print(f"An error occurred: {e}")
`;

const bearerTokenCode = `
import requests
import os

# Assume bearer token is stored as an environment variable
BEARER_TOKEN = os.environ.get('TWITTER_BEARER_TOKEN')
SEARCH_URL = "https://api.twitter.com/2/tweets/search/recent"

# Define the headers
headers = {
    "Authorization": f"Bearer {BEARER_TOKEN}"
}

# Define the query parameters
params = {
    "query": "(from:twitterdev -is:retweet) OR #twitterdev",
    "max_results": 10
}

try:
    response = requests.get(SEARCH_URL, headers=headers, params=params)
    response.raise_for_status()
    print(response.json())
except Exception as e:
    print(f"An error occurred: {e}")
`;

export default function ApiAuthenticationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Lock className="h-10 w-10 text-primary" />
            API Authentication
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to securely access protected API endpoints.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>The simplest form of authentication.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Most APIs require you to authenticate to track usage and prevent abuse. The most common method is an **API key**, which is a unique string that you pass along with your request, often as a query parameter.
          </p>
          <SyntaxHighlighter language="python">
            {apiKeyCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bearer Tokens (OAuth 2.0)</CardTitle>
          <CardDescription>A more secure and standard way to access resources.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            For more sensitive data, many APIs use **OAuth 2.0**. While the full OAuth flow can be complex, for server-to-server communication, it often simplifies to obtaining a **Bearer Token**. This token is sent in the `Authorization` header of your request.
          </p>
          <SyntaxHighlighter language="python">
            {bearerTokenCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <Lock className="h-4 w-4" />
        <AlertTitle>SECURITY WARNING</AlertTitle>
        <AlertDescription>
          Never hardcode your API keys or tokens directly in your source code. Use environment variables or a secrets management system to keep them safe.
        </AlertDescription>
      </Alert>
    </div>
  );
}
