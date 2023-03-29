import {createRequestPurchase} from "../../model";

export const FormCreate = () => {
    return(
        <form onSubmit={(e) => createRequestPurchase(e)}>
            <div>
                <label>EMAIL:</label>
                <input name="email" />
            </div>

            <div>
                <label>FIO:</label>
                <input name="fio" />
            </div>

            <div>
                <label>SBER:</label>
                <input name="bank_card" />
            </div>

            <button type="submit">
                Submit
            </button>
        </form>
    )
}