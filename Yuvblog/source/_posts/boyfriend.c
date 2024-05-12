#include <stdio.h>

typedef struct boyfriend
{
	char name[12];
	int height;
	int grade; 
} boy;

int main(void)
{
	int n;
	scanf("%d", &n);
	boy now, bestboy;
	for(int i = 0;i < n;i++)
	{
		scanf("%s %d %d", now.name, &now.height, &now.grade);
		if(i == 0) bestboy = now;
		else if(bestboy.grade < now.grade)
			bestboy = now;
		else if(bestboy.grade == now.grade)
		{
			if(bestboy.height < now.height)
				bestboy = now;
		}
	}
	printf("%s %d %d", bestboy.name, bestboy.height, bestboy.grade);
	return 0;
}