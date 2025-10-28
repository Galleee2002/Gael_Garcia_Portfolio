import { useEffect, useRef } from "react";

interface UseSwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  minSwipeDistance?: number;
  edgeThreshold?: number;
  enabled?: boolean;
}

const useSwipeGesture = ({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 50,
  edgeThreshold = 30,
  enabled = true,
}: UseSwipeGestureOptions): void => {
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );

  useEffect(() => {
    if (!enabled) return;

    const handleTouchStart = (e: TouchEvent): void => {
      const touch = e.touches[0];

      // Solo detectar swipes que comiencen desde el borde izquierdo
      if (touch.clientX <= edgeThreshold) {
        touchStartRef.current = {
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now(),
        };
      }
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Verificar que el movimiento sea principalmente horizontal
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

      // Verificar que la distancia sea suficiente
      const isMinDistance = Math.abs(deltaX) >= minSwipeDistance;

      // Verificar que no sea un swipe muy lento (máximo 600ms)
      const isValidSpeed = deltaTime <= 600;

      if (isHorizontalSwipe && isMinDistance && isValidSpeed) {
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      }

      touchStartRef.current = null;
    };

    const handleTouchCancel = (): void => {
      touchStartRef.current = null;
    };

    // Agregar event listeners
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("touchcancel", handleTouchCancel, {
      passive: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [onSwipeLeft, onSwipeRight, minSwipeDistance, edgeThreshold, enabled]);
};

export default useSwipeGesture;
