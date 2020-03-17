import { useAnimationTimer } from './';

const easing = {
    linear: (n) => n,
    inExpo: (n) => Math.pow(2, 10 * (n - 1)),
};

export const useAnimation = (
    easingName = 'linear',
    duration = 1000,
    delay = 0,
) => {
    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);

    return easing[ easingName ](n);
};
