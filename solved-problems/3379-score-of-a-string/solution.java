class Solution {
    public int scoreOfString(String s) {
        char[] word = s.toCharArray();
        int count = 0;
        for (int i = 1; i < word.length; i++) {
            count += Math.abs(((int) word[i - 1]) - ((int) word[i]));
        }
        return count;
    }
}
