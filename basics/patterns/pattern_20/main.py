def print_pattern(n):
    initialSpace = 0
    for i in range(n):
        for k in range(n - i):
            print("* ", end=" ")
        for k in range(initialSpace):
            print("  ", end=" ")
        for k in range(n - i):
            print("* ", end=" ")
        initialSpace += 2
        print("")
    initialSpace = 2 * n - 2
    for i in range(n):
        for k in range(i + 1):
            print("* ", end=" ")
        for k in range(initialSpace):
            print("  ", end=" ")
        for k in range(i + 1):
            print("* ", end=" ")
        initialSpace -= 2
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
