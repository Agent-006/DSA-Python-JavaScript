# pass the value of fact as 1
def factorial(n, fact):
    if n == 0 or n == 1:
        print(fact)
        return
    factorial(n - 1, fact * n)


def main():
    n = int(input("Enter the value of n: "))
    factorial(n, 1)


main()
