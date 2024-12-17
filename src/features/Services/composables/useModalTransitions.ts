export const useModalTransitions = () => {
  const backdropTransition = {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  };

  const modalTransition = {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95 translate-y-4",
    enterTo: "opacity-100 scale-100 translate-y-0",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100 translate-y-0",
    leaveTo: "opacity-0 scale-95 translate-y-4",
  };

  return {
    backdropTransition,
    modalTransition,
  };
};
