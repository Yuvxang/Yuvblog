#include <stdio.h>
int a[10004] = {0};

int main(void)
{
    int count = 0;
    int n, criterion;
    scanf("%d", &n);

    for(int i = 0;i < n;i++)
    {
        scanf("%d", &criterion);
        if(a[criterion] == 0)
        {
            a[criterion] = 1;
            count += 1;
        }
    }
    printf("%d", count);
    return 0;
}