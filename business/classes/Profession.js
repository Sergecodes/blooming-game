
export default class Profession {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  /* retourne un metier aleatoire depuis la liste des metiers */
  static getRandomProfession() {
    let n = PROFESSIONS.length;
    return PROFESSIONS[Math.floor(Math.random() * n)];
  }
}


export const PROFESSIONS = [
  new Profession('Doctor', 900000),
  new Profession('Engineer', 800000),
  new Profession('Teacher', 300000),
  new Profession('Police officer', 100000),
  new Profession('Nurse', 90000),
];
