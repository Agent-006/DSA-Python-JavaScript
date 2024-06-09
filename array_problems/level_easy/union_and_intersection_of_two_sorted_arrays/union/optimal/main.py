def array_union(arr1, arr2):
    myUnion = []
    pointer_i = 0
    pointer_k = 0
    arr1_length = len(arr1)
    arr2_length = len(arr2)

    while pointer_i < arr1_length and pointer_k < arr2_length:
        if arr1[pointer_i] <= arr2[pointer_k]:
            if len(myUnion) == 0 or myUnion[-1] != arr1[pointer_i]:
                myUnion.append(arr1[pointer_i])
            pointer_i += 1
        else:
            if len(myUnion) == 0 or myUnion[-1] != arr2[pointer_k]:
                myUnion.append(arr2[pointer_k])
            pointer_k += 1

    while pointer_i < arr1_length:
        if len(myUnion) == 0 or myUnion[-1] != arr1[pointer_i]:
            myUnion.append(arr1[pointer_i])
        pointer_i += 1

    while pointer_k < arr2_length:
        if len(myUnion) == 0 or myUnion[-1] != arr2[pointer_k]:
            myUnion.append(arr2[pointer_k])
        pointer_k += 1

    return myUnion


if __name__ == "__main__":
    arr2 = [1, 2, 3, 4, 5, 9]
    arr1 = [4, 5, 6, 7, 8]
    result = array_union(arr1, arr2)
    print(result)
