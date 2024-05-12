#include <stdio.h>
#include <stdlib.h>

int a[10005];

int cmp(const void *a, const void *b)
{
	return *(int *)b - *(int *)a;
}

int main(void)
{
	int m, n, k, sum = 0;
	scanf("%d %d %d", &m, &n, &k);

	for(int i = 0;i < n;i++)
		scanf("%d", &a[i]);

	qsort(a, n, sizeof(int), cmp);

	for(int i = 0;i < n;i++)
	{
		if(i % (2 * m) == k - 1 || i % (2 * m) == 2 * m - k)
			printf("%d ",a[i]);
	}
	return 0;
}