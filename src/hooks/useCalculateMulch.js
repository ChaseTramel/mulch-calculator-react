import { useState, useEffect } from 'react';

function useCalculateMulch(length, width, depth, bagSize, bagPrice) {
    const [result, setResult] = useState({ volume: 0, bags: 0, price: 0 });

    useEffect(() => {
        function roundNumber(number) {
            return Math.round(number * 100) / 100;
        }

        function findVolume(length, width, depth) {
            var volumeCuFt = length * width * (depth / 12);
            var volumeCuYd = volumeCuFt / 27;
            return volumeCuYd;
        }

        function findBags(volume) {
            return Math.ceil(volume / bagSize);
        }

        function findPrice(bags) {
            return roundNumber(bags * bagPrice);
        }

        function calculator(length, width, depth) {
            var volume = roundNumber(findVolume(length, width, depth));
            var bags =  roundNumber(findBags(volume));
            var price =  roundNumber(findPrice(bags));
            return { volume, bags, price };
        }

        setResult(calculator(length, width, depth));
    }, [length, width, depth, bagSize, bagPrice]);

    return result;
}

export default useCalculateMulch;