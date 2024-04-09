enum EditValueENUM {
  ON_CHANGE = "ON_CHANGE",
}

interface InitialState {
  select: Map<string, boolean>;
}

type ON_CHANGE = {
  type: EditValueENUM.ON_CHANGE;
  identifier: string;
};

type ACTIONTYPE = ON_CHANGE;

export { EditValueENUM };
export type { ACTIONTYPE, InitialState };
