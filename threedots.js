const ages = [12, 34, 56, 19];
const ages2 = [11, 14, 35, 90, 78];
const ages3 = [45, 67, 23];
const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, 8, ...ages3];
console.log(allAges2);
console.log(allAges);


const police = 650;
const doctor = 240;
const politician = 780;
// const maximum = Math.max(police, doctor, politician);

const takaPoysha = [245, 780, 560, 450];
const maximum = Math.max(takaPoysha); //wonnt Work/
const max = Math.max(...takaPoysha);
console.log(max);
console.log(maximum);