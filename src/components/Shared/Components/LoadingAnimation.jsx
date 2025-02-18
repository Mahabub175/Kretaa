"use client";

const LoadingAnimation = () => {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent border-primary h-16 w-16`}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
