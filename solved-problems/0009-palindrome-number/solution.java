class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        List<Integer> num = new ArrayList<>();
        while (x != 0) {
            num.add(x % 10);
            x /= 10;
        }

        int sizeLeft;
        int sizeRight;
        if (num.size() % 2 == 0) {
            sizeLeft = num.size() / 2;
            sizeRight = num.size() / 2 - 1;
        } else {
            sizeLeft = sizeRight = num.size() / 2;
        }

        List<Integer> arrLeft = new ArrayList<>();
        List<Integer> arrRight = new ArrayList<>();

        for (int i = 0; i < sizeLeft; i++) {
            arrLeft.add(num.get(i));
        }
        for (int j = num.size() - 1; j > sizeRight; j--) {
            arrRight.add(num.get(j));
        }
        return arrLeft.equals(arrRight);
    }
}
