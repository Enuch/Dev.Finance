class Transaction {
    
    constructor(description, value) {
        this._description = description;
        this._value = value;
        this._date;
    }

    get description() {
        return this._description;
    }

    get value() {
        return this._value;
    }

    get date() {
        return this._date;
    }

    set description(data) {
        this._description = data;
    }

    set value(data) {
        this._value = data;
    }

    getCurrentDate() {
        this._date = new Date().toLocaleDateString('pt-BR', {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
    }
}