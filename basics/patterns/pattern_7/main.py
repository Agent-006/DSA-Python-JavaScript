def print_pattern(n):
    for i in range(n):
        for k in range(n - i - 1):
            print("  ", end=" ")
        for j in range(2 * i + 1):
            print("* ", end=" ")
        for p in range(n - i - 1):
            print("  ", end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
