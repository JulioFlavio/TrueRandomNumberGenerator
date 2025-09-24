import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';

export class RandomNumber implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Random Number',   // Nome do nó na interface
    name: 'randomNumber',
    icon: 'fa:rocket',
    iconUrl: 'icons/RandomNumber.svg',
    group: ['transform'],           // Categoria
    version: 1,
    description: 'Gera um número aleatório entre min e max',
    defaults: { name: 'True Random Generator' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [                   // Parâmetros configuráveis na interface
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

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const returnData = [];

    for (let i = 0; i < items.length; i++) {
      const min = this.getNodeParameter('min', i) as number;
      const max = this.getNodeParameter('max', i) as number;

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
