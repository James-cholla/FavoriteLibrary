async function Fetch(url, options) {

    const f = await fetch(url,options).then(res=>{
        if (res.ok) {
            return res.json()
        }else{
            console.log(res)
        }
    }).then(r=>{
        return r
    }).catch(err=>{
        console.log(err)
    })

    return f
}

export function Get(url, option={}){

    let defualtOpt = {
        mode: 'cors',
        method: 'GET',
    }

    const opt = Object.assign(defualtOpt, option)

    return Fetch(url, opt)
}





