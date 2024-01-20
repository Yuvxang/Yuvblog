#include <stdio.h>

int len(char *sp)
{
	char *t = sp;
	int lenr = 0;
	for(;*t != '\0';t++)
		if(*t != ' ') lenr++;
	return lenr;
}

int main(void)
{
	char a[103];
	gets(a);

	int length;
	length = len(a);
	printf("%d", length);
	return 0;
}