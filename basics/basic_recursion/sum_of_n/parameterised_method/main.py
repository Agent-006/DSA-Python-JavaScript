# pass the initial value of sum in parameter
def sum_of_n(i, sum):
    if i < 1:
        print(sum)
        return
    sum_of_n(i - 1, sum + i)


def main():
    n = int(input("Enter the value of n: "))
    sum_of_n(n, 0)


main()
