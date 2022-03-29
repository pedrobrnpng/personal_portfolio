import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

interface Props {
  text: string;
}

export const Paragraph = ({ text }: Props) => {
  const md = marked.parse(text);
  const pure = DOMPurify.sanitize(md);

  return (
    <div
      className="text my-4 font-space transition-all"
      dangerouslySetInnerHTML={{
        __html: pure,
      }}
    />
  );
};
