def print_pattern(n):
    for i in range(n + 1):
        start = 1
        if i % 2 == 0:
            start = 0
        else:
            start = 1
        for k in range(i):
            print(start, end=" ")
            start = 1 - start
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
