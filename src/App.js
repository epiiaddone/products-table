import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductCategoryRow extends React.Component{
  render(){
  const category = this.props.category;
  return(
    <tr>
      <th colSpan="2">{this.category}</th>
    </tr>
  );
  }
}

class ProductRow extends React.Component{
  render(){
    const product = this.props.product;
    const name = this.product.stocked ? this.product.name: <span color="red">{this.product.name}</span>;
    
    return(
      <tr><td>{this.name}</td><td>{this.product.price}</td></tr>
    );

  }
}

class productTable extends React.Component{
  render(){
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    const currentCategory = '';

    this.props.products.forEach(product => {
      if(product.name.indexOf(filterText) === -1) return;
      if(inStockOnly && !product.stocked) return;
      if(product.category !== currentCategory){
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        )
        currentCategory = product.category;
      }

      rows.push(
        <ProductRow product={product} key={product.name} />
      )

      return(
        <table>
          <th>
            <tr>NAME</tr>
            <tr>PRICE</tr>
          </th>
          <tbody>{rows}</tbody>
        </table>
      )
    })
  }
}

function App() {
  return (
<FilterableProductTable products={PRODUCTS} />
  );
}

export default App;
