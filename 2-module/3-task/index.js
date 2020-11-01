let calculator = {
  // ваш код
  sum () {
    return this.a + this.b;
  },
  mul () {
    return this.a * this.b;
  },
  read () {
    this.a = 3;
    this.b = 5;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
