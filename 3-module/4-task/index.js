/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
<<<<<<< HEAD
function showSalary(users, age) {
  // ваш код...
  
=======
function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> 87bef49e8806eae9d43390e297b0d4564a60a8fe
}
