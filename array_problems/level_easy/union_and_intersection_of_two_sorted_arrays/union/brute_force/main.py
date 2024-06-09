def array_union(arr1, arr2):
    mySet = set()

    for i in range(len(arr1)):
        mySet.add(arr1[i])

    for i in range(len(arr2)):
        mySet.add(arr2[i])

    union = []
    for i in mySet:
        union.append(i)

    return union


if __name__ == "__main__":
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [4, 5, 6, 7, 8]
    result = array_union(arr1, arr2)
    print(result)
