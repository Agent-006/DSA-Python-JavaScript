def count_digit(n):
    count = 0
    while n > 0:
        n = int(n / 10)
        count += 1
    return count


def is_armstrong(n):
    sum = 0
    num = n
    digit_count = count_digit(n)
    while num > 0:
        digit = num % 10
        sum = sum + (digit**digit_count)
        print(sum)
        num = int(num / 10)
    if sum == n:
        return True
    else:
        return False


n = int(input("Enter the number: "))
print(is_armstrong(n))
