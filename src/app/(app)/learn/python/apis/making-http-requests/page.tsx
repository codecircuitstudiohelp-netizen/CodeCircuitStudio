
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Globe, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const getRequestCode = `
import requests

# The URL of the API endpoint
url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

try:
    # Make the GET request
    response = requests.get(url)
    
    # Raise an exception for bad status codes (4xx or 5xx)
    response.raise_for_status()

    # The response content is usually in JSON format
    data = response.json()
    
    # Process the data
    usd_rate = data['bpi']['USD']['rate']
    print(f"Current Bitcoin rate: ${usd_rate}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching data: {e}")
`;

export default function MakingHttpRequestsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Globe className="h-10 w-10 text-primary" />
            Making HTTP Requests
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn how to interact with web APIs using the `requests` library.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Interacting with the Web</CardTitle>
          <CardDescription>Python can fetch data from URLs just like a web browser.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            An **API (Application Programming Interface)** is a set of rules that allows different software applications to communicate with each other. Web APIs allow you to fetch data from servers over the internet using standard **HTTP requests**.
          </p>
          <p>The `requests` library is the de facto standard for making HTTP requests in Python. It simplifies the process of sending requests and handling responses.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GET Requests</CardTitle>
          <CardDescription>Fetching data from an API endpoint.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <p>
            A `GET` request is used to retrieve data from a server. The following example uses the CoinDesk API to fetch the current price of Bitcoin.
          </p>
          <SyntaxHighlighter language="python">
            {getRequestCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. You'll need `requests` installed locally. Try fetching data from a different public API, like the JokeAPI or a public weather API.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Connecting to the World</AlertTitle>
        <AlertDescription>
          You can now write Python scripts that pull live data from the web, a foundational skill for building data-driven applications.
        </AlertDescription>
      </Alert>
    </div>
  );
}
