"use client"

import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SyntaxHighlighterProps {
    language: string;
    children: string;
}

export function SyntaxHighlighter({ language, children }: SyntaxHighlighterProps) {
    return (
        <ReactSyntaxHighlighter 
            language={language} 
            style={vscDarkPlus}
            customStyle={{
                borderRadius: '0.5rem',
                padding: '1rem',
                margin: '0',
                backgroundColor: 'hsl(var(--muted))',
            }}
            codeTagProps={{
                style: {
                    fontFamily: 'var(--font-code)',
                }
            }}
        >
            {children}
        </ReactSyntaxHighlighter>
    )
}
