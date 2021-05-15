
import {desktop} from '../lib/device'
import {short, medium, long} from '../lib/timeouts'

describe('The first step with webdriveIO', ()=>{
  
    it('Load Landing page URL',() =>{
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(long)
        expect(browser).toHaveTitle('A million more | Volvo Cars - International')

    })
    
    it('Verify volvo link', () =>{
        const link = $('a')
        expect(link).toHaveText('https://www.volvocars.com/intl')

    })

    it('Verify Cars link', () =>{
        const button = $('span = Cars').getText
        expect(button).toHaveText('Cars')

    })

    it('Verify  Header A million more', () =>{
        const button = $('span = A million more').getText
        expect(button).toHaveText('A million more')

    })

})