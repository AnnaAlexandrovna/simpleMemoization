class calcPow {
    funCache = {};
    pow(x, n)   {
        if (`${x},${n}` in this.funCache) {
            console.log('Взято из кеша');
            return this.funCache[`${x},${n}`];
        } else {
            console.log('Вычислено');
            if (n == 1 || x == 1) {
                this.funCache[`${x},${n}`] = x;
                return x;
            } else {
                let res = x * this.pow(x, n - 1);
                this.funCache[`${x},${n}`] = res;
                return res;
            }
        }
    }
}
let p = new calcPow();
console.log(p.pow(44,5)); // вычислено
console.log(p.pow(44,3)); // взято из кеша