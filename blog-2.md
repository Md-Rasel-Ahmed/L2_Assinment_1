# What is the benifits when useing typescript **Pick** and **Omit** utility type

## Avoiding code duplicates using typescript **pick** and **Omit** utility type

**Pick** and **Omit** are the utilities of typescript

For example, I have an object interface for user information. Now, I want to change the user's name, change the age, and change it.
When I want, I can manually create another interface with the name and age, and it may happen that after a few days, I will change its role again, then what should I do? I can write the interface manually again
But where is the problem here? The problem is that duplicating the codes, to fix this, I can use the **Pick** utility type

- Example
  `typescript interface user{name:string,age:number;role:string}  type updateUser=Pick<user,"name"|"age"|"role">`

And when we need user information without role, that time we can use the typescript omit utility type

`typescript interface user{name:string,age:number;role:string}  type updateUser=Omit<user,"role">`
