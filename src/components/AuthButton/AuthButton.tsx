import { useNavigate } from 'react-router-dom';

interface AuthButtonProps {
  to: string; // navigates to route specified when the button is clicked
  text: string; // text to display on the button
}


const AuthButton = ({ to, text }: AuthButtonProps) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(to);
        }}
      >
        {text}
      </button>
    </>
  );
};

export { AuthButton };