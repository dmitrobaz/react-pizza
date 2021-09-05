import React from 'react';

// class Categories extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     state = {
//         onClickItem: 0,
//     }
//     onSelectItem = index => {
//         this.setState({
//             onClickItem: index,
//         })
//     }

//     render() {
//         const { items, onClick } = this.props;
//         console.log(this.state)
//         return (
//             <div className="categories">
//                 <ul>
//                     {items.map((item, index) => {
//                         return (<li className={this.state.onClickItem === index ? 'active' : ''} onClick={() => { this.onSelectItem(index) }} key={`${item.name}_${index}`}>{item.name}</li>)
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Categories;



export default function Categories(props) {
    const [activeItem, setActiveItem] = React.useState(null)

    return (
        <div className="categories">
            <ul>
                {props.items && props.items.map((item, index) => {
                    return (<li className={activeItem === index ? 'active' : ''} onClick={() => { setActiveItem(index) }} key={`${item.name}_${index}`}>{item.name}</li>)
                })}
            </ul>
        </div>
    )
}

