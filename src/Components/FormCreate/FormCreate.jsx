import s from './FormCreate.module.scss'
const FormCreate = (props) => { 
    const contactCandidate = {
        name: '',
        price:'',
    }
    const handleChangeInput = (inputName, inputValue) => { 
        contactCandidate[inputName] = inputValue
    }
    const handleCreate = () => { 
        const newStore = [ 
            ...props.contactsStore, 
            {   
                id: props.contactsStore.length > 0 
                    ? props.contactsStore[props.contactsStore.length-1].id + 1
                    : 1,
                ...contactCandidate,
                count: 1,
                allPrice: contactCandidate.price

            }
        ]
        contactCandidate.name = ''
        contactCandidate.price = ''
        props.reRender(newStore)
    }
    return ( 
        <>
        <div className={s.form}>
            <input 
                className={s.form_input} 
                type="text" 
                placeholder="Write name product"
                onChange={(e) => {
                    handleChangeInput('name', e.target.value)
                    e.target.value = contactCandidate.name
                }}
            />
            <input 
                className={s.form_input}
                type="text"
                placeholder="Write price number" 
                onChange={(e) => {
                    handleChangeInput('price', e.target.value)
                    e.target.value = contactCandidate.price
                }}
            />
            <button
                onClick={handleCreate}
                className={s.form_btn}
             >Create</button>
        </div>
        </>
    )
}

export default FormCreate