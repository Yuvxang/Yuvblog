#include <stdio.h>
#include <string.h>

int cmp(char *a, char *b)
{
	if(strlen(a) > strlen(b))
		return 1;
	else if(strlen(a) < strlen(b))
		return -1;
	else if(strlen(a) == strlen(b))
	{
		if(strcmp(a, b) == 0)
			return 0;
		else 
			return (strcmp(a, b) > 0 ? 1 : -1);
	}
}

int main(void)
{
	char a[101];
	char b[101];
	char c[101];
	char t[101];
	gets(a);
	gets(b);
	gets(c);

	if(cmp(a, b) > 0)
	{
		strcpy(t, a);
		strcpy(a, b);
		strcpy(b, t);
	}
	if(cmp(b, c) > 0)
	{
		strcpy(t, b);
		strcpy(b, c);
		strcpy(c, t);
	}
	if(cmp(a, b) > 0)
	{
		strcpy(t, a);
		strcpy(a, b);
		strcpy(b, t);
	}
	puts(a);
	puts(b);
	puts(c);
	return 0;
}