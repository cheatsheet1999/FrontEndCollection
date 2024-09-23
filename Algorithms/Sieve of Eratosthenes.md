
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

# Test the algorithm to find all primes less than or equal to 100
n = 100
primes = sieve_of_eratosthenes(n)
print(f"All primes less than or equal to {n}: {primes}")

```



