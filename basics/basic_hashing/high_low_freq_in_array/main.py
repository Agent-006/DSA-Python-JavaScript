arr = list(map(int, input("Enter the array elements, separate with spaces: ").split()))

hash = {}

for i in range(len(arr)):
    if arr[i] in hash:
        hash[arr[i]] += 1
    else:
        hash[arr[i]] = 1

maxEle = 0
minEle = 0
maxFreq = 0
minFreq = len(arr)
for key, value in hash.items():
    if value > maxFreq:
        maxFreq = value
        maxEle = key
    if value < minFreq:
        minFreq = value
        minEle = key

print(f"Max is {maxEle} and Min is {minEle}")
