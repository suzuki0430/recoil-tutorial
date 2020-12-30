import { useRecoilState } from 'recoil';
import { textState } from '../../Atom/TextState.jsx';

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
