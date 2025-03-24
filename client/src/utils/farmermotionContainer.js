export const containerHandler = (delay, fromDir) => {
  const container = (x = 0, y = 0) => ({
    hidden: { x: x, y: y, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  switch (fromDir) {
    case "UP":
      return container(0, 100);
    case "DOWN":
      return container(0, -100);
    case "RIGHT":
      return container(100, 0);
    case "LEFT":
      return container(-100, 0);
    default:
      return container(0, -100);
  }
};
