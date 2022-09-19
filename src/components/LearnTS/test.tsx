// Generic
export const Shoes = <Type,>(size: Type) => {
  console.log(size);
  return 43;
};
Shoes<string>("XXL");