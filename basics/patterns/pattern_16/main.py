def print_pattern(n):
    ascii_value = 64
    for i in range(n):
        ascii_value += 1
        for k in range(i + 1):
            letter = chr(ascii_value)
            print(letter, end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
