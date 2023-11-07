import ContactItem from './ContactsItem'
import s from './contacts.module.scss'
const Contacts = (props) => { 
    const handleDeleteItem = (idToDelete) => {
        const newList = props.list.filter(item => item.id !== idToDelete)
        props.reRender(newList)
    }
    const handleChangeCount = (idContact, method) => {
        const newList = props.list.map(el => {
            if (el.id === idContact) {
                if (method === 'plus') {
                    el.count += 1
                } else {
                    if (el.count > 0) {
                        el.count -= 1
                    }
                }
                el.allPrice = el.count * el.price
            }
            return el
        })
        props.reRender(newList)
    }
    const ContactsCollection = props.list.map(el => {
        return (
            <ContactItem
                key={el.id}
                id = {el.id}
                name={el.name}
                price={el.price}
                count={el.count}
                allPrice={el.allPrice}
                handleChangeCount = {handleChangeCount}
                handleDeleteItem = {() => handleDeleteItem(el.id)}
            />
        )
    })
    return ( 
        <ul className={s.list}>
            {ContactsCollection}
        </ul>
    )
}

export default Contacts