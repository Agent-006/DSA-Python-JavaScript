# return the factorial of n
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)


def main():
    n = int(input("Enter the value of n: "))
    fact = factorial(n)
    print(fact)


main()
