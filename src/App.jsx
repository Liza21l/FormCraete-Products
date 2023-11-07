import Contacts from "./Components/Contacts/Contacts"
import FormCreate from "./Components/FormCreate/FormCreate"

const App = (props) => { 
    return ( 
        <>
            <FormCreate
                reRender = {props.reRender}
                contactsStore={props.contactsStore}
            />
            <Contacts
                reRender = {props.reRender}
                list={props.contactsStore}
            />
        </>
    )
}

export default App 