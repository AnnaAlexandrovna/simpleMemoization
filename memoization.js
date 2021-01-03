//мемоизация с двумя аргументами
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

//мультиаргументная мемоизация
class calcSum {
    funCache = {};
    sum(...args) {
        if (`${args.toString()}` in this.funCache) {
            console.log('Взято из кеша');
            return this.funCache[`${args.toString()}`];
        } else {
            console.log('Вычислено');
            let res = 0;
            for(let i=0; i<args.length; i++){
                res+=args[i];
            }
            this.funCache[`${args.toString()}`] = res;
            return res;
        }
    }
}
let s = new calcSum();
console.log(s.sum(1,4,5));//вычислено
console.log(s.sum(1,4,5));//взято из кеша