enum EditValueENUM {
    INIT_STATE = 'INIT_STATE',
    ON_CHANGE_CASHFLOW = 'ON_CHANGE_CASHFLOW',
    ON_CHANGE_BANK = 'ON_CHANGE_BANK',
    ON_SELECT_BANK_ALL = 'ON_SELECT_BANK_ALL',
    ON_CHANGE_CARD = 'ON_CHANGE_CARD',
    ON_CHANGE = 'ON_CHANGE'
}

interface InitialState {
    select: Map<string, boolean>;
}

type ON_CHANGE = {
    type: EditValueENUM.ON_CHANGE;
    identifier: string;
}

type ACTIONTYPE =
ON_CHANGE

export { EditValueENUM };
export type { ACTIONTYPE, InitialState };
