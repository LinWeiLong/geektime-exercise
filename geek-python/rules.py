# python的注释
import time  # 导入时间模块

print(time.time())

if 10 - 9 > 0:
    # python 使用缩进表示函数花括号
    print('10大于9')

# lesson 5 基础数据类型 ----------------------------
# python 的数据类型:
# 整数 int int(str/bool)
# 浮点数 float float(str)
# 字符串 str str(int/bool)
# 布尔值 bool bool(init/float/str)
# 查询数据类型 type(name)

# lesson 6 变量的定义和常用操作 -------------------------
brandWidth = 100
ratio = 8
print(brandWidth/ratio)

# lesson 7 序列的概念（类似数组）
# 序列：成员都是有序排列，可通过下标或者偏移量访问到一到多个成员
# 字符串属于序列 'abcd'
# 列表,aka数组 [0, 'asd']
# 元组 ("abc", "def")

# 读取序列
numlist = '0123456'
print(numlist[0:5])  # 注意0和5中间不是逗号是冒号，读取下标从0开始到5之前
print(numlist[2])  # 读取下标为2的值
print(numlist[-1])  # 读取从后向前数1位的值

# lesson 8 字符串的定义和使用
# 太简单懒得记了，就是赋值和整个表达式放进去而已

# lesson 9 字符串常用操作符
# [not] in：对象 [not] in 序列，成员关系操作符
# +：序列 + 序列，连接操作符
# *：序列*整数，重复操作符
# [:]：序列[整数:整数]，切片操作符
print('9' in numlist)
print('who' + numlist)
print(2*numlist)
print(numlist[1:3])

# lesson 10 元组的定义和常用操作
# 元组跟列表的区别在于，元组的内容不可以变更，列表可以变更

# lesson 11 列表的定义和常用操作
a_list = ['abc', 'xyz']
a_list.append('X')
print(a_list)
a_list.remove('X')
print(a_list)

# lesson 12 条件语句,
# if 表达式:
#   代码块
# elif 表达式2:
#   代码块
# else
#   代码块
if ('9' in numlist):
    print('9 in ' + numlist)
else:
    print('9 NOT in ' + numlist)

# lesson 13 循环语句之 for循环
chinese_zodiac = '猴鸡狗猪鼠牛虎兔龙蛇马羊'

for year in range(2000, 2019):
    print('%s年的生肖是%s' % (year, chinese_zodiac[year % 12]))

# lesson 14 循环语句之 while 循环
