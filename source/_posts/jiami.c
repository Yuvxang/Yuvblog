#include <stdio.h>

int main(void)
{
    int n, a[22], searchposit = -1, search;
    scanf("%d", &n);
    scanf("%d", &search);

    for(int i = 0;i < n;i++)
    {
        scanf("%d", &a[i]);
    }
    
    for(int i = 0;i < n;i++)
        if(search == a[i]) searchposit = i;

    if(searchposit == -1) printf("Not Found");
    else printf("%d", searchposit);
    return 0;
}