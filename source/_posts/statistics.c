#include <stdio.h>
#include <string.h>

typedef struct info
{
	char ID[14];
	char name[22];
	int class1;
	int class2;
	int class3;
} stu;

int main(void)
{
	int n, overflag = 0;
	stu stulist[105], findstu;

	scanf("%d", &n);
	for(int i = 0;i < n;i++)
		scanf("%s %s %d %d %d", stulist[i].ID, stulist[i].name, &stulist[i].class1, &stulist[i].class2, &stulist[i].class3);
	
	scanf("%s %s %d %d %d", findstu.ID, findstu.name, &findstu.class1, &findstu.class2, &findstu.class3);

	for(int i = 0;i < n;i++)
	{
		if(strcmp(stulist[i].ID, findstu.ID) == 0)
		{
			printf("error!");
			return 0;
		}
		else if(strcmp(stulist[i].ID, findstu.ID) > 0)
		{
			for(int j = n - 1;j >= i;j--)
				stulist[j + 1] = stulist[j];
			stulist[i] = findstu;
			overflag = 1; 
			break;
		}
	}
	if(overflag == 0)
		stulist[n] = findstu;

	for(int i = 0;i <= n;i++)
		printf("%s %s %d %d %d\n", stulist[i].ID, stulist[i].name, stulist[i].class1, stulist[i].class2, stulist[i].class3);

	return 0;
}