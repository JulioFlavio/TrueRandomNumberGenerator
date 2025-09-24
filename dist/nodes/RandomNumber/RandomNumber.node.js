"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
class RandomNumber {
    constructor() {
        this.description = {
            displayName: 'Random Number', // Nome do nó na interface
            name: 'randomNumber',
            icon: 'fa:rocket',
            iconUrl: 'icons/RandomNumber.svg',
            group: ['transform'], // Categoria
            version: 1,
            description: 'Gera um número aleatório entre min e max',
            defaults: { name: 'True Random Generator' },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Min:',
                    name: 'min',
                    type: 'number',
                    default: 0,
                },
                {
                    displayName: 'Max:',
                    name: 'max',
                    type: 'number',
                    default: 100,
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            const response = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
            const randomText = await response.text();
            const randomNumber = parseInt(randomText.trim(), 10);
            returnData.push({
                json: {
                    random: randomNumber,
                },
            });
        }
        return [returnData];
    }
}
exports.RandomNumber = RandomNumber;
