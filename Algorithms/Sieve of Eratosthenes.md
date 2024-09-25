Print prime number includes n  

```py
def sieve_of_eratosthenes(n):
    # Create a boolean array, initialized to True, indicating all numbers are prime
    is_prime = [True] * (n + 1)
    p = 2
    while (p * p <= n):
        # If is_prime[p] has not been marked as False, it is a prime number
        if is_prime[p]:
            # Mark all multiples of p as False, starting from p squared
            for i in range(p * p, n + 1, p):
                is_prime[i] = False
        p += 1

    # Collect all numbers that have not been marked as False, which are prime
    primes = [p for p in range(2, n + 1) if is_prime[p]]
    return primes

```

Print prime number strictly less than n

```py
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        is_prime = [True] * n
        is_prime[0] = is_prime[1] = False

        p = 2
        while p * p < n:
            if is_prime[p]:
                for i in range(p * p, n, p):
                    is_prime[i] = False
            p += 1


        prime = [p for p in range(2, n) if is_prime[p]]
        return prime
```
