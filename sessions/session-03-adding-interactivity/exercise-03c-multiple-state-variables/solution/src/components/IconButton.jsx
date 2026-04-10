import './IconButton.css';
import { MdReadMore } from 'react-icons/md';

export default function IconButton({ children, onClick }) {
  return <button className="IconButton" onClick={onClick}>
    {children} <MdReadMore />
  </button>;
}