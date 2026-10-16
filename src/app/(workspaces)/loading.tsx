
import { ImSpinner8 } from "react-icons/im";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#0D0D14] text-white">
      <ImSpinner8
        size={44}
        className="animate-spin text-indigo-400"
      />

      <div className="text-center">
        <p className="text-sm font-medium text-gray-200">
          Preparing your workspace
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Getting your API tools ready...
        </p>
      </div>

      <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-indigo-400" />
      </div>
    </div>
  );
};

export default LoadingPage;