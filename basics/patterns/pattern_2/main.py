def print_pattern(n):
    for i in range(n):
        for k in range(i + 1):
            print("* ", end="")
        print()


n = int(input("Enter the size: "))
print_pattern(n)
