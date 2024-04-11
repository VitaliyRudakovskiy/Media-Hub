const getCoordinates = (event: MouseEvent | TouchEvent) =>
  event instanceof MouseEvent
    ? { x: event.pageX, y: event.pageY }
    : { x: event.touches[0].pageX, y: event.touches[0].pageY };

export default getCoordinates;
