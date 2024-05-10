def n_to_one(i, n):
    if i < 1:
        return

    print(i, end=", ")
    n_to_one(i - 1, n)


def main():
    n = int(input("Enter the value of n: "))
    n_to_one(n, n)


main()
