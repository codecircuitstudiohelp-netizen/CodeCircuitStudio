
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Globe, PencilRuler } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const webScrapingCode = `
import requests
from bs4 import BeautifulSoup

# The URL of the page to scrape
url = 'https://news.ycombinator.com'

try:
    # 1. Fetch the HTML content
    response = requests.get(url)
    response.raise_for_status() # Raise an error for bad status codes

    # 2. Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # 3. Find the elements you want
    # This finds all 'span' tags with the class 'titleline'
    stories = soup.find_all('span', class_='titleline')

    # 4. Extract the data
    for story in stories:
        # The actual link is inside an 'a' tag within the span
        link = story.find('a')
        if link:
            print(link.text) # Print the story title

except requests.exceptions.RequestException as e:
    print(f"Error fetching URL: {e}")
`;

export default function WebScrapingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <Globe className="h-10 w-10 text-primary" />
            Intro to Web Scraping
        </h1>
        <p className="text-lg text-muted-foreground">
            Learn to programmatically extract data from websites.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What is Web Scraping?</CardTitle>
          <CardDescription>Automating the process of data collection from the web.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Web scraping is the process of using bots to extract content and data from a website. This data is usually saved in a local file or database for later analysis.
          </p>
          <p>Two popular Python libraries for this are:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>**Requests**: For making HTTP requests to get the HTML content of a webpage.</li>
            <li>**Beautiful Soup**: For parsing HTML and XML documents to easily extract data.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Simple Example</CardTitle>
          <CardDescription>Scraping headlines from Hacker News.</CardDescription>
        </Header>
        <CardContent className="space-y-4">
          <SyntaxHighlighter language="python">
            {webScrapingCode}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      
      <div className="pt-4">
        <h3 className="font-semibold mb-2">Time to Experiment!</h3>
        <p className="text-sm text-muted-foreground mb-4">Go to the Code Lab. You'll need to install `requests` and `beautifulsoup4` locally to run this. Try scraping the titles from a different news site or your favorite blog.</p>
        <Button asChild>
            <Link href="/code-lab">Go to Code Lab</Link>
        </Button>
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <PencilRuler className="h-4 w-4" />
        <AlertTitle>Data at Your Fingertips</AlertTitle>
        <AlertDescription>
          Web scraping is a powerful skill for data collection, research, and automation. Always remember to check a website's terms of service and `robots.txt` file to scrape responsibly.
        </AlertDescription>
      </Alert>
    </div>
  );
}
