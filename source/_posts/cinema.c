#include <stdio.h>

void bubble(int a[], int n)
{
	int t;
	for(int i = 0;i < n - 1;i++)
	{
		for(int j = i;j < n;j++)
		{
			if(a[i] > a[j])
			{
				t = a[i];
				a[i] = a[j];
				a[j] = t;
			}
		}
	}
}

int main(void)
{
	int n, sum = 0;
	int list[1005];
	scanf("%d", &n);
	for(int i = 0;i < n;i++)
		scanf("%d", &list[i]);

	bubble(list, n);

	int j = n - 1;
	for(int i = 0;i < n;i++)
	{
		sum += list[i] * (j--);
	}
	printf("%d", sum);
	return 0;
}