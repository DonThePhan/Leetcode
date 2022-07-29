'''
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
'''

'''
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
'''


def intToRoman(num):

    roman_num = ''
    roman_rules = [
        {'div': 1000, 'base': True, 'char': 'M'},
        {'div': 900, 'base': False, 'char': 'CM'},
        {'div': 500, 'base': False, 'char': 'D'},
        {'div': 400, 'base': False, 'char': 'CD'},
        {'div': 100, 'base': True, 'char': 'C'},
        {'div': 90, 'base': False, 'char': 'XC'},
        {'div': 50, 'base': False, 'char': 'L'},
        {'div': 40, 'base': False, 'char': 'XL'},
        {'div': 10, 'base': True, 'char': 'X'},
        {'div': 9, 'base': False, 'char': 'IX'},
        {'div': 5, 'base': False, 'char': 'V'},
        {'div': 4, 'base': False, 'char': 'IV'},
        {'div': 1, 'base': True, 'char': 'I'},
    ]

    for rule in roman_rules:
        if rule['base']:
            num_count = num // rule['div']
            num -= num_count*rule['div']
            for i in range(num_count):
                roman_num += rule['char']
        else:
            if num // rule['div'] == 1:
                roman_num += rule['char']
                num -= rule['div']

    print(roman_num)


intToRoman(1994)
