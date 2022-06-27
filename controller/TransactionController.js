class TransactionController {

    constructor() {
        this.callForm();
    }

    callForm() {
        document.querySelector('.new-transact').addEventListener('click', () => {
            document.querySelector('#modal-form').style.display = 'block';
        });
    }
}