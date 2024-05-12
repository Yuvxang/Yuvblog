#include <stdio.h>

int main(void)
{
    int triplebit, itself, flower = 0, a, countbit = 0;
    scanf("%d", &triplebit);
    itself = triplebit;
    while(countbit <= 3)
    {
        a = triplebit % 10;
        flower += a * a * a;
        triplebit /= 10;
        countbit++;
    }
    if(triplebit != 0)
        printf("Invalid Value.\n");
    else if(flower == itself)
        printf("Yes\n");
    else printf("No\n");
    return 0;
}