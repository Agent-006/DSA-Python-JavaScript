def print_pattern(n):
    for i in range(n):
        ascii_value = 64
        # spaces
        for k in range(n - i - 1):
            print(". ", end=" ")
        # letters
        for q in range((2 * i) + 1):
            if ((2 * i) / 2) >= q:
                ascii_value += 1
            else:
                ascii_value -= 1
            letter = chr(ascii_value)
            print(letter, end="  ")
        # spaces
        for p in range(n - i - 1):
            print(". ", end=" ")
        print("")


n = int(input("Enter the size: "))
print_pattern(n)
