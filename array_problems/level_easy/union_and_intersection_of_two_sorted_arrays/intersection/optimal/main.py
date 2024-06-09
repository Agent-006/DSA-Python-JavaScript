def array_intersection(arr1, arr2):
    k = 0
    i = 0
    intersection = []
    while i < len(arr1) and k < len(arr2):
        if arr1[i] < arr2[k]:
            i += 1
        elif arr1[i] > arr2[k]:
            k += 1
        else: 
            intersection.append(arr1[i])
            i += 1
            k += 1
    return intersection

if __name__ == '__main__':
    arr1 = [1, 2, 3, 4, 5, 5, 8]
    arr2 = [1, 1, 2, 4, 5, 5, 6, 7, 8]
    result = array_intersection(arr1, arr2) 
    print(result)