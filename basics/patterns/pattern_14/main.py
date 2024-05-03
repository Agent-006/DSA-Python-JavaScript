def print_pattern(n):
    for i in range(n):
        ascii_value = 64
        for k in range(i + 1):
            ascii_value += 1
            letter = chr(ascii_value)
            print(letter, end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
