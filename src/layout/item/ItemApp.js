import React , {useState} from 'react'

import ItemList from './ItemList';


function ItemApp() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchItemsHandler(){
    setIsLoading(true);
    setError(null);
    try{
      const response =  await fetch('http://localhost:8080/item/309')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      console.log(data);
 
  
      const transformedItems = data.results.map(itemData => {
        return {
          id: itemData.item_id,
          title : itemData.item_name,
          detail : itemData.item_detail,
          color : itemData.color,
          code : itemData.code
  
        };
      });
      setItems(transformedItems);
 
      }
    catch(error){
      setError(error.message);

    }
    setIsLoading(false);
    }
    // let content = <p> Found no movies.</p>;


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchItemsHandler}>Fetch Item</button>
      </section>
      <section>
        {!isLoading && items.length > 0 && <ItemList items={items} />}
        {!isLoading && items.length === 0 && !error&&<p>Found</p>}
        {isLoading && <p>Loading..</p>}
        {!isLoading && error &&<p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default ItemApp;
