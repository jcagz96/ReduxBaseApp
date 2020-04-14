const productList = (produtos = [], action) => {
    switch (action.type) {
        case 'ADICIONAR': {
            return [...produtos, action.payload];
        }
        case 'REMOVER': {
            return produtos.filter(item => item !== action.payload);

        }
        default:
            return produtos;
    }
}

export default productList;