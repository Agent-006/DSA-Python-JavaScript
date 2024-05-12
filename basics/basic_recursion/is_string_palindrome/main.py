def is_palindrome(i, s):
    n = len(s)
    if i >= n / 2:
        return True

    if s[i] != s[n - i - 1]:
        return False

    return is_palindrome(i + 1, s)


def main():
    s = input("Enter the string: ")
    result = is_palindrome(0, s)
    print(result)


main()
