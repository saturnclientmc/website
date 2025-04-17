import Markdown from "react-markdown";
import "./Markdown.css";

export default function Md({ children }: { children: string }) {
  return <Markdown>{children}</Markdown>;
}
