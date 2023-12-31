// utils/lottieAnimationComplete.js
export function handleAnimationComplete(setShowNextButton) {
    return (e) => {
      if (e === "complete") {
        setShowNextButton(true);
      }
    };
  }
  