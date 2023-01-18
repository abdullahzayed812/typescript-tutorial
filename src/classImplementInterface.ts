interface Setting {
  username: string;
  theme: boolean;
  font: string;
  save(): void;
}

class Employee implements Setting {
  constructor(
    public username: string,
    public theme: boolean,
    public font: string
  ) {}
  save(): void {
    console.log("Saved");
  }
}
