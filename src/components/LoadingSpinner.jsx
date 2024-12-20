import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <FontAwesomeIcon
        icon={faSpinner}
        className="text-4xl text-coral-red"
        spin
      />
    </div>
  );
};

export default LoadingSpinner;
