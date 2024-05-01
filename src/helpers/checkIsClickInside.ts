const checkIsClickInside =
  (top: number, bottom: number, left: number, right: number) => (x: number, y: number) =>
    x >= left && x <= right && y >= top && y <= bottom

export default checkIsClickInside
