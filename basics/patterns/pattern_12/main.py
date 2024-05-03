def print_pattern(n):
    for i in range(n):
        for k in range(i + 1):
            print(k + 1, end=" ")
        for p in range(2 * (n - i) - 2):
            print(".", end=" ")
        for q in range(i, -1, - 1):
            print(q + 1, end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
