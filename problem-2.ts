function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((value, index) => numbers.indexOf(value) === index);
}
