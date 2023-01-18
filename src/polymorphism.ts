class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log("Attacking now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spear: number) {
    super(name);
  }
  override attack(): void {
    super.attack();
    console.log("Attacking with spear");
    this.spear -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    super.attack();
    console.log("Attacking with axe");
    this.axeDurability -= 1;
  }
}
