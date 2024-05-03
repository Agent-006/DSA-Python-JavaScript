def print_pattern(n):
    for i in range(n):
        ascii_value = 64 + n
        for k in range(ascii_value - i, ascii_value + 1):
            letter = chr(k)
            print(letter, end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
