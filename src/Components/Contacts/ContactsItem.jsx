import s from './contacts.module.scss'
const ContactItem = (props) => { 
    return (
        <li className={s.list_item}>
            <p className={s.list_item_name}>{props.name}</p>
            <p className={s.list_item_name_price}>{props.price}$</p>
            <div className={s.list_item_group}>
                <button
                onClick={() => {
                    props.handleChangeCount(props.id, 'minus')
                }}>-</button>
                <p>{props.count}</p>
                <button onClick={() => {
                    props.handleChangeCount(props.id, 'plus')
                }}>+</button>
            </div>
            <p>All Sum: {props.allPrice}$</p>
            <button className={s.list_item_btnDelete} onClick={props.handleDeleteItem}>Delete</button>
        </li>
    )
}

export default ContactItem