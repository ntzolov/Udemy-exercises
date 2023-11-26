class Person {
  constructor(
    readonly id: number,
    public first: string,
    public last: string,
    public age: number
  ) { }

  get fullName() {
    return `${this.first} ${this.last}`
  }
}

const person1 = new Person(124123515, 'Nikolay', 'Tzolov', 35)
// console.log(person1.id);

class ItSupport extends Person {
  role = 'IT Support'
  constructor(id: number, first: string, last: string, age: number) {
    super(id, first, last, age)
  }
}

const person2 = new ItSupport(12, '12', '12', 12)
// console.log(person2.role);

// ---------------------------------------------------------------------------------------------

function sumOfTotalLength(...args: unknown[][]): number {
  let result = 0
  for (const arg of args) {
    result += arg.length
  }
  return result
}

// console.log(sumOfTotalLength([1, 2, 3], [false, false, true], ['a', 'b', 'c']));

// ---------------------------------------------------------------------------------------------

