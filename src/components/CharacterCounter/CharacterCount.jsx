import { useRecoilValue } from 'recoil';
import { charCountState } from '../../Selector/CharCountState.jsx';

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};
