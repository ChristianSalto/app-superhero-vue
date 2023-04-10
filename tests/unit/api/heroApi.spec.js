
import { heroApi } from '@/api/heroApi'

describe('heroApi', () => {
    test('Axio debe estar configurado con el api de hero', () => {
        expect(heroApi.defaults.baseURL).toBe('https://superheroapi.com/api/1315557335533076')
    })
})