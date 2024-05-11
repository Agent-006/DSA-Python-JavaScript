# the function returns the value of sum
def sum_of_n(n):
    if n == 0:
        return 0
    return n + sum_of_n(n - 1)


def main():
    n = int(input("Enter the value of n: "))
    sum = sum_of_n(n)
    print(sum)


main()
