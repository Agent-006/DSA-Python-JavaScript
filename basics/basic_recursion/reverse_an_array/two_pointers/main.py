# using two pointers method
def reverse_arr(l, r, arr):
    if l >= r:
        return

    # swap
    temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    reverse_arr(l + 1, r - 1, arr)


def main():
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)
    reverse_arr(0, n - 1, arr)
    print(arr)


main()
