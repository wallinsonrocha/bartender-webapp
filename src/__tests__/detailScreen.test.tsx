import DrinkDetail from '@/components/drink/drink-screen';
import { fireEvent, render, screen } from '@testing-library/react';

const props = {
    id: 1,
    name: "Drink's name",
    valorH: 120,
    stars: 4,
    shortDesc: 'Short description',
    description: 'Description fo the object',
}

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));

const mockRouter = {
    back: jest.fn(),
};

beforeEach(() => {
    // Garantir que o useRouter será acessado para ser usada no jest.mock
    // Por que não foi usado import? Nesse caso, o require é usado para garantir a flexibilidade
    // Use require quando precisa garantir flexibilidade no mock.
    // Use import quando o mock será estático e não será modificado dinamicamente.
    // Ambas podem funcionar, mas usar require pode prevenir comportamentos inesperados em casos mais complexos.
    require('next/navigation').useRouter.mockReturnValue(mockRouter);
});


describe('Teste Detail Screen component', () => {
    test('is rendering', () => {
        render(<DrinkDetail {...props} />)
        const name = screen.getByText("Drink's name");
        expect(name).toBeInTheDocument();
    });

    test('if value is changing', ()=>{
        render(<DrinkDetail {...props} />)
        const quantitieDisplay = screen.getByLabelText('quantitie');
        const addButton = screen.getByLabelText('add');
        const subButton = screen.getByLabelText('sub');

        // Adicionar +1
        fireEvent.click(addButton);
        expect(quantitieDisplay).toHaveTextContent("2");
        //Diminuir -1
        fireEvent.click(subButton);
        expect(quantitieDisplay).toHaveTextContent("1");
    });
});