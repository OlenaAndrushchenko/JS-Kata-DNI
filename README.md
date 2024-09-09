# JS - Kata DNI

This repository is part of coursework for the Full Stack Web Development course from [Factoria F5](https://factoriaf5.org).

## Requirements

Complete the following exercise either without object-oriented programming or using object-oriented programming (the second option is recommended).
Calculate the letter of the DNI (National Identity Document).

**The algorithm to calculate the letter of the DNI (National Identity Document) is as follows:**

- The number must be between 0 and 99,999,999.
- We take the complete number of up to 8 digits from our DNI, divide it by 23, and keep the remainder of this division (modulo 23).
- Depending on the result, from 0 to 22, it will correspond to one of the following letters: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
- If the input is not a valid number, a message should indicate that "the input is incorrect" and ask again.
- The process should repeat until the user presses "cancel."