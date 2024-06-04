// My family class

class MyFamily {
  constructor(listOfFamily) {
    this.list = listOfFamily;
  }

  static rules() {
    console.log("never smoke ,never fight") ;
  }

  showFamilyName() {
    this.list.map((v) => console.log(v));
  }
}

const NayeemFamily =new MyFamily(["Nayeem","Amily"])


  MyFamily.rules()

