# back-tracking method
def n_to_one(i, n):
    if i > n:
        return

    n_to_one(i + 1, n)
    print(i, end=", ")


def main():
    n = int(input("Enter the value of n: "))
    n_to_one(1, n)


main()
