export default function Product({ price}) {
    return (
      <p>
        {price.formatted_with_symbol}
      </p>
    );
  }

  