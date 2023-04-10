
import { heroApi, getHeroById } from '@/api/heroApi'
import { Promise } from 'core-js'



export const getHeros = () => {

    const herosArr = Array.from(Array(731))

    return herosArr.map((_, index) => index + 1)

}


export const getHeroOptions = async () => {

    const mixedHeros = getHeros().sort(() => Math.random() - 0.5)

    const heros = await getHeroNames(mixedHeros.splice(0, 4))

    return heros;

}


export const getHeroNames = async ([a, b, c, d] = []) => {

    const promiseArr = [
        await getHeroById(`${a}`),
        await getHeroById(`${b}`),
        await getHeroById(`${c}`),
        await getHeroById(`${d}`)
    ]

    const [hero1, hero2, hero3, hero4] = await Promise.all(promiseArr)
    // const res = await getHeroById(`${a}`)

    //const res = heroApi.get(`/${a}`).then(data => console.log(data))
    console.log(hero1)
    
    return [
        { name: hero1.name, id: hero1.id, image: hero1.image.url },
        { name: hero2.name, id: hero2.id, image: hero2.image.url },
        { name: hero3.name, id: hero3.id, image: hero3.image.url },
        { name: hero4.name, id: hero4.id, image: hero4.image.url },
    ]
}

