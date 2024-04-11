import { RefObject, useEffect } from 'react';

import checkIsClickInside from '@/helpers/checkIsClickInside';
import getCoordinates from '@/helpers/getCoordinates';

type CheckerPointIsInsideReturnType = ReturnType<typeof checkIsClickInside>;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    let isInside: CheckerPointIsInsideReturnType;

    if (ref.current) {
      const rectSize = ref.current.getBoundingClientRect();
      isInside = checkIsClickInside(rectSize.top, rectSize.bottom, rectSize.left, rectSize.right);
    }
    const listener = (event: MouseEvent | TouchEvent) => {
      const coords = getCoordinates(event);
      const target = event.target as Element;

      if (!ref.current || ref.current.contains(target) || isInside(coords.x, coords.y)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
