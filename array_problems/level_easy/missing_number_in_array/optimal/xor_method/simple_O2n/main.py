def missing_number(arr: list, n: int):
    XOR1 = 0
    for i in range(1, n + 1):
        XOR1 = XOR1 ^ i

    XOR2 = 0
    for i in range(n - 1):
        XOR2 = XOR2 ^ arr[i]

    return XOR1 ^ XOR2


if __name__ == "__main__":
    n = int(input("Enter the value of n: "))
    arr = list(map(int, input("Enter the elements: ").split()))
    print("The missing number is:", missing_number(arr, n))
