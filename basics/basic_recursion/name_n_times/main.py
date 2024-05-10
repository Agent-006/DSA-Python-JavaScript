def n_times(i, n):
    if i > n:
        return

    print("Sagar")
    n_times(i + 1, n)


def main():
    n = int(input("Enter the value of n: "))
    n_times(1, n)


main()
