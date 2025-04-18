import Markdown from "react-markdown";
import "./Markdown.css";

export default function Md({ children }: { children: string }) {
  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer" />
        ),
        h1: ({ node, ...props }) => (
          <h1
            {...props}
            className="font-bold pb-3"
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            {...props}
            className="font-bold pb-3"
          />
        ),

        h3: ({ node, ...props }) => (
          <h3
            {...props}
            className="font-bold pb-1"
          />
        ),
      }}
    >
      {children.replaceAll("\n\n", "\n\n &nbsp;\n\n")}
    </Markdown>
  );
}
