# back-tracking method
def one_to_n(i, n):
    if i < 1:
        return

    one_to_n(i - 1, n)
    print(i, end=", ")


def main():
    n = int(input("Enter the value of n: "))
    one_to_n(n, n)


main()
