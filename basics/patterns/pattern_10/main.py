def print_pattern(n):
    for i in range(n * 2):
        stars = i
        if i > n:
            for k in range((2 * n) - i + 1):
                print("* ", end="")
            for j in range((2 * n) + i + 1):
                print(" ", end="")
        else:
            for k in range(i + 1):
                print("* ", end="")
            for j in range(n - i):
                print(" ", end="")
        print("\n")


n = int(input("Enter the size: "))
print_pattern(n)
