import { getHeros, getHeroNames, getHeroOptions } from '@/helpers/getHeroOptions'


const herosMock = [
    {
        name: 'A-Bomb',
        id: '1',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg'
    },
    {
        name: 'Abe Sapien',
        id: '2',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/956.jpg'
    },
    {
        name: 'Abin Sur',
        id: '3',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg'
    },
    {
        name: 'Abomination',
        id: '4',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/1.jpg'
    }
]

describe('getHeroOptions helpers', () => {
    test('debe regresar un arreglo de numeros', () => {

        const hero = getHeros();

        expect(hero.length).toBe(731)
        expect(hero[0]).toBe(1)
        expect(hero[500]).toBe(501)

    })


    test('debe retornar un arreglo de 4 elementos con nombres de heroes', async () => {
        const heros = await getHeroNames([1, 2, 3, 4])

        expect(herosMock).toStrictEqual(heros)
    })


    test('getHeroOptions debe retornar un arreglo mezclado', async () => {
        const heros = await getHeroOptions()

        expect(heros.length).toBe(4)
        expect(heros).toEqual(
            [
                {
                    name: expect.any(String),
                    id: expect.any(String),
                    image: expect.any(String)
                },
                {
                    name: expect.any(String),
                    id: expect.any(String),
                    image: expect.any(String)
                },
                {
                    name: expect.any(String),
                    id: expect.any(String),
                    image: expect.any(String)
                },
                {
                    name: expect.any(String),
                    id: expect.any(String),
                    image: expect.any(String)
                }
            ]
        )
    })
})