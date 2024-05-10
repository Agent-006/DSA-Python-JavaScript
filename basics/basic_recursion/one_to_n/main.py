def one_to_n(i, n):
    if i > n:
        return

    print(i)
    one_to_n(i + 1, n)


def main():
    n = int(input("Enter the value of n: "))
    one_to_n(1, n)


main()
