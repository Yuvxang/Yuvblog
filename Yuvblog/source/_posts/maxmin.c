#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[1005];
    while(scanf("%s", str) != EOF)
    {
        int len = strlen(str);
        int changeflag = 0;
        int sametimes = 0;

        for(int i = 0;i < len - 1;i++)
        {
            if(str[i] != str[i + 1])
                sametimes = 1;
        }
        if(sametimes == 0)
        {
            putchar(str[0]);
            putchar('\n');
            continue;
        }

        else 
        {
            while(len % 2 == 0)
            {
                for(int i = len / 2 - 1, j = len / 2;i >= 0, j <= len - 1;i--,j++)
                {
                    if(str[i] != str[j]) 
                        changeflag = 1;
                }
                if(changeflag == 0)
                    len /= 2;
                else break;
            }

            if(len % 2 == 1)
            {
                for(int i = 0;i < len;i++)
                    putchar(str[i]);
                putchar('\n');
            }

            else if(len % 2 == 0)
            {
                for(int i = 0;i < len;i++)
                    putchar(str[i]);
                putchar('\n');
            }
        }
    }
    return 0;
}
//AAAAAA(一直除以2才可以，需要加一个对相同次数处理的if，可以感知到这个字符串是一直重复的。)
//ACAACA(一般形式，相同次数可以是奇数或者偶数不影响中间，只影响最后。)
//ACCAACCA(需要判断你应不应该除2，而且不能只判断前两个是不是相等)
//AABBBBAA(不能直接除2，需要判断一下相同次数（相同次数可能为0或者奇数或者），而且双数长度可能是结果，字母出现次数的奇偶不是决定因素)
//两边完全相等而且总长度不为奇数，可以除2
//ACA CAAAC
//判断相同次数 第一个是1，第二个是1，第三个是再次判断是否完全相等（不相等的flag，也可以加上奇数长度（奇数长度不一定为最小AAA）。）


//AAA ACA CAAAC
