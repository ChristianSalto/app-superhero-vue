import { shallowMount } from '@vue/test-utils'
import HeroPicture from '@/components/HeroPicture'
import { getHeroNames } from '@/helpers/getHeroOptions'

describe('HeroPicture component', () => {
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(HeroPicture, {
            props: {
                image: "1",
                showHero: false
            }
        });

        // console.log(wrapper);
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe de mostrar la imagen oculta y el heroe 100', () => {
        const wrapper = shallowMount(HeroPicture, {
            props: {
                image: "100",
                showHero: false
            }
        })

        const [img] = wrapper.findAll('img');

        expect(img.exists()).toBeTruthy();
        expect(img.classes('hidden-hero')).toBe(true);

    })

    test('debe de mostrar el hero si esta en true', async () => {
        const wrapper = shallowMount(HeroPicture, {
            props: {
                image: "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg",
                showHero: true
            }
        })

        const [img] = wrapper.findAll('img');

        expect(img.exists()).toBeTruthy();
        expect(img.classes('hidden-hero')).toBe(false);

        const [hero1,hero2,hero3,hero4] = await getHeroNames([1,2,3,4])

        expect(img.attributes('src')).toBe(hero4.image);

        console.log(img.attributes('src'));
    })
})