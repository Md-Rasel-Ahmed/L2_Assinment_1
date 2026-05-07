# What,s the different between **any** type and **unknown** type?

## Learn why it is better to use **unknown** type instead of **any** type to gain experience in developing in TapeScript.

When I use any type it will accept any value but if I use the number method on a string then it will not give a typescript error but when it is run it will give an error i.e. it will not show any error while coding.

- Example
  `let a:any="Rasel" a.toFixed(2) //it will not show any error in typescript code but it will error to runtime`

But if I use unknown type then I have to check it with type guard first otherwise typescript will give an error and this is called type narrowing

- Example
  `if(typeof a==="string"){a.toLowerCase()}else if(typeof a==="number"){a.toFixed(2) }`

that,s why we have to use type guard
