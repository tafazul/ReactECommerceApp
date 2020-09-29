import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollectionsCategory } from '../../redux/shop/shop.selectors';
import './category.styles.scss';

const CategoryPage = ({categoryCollection}) => (
    <div className='collection-page'>
        <h2 className='title'>{categoryCollection.title}</h2>
        <div className='items'>
        {
            categoryCollection.items.map(item => (
            <CollectionItem key={item.id} item={item}/>
            ))
        }
        </div>
    </div>
);
 const mapStateToProps = (state, ownProps) => ({
    categoryCollection: selectCollectionsCategory(ownProps.match.params.categoryId)(state)
 })

export default connect(mapStateToProps)(CategoryPage);