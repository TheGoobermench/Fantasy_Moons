let t = 0
let s = 0 
let x = 0

let annu = Math.cos(.3222 * (t - 3))// 19.5 shift 3
let oki = Math.cos(.1381 * (s - 6)) // 45.5 shift 6
let taro = Math.cos(.0869 * (x - 25)) // 72.3 shift 25

const solveMoons = () => {
    // Solve Taro
    taro = Math.cos(.0869 * (x - 25))
    while(taro >= -0.9999999) {
        console.log(`Taro = ${taro} - ${x}`);
        x += .00347;
        taro = Math.cos(.0869 * (x - 25))
    }

    // Solve Oki
    s = x - 1;
    oki = Math.cos(.1381 * (s - 6))
    while(oki >= -0.999999) {
        console.log(`Oki = ${oki} - ${s}`);
        s += .00347;
        oki = Math.cos(.1381 * (s - 6))
    
        if(s - x > 1) {
            x += 72;
            solveMoons()
        }
    }

    // Solve Annu
    t = x - 1
    annu = Math.cos(.3222 * (t - 3))
    while(annu >= -0.999999) {
        console.log(`Annu = ${annu} - ${t}`);
        t += .00347;
        annu = Math.cos(.3222 * (t - 3))
        

        if(t - x > 1 || Math.abs(t - s) > 1) {
            x += 72;
            solveMoons()
        }
    }

    console.log(Math.abs(t - s))
    console.log(t - x)
    console.log(annu)
}

solveMoons();