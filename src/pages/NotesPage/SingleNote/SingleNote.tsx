import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';

const SingleNote = () => {
  const [text, setText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    import(`./../notes/${id}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setText(response))
        .catch((err) => console.log(err));
    });
  }, []);
  return <ReactMarkdown children={text} />;
};

export default SingleNote;
