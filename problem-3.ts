function countWordOccurrences(sentence: string, word: string): number {

    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const words = lowerSentence.split(" ");
    return words.filter(word => word === lowerWord).length;
}
