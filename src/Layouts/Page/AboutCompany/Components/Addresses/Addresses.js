import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2 justify-content-between col mt-4 my-padding my-border'>
            <div className='title' style={{paddingBottom: "24px"}}>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 flex-grow-1'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
    );
}

export default Addresses;