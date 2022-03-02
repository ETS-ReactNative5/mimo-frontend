import React from 'react';

import Item from './Item';
import classes from './ItemList.module.css';

const ItemList = (props) => {
  return (
    <ul className={classes['items-list']}>
      {props.items.map((items) => (
        <Item
          key={items}
          id={items.id}
          imgName={items.imgName}
          imgUrl={items.imgUrl}
          oriImgName={items.oriImgName}
          repImgYn={items.repImgYn}
         />
         
      )
      
      )}
    </ul>
  );
};

export default ItemList;
