import { shallowMount, mount } from '@vue/test-utils'
import HeroPage from '@/page/HeroPage'
import HeroOptions from '@/components/HeroOptions'
import HeroPicture from '@/components/HeroPicture'
import { heros } from '../mocks/heros.mock';

describe('HeroPage Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(HeroPage)
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar mixHeroArray al montar', () => {
        const mixHeroArray = jest.spyOn(HeroPage.methods, 'mixHeroArray')
        const wrapper = shallowMount(HeroPage)

        expect(mixHeroArray).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(HeroPage, {
            data() {
                return {
                    herosArr: heros,
                    hero: heros[0],
                    showHero: false,
                    heroId: null,
                    showAnswer: false,
                    msg: "",
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes de HeroOptions y HeroPicture', () => {
        const wrapper = shallowMount(HeroPage, {
            data() {
                return {
                    herosArr: heros,
                    hero: heros[0],
                    showHero: false,
                    heroId: null,
                    showAnswer: false,
                    msg: "",
                }
            }
        })

        const heroOptionsComponent = wrapper.findComponent(HeroOptions)
        const heroPictureComponent = wrapper.findComponent(HeroPicture)

        expect( heroOptionsComponent.exists() ).toBe(true)
        expect( heroPictureComponent.exists() ).toBe(true)

        expect( heroPictureComponent.attributes('image') ).toBe('https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg')
        expect( heroOptionsComponent.attributes('heros') ).toBeDefined();
        expect( heroOptionsComponent.attributes('heros') ).toBeTruthy();
    })

    test('pruebas con checkAnswer', async ()=> {
        const wrapper = shallowMount(HeroPage, {
            data() {
                return {
                    herosArr: heros,
                    hero: heros[0],
                    showHero: false,
                    heroId: null,
                    showAnswer: false,
                    msg: "",
                }
            }
        })

        
        await wrapper.vm.checkAnswer(1)

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showAnswer ).toBe(true)
        expect( wrapper.find('h2').text() ).toBe(`Correcto es ${heros[0].name}`)

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.msg).toBe(`Oops, Incorrecto era <span class="span">${heros[0].name}</span>`)
        console.log(wrapper.vm.msg);
    })
})