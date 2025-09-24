import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
export declare class RandomNumber implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<{
        json: {
            random: number;
        };
    }[][]>;
}
