#include <stdio.h>

int main(void)
{
	int x, y;
	scanf("%d %d", &x, &y);zz
	if(x == 0 && y == 0)
		printf("0 0");
	else if(x == 0)
		printf("y");
	else if(y == 0)
		printf("x");
	else
	{
		if(x > 0 && y > 0)
			printf("1");
		else if(x > 0 && y < 0)
			printf("4");
		else if(x < 0 && y < 0)
			printf("3");
		else printf("2");
	}
	return 0;
}