import { sum } from "../src/helper/math-helper";

describe('Testando Math Helper', () => {

    it('Testando a função sum', () => {
        const resultado = sum(1, 2);
        expect(resultado).toBe(3);
    })

    it('Testando a função sum novamente', () => {
        const resultado = sum(-1, -1);
        expect(resultado).toBe(-2);
    })
})