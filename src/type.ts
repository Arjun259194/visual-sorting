export type State = number[]

export type SetStateFn = React.Dispatch<React.SetStateAction<number[]>>

export type AlgoMap = Record<string, AlgoFn>;

export type AlgoFn = (arg1: SetStateFn, arg2: State) => Promise<void>

