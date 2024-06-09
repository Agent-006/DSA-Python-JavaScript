def array_intersection(arr1, arr2):
    isVisited = [0] * len(arr2)
    ans = []

    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if arr1[i] == arr2[j] and isVisited[j] == 0:
                ans.append(arr1[i])
                isVisited[j] = 1
                break

            if arr2[j] > arr1[i]:
                break
    return ans


if __name__ == "__main__":
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [4, 5, 6, 7, 8]
    result = array_intersection(arr1, arr2)
    print(result)
# take array inputs
