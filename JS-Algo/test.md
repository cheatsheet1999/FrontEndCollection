```java

if(carYear < 1968) {
    System.out.println('Something...');
}; <--error

else if(carYear < 1968) {
    System.out.println('Something...');
}; <--error

while(i > 10); <--error {
  System.out.println('Something...');
}

for(int i = 0; i < 10; i++; <--error) {
  System.out.println('Something...');
  <-- Missed a curly braces

```

```java
int a = 17;
int b = 21;
if(a == b); {
 System.out.println("You are allowed to enter the bar");
}
```

```
You are allowed to enter the bar
```
