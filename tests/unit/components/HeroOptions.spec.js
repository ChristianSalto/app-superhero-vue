import { shallowMount } from '@vue/test-utils'
import HeroOptions from '@/components/HeroOptions'

import { heros } from '../mocks/heros.mock'


describe('HeroOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(HeroOptions, {
            props: {
                heros
            }
        })
    })

    test('debe hacer match con el snapshot', () => {
        // console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const liArray = wrapper.findAll('li');
        expect(liArray.length).toBe(4)

        expect(liArray[0].text()).toBe('A-Bomb')
        expect(liArray[1].text()).toBe('Abe Sapien')
        expect(liArray[2].text()).toBe('Abin Sur')
        expect(liArray[3].text()).toBe('Abomination')

    })

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li');

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        console.log(wrapper.emitted('onSelect'));

        expect( wrapper.emitted('onSelect').length ).toBe(4)
        expect( wrapper.emitted('onSelect')[0] ).toEqual(["1"])
        expect( wrapper.emitted('onSelect')[1] ).toEqual(["2"])
        expect( wrapper.emitted('onSelect')[2] ).toEqual(["3"])
        expect( wrapper.emitted('onSelect')[3] ).toEqual(["4"])
    })
})