export interface TaskRunFilter {
  id?: {
    any_?: string[],
    not_any_?: string[],
  },
  name?: {
    /**
     * A list of names
     * Example: [ "my-flow-1", "my-flow-2" ]
     */
    any_?: string[],
  },
  tags?: {
    /**
     * Results will be returned only if their tags are a superset of the list.
     */
    all_?: string[],
    /**
     * If true, only include flow runs without tags
     */
    is_null_?: boolean,
  },
  state?: {
    type?: {
      any_: string[],
    },
    name?: {
      any_: string[],
    },
  },
  start_time?: {
    before_?: string,
    after_?: string,
  },
  subflow_runs?: {
    exists_: boolean,
  },
}